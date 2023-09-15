<template>
    <div class="login-container">
      <h2>Connexion</h2>
      <form @submit.prevent="login">
        <input type="text" placeholder="Nom d'utilisateur" v-model="username" />
        <input type="password" placeholder="Mot de passe" v-model="password" />
        <button type="submit">Se connecter</button>
      </form>
    </div>
  </template>
  
  <script>
  export default {
    name: 'LoginComponent',
    data() {
      return {
        username: '',
        password: ''
      };
    },
    methods: {
      login() {
        // Logique de connexion ici
      }
    }
  };
  </script>
  
  <style scoped>
  .login-container {
    background-color: #fff;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }
  </style>
  