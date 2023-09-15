<template class="app">
  <Header />
  <Accueil v-if="componentDisplayed==='accueil'" @showLoginComponent="showLoginComponent" />
  <Login v-if="componentDisplayed==='login'"  />
</template>

<script>
import Accueil from './components/Home/Accueil.vue'
import Header from './components/Header/Header.vue'
import Login from './components/Authentification/Login.vue'
export default {
  name: 'App',
  data() {
    return {
      componentDisplayed: 'accueil',
    };
  },
  components: {
    Accueil,
    Header,
    Login,
  },
  methods: {
    showLoginComponent() {
      this.componentDisplayed = 'login';
    },
  },
}
</script>

<style>
body
{
  background-color: #faf3e0;
}
/* Pour les navigateurs WebKit comme Chrome, Safari, et plus récemment, Microsoft Edge */
::-webkit-scrollbar {
  width: 12px;
}

::-webkit-scrollbar-thumb {
  background-color: #ffc0ad; /* Couleur du "pouce" de la barre de défilement */
  border-radius: 6px;
}

/* Pour Firefox */
* {
  scrollbar-width: thin;
  scrollbar-color: #ffc0ad transparent; /* "pouce" et "piste" */
}
</style>
