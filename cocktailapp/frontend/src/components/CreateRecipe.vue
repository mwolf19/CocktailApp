<template>
    <div v-show="showDialog === true" class="w3-modal k-centered" style="display: block">
      <div class="w3-modal-content" style="min-width: 75%; max-width: 75%">
        <button @click="closeMe()" style="position: fixed"
              class="w3-btn w3-circle w3-display-topright w3-card-4 button-close"/>
              
        <div class="w3-container w3-center">
          <div>Create Your Own</div>
          <div class="align-v-center">
            <label for="drinkName">Drink Name</label>
            <input type="text" v-model="state.drinkName">
          </div>

          <!-- <div class="align-v-center" v-for="(ingredient, id) in state.ingredients" :key="id"> -->
            <div class="align-v-center">
              <label for="name">Ingredient</label>
              <input type="text" id="name" v-model="state.ingredient.name">
              <input type="number" v-model="state.ingredient.amount" class="w3-right-align">

            </div>
          <!-- </div> -->
        </div>
      </div>
    </div>
</template>

<script>
  import { reactive } from 'vue';
  import { userGlobal } from '@/store/global/userGlobal';

  export default {
    name: 'create-recipe',

    props: ['showDialog'],

    emits: ['close-create-recipe-dialog'],

    setup(props, context) {
      const state = reactive({
        drinkName: '',
        ingredients: [],
        ingredient: {
          name: '',
          amount: 0,
          measure: ''
        }
      });

      // const {

      // } = createRecipeRepo();

      function closeMe() {
        context.emit('close-create-recipe-dialog', null);
      }

      function submitForm() {
        validateForm();

        if (state.errorMessage.trim() === '') {
          console.log(); //Placeholder to fend off errors
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
        closeMe,
        submitForm
      }
    }
  }
</script>

<style scoped>

</style>