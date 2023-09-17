// store/auth.js
export default {
    state: {
      isAuthenticated: false, // Initialisation à false car l'utilisateur n'est pas connecté au début
      User: null,
    },
    mutations: {
      setAuthenticated(state, isAuthenticated) {
        state.isAuthenticated = isAuthenticated;
      },
        setUser(state, User) {
            state.User = User;
        },
        
    },
    actions: {
      // Vous pouvez définir des actions pour effectuer la connexion et la déconnexion ici si nécessaire
    },
  };
  