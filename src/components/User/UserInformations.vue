<template>
  <div>
    <div v-if="User" class="flex items-center justify-center h-80vh">
        <MyUserInformations @logout="handleLogout" />
    </div>
    <div v-else class="flex items-center justify-center h-80vh">
      <div
        v-if="view === 'login'"
        :class="view === 'login' ? 'slide-in-left' : 'slide-out-left'"
        class="bg-white p-8 rounded-lg shadow-md w-96 animate__animated cardAuthentificationCustom"
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
      <div
        v-else-if="view === 'register'"
        :class="view === 'register' ? 'slide-in-right' : 'slide-out-right'"
        class="bg-white p-8 rounded-lg shadow-md w-96 animate__animated cardAuthentificationCustom"
      >
        <RegisterFormComponent
          @registerSuccessful="handleRegisterSuccess"
          @registerError="handleRegisterError"
          @toggleView="toggleView"
        ></RegisterFormComponent>
      </div>
    </div>
  </div>
</template>
<script>
import { userService } from "../../services/userService";

import store from '@/store/authStore.js';
import Parse from "../../configuration/parse-config";

import LoginFormComponent from "../Authentification/Connexion.vue";
import RegisterFormComponent from "../Authentification/Inscription.vue";
import MyUserInformations from "../User/MonCompte.vue";

export default {
  name: "LoginComponent",
  data() {
    return {
      username: "",
      password: "",
      showPassword: false,
      errorMessage: "",
      view: "login",
      newUsername: "",
      newPassword: "",
      confirmPassword: "",
      email: "",
      showNewPassword: false,
      showConfirmPassword: false,
      User: null,
    };
  },
  components: {
    LoginFormComponent,
    RegisterFormComponent,
    MyUserInformations,
  },
  created() {
    var user = Parse.User.current();
    if (user) {
      console.log("User is logged in", user);
      this.User = user;
    }
  },
  methods: {
    async login(data) {
      try {
        const loginSuccessful = await userService.login(
          data.username,
          data.password
        );
        if (loginSuccessful) {
          this.User = Parse.User.current();
          store.commit("setUser", this.User);
          store.commit("setAuthenticated", true);
          this.$toast.success("Connexion réussie !", {
            position: "bottom-right",
            timeout: 5000,
            closeOnClick: true,
            pauseOnFocusLoss: true,
            pauseOnHover: true,
            draggable: true,
            draggablePercent: 0.6,
            showCloseButtonOnHover: false,
            hideProgressBar: true,
            closeButton: "button",
            icon: true,
            rtl: false,
          });
        }
      } catch (error) {
        console.error("Erreur de connexion:", error);
        this.showError("Identifiants incorrects");
      }
    },
    async register() {
      // 3. Nouvelle méthode pour l'inscription
      try {
        const registerSuccessful = await userService.register(
          this.newUsername,
          this.newPassword,
          this.email
        );
        if (registerSuccessful) {
          this.view = "login";
          this.$toast.success("Inscription réussie", {
            position: "bottom-right",
            timeout: 5000,
            closeOnClick: true,
            pauseOnFocusLoss: true,
            pauseOnHover: true,
            draggable: true,
            draggablePercent: 0.6,
            showCloseButtonOnHover: false,
            hideProgressBar: true,
            closeButton: "button",
            icon: true,
            rtl: false,
          });
        }
      } catch (error) {
        console.error("Erreur lors de l'inscription:", error);
        this.showError(error.message);
      }
    },
    handleLogout() {
      this.User = null;
      console.log("User is null", this.User);
      store.commit("setUser", null);
      store.commit("setAuthenticated", false);
      if (this.User === null) {
        this.$toast.success("Déconnexion réussie !", {
          position: "bottom-right",
          timeout: 5000,
          closeOnClick: true,
          pauseOnFocusLoss: true,
          pauseOnHover: true,
          draggable: true,
          draggablePercent: 0.6,
          showCloseButtonOnHover: false,
          hideProgressBar: true,
          closeButton: "button",
          icon: true,
          rtl: false,
        });
      }
    },
    handleRegisterSuccess() {
      this.$router.push("/dashboard");
    },
    handleRegisterError(errorMessage) {
      this.showError(errorMessage);
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
    toggleNewPasswordVisibility() {
      this.showNewPassword = !this.showNewPassword;
    },
    toggleConfirmPasswordVisibility() {
      this.showConfirmPassword = !this.showConfirmPassword;
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

.cardAuthentificationCustom
{
  background:#55423d;
  color:white;

}
</style>
