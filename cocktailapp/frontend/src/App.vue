<template>
  <div class="" id='main'>
    <link rel="stylesheet" href="https://www.w3schools.com/lib/w3-theme-black.css">
    
    <div class=" w3-right margin-all-5">
      <button class="w3-btn w3-circle button-dark-mode" @click="toggleDarkMode()"
              v-show="userGlobal.isDarkMode === false"/>

      <button class="w3-btn w3-circle button-light-mode" @click="toggleDarkMode()"
              v-show="userGlobal.isDarkMode === true"/>
    </div>

    <div class="align-h-left" style="margin-left: 30px; padding-top: 15px">
      <img src="../src/assets/images/bird.gif" alt="birdy">
      <button class="w3-button" @click="doRoute('home')">Home</button>
      <button class="w3-button" v-show="userGlobal.user.signInSuccess === false" 
              @click="doRoute('sign-up')">Sign Up</button>
      <button class="w3-button" v-show="userGlobal.user.signInSuccess === false" 
              @click="doRoute('sign-in')">Sign In</button>
      <button class="w3-button" v-show="userGlobal.user.signInSuccess === true"
              @click="doRoute('account')">Account</button>
      <button class="w3-button" v-show="userGlobal.user.signInSuccess === true"
              @click="doRoute('sign-out')">Sign Out</button>
    </div>

    <div class="orange-bar"></div>

    <router-view/>
  </div>
</template>

<script>
  import { useRouter } from 'vue-router';
  import { userGlobal } from '@/store/global/userGlobal';


  export default {
    name: 'App',

    setup() {
      const router = useRouter();

      doRoute('home');

      function toggleDarkMode() {
        let mainElement = document.getElementById('main');

        if (userGlobal.isDarkMode === true) {
          mainElement.className = mainElement.className.replace(' w3-theme-l1', '');

          userGlobal.isDarkMode = false;
        } else {  
          mainElement.className += ' w3-theme-l1';

          userGlobal.isDarkMode = true;
        }
      }

      function doRoute(whereTo) {
        if (whereTo === "home") {
            router.push("/home");   
        } else if (whereTo === 'sign-up') {
          router.push('/signup');
        } else if (whereTo === 'sign-in') {
          router.push('/signin');
        } else if (whereTo === 'account') {
          router.push('/account');
        } else if (whereTo === 'sign-out') {
          userGlobal.clearUser();
          router.push('/home');
        }   
      }

      return {
        userGlobal,
        toggleDarkMode,
        doRoute
      }
    }
  }
</script>

<style>
  @import './assets/styles/w3.css';
  @import url('http://fonts.cdnfonts.com/css/bodonitown');

  /* Colors to be used globally in css for consistency. 
      Call using the var() syntax (see below.) */
  :root {
    --red: #ff3e3e;
    --light-red: #f0bcbc;
    --orange: #d19830;
    --light-orange: #ffd8ad;
    --yellow: #ffd83c;
    --light-yellow: #ffefad;
    --green: #32ff95;
    --light-green: #adffd5;
    --blue: #42bdff;
    --light-blue: #ade2ff;    
    --purple: #ff3cf5;
    --light-purple: #ffadfb;    
    --gray: #c5c5c2;
    --light-gray: #e6e6e6;
  }

  /* Stock (lame) */
  #app {
    font-family: 'bodonitown', Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    font-size: 20px;
    color: #000000;
    /* margin-top: 60px; */
  }

  /* General */
  th.cell-v-center,
  td.cell-v-center {
    vertical-align: middle;
    display: table-cell;
  }

  td.cell-h-right {
    text-align: right;
    display: table-cell;
  }

  td.cell-h-left {
    text-align: left;
    display: table-cell;
  }
  
  td.cell-h-center {
    text-align: center;
    display: table-cell;
  }

  .align-h-center {
    display: flex;
    justify-content: center;
    flex-direction: row;
  }

  .align-h-left {
    display: flex;
    justify-content: left;
    flex-direction: row;
  }

  .align-v-center {
    align-items: center;
  }
    
  /* Color classes */
  .color-red {
    background-color: var(--red);
  }
    
  .color-light-red {
    background-color: var(--light-red);
  }
    
  .color-orange {
    background-color: var(--orange);
  }

  .color-light-orange {
    background-color: var(--light-orange);
  }
      
  .color-yellow {
    background-color: var(--yellow);
  }

  .color-light-yellow {
    background-color: var(--light-yellow);
  }
        
  .color-green {
    background-color: var(--green);
  }

  .color-light-green {
    background-color: var(--light-green);
  }
          
  .color-blue {
    background-color: var(--blue);
  }

  .color-light-blue {
    background-color: var(--light-blue);
  }
            
  .color-purple {
    background-color: var(--purple);
  }

  .color-light-purple {
    background-color: var(--light-purple);
  }
              
  .color-gray {
    background-color: var(--gray);
  }

  .color-light-gray {
    background-color: var(--light-gray);
  }

  .font-color-red {
    color: var(--red);
  }

  /* Margin classes */
  .margin-all-0 {
    margin: 0px;
  }

  .margin-all-5 {
    margin: 5px;
  }

  .margin-all-10 {
    margin: 10px;
  }

  .margin-all-15 {
    margin: 15px;
  }
    
  .margin-top-0 {
    margin-top: 0px;
  }

  .margin-top-5 {
    margin-top: 5px;
  }

  .margin-top-10 {
    margin-top: 10px;
  }

  .margin-top-15 {
    margin-top: 15px;
  }
      
  .margin-right-0 {
    margin-right: 0px;
  }

  .margin-right-5 {
    margin-right: 5px;
  }

  .margin-right-10 {
    margin-right: 10px;
  }

  .margin-right-15 {
    margin-right: 15px;
  }
  
  .margin-top-15 {
    margin-top: 15px;
  }
      
  .margin-bottom-0 {
    margin-bottom: 0px;
  }

  .margin-bottom-5 {
    margin-bottom: 5px;
  }

  .margin-bottom-10 {
    margin-bottom: 10px;
  }

  .margin-bottom-15 {
    margin-bottom: 15px;
  }
        
  .margin-left-0 {
    margin-left: 0px;
  }

  .margin-left-5 {
    margin-left: 5px;
  }

  .margin-left-10 {
    margin-left: 10px;
  }

  .margin-left-15 {
    margin-left: 15px;
  }

  /* Padding classes */

  .padding-all-0 {
    padding: 0px;
  }

  .padding-all-5 {
    padding: 5px;
  }

  .padding-all-10 {
    padding: 10px;
  }

  .padding-all-15 {
    padding: 15px;
  }
    
  .padding-top-0 {
    padding-top: 0px;
  }

  .padding-top-5 {
    padding-top: 5px;
  }

  .padding-top-10 {
    padding-top: 10px;
  }

  .padding-top-15 {
    padding-top: 15px;
  }
      
  .padding-right-0 {
    padding-right: 0px;
  }

  .padding-right-5 {
    padding-right: 5px;
  }

  .padding-right-10 {
    padding-right: 10px;
  }

  .padding-right-15 {
    padding-right: 15px;
  }
        
  .padding-bottom-0 {
    padding-bottom: 0px;
  }

  .padding-bottom-5 {
    padding-bottom: 5px;
  }

  .padding-bottom-10 {
    padding-bottom: 10px;
  }

  .padding-bottom-15 {
    padding-bottom: 15px;
  }
          
  .padding-left-0 {
    padding-left: 0px;
  }

  .padding-left-5 {
    padding-left: 5px;
  }

  .padding-left-10 {
    padding-left: 10px;
  }

  .padding-left-15 {
    padding-left: 15px;
  }

  /* Font Sizes */
  .font-size-tiny {
    font-size: 10px;
  }

  .font-size-small {
    font-size: 12px;
  }

  .font-size-medium {
    font-size: 14px;
  }

  .font-size-large {
    font-size: 16px;
  }

  .font-size-xlarge {
    font-size: 20px;
  }

  /* Buttons */
  button.button-close {
    background: url("assets/images/closeIcon.png") 0 0 no-repeat;
    background-position: center center;
    background-size: 100% 100%;
    height: 2.5em;
    width: 2.5em;
    background-color: #000000;
  }

  button.button-dark-mode {
    background: url("assets/images/darkModeIcon.png") 0 0 no-repeat;
    background-position: center center;
    background-size: 100% 100%;
    height: 2.5em;
    width: 2.5em;
    background-color: #000000;
  }

  button.button-light-mode {
    background: url("assets/images/lightModeIcon.png") 0 0 no-repeat;
    background-position: center center;
    background-size: 100% 100%;
    height: 2.5em;
    width: 2.5em;
    background-color: #ffffff;
  }

  
  .orange-bar {
    width: 100%;
    height: 10px;
    background: var(--orange);
  }
</style>
