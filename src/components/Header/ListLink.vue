<template>
  <ul class="flex space-x-6">
    <li class="group relative" v-for="(item, index) in menuItems" :key="index">
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
        <option value="en" style="background-color: #ffc0ad">🇬🇧 English</option>
        <option value="es" style="background-color: #ffc0ad">🇪🇸 Español</option>
        <option value="de" style="background-color: #ffc0ad">🇩🇪 Deutsch</option>
        <option value="it" style="background-color: #ffc0ad">
          🇮🇹 Italiano
        </option>
        <!-- Ajoutez d'autres langues ici -->
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
<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@700&display=swap");

.active-link {
  background-color: #ffc0ad; /* Orange, par exemple */
  color: #271c19; /* Texte blanc */
  border-radius: 12px; /* Coins arrondis */
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

</style>