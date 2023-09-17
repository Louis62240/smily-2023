<template>
  <ul class="flex flex-wrap md:space-x-6">
    <router-link :to="item.route" class="group relative listMenu" v-for="(item, index) in menuItems" :key="index" >
      <button @click="setActive(index)"  :class="{ 'active-link': item.route === this.$route.path }" class="custom-btn btn-14"><i :class="`fas ${item.icon} mr-2`"></i><span class="hidden md:inline">{{ $t(item.nameKey) }}</span></button>
    </router-link>
    <li class="group relative listMenu">
      <select class="language-selector w-full md:w-auto"
        @change="changeLanguage"
        style="background-color: #ffc0ad"
      >
      <option
          v-for="(language, index) in supportedLanguages"
          :key="index"
          :value="language.code"
          :style="{ backgroundColor: language.backgroundColor }"
        >
          {{ language.flag }} {{ language.name }}
        </option>
      </select>
    </li>
  </ul>
</template>

<script>
export default {
  props: {
    menuItems: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      activeIndex: 0,
      supportedLanguages: [
        { code: 'fr', name: 'Français', flag: '🇫🇷', backgroundColor: '#ffc0ad' },
        { code: 'en', name: 'English', flag: '🇬🇧', backgroundColor: '#ffc0ad' },
        { code: 'es', name: 'Español', flag: '🇪🇸', backgroundColor: '#ffc0ad' },
        { code: 'de', name: 'Deutsch', flag: '🇩🇪', backgroundColor: '#ffc0ad' },
        { code: 'it', name: 'Italiano', flag: '🇮🇹', backgroundColor: '#ffc0ad' },
        // Ajoutez d'autres langues ici
      ],
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
    showLoginComponent() {
      // Ajoutez cette fonction
      this.$emit("showLoginComponent");
    },
    changeLanguage(event) {
      const selectedLanguage = event.target.value;
      console.log("Langue sélectionnée :", selectedLanguage);
      this.$i18n.locale = event.target.value;
    },
  },
};
</script>
<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@700&display=swap");

.active-link {
  background-color: #ffc0ad !important;
  color: #271c19 !important;
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
}.language-selector {
  width: 9rem; // Correspond à w-36 en Tailwind
  height: 2.5rem; // Correspond à h-10 en Tailwind
  border-radius: .375rem; // Correspond à rounded en Tailwind
  border: 2px solid; // Correspond à border-2 en Tailwind
  font-weight: 600; // Correspond à font-semibold en Tailwind
  padding: .5rem; // Correspond à p-2 en Tailwind
  cursor: pointer; // Correspond à cursor-pointer en Tailwind
  outline: none; // Correspond à outline-none en Tailwind
  
  // Couleurs personnalisées (à remplacer par vos propres valeurs)
  border-color: #55423d; // Correspond à border-primary
  background-color: #ffc0ad; // Correspond à bg-secondary
  outline: 0;
  &:focus {
    border-color: #ffc0ad; // Correspond à focus:border-highlight
  }
  
  // Design réactif
  @media screen and (min-width: 768px) { // Correspond à @screen md en Tailwind
    width: auto;
  }
  
  @media screen and (max-width: 767.98px) { // Correspond à @screen sm en Tailwind
    width: 100%;
  }
}
.bg-option {
  background-color: #ffc0ad;
}
/* Ajoutez ces classes pour rendre le composant responsive */
@media screen and (max-width: 768px) {
  .active-link {
    border-radius: 6px;
  }
  .input {
    width: 100%;
    margin-top: 10px;
  }
  .language-selector {
    width: 100%;
    margin-top: 10px;
  }
}

/* 14 */
.btn-14 {
  background: rgb(255,151,0);
  border: none;
  z-index: 1;
}
.btn-14:after {
  position: absolute;
  content: "";
  width: 100%;
  height: 0;
  top: 0;
  left: 0;
  z-index: -1;
  border-radius: 5px;
  background-color: #ffc0ad;
  background-image: linear-gradient(315deg, #ffc0ad 0%, #ffc0ad 74%);
  box-shadow: inset 2px 2px 2px 0px rgba(255,255,255,.5),
              7px 7px 20px 0px rgba(0,0,0,.1),
              4px 4px 5px 0px rgba(0,0,0,.1);
  transition: all 0.3s ease;
}
.btn-14:hover {
  color: #000;
}
.btn-14:hover:after {
  top: auto;
  bottom: 0;
  height: 100%;
}
.btn-14:active {
  top: 2px;
}
.frame {
  width: 90%;
  margin: 40px auto;
  text-align: center;
}
button {
  margin: 10px;
}
select {
  margin: 10px;
}
.custom-btn {
  height: 40px;
  color: #fff;
  border-radius: 5px;
  padding: 10px 25px;
  font-family: 'Lato', sans-serif;
  font-weight: 500;
  background: #87736d;
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
  display: inline-block;
   box-shadow:inset 2px 2px 2px 0px rgba(255,255,255,.5),
   7px 7px 20px 0px rgba(0,0,0,.1),
   4px 4px 5px 0px rgba(0,0,0,.1);
  outline: none;
}
</style>