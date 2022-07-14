<template>
    <div class="w3-container w3-cell-row align-v-center">
      <div class="w3-container w3-cell w3-card-4 w3-round-xxlarge center-h-middle">
        <div class="w3-row">
          <label class="w3-container w3-col w3-center-align">Enter the Information Below</label>
        </div>

        <div class="w3-row">
          <div class="w3-container w3-col w3-center-align font-color-red" 
                v-show="state.errorMessage.trim() != ''">
            {{ state.errorMessage.trim() }}
          </div>
        </div>

        <table class="w3-table">
          <tr>
            <td class="cell-v-center cell-h-right">Username</td>
            <td class="cell-v-center cell-h-left">
              <input class="w3-input w3-animate-input w3-round-xlarge" id="username"
                      type="text" v-model="state.username">
            </td>
          </tr>

          <tr>
            <td class="cell-v-center cell-h-right">Email</td>
            <td class="cell-v-center cell-h-left">
              <input class="w3-input w3-animate-input w3-round-xlarge" id="email"
                      type="text" v-model="state.email">
            </td>
          </tr>

          <tr>
            <td class="cell-v-center cell-h-right">Password</td>
            <td class="cell-v-center cell-h-left">
              <input class="w3-input w3-animate-input w3-round-xlarge" id="password"
                      type="password" v-model="state.password">
            </td>
          </tr>

          <tr>
            <td class="cell-v-center cell-h-right">Confirm password</td>
            <td class="cell-v-center cell-h-left">
              <input class="w3-input w3-animate-input w3-round-xlarge" id="confirmPassword"
                      type="password" v-model="state.confirmedPassword">
            </td>
          </tr>
        </table>

        <button class="w3-btn w3-round-large color-green margin-all-5" 
                @click="submitForm()">Submit</button>
      </div>
    </div>
</template>

<script>
  import { reactive } from 'vue';
  import { useRouter } from 'vue-router';
  import { userGlobal } from '@/store/global/userGlobal';

  export default {
    name: 'sign-up',

    setup() {
      const router = useRouter();

      const state = reactive({
        username: '',
        email: '',
        password: '',
        confirmedPassword: '',
        errorMessage: ''
      });

      function submitForm() {
        validateForm();

        if (state.errorMessage.trim() === '') {
          userGlobal.user.username = state.username;
          userGlobal.user.email = state.email;
          userGlobal.user.password = state.password;

          userGlobal.signUp();

          //userGlobal.createList();
          
          userGlobal.user.signInSuccess = true; //This will need to be moved to the data

          router.push('/account');
        }
      }

      function validateForm() {
        state.errorMessage = '';

        if (state.username.trim() === '') {
          state.errorMessage += 'Please enter a username.';
          document.getElementById('username').focus();
          return;
        }

        if (state.email.trim() === '') {
          state.errorMessage += 'Please enter an email.';
          document.getElementById('email').focus();
          return;
        }

        if (state.password.trim() === '') {
          state.errorMessage += 'Please enter a password.';
          document.getElementById('password').focus();
          return;
        }

        if (state.password !== state.confirmedPassword) {
          state.errorMessage += 'Passwords do not match.';
          document.getElementById('password').focus();
          return;
        }
      }

      return {
        state,
        userGlobal,
        submitForm
      }
    }
  }
</script>

<style scoped>
  input {
    width: 15rem;
  }

  input:focus {
    background: var(--light-gray);
    outline: none;
  }

  .center-h-middle {
    margin: auto;
    width: 30rem;
  }
</style>