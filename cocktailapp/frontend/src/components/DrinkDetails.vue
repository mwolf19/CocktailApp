<template>
    <div v-show="showDialog === true" class="w3-modal k-centered" style="display: block">
      <div class="w3-modal-content" style="min-width: 75%; max-width: 75%">
        <button @click="closeMe()" style="position: fixed"
              class="w3-btn w3-circle w3-display-topright w3-card-4 button-close"/>
              
        <div class="w3-container w3-center">
          <p class="big-words">{{ userGlobal.selectedDrink.strDrink }}</p>

          <hr>

          <p class="font-size-xlarge">{{ userGlobal.selectedDrink.strInstructions }}</p>

          <hr>

          <div class="w3-cell-row" v-if="userGlobal.selectedDrink.strIngredient1 != null">
            <div class="w3-cell w3-container align-h-center">
              {{ userGlobal.selectedDrink.strIngredient1 }}
              <div class="margin-left-15">
                {{ userGlobal.selectedDrink.strMeasure1 }}
              </div>
            </div>
          </div>

          <div class="w3-cell-row" v-if="userGlobal.selectedDrink.strIngredient2 != null">
            <div class="w3-cell w3-container align-h-center">
              {{ userGlobal.selectedDrink.strIngredient2 }}
              <div class="margin-left-15">
                {{ userGlobal.selectedDrink.strMeasure2 }}
              </div>
            </div>
          </div>

          <div class="w3-cell-row" v-if="userGlobal.selectedDrink.strIngredient3 != null">
            <div class="w3-cell w3-container align-h-center">
              {{ userGlobal.selectedDrink.strIngredient3 }} 
              <div class="margin-left-15"> 
                {{ userGlobal.selectedDrink.strMeasure3 }}
              </div>
            </div>
          </div>
          
          <div class="w3-cell-row" v-if="userGlobal.selectedDrink.strIngredient4 != null">
            <div class="w3-cell w3-container align-h-center">
              {{ userGlobal.selectedDrink.strIngredient4 }} 
              <div class="margin-left-15"> 
                {{ userGlobal.selectedDrink.strMeasure4 }}
              </div>
            </div>
          </div>
          
          <div class="w3-cell-row" v-if="userGlobal.selectedDrink.strIngredien5 != null">
            <div class="w3-cell w3-container align-h-center">
              {{ userGlobal.selectedDrink.strIngredient5 }}
              <div class="margin-left-15">  
                {{ userGlobal.selectedDrink.strMeasure5 }}
              </div>
            </div>
          </div>
          
          <div class="w3-cell-row" v-if="userGlobal.selectedDrink.strIngredien6 != null">
            <div class="w3-cell w3-container align-h-center">
              {{ userGlobal.selectedDrink.strIngredient6 }}
              <div class="margin-left-15">  
                {{ userGlobal.selectedDrink.strMeasure6 }}
              </div>
            </div>
          </div>
          
          <div class="w3-cell-row" v-if="userGlobal.selectedDrink.strIngredien7 != null">
            <div class="w3-cell w3-container align-h-center">
              {{ userGlobal.selectedDrink.strIngredient7 }}
              <div class="margin-left-15">  
                {{ userGlobal.selectedDrink.strMeasure7 }}
              </div>
            </div>
          </div>
          
          <div class="w3-cell-row" v-if="userGlobal.selectedDrink.strIngredien8 != null">
            <div class="w3-cell w3-container align-h-center">
              {{ userGlobal.selectedDrink.strIngredient8 }}
              <div class="margin-left-15"> 
                {{ userGlobal.selectedDrink.strMeasure8 }}
              </div>
            </div>
          </div>
          
          <div class="w3-cell-row" v-if="userGlobal.selectedDrink.strIngredien9 != null">
            <div class="w3-cell w3-container align-h-center">
              {{ userGlobal.selectedDrink.strIngredient9 }}
              <div class="margin-left-15"> 
                {{ userGlobal.selectedDrink.strMeasure9 }}
              </div>
            </div>
          </div>
          
          <div class="w3-cell-row" v-if="userGlobal.selectedDrink.strIngredien10 != null">
            <div class="w3-cell w3-container align-h-center">
              {{ userGlobal.selectedDrink.strIngredient10 }}
              <div class="margin-left-15"> 
                {{ userGlobal.selectedDrink.strMeasure10 }}
              </div>
            </div>
          </div>
          
          <div class="w3-cell-row" v-if="userGlobal.selectedDrink.strIngredien11 != null">
            <div class="w3-cell w3-container align-h-center">
              {{ userGlobal.selectedDrink.strIngredient11 }}
              <div class="margin-left-15">  
                {{ userGlobal.selectedDrink.strMeasure11 }}
              </div>
            </div>
          </div>
          
          <div class="w3-cell-row" v-if="userGlobal.selectedDrink.strIngredien12 != null">
            <div class="w3-cell w3-container align-h-center">
              {{ userGlobal.selectedDrink.strIngredient12 }}
              <div class="margin-left-15"> 
                {{ userGlobal.selectedDrink.strMeasure12 }}
              </div>
            </div>
          </div>
          
          <div class="w3-cell-row" v-if="userGlobal.selectedDrink.strIngredien13 != null">
            <div class="w3-cell w3-container align-h-center">
              {{ userGlobal.selectedDrink.strIngredient13 }}
              <div class="margin-left-15">  
                {{ userGlobal.selectedDrink.strMeasure13 }}
              </div>
            </div>
          </div>
          
          <div class="w3-cell-row" v-if="userGlobal.selectedDrink.strIngredien14 != null">
            <div class="w3-cell w3-container align-h-center">
              {{ userGlobal.selectedDrink.strIngredient14 }}
              <div class="margin-left-15"> 
                {{ userGlobal.selectedDrink.strMeasure14 }}
              </div>
            </div>
          </div>
          
          <div class="w3-cell-row" v-if="userGlobal.selectedDrink.strIngredien15 != null">
            <div class="w3-cell w3-container align-h-center">
              {{ userGlobal.selectedDrink.strIngredient15 }} 
              <div class="margin-left-15"> 
                {{ userGlobal.selectedDrink.strMeasure15 }}
              </div>
            </div>
          </div>
        </div>

        <button class="w3-btn" @click="addToCollection()">Add to Collection</button>
      </div>
    </div>
</template>

<script>
  import { reactive } from 'vue';
  import { userGlobal } from '@/store/global/userGlobal';

  export default {
    name: 'drink-details',

    props: ['showDialog'],

    emits: ['close-drink-details-dialog'],

    setup(props, context) {
      const state = reactive({
      });

      function addToCollection() {
        userGlobal.cocktailList.username = userGlobal.user.username;
        userGlobal.cocktailList.savedCocktails.push(userGlobal.selectedDrink);

        userGlobal.saveList();
      }

      function closeMe() {
        userGlobal.selectedDrink = {};

        context.emit('close-drink-details-dialog', null);
      }

      return {
        state,
        userGlobal,
        addToCollection,
        closeMe
      }
    }
  }
</script>

<style scoped>
  .big-words{
    font-size: 75px;
    margin-top: 0px;
    margin-bottom: 0px;
  }
</style>