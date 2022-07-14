<template>
  <div class="font">
    <div class="w3-container banner">
      <div class="w3-center">
        <p class="big-words">Quick Search</p>
        <div class="align-h-center">
          <input type="text" class="w3-input w3-round-xlarge search-box margin-right-15"
                  v-model="userGlobal.search.drinkName">
          <button class="w3-button w3-round-xlarge color-gray search-button"
                  @click="search()" >Search</button>
        </div>
      </div>
    </div>

    <SearchRecipe :showDialog="state.showSearchRecipeDialog"
                  @close-search-recipe-dialog="closeSearchRecipeDialog"/>
  </div>
</template>

<script>
  import { reactive } from 'vue';
  //import { useRouter } from 'vue-router';
  import { userGlobal } from '@/store/global/userGlobal';

  import SearchRecipe from '@/components/SearchRecipe.vue';

  export default {
    name: 'home',

    components: {
      SearchRecipe
    },

    setup() {
      //const router = useRouter();

      const state = reactive({
        showSearchRecipeDialog: false
      });

      function search() {
        state.showSearchRecipeDialog = true;
      }

      function closeSearchRecipeDialog() {
          state.showSearchRecipeDialog = false;
      }

      return {
        state,
        userGlobal,
        search,
        closeSearchRecipeDialog
      }
    }
  }
</script>

<style scoped>
  .font{
    font-family: 'bodonitown';
  }

  .banner{
    width: 100%;
    max-height: 1400px;
    min-height: 700px;
    background-image: url('../assets/images/bar.jpg');
    background-size: cover;
    background-position: center no-repeat;
    color: white;
  }

  .big-words{
    font-size: 110px;
    margin-bottom: 0px;
  }

  .search-box{
    font-size: 70px;
    width: 600px;
    text-align: right;
  }

  .search-button{
    font-size: 45px;
  }

  input:focus {
    outline: none;
  }
</style>