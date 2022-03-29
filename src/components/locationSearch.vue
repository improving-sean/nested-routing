<template>
  <ion-item fill="outline" shape="round" mode="md">
    <ion-input
      placeholder="Search by city &amp; state or zip"
      :disabled="processingSearch"
      data-cy="input-search"
    />
    <ion-button @click="search" :disabled="processingSearch" clear item-right fill="none" class="ion-no-padding" data-cy="button-search">
      <ion-spinner v-if="processingSearch" name="lines-small" />
      <ion-icon v-else :ios="searchSharp" :md="searchSharp" color="medium" />
    </ion-button>
  </ion-item>
</template>

<script lang="ts">
import { IonButton, IonIcon, IonInput, IonItem, IonSpinner } from "@ionic/vue";
import { defineComponent, ref } from "vue";
import { searchSharp } from "ionicons/icons";

export default defineComponent({
  components: { IonItem, IonInput, IonButton, IonIcon, IonSpinner },
  setup() {
    const address = ref("");
    const search = () => console.log("searching...");
    const processingSearch = false;
    return { address, search, processingSearch, searchSharp };
  },
});
</script>
