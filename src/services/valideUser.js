import Parse from '../configuration/parse-config';

export const validationService = {
  
  // Vérification de l'email
  async validateEmail(email) {
    // Vérifier si l'e-mail est déjà enregistré
    const emailQuery = new Parse.Query(Parse.User);
    emailQuery.equalTo("email", email);
    const user = await emailQuery.first();
    if (user) {
      throw new Error("Cet email est déjà enregistré");
    }

    // Vérifier si l'e-mail a un format valide
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(email)) {
      throw new Error("L'e-mail n'est pas dans un format valide");
    }
  },

  // Vérification du mot de passe
  validatePassword(password) {
    if (password.length < 8) {
      throw new Error("Le mot de passe doit contenir au moins 8 caractères");
    }

    // Le mot de passe doit contenir au moins une majuscule, une minuscule, un chiffre et un caractère spécial
    // const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    // if (!passwordRegex.test(password)) {
    //   throw new Error("Le mot de passe doit contenir au moins une majuscule, une minuscule, un chiffre et un caractère spécial");
    // }
  },

  // Vérification du nom d'utilisateur
  validateUsername(username) {
    if (username.length < 3) {
      throw new Error("Le nom d'utilisateur doit contenir au moins 3 caractères");
    }

    // Le nom d'utilisateur doit être alphanumérique
    const usernameRegex = /^[a-zA-Z0-9]+$/;
    if (!usernameRegex.test(username)) {
      throw new Error("Le nom d'utilisateur doit être alphanumérique");
    }
  },
  async validateLogin(username, password) {
    if (!username || !password) {
      throw new Error("Le nom d'utilisateur et le mot de passe sont requis");
    }
  
    if (password.length < 8) {
      throw new Error("Le mot de passe doit contenir au moins 8 caractères");
    }
    const userQuery = new Parse.Query(Parse.User);
    userQuery.equalTo("username", username);
    const user = await userQuery.first();
    if (!user) {
      throw new Error("Utilisateur non trouvé");
    }
  }
};
