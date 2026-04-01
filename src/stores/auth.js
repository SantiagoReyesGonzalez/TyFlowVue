import { defineStore } from "pinia";
import { ref } from "vue";
import { supabase } from "../api/supabase"; // 🔌 Nuestro cable a la base de datos


export const useAuthStore = defineStore("auth", () => {
  // 1. ESTADO (La memoria)
  const session = ref(null); // Guarda el token y datos crudos de Supabase
  const profile = ref(null); // Guarda los nombres, rol, área, etc.

  // 2. ACCIONES (Los motores)
  const login = async (email, password) => {
    try {
      // ------------------------------------------------------------------
      // 🛠️ TU RETO AQUÍ:
      // 1. Llama a Supabase para autenticar al usuario usando email y password.
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });
      console.log("Conectando con Supabase para hacer login con", email);
      // 2. Si hay error, lánzalo (throw error).
      if (error) throw error;

      // 3. Si es exitoso, guarda la sesión en nuestra variable reactiva 'session.value'.
      session.value = data.session;
      await fetchProfile(); 
      console.log("Ingreso Existoso:", data.user);
      // ------------------------------------------------------------------
    } catch (error) {
      console.error("Error en el login:", error.message);
      throw error; // Lanzamos el error para que LoginView pueda mostrarlo en rojo
    }
  };

  const fetchProfile = async () => {
    // 1. Verificamos que haya sesión
    if (!session.value) {
      console.warn("No hay sesión activa para cargar el perfil.");
      return;
    }

    try {
      // 2. Hacemos la consulta
      // Nota: Usamos session.value.user.id para estar seguros de quién es el usuario
      const { data, error } = await supabase
        .from("usuarios")
        .select(`
        primerNombre, 
        segundoNombre, 
        primerApellido, 
        segundoApellido, 
        estado,
        usuarioRol ( roles ( nombreRol ) ),
        usuarioArea ( areas ( nombreArea ) )
        `)
        .eq("id", session.value.user.id)
        .maybeSingle();

      // 3. Verificamos si la base de datos devolvió un error (ej. permisos RLS)
      if (error) throw error;

      // 4. ✅ ÉXITO: Guardamos la info en nuestra variable reactiva
      if (data) {
        if (!data.estado) {
          await logout (); // Cerramos sesión por seguridad
          throw new Error("Usuario inactivo");
        }else{
            data.usuarioArea = data.usuarioArea.map(item => item.areas.nombreArea);
            data.usuarioRol = data.usuarioRol.map(item => item.roles.nombreRol);
            profile.value = data;
            console.log("Perfil cargado con éxito:", profile.value);
        }
      }
    } catch (error) {
      // Aquí caen tanto errores de red como el "throw error" de arriba
      console.error("Error al obtener el perfil:", error.message);
      profile.value = null; // Limpiamos por seguridad si algo falla
      throw error; // Lanzamos el error para que LoginView pueda mostrarlo en rojo
    }
  };

  const logout = async () => {
    await supabase.auth.signOut();
    session.value = null;
    profile.value = null;
  };

  // 3. EXPORTAR (Lo que el resto de la app puede usar)
  return {
    session,
    profile,
    login,
    logout,
  };
});
