<template>
    <button class="start-btn" @click="showAlert">
        {{ $t('startExperience') }} 
      </button>
</template>
<script >
export default {
    name:"ButtonStartComponent",
    methods:{
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
    }
}
</script>