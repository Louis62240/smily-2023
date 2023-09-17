<template>
  <h1 class="text-2xl mb-6 text-center">Inscription</h1>
  <form @submit.prevent="register">
    <div class="relative mb-4">
      <i class="fas fa-user absolute left-3 top-3 text-gray-400"></i>
      <input
        type="text"
        class="pl-10 pr-4 py-2 rounded-lg border w-full"
        placeholder="Nom d'utilisateur"
        v-model="newUsername"
      />
    </div>
    <div class="relative mb-4">
      <i class="fas fa-lock absolute left-3 top-3 text-gray-400"></i>
      <input
        :type="showNewPassword ? 'text' : 'password'"
        class="pl-10 pr-4 py-2 rounded-lg border w-full"
        placeholder="Mot de passe"
        v-model="newPassword"
      />
      <button
        type="button "
        @click="toggleNewPasswordVisibility"
        class="absolute right-3 top-3 text-gray-400"
      >
        <i :class="showNewPassword ? 'fas fa-eye-slash' : 'fas fa-eye'"></i>
      </button>
    </div>
    <div class="relative mb-4">
      <i class="fas fa-lock absolute left-3 top-3 text-gray-400"></i>
      <input
        :type="showConfirmPassword ? 'text' : 'password'"
        class="pl-10 pr-4 py-2 rounded-lg border w-full"
        placeholder="Confirmer le mot de passe"
        v-model="confirmPassword"
      />
      <button
        type="button "
        @click="toggleConfirmPasswordVisibility"
        class="absolute right-3 top-3 text-gray-400"
      >
        <i :class="showConfirmPassword ? 'fas fa-eye-slash' : 'fas fa-eye'"></i>
      </button>
    </div>
    <div class="relative mb-4">
      <i class="fas fa-envelope absolute left-3 top-3 text-gray-400"></i>
      <input
        type="email"
        class="pl-10 pr-4 py-2 rounded-lg border w-full"
        placeholder="Adresse e-mail"
        v-model="email"
      />
    </div>
    <button type="submit" class="w-full py-2 rounded-lg buttonLogin">
      S'inscrire
    </button>
  </form>
  <button @click="toggleView" class="mt-4 text-white-500">
    J'ai déjà un compte
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
import { userService } from "../../services/userService";

export default {
  name: "RegisterFormComponent",
  data() {
    return {
      newUsername: "",
      newPassword: "",
      confirmPassword: "",
      email: "",
      showNewPassword: false,
      showConfirmPassword: false,
      errorMessage: "",
    };
  },
  methods: {
    async register() {
      try {
        const registerSuccessful = await userService.register(
          this.newUsername,
          this.newPassword,
          this.email
        );
        if (registerSuccessful) {
          this.$emit("registerSuccessful");
        }
      } catch (error) {
        console.error("Erreur lors de l'inscription:", error);
        this.$emit("registerError", error.message);
      }
    },
    handleRegisterSuccess() {
      this.$router.push("/dashboard");
    },
    handleRegisterError(errorMessage) {
      this.showError(errorMessage);
    },
    toggleNewPasswordVisibility() {
      this.showNewPassword = !this.showNewPassword;
    },
    toggleConfirmPasswordVisibility() {
      this.showConfirmPassword = !this.showConfirmPassword;
    },
    toggleView() {
      this.$emit("toggleView");
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

input
{
    color:black
}
</style>
