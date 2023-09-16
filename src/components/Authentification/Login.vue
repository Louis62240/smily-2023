<template>
  <div class="flex items-center justify-center h-80vh">
    <div v-if="view === 'login'"
      :class="view === 'login' ? 'slide-in-left' : 'slide-out-left'"
      class="bg-white p-8 rounded-lg shadow-md w-96 animate__animated"
    >
    <LoginFormComponent
      v-if="view === 'login'"
      @login="login"
      @toggleView="toggleView"
      @togglePasswordVisibility="togglePasswordVisibility"
      :showPassword="showPassword"
      :errorMessage="errorMessage"
    ></LoginFormComponent>
    </div>
    <div v-else-if="view === 'register'"
      :class="view === 'register' ? 'slide-in-right' : 'slide-out-right'"
      class="bg-white p-8 rounded-lg shadow-md w-96 animate__animated"
    >
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
    </div>
    <div class="relative mb-4">
      <i class="fas fa-lock absolute left-3 top-3 text-gray-400"></i>
      <input
        :type="showConfirmPassword ? 'text' : 'password'"
        class="pl-10 pr-4 py-2 rounded-lg border w-full"
        placeholder="Confirmer le mot de passe"
        v-model="confirmPassword"
      />
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
  <button @click="toggleView" class="mt-4 text-blue-500">
    J'ai déjà un compte
  </button>
    </div>
  </div>
</template>
<script>
import { loginService } from "../../services/loginService";
import LoginFormComponent from "./Connexion.vue";

export default {
  name: "LoginComponent",
  data() {
    return {
      username: "",
      password: "",
      showPassword: false,
      errorMessage: "",
      view: "login",
      
    };
  },
  components: {
    LoginFormComponent,
  },
  methods: {
    async login(data) {
      try {
        const loginSuccessful = await loginService.login(
          data.username,
          data.password
        );
        if (loginSuccessful) {
          this.$router.push("/dashboard");
        }
      } catch (error) {
        console.error("Erreur de connexion:", error);
        this.showError("Identifiants incorrects");
      }
    },
    toggleView() {
      this.view = this.view === "login" ? "register" : "login";
    },
    showError(message) {
      this.errorMessage = message;

      // Cache le message après 5 secondes
      setTimeout(() => {
        this.errorMessage = null;
      }, 5000);
    },
    togglePasswordVisibility() {
      this.showPassword = !this.showPassword;
    },
  },
};
</script>

<style scoped>
@import "~animate.css";

.h-80vh {
  height: 80vh;
}
.animate__fadeIn {
  animation: fadeIn 0.5s forwards;
}

.animate__fadeOut {
  animation: fadeOut 0.5s forwards;
  pointer-events: none; /* pour empêcher toute interaction */
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@keyframes fadeOut {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}
/* Animation pour le message d'erreur */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}

.slide-in-right {
  animation: slide-in-right 0.5s forwards;
}

.slide-out-right {
  animation: slide-out-right 0.5s forwards;
}

.slide-in-left {
  animation: slide-in-left 0.5s forwards;
}

.slide-out-left {
  animation: slide-out-left 0.5s forwards;
}

@keyframes slide-in-right {
  from {
    transform: translateX(100%);
  }
  to {
    transform: translateX(0);
  }
}

@keyframes slide-out-right {
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(100%);
  }
}

@keyframes slide-in-left {
  from {
    transform: translateX(-100%);
  }
  to {
    transform: translateX(0);
  }
}

@keyframes slide-out-left {
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(-100%);
  }
}

</style>
