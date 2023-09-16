import Parse from '../configuration/parse-config';
export const loginService = {
    async login(username, password) {
      const userQuery = new Parse.Query(Parse.User);
      userQuery.equalTo("username", username);
  
      const user = await userQuery.first();
      if (!user) throw new Error("Utilisateur non trouvé");
  
      await Parse.User.logIn(username, password);
      return true;
    },
  };
