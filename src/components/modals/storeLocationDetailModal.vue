<template>
  <ion-modal v-if="isMobile" :isOpen="isModalOpen && !forceClose" @didDismiss="dismiss" swipeToClose class="location-modal">
    <ion-content v-if="slug">
      <storeLocationDetail :slug="slug" v-on:close="close" showMap />
    </ion-content>
  </ion-modal>

  <storeLocationDetail v-else :slug="slug" v-on:close="close" />
</template>

<script lang="ts">
import { defineComponent, computed, ref, watch } from "vue";
import { IonModal, IonContent } from "@ionic/vue";
import storeLocationDetail from "@/views/storeLocationDetail.vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router";

export default defineComponent({
  props: { slug: String },
  components: { storeLocationDetail, IonModal, IonContent },
  setup() {
    const store = useStore();
    const router = useRouter();
    const isMobile = computed(() => store.getters.isMobile);
    const forceClose = ref(false);
    const isModalOpen = ref(isMobile.value);
    watch(isMobile, () => (isModalOpen.value = isMobile.value));
    let redirectUrl = "/location";

    function close() {
      isModalOpen.value = false;
      forceClose.value = true;
      if (isMobile.value) return;
      router.push(redirectUrl);
    }
    const dismiss = () => router.push(redirectUrl);

    return { isMobile, close, isModalOpen, dismiss, forceClose };
  },
});
</script>

<style scoped>
.location-modal {
  --min-height: 80vh;
}
</style>
