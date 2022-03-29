<template>
  <ion-page>
    <ion-grid>

      <!-- MOBILE VIEW -->
      <ion-row class="ion-justify-content-between ion-padding" v-if="isMobile">
          <ion-segment :value="orderType" mode="md" class="ion-padding-bottom" @ionChange="orderTypeChanged($event)" v-if="!isDetailPage">
            <ion-segment-button value="Pickup" > <ion-label>PickUp</ion-label> </ion-segment-button>
            <ion-segment-button value="Delivery" > <ion-label>Delivery</ion-label> </ion-segment-button>
          </ion-segment>

        <!-- TODO: Figure out why ion-router-outlet is wonky -->
        <ion-col size="12" class="radius ion-no-padding action-col" style="min-height: 87vh">
          <ion-router-outlet v-if="!isDelivery || isDetailPage" />
          <locationDelivery v-else />
        </ion-col>

        <ion-col size="12" class="map-col" v-if="!isDelivery">
          <hereMap class="map" />
        </ion-col>
      </ion-row>

      <!-- DESKTOP VIEW -->
      <ion-row class="ion-justify-content-between ion-padding" v-else>
        <ion-col size="12" size-lg="4" size-xl="3" class="radius ion-no-padding action-col" style="overscroll-behavior: none">
          <ion-segment :value="orderType" mode="md" class="ion-padding-bottom"  @ionChange="orderTypeChanged($event)" v-if="!isDetailPage">
            <ion-segment-button value="Pickup" > <ion-label>PickUp</ion-label> </ion-segment-button>
            <ion-segment-button value="Delivery" > <ion-label>Delivery</ion-label> </ion-segment-button>
          </ion-segment>

          <!-- TODO: Figure out why ion-router-outlet is wonky -->
          <ion-router-outlet v-if="!isDelivery || isDetailPage" />
          <locationDelivery v-else />
        </ion-col>

        <ion-col size="12" size-lg="8" size-xl="9" class="map-col"> 
          <hereMap class="map" /> 
        </ion-col>
      </ion-row>

    </ion-grid>
  </ion-page>
</template>

<script lang="ts">
import { IonPage, IonGrid, IonRow, IonCol, IonLabel, IonSegmentButton, IonSegment, IonRouterOutlet } from "@ionic/vue";
import locationDelivery from '@/components/locationDelivery.vue'
import { defineComponent, computed } from "vue";
import { useStore } from "vuex";
import hereMap from '@/components/hereMap.vue'


export default defineComponent({
  components: {  
    IonRow, 
    IonCol, 
    IonLabel, 
    IonSegmentButton, 
    IonSegment, 
    locationDelivery, 
    hereMap, 
    IonRouterOutlet,
    IonPage,
    IonGrid,
  },
  setup() {
    const store = useStore();
    const isMobile = computed(() => store.getters.isMobile);
    return { isMobile }
  },
  data() {
    return {
      orderType: "Pickup",
    }
  },
  methods: {
    orderTypeChanged(e: any) { this.orderType = e.detail.value },
  },
  computed: {
    isDetailPage(): boolean { return this.$router.currentRoute.value.name === "Location Detail"; },
    isDelivery(): boolean { return this.orderType == "Delivery" }
  } 
});
</script>

<style scoped>
ion-col {
  min-height: 90vh;
  max-height: 90vh;
  overflow-y: scroll;
}
.map-col {
  background: transparent;
  padding: 0 0 0 16px;
}
.map {
  overflow: hidden;
}

.radius {
  background: white;
  border-radius: 6px;
}

#main-content {
  --background: white;
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
}

@media screen and (max-width: 960px) {
  ion-col {
    max-height: unset;
  }
  ion-grid {
    padding: 0;
  }
  .action-col {
    order: 2;
  }
  .radius {
    border-radius: 0;
  }
  .map-col {
    padding: 0;
    min-height: 35vh;
    max-height: 35vh;
    box-shadow: inset 0 2px 4px -1px rgba(0, 0, 0, 0.2), 0 4px 5px 0 rgba(0, 0, 0, 0.14), 0 1px 10px 0 rgba(0, 0, 0, 0.12) !important;
  }
  ion-row {
    padding: 0;
  }
  .map-search {
    position: absolute;
    padding: 10px 30px;
    width: 100%;
  }
}
</style>
