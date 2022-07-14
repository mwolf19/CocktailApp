<template>
    <div>
        <div class="w3-container w3-cell-row">
          <div>Display drinks you have saved here</div>
          <div>probably in some sort of table</div>

          <button class="w3-btn w3-round-large color-orange margin-all-5"
                  @click="showSearchRecipeDialog()">Search Recipes</button>
        </div>

      <CreateRecipe :showDialog="state.showCreateRecipeDialog"
                    @close-create-recipe-dialog="closeCreateRecipeDialog"/>
                    
      <SearchRecipe :showDialog="state.showSearchRecipeDialog"
                    @close-search-recipe-dialog="closeSearchRecipeDialog"/>
    </div>
</template>

<script>
  import { reactive } from 'vue';
  import { userGlobal } from '@/store/global/userGlobal';

  import CreateRecipe from '@/components/CreateRecipe.vue';
  import SearchRecipe from '@/components/SearchRecipe.vue';

  export default {
    name: 'Account',

    components: {
      CreateRecipe,
      SearchRecipe
    },

    setup() {
      const state = reactive({
        showCreateRecipeDialog: false,
        showSearchRecipeDialog: false
      });

      function showCreateRecipeDialog() {
        state.showCreateRecipeDialog = true;
      }

      function showSearchRecipeDialog() {
        state.showSearchRecipeDialog = true;
      }

      function closeCreateRecipeDialog(drink) {
        if (drink === null) {
          state.showCreateRecipeDialog = false;
        }
      }

      function closeSearchRecipeDialog(drink) {
        if (drink === null) {
          state.showSearchRecipeDialog = false;
        }
      }

      return {
        state,
        userGlobal,
        showCreateRecipeDialog,
        showSearchRecipeDialog,
        closeCreateRecipeDialog,
        closeSearchRecipeDialog
      }
    }
  }
</script>

<style scoped>

</style>