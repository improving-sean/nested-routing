<template>
  <div data-cy="delivery-section">
    <ion-card-title class="ion-margin-start">Deliver to</ion-card-title>
    <div>Address form here.</div>

    <div v-if="errorMsg" class="ion-margin ion-text-center">
      <ion-text color="secondary">{{ errorMsg }}</ion-text>
    </div>

    <div>location delivery card here.</div>

    <ion-button
      v-if="isDeliveryAvailable && !errorMsg"
      @click="log('location selected')"
      router-link="/menu"
      color="primary"
      expand="full"
      class="ion-no-margin force-bottom full-width ion-text-capitalize"
      size="large"
      data-cy="button-delivery-here"
    >
      <div>Deliver here</div>
    </ion-button>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed, ref } from "vue";
import { IonCardTitle, IonButton, IonText } from "@ionic/vue";

export default defineComponent({
  components: { IonCardTitle, IonButton, IonText },
  setup() {
    const errorMsg = ref();
    const isDeliveryAvailable = computed(() => {
      return true;
    });
    const selectDeliveryAddress = true;
    const validate =  () => {
      return true
    };
    const changeOrderType = () => console.log("changing order type");

    return {
      selectDeliveryAddress,
      validate,
      isDeliveryAvailable,
      changeOrderType,
      errorMsg,
    };
  },
  methods: {
    log(message: string) {
      console.log(message);
    }
  }
});
</script>

<style scoped>
.delivery-location {
  margin-top: 32px;
}
</style>
