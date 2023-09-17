<template>
  <div class="user-info">
    <h1 class="text-3xl mb-6 text-center header">Mon Compte</h1>

    <div class="info-section">
      <div class="info-item">
        <p><strong>Nom d'utilisateur:</strong></p>
        <p class="info-data">{{ username }}</p>
      </div>
      <div class="info-item">
        <p><strong>Email:</strong></p>
        <p class="info-data">{{ email }}</p>
      </div>
      <!-- Ajoutez plus de champs ici -->
    </div>
    <div class="button-section">
      <button @click="logout" class="action-button logout-button">Se déconnecter</button>
      <!-- <button @click="editProfile" class="action-button edit-button">Modifier le profil</button> -->
    </div>
  </div>
</template>

<script>
import Parse from '../../configuration/parse-config';

export default {
  name: 'UserProfileComponent',
  data() {
    return {
      username: 'Votre_Nom_Utilisateur', // À remplacer par les vraies données
      email: 'exemple@email.com', // À remplacer par les vraies données
    };
  },
  methods: {
    logout() {
      Parse.User.logOut().then(() => {
        console.log('User logged out successfully');
        this.$emit('logout')
      });
    },
    editProfile() {
      this.$emit('editProfile');
    }
  },
  created() {
    var user = Parse.User.current();
    if (user) {
      console.log('User is logged in', user)
      this.username = user.get('username');
      this.email = user.get('email');
    }
  }
};
</script>

<style scoped>
.user-info {
  width: 100%;
  max-width: 800px;
  margin: auto;
  padding: 30px;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
  border-radius: 12px;
  background:#55423d;
  color:white;
  text-align: center;
}
.info-item p
{
  color:black;
}
.header {
  margin-bottom: 24px;
  font-weight: bold;
}

.info-item {
  background: #f1f5f9;
  padding: 16px;
  margin: 12px 0;
  border-radius: 8px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px solid #e2e8f0;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.info-item p {
  margin: 0;
}

.info-data {
  font-weight: 600;
}

.button-section {
  display: flex;
  flex-direction: column;
  gap: 12px;
}
.button-section button {
  width: 40%;
  margin-left: auto;
  margin-top:1rem;
}

.action-button {
  cursor: pointer;
  padding: 12px;
  border-radius: 8px;
  border: none;
  text-align: center;
  transition: background-color 0.3s ease, transform 0.3s ease;
  font-weight: bold;
}

.logout-button {
  background-color: #E53E3E;
  color: #fff;
}

.edit-button {
  background-color: #38B2AC;
  color: #fff;
}

.action-button:hover {
  background-color: #ffc0ad;
  transform: scale(1.05);
}
</style>
