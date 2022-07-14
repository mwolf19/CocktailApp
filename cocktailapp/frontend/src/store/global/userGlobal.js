import { reactive } from 'vue';

const userGlobal = reactive ({
  user: {
    email: '',
    username: '',
    password: '',
    signUpSuccess: false,
    signInSuccess: false
  },

  cocktailList: {
    username: '',
    savedCocktails: [],
    createdCocktails: []
  },

  search: {
    drinkName: '',
    drinks: []
  },

  selectedDrink: {},

  isDarkMode: false,

  signUp() {
    const url = 'http://localhost:8080/users/signup';

    const options = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(userGlobal.user)
    };

    fetch(url, options)
      .then(response => response.json())
      .then(function (data) {
        if (data.email.trim() === '') {
          return;
        }
        userGlobal.user.signUpSuccess = true;
      })
      .catch(function () {
        alert('Error');
      }).finally(function () {

      })
  },

  saveList() {
    const url = 'http://localhost:8080/cocktail/save';

    const options = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(userGlobal.cocktailList)
    };

    fetch(url, options)
      .then(response => response.json())
      .then(function (data) {
        console.log(userGlobal.cocktailList.savedCocktails);
        console.log(data);
      })
      .catch(function () {
        alert('Error');
      }).finally(function () {

      })
  },

  async login() {
    const url = 'http://localhost:8080/users/login';
    const options = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(userGlobal.user)
    };
    await fetch(url, options)
      .then(response => response.json())
      .then(function (data) {
        console.log(data);

        userGlobal.user.email = data.email;
      })
      .catch(function () {
        
      }).finally(function () {

      })
  },

  searchAPI() {
    const url = 'http://localhost:8080/cocktaildb/search/' + userGlobal.search.drinkName;
    fetch(url)
      .then(response => response.json())
      .then(function (data) {
        // if (data) {
          // return;
        // }
        userGlobal.search.drinks = data.drinks;
      })
      .catch(function (e) {
        alert(e);
      }).finally(function () {
      })
  },

  clearUser() {
    userGlobal.user.userId = 0;
    userGlobal.user.firstName = '';
    userGlobal.user.email = '';
    userGlobal.user.username = '';
    userGlobal.user.password = '';
    userGlobal.user.signUpSuccess = false;
    userGlobal.user.signInSuccess = false;
  },

  clearSearch() {
    userGlobal.search.drinkName = '';
    userGlobal.search.drinks = [];
  }
});

export{ userGlobal };