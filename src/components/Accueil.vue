<template>
  <section
    class="welcome-section text-body p-4 shadow-2xl relative"
  >
    <!-- SVG de fond à droite -->
    <!-- SVG de fond à gauche -->
    <div class="absolute left-0 top-0 h-full z-0 slide-from-left">
      <img
        src="@/assets/images/cactus-flower.svg"
        alt="Cactus illustration"
        class="h-full"
      />
    </div>
    <!-- SVG de fond à droite -->
    <div class="absolute top-0 h-full custom-right slide-from-right">
      <img
        src="@/assets/images/cactus-flower-2.svg"
        alt="Cactus illustration"
        class="h-full"
      />
    </div>
    <!-- Contenu du composant -->
    <div
      class="container mx-auto flex flex-col justify-center items-center animate__animated animate__fadeIn h-full z-10"
    >
      <h1 class="text-5xl font-extrabold tracking-wider text-highlight mb-4">
        {{ $t('welcome') }}
      </h1>
      <p class="text-lg mb-4">
        {{ $t('bestPlatform') }}
      </p>
      <button class="start-btn" @click="showAlert">
        {{ $t('startExperience') }} 
      </button>
    </div>
  </section>
  
</template>

<script>
import Parse from '../configuration/parse-config';

export default {
  name: "WelcomeComponent",
  methods: {
    testParse() {
      console.log("test");
      var TestObject = Parse.Object.extend("B4aVehicle");
      var testQuery = new Parse.Query(TestObject);
      testQuery.find().then((results) => {
        console.log(results);
      });
    },
    async showAlert() {
      const result = await this.$swal({
        title: 'Êtes-vous sûr ?',
        text: "Vous ne pourrez pas revenir en arrière !",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Oui, continuer !'
      });
      
      if (result.isConfirmed) {
        this.$swal(
          'Confirmé !',
          'Votre action a été confirmée.',
          'success'
        );
        // Ajoutez votre logique ici après confirmation
      } else if (result.dismiss === 'cancel') {
        this.$swal(
          'Annulé',
          'Votre action a été annulée.',
          'error'
        );
        // Ajoutez votre logique ici en cas d'annulation
      }
    },
  },
};
</script>

<style scoped>
.welcome-section {
  height: calc(100vh - 64px);
  position: relative; /* Ajouté pour le positionnement absolu du SVG */
}
.bg-secondary {
  background-color: #faf3e0;
}
.text-body {
  color: #333;
}
.text-highlight {
  color: #55423d;
}
.container {
  height: 100%;
  position: relative; /* Ajouté pour le positionnement z-index */
  z-index: 10; /* Ajouté pour que le contenu apparaisse au-dessus du SVG */
}
.custom-right {
  right: 50px;
}
@keyframes slideFromLeft {
  0% {
    transform: translateX(-100%);
  }
  100% {
    transform: translateX(0);
  }
}

@keyframes slideFromRight {
  0% {
    transform: translateX(100%);
  }
  100% {
    transform: translateX(0);
  }
}

.slide-from-left {
  animation: slideFromLeft 1s ease-in-out forwards;
}

.slide-from-right {
  animation: slideFromRight 1s ease-in-out forwards;
}

.start-btn {
  padding: 15px 30px;
  font-size: 18px;
  font-weight: bold;
  border: none;
  border-radius: 30px;
  background-color: #55423d;  /* ou une autre couleur qui va bien avec votre palette */
  color: white;
  cursor: pointer;
  transition: background-color 0.3s ease;
  margin-top: 30px;
}

.start-btn:hover {
  background-color: #ffc0ad; /* Orange, par exemple */
  color: #271c19;
}

/* Animation du bouton pour ajouter du dynamisme */
@keyframes bounce {
  0%, 20%, 50%, 80%, 100% {
    transform: translateY(0);
  }
  40% {
    transform: translateY(-15px);
  }
  60% {
    transform: translateY(-10px);
  }
}

.start-btn {
  animation: bounce 2s infinite;
}

</style>
