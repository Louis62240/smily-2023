<template>
    <h1 class="text-2xl mb-6 text-center">Connexion</h1>
      <form @submit.prevent="login">
        <div class="relative mb-4">
          <i class="fas fa-user absolute left-3 top-3 text-gray-400"></i>
          <input
            type="text"
            class="pl-10 pr-4 py-2 rounded-lg border w-full"
            placeholder="Nom d'utilisateur"
            v-model="username"
          />
        </div>
        <div class="relative mb-4">
          <i class="fas fa-lock absolute left-3 top-3 text-gray-400"></i>
          <input
            :type="showPassword ? 'text' : 'password'"
            class="pl-10 pr-4 py-2 rounded-lg border w-full"
            placeholder="Mot de passe"
            v-model="password"
          />
          <button
            type="button "
            @click="togglePasswordVisibility"
            class="absolute right-3 top-3 text-gray-400"
          >
            <i :class="showPassword ? 'fas fa-eye-slash' : 'fas fa-eye'"></i>
          </button>
        </div>
        <button type="submit" class="w-full py-2 rounded-lg buttonLogin">
          Se connecter
        </button>
      </form>
      <button @click="toggleView" class="mt-4 text-blue-500">
        Pas de compte ? S'inscrire
      </button>
      <transition name="fade">
        <div
          v-if="errorMessage"
          class="mt-4 p-2 rounded bg-red-500 text-white flex items-center animate__animated animate__fadeIn"
        >
          <i class="fas fa-exclamation-triangle mr-2"></i>
          <span>{{ errorMessage }}</span>
        </div>
      </transition>
</template>
<script>
export default {
   name: 'LoginFormComponent', 
    props: {
     showPassword: {
        type: Boolean,
        required: true,
     },
    },
  methods: {
    togglePasswordVisibility() {
      this.$emit('togglePasswordVisibility');
    },
    toggleView() {
      this.$emit('toggleView');
    },
    login() {
      this.$emit('login', {
        username: this.username,
        password: this.password,
      });
    },
  },
};
</script>
<style scoped>
  .buttonLogin {
    background-color: #ffc0ad;
    color: #271c19 !important;
    transition: transform 0.3s ease, background-color 0.3s ease, color 0.3s ease; /* Contrôle la vitesse de l'effet */
  } 

  .buttonLogin:hover {
  transform: scale(1.05);
    background-color: #ffc0ad;
    color: #271c19 !important;
    }  
  

</style>