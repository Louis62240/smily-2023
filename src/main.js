import { createApp } from 'vue';
import { createI18n } from 'vue-i18n';
import App from './App.vue';
import './assets/css/tailwind.css';
import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';

const messages = {
    en: {
      welcome: 'Welcome to Smily',
      bestPlatform: 'The best platform for your daily life',
      home: 'Home',
      about: 'About',
      account: 'My Account',
      search: 'Search',
      startExperience: 'Start the Experience'
    },
    fr: {
      welcome: 'Bienvenue sur Smily',
      bestPlatform: 'La meilleure plateforme pour votre quotidien',
      home: 'Accueil',
      account: 'Mon compte',
      contact: 'Contact',
      search: 'Recherche',
      startExperience: 'Commencer l\'expérience'
    },
    es: {
      welcome: 'Bienvenido a Smily',
      bestPlatform: 'La mejor plataforma para tu día a día',
      home: 'Inicio',
      account: 'Mi cuenta',
      contact: 'Contacto',
      search: 'Buscar',
      startExperience: 'Comenzar la experiencia'
    },
    it: {
      welcome: 'Benvenuto su Smily',
      bestPlatform: 'La migliore piattaforma per la tua vita quotidiana',
      home: 'Home',
      contact: 'Contatti',
      account: 'Il mio account',
      search: 'Ricerca',
      startExperience: 'Inizia l\'esperienza'
      
    },
    de: {
      welcome: 'Willkommen bei Smily',
      bestPlatform: 'Die beste Plattform für Ihren Alltag',
      home: 'Startseite',
      contact: 'Kontakt',
      account: 'Mein Konto',
      search: 'Suche',
      startExperience: 'Beginnen Sie das Erlebnis'
    }
  };
  

const i18n = createI18n({
  locale: 'fr', // langue par défaut
  messages,
});

const app = createApp(App);
app.use(i18n);
app.use(VueSweetalert2);
app.mount('#app');
