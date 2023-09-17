import Parse from '../configuration/parse-config';
import { validationService } from './valideUser';
export const userService = {
  async login(username, password) {
    await validationService.validateLogin(username, password);

    const userQuery = new Parse.Query(Parse.User);
    userQuery.equalTo("username", username);

    const user = await userQuery.first();
    if (!user) throw new Error("Utilisateur non trouvé");

    await Parse.User.logIn(username, password);
    return true;
  },

  async register(username, password, email) {
    
    await validationService.validateEmail(email);
    validationService.validatePassword(password);
    validationService.validateUsername(username);

    const user = new Parse.User();
    user.set("username", username);
    user.set("password", password);
    user.set("email", email);

    try {
      await user.signUp();
      return true;
    } catch (error) {
      throw new Error("Erreur lors de l'inscription: " + error.message);
    }
  },
};
