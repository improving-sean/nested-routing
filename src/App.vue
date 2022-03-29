<template>
  <ion-app>
    <ion-content>
      <!-- <router-view id="main-content" class="" /> -->
      <ion-router-outlet />
    </ion-content>
  </ion-app>
</template>

<script lang="ts">
import { IonApp, IonContent, IonRouterOutlet } from '@ionic/vue';
import { computed, defineComponent } from 'vue';
import { useStore } from 'vuex';

export default defineComponent({
  name: 'App',
  components: {
    IonApp,
    IonRouterOutlet,
    IonContent
  },
  setup() {
     const store = useStore();

    const isNative = computed(() => store.getters.isNative);
    window.addEventListener("resize", () => store.dispatch("setDevice"));
    return { isNative };
  }
});
</script>