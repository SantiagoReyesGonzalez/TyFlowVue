<template>
  <main class="login-page">
    
    <div class="login-card">
      
      <div class="login-card__form">
        <h1>Autenticación</h1>
        <form id="loginForm">
          <label for="email">Usuario</label>
          <input type="email" id="email" required>

          <label for="password">Contraseña</label>
          <input type="password" id="password" required>
          
          <p id="msg"></p>
          <button type="submit">Iniciar Sesión</button>
        </form>
      </div>

      <div class="login-card__banner">
        <h3>Bienvenido a TYFLOW</h3>
        <p>El sistema integral para gestionar y optimizar tu reparto de manera eficiente y segura</p>
      </div>

    </div>
  </main>
</template>

<script>

</script>

<style scoped>

/* =========================================
   5. VISTA: LOGIN (login.css)
   ========================================= */
.login-page {
  /* Ocupar el 100% del alto de la ventana visible */
  height: 100vh; 
  /* Activar Flexbox */
  display: flex; 
  /* Centrar verticalmente */
  align-items: center; 
  /* Centrar horizontalmente */
  justify-content: center; 
  background-color: var(--bg-main);
}
/* EL BLOQUE: La tarjeta principal */
.login-card {
    display: grid;
    grid-template-columns: 1fr 1fr; /* Divide la tarjeta en dos mitades */
    width: 900px;
    min-height: 500px;
    background-color: var(--bg-card);
    border-radius: 16px;
    overflow: hidden;
    box-shadow: var(--shadow-lg);
}

/* ELEMENTO 1: Formulario izquierdo */
.login-card__form {
    display: flex;
    flex-direction: column;
    padding: 3rem;
    justify-content: center;
}

.login-card__form h1 {
    text-align: center;
    color: var(--primary-500);
    margin-bottom: 1.5rem;
}

.login-card__form label {
    margin-top: 1rem;
    margin-bottom: 0.5rem;
    font-weight: 600;
}

.login-card__form input {
    width: 100%;
    padding: 10px;
}

.login-card__form button {
    padding: 15px;
    margin-top: 2rem;
    background-color: var(--btn-primary-bg);
    color: var(--btn-primary-text);
    border: none;
    border-radius: 8px;
    cursor: pointer;
    font-weight: bold;
}

.login-card__form button:hover {
    background-color: var(--btn-primary-hover);
}

/* ELEMENTO 2: Banner derecho */
.login-card__banner {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-image: var(--primary-gradient);
    padding: 60px;
    color: var(--btn-primary-text);
    text-align: center;
}

.login-card__banner h3 {
    font-size: 2.6rem;
    margin-bottom: 20px;
}   
.container-login {
    display: grid;
    grid-template-columns: 1fr 1fr;
    width: 900px;
    min-height: 500px;
    background-color: var(--bg-card);
    border-radius: 16px;
    overflow: hidden;
    box-shadow: var(--shadow-lg);
    /* Se centra usando grid/flex en el contenedor padre o el body para esta vista */
    margin: auto; 
    margin-top: 10vh; /* Ajuste temporal para centrar si el body no tiene place-items */
}

.container-login-left {
    display: flex;
    flex-direction: column;
    padding: 3rem;
    gap: 1rem;
}

.container-login-left h1 {
    padding: 10px 10px 30px 10px;
    text-align: center;
    color: var(--primary-500);
}

.container-login-left label {
    display: block;
    padding: 10px 0;
    margin-top: 10px;
}

.container-login-left input {
    padding: 10px 10px;
    width: 100%;
    background-color: var(--bg-main);
    border: none;
    border-radius: 8px;
    color: var(--text-secondary);
}

.container-login-left input:focus {
    outline: none;
    border-color: var(--input-focus);
    box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.3);
}

.container-login-left input:hover {
    border-color: var(--input-focus);
    box-shadow: 0 0 0 3px rgba(59, 131, 246, 0.116);
}

.container-login-left button {
    display: block;
    padding: 25px 10px;
    margin-top: 40px;
    width: 100%;
    background-color: var(--btn-primary-bg);
    border: none;
    border-radius: 8px;
    color: var(--btn-primary-text);
}

.container-login-left button:hover {
    background-color: var(--btn-primary-hover);
    cursor: pointer;
}   

.container-login-left button:active {
    background-color: var(--btn-primary-active);
}

.container-login-right {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-image: var(--primary-gradient);
    padding: 60px;
    color: var(--btn-primary-text);
}

.container-login-right h3 {
    text-align: center;
    margin-bottom: 20px;
    font-size: 2.6rem;
}

.container-login-right p {
    margin-top: 30px;
    text-align: center;
    font-size: 1.2rem;
    line-height: 1.5rem;
}

@media (max-width: 768px) {
    .container-login {
        grid-template-columns: 1fr; 
        width: 100%;                
        min-height: auto;
        border-radius: 0;
        height: 100vh;              
        margin-top: 0;
    }

    .container-login-left,
    .container-login-right {
        padding: 4rem 3rem;        
    }

    .container-login-left {
        order: 2; 
    }
    
    .container-login-right {
        order: 1; 
        height: auto;
    }

    .container-login-left h1 {
        display: none;
    }

    .container-login-right h3 {
        font-size: 1.5rem;
        margin-bottom: 0;
    }

    .container-login-right p {
        font-size: 1rem;
        line-height: 1.4rem;
    }

    .container-login-left input,
    .container-login-left button {
        width: 100%;               
    }

    .container-login-left button {
        padding: 20px 10px;
        margin-top: 20px;
    }
}

</style>