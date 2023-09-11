<template>
  <header class="bg-primary text-headline p-4 shadow-2xl header-animated">
    <div
      class="container mx-auto flex justify-between items-center animate__animated animate__fadeIn"
    >
      <div class="flex items-center group cursor-pointer smily-container">
        <img
          src="@/assets/images/logo_smily.png"
          alt="Smily Logo"
          class="w-12 h-12 mr-4 rounded-full shadow-lg smily-logo"
        />
        <div class="smily-text">Smily</div>
      </div>
      <nav>
        <ul class="flex space-x-6">
          <li
            class="group relative"
            v-for="(item, index) in menuItems"
            :key="index"
          >
            <a
              @click="setActive(index)"
              :class="[
                'flex items-center transition duration-300 py-2 px-4 rounded-full bg-white bg-opacity-20 hover:bg-opacity-40 transform hover:scale-110 cursor-pointer',
                { 'active-link': activeIndex === index },
              ]"
            >
              <i :class="`fas ${item.icon} mr-2`"></i> {{ $t(item.nameKey) }}

              <span
                class="absolute inset-0 bg-highlight opacity-0 group-hover:opacity-20 transition-opacity duration-300 rounded-full"
              ></span>
            </a>
            <div
              class="absolute left-0 w-full h-0.5 bg-highlight rounded-full group-hover:h-1 transition-all duration-300"
            ></div>
          </li>
          <li class="relative group">
            <a
              @click="showLoginComponent"
              class="flex items-center transition duration-300 py-2 px-4 rounded-full bg-white bg-opacity-20 hover:bg-opacity-40 transform hover:scale-110 cursor-pointer"
            >
              <i class="fas fa-user mr-2"></i> Mon Compte
            </a>
          </li>

          <li>
            <input
              class="input"
              name="text"
              :placeholder="$t('search')"
              type="text"
            />
          </li>
          <li>
            <select
              class="w-36 h-10 rounded border-2 border-primary bg-secondary font-semibold p-2 cursor-pointer outline-none focus:border-highlight language-selector"
              @change="changeLanguage"
              style="background-color: #ffc0ad"
            >
              <option value="fr" selected style="background-color: #ffc0ad">
                🇫🇷 Français
              </option>
              <option value="en" style="background-color: #ffc0ad">
                🇬🇧 English
              </option>
              <option value="es" style="background-color: #ffc0ad">
                🇪🇸 Español
              </option>
              <option value="de" style="background-color: #ffc0ad">
                🇩🇪 Deutsch
              </option>
              <option value="it" style="background-color: #ffc0ad">
                🇮🇹 Italiano
              </option>
              <!-- Ajoutez d'autres langues ici -->
            </select>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<script>
import "animate.css";

export default {
  name: "HeaderComponent",
  data() {
    return {
      activeIndex: null,
      showMenu: false,
      menuItems: [
        { nameKey: "home", icon: "fa-home" },
        { nameKey: "contact", icon: "fa-envelope" },
      ],
      showLogin: false,
    };
  },
  methods: {
    setActive(index) {
      console.log("Setting active index to", index);
      if (this.activeIndex === index) {
        this.activeIndex = null; // Désactiver si le même bouton est cliqué
      } else {
        this.activeIndex = index; // Sinon, activez le menu sélectionné
      }
    },
    showLoginComponent() { // Ajoutez cette fonction
      this.$emit("showLoginComponent");
    },
    toggleMenu() {
      this.showMenu = !this.showMenu;
    },
    changeLanguage(event) {
      const selectedLanguage = event.target.value;
      console.log("Langue sélectionnée :", selectedLanguage);
      this.$i18n.locale = event.target.value;
      // Appliquez la logique pour changer la langue de l'interface ici
    },
  },
};
</script>
<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@700&display=swap");

.smily-logo {
  transition: transform 0.3s ease-in-out;
}

.smily-logo:hover {
  transform: rotate(360deg);
}
.active-link {
  background-color: #ffc0ad; /* Orange, par exemple */
  color: #271c19; /* Texte blanc */
  border-radius: 12px; /* Coins arrondis */
}

.header-animated {
  animation: slideFromTop 0.5s ease-out forwards;
}
.input {
  --input-focus: #ffc0ad;
  --font-color: #fefefe;
  --font-color-sub: #7e7e7e;
  --bg-color: #111111;
  --main-color: #fefefe;
  width: 200px;
  height: 40px;
  border-radius: 5px;
  border: 2px solid var(--main-color);
  background-color: var(--bg-color);
  box-shadow: 4px 4px var(--main-color);
  font-size: 15px;
  font-weight: 600;
  color: var(--font-color);
  padding: 5px 10px;
  outline: none;
}

.input::placeholder {
  color: var(--font-color-sub);
  opacity: 0.8;
}

.group-hover\:block {
  display: none;
}

.group:hover .group-hover\:block {
  display: block;
}
.rotate-180 {
  transform: rotate(180deg);
}
.input:focus {
  border: 2px solid var(--input-focus);
}
.language-selector,
.language-selector option {
  background-color: #ffc0ad;
  color: #271c19;
}

.smily-text {
  font-size: 1.5rem; /* Taille du texte */
  font-family: "Comic Sans MS", "Chalkboard SE", "Comic Neue", sans-serif; /* Choix de la police */
  font-weight: bold; /* Gras */
  text-transform: uppercase; /* Tout en majuscules */
  letter-spacing: 0.1em; /* Espacement des lettres */
  color: #ffd700; /* Couleur du texte */
  text-shadow: 2px 2px 4px #000000; /* Ombre du texte */
  transition: color 0.3s ease-in-out; /* Transition pour la couleur */
}

.smily-text:hover {
  color: #ff69b4; /* Couleur du texte au survol */
}
</style>
