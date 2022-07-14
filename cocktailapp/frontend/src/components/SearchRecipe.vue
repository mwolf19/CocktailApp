<template>
    <div v-show="showDialog === true" class="w3-modal" style="display: block">
      <div class="w3-modal-content w3-round-xlarge general" style="min-width: 75%; max-width: 75%">
        <button @click="closeMe()" style="position: fixed"
              class="w3-btn w3-circle w3-display-topright w3-card-4 button-close"/>
              
        <div class="w3-container w3-center">
          <div class="w3-cell-row margin-top-5">
            <div class="w3-container w3-cell align-h-center align-v-center">
              <label for="drinkName">Drink Name</label>
              <input type="text" class="w3-input w3-round-large margin-all-5" id="drinkName" style="width:50%" @keyup="search()" v-model="userGlobal.search.drinkName">
            </div> 
          </div>

          <div class="w3-cell-row w3-card-4 margin-bottom-15" style="background: white;">
            <table class="w3-table w3-striped w3-bordered w3-card-4 ">
              <tr class="color-blue">
                <th class="w3-center">Drink Name</th>
                <th class="w3-center">First Ingredient</th>
                <th></th>
              </tr>

              <tr v-for="(drink, id) in userGlobal.search.drinks" :key="id">
                <td class="w3-center">{{ drink.strDrink }}</td>
                <td class="w3-center">{{ drink.strIngredient1 }}</td>
                <td><button class="w3-btn w3-round-large color-green" 
                            @click="selectDrink(drink)">Select</button></td>
              </tr>
            </table>
          </div>
        </div>
      </div>

      <DrinkDetails :showDialog="state.showDrinkDetailsDialog"
                    @close-drink-details-dialog="closeDrinkDetailsDialog"/>
    </div>
</template>

<script>
  import { reactive, watch, toRefs } from 'vue';
  import { userGlobal } from '@/store/global/userGlobal';

  import DrinkDetails from '@/components/DrinkDetails.vue'

  export default {
    name: 'search-recipe',

    components: {
      DrinkDetails
    },

    props: ['showDialog'],

    emits: ['close-search-recipe-dialog'],

    setup(props, context) {
      const state = reactive({
        drinkName: '',
        showDrinkDetailsDialog: false
      });

      let showDialog = toRefs(props).showDialog;

      watch(showDialog, function() {
        if (showDialog.value === true) {
          search();
        }
      });

      function search() {
        userGlobal.searchAPI();
      }

      function selectDrink(drink) {
        userGlobal.selectedDrink = drink;

        state.showDrinkDetailsDialog = true;
      }

      function closeDrinkDetailsDialog() {
        state.showDrinkDetailsDialog = false;
      }

      function closeMe() {
        userGlobal.clearSearch();

        context.emit('close-search-recipe-dialog', null);
      }

      return {
        state,
        userGlobal,
        search,
        selectDrink,
        closeDrinkDetailsDialog,
        closeMe
      }
    }
  }
</script>

<style scoped>
  .general{
    background: var(--gray);
  }

  input:focus {
   outline: none;
  }
</style>