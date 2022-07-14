<template>
    <div class="w3-container w3-cell-row align-v-center">
      <div class="w3-container w3-cell w3-card-4 w3-round-xxlarge center-h-middle">
        <div class="w3-row">
          <label class="w3-container w3-col w3-center-align">Please Sign In</label>
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
              <input class="w3-input w3-animate-input w3-round-xlarge"
                      type="text" v-model="state.username" v-on:keyup.enter="submitForm()">
            </td>
          </tr>

          <tr>
            <td class="cell-v-center cell-h-right">Password</td>
            <td class="cell-v-center cell-h-left">
              <input class="w3-input w3-animate-input w3-round-xlarge"
                      type="password" v-model="state.password" v-on:keyup.enter="submitForm()">
            </td>
          </tr>
        </table>

        <button class="w3-btn w3-round-large color-green margin-all-5" @click="submitForm()">Submit</button>
      </div>
    </div>
</template>

<script>
  import { reactive } from 'vue';
  import { useRouter } from 'vue-router';
  import { userGlobal } from '@/store/global/userGlobal';

  export default {
    name: 'sign-in',

    setup() {
      const router = useRouter();

      const state = reactive({
        username: '',
        password: '',
        errorMessage: ''
      });

      async function submitForm() {
        state.errorMessage = '';

        validateForm();

        if (state.errorMessage === '') {
          userGlobal.user.username = state.username;
          userGlobal.user.password = state.password;

          await userGlobal.login();


          if (userGlobal.user.email.trim() != '') {
            userGlobal.user.signInSuccess = true;

            router.push('/account');
          } else {
            state.errorMessage = 'Username or email is incorrect';
          }
        }
      }

      function validateForm() {
        state.errorMessage = '';

        if (state.username.trim() === '') {
          state.errorMessage += 'Please enter a username.\n';
        }

        if (state.password.trim() === '') {
          state.errorMessage += 'Please enter a password.\n'
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