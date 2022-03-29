<template>
  <ion-grid
    @click="select()"
    class="ion-no-padding location-info"
    :class="{ clickable: clickable }"
    :data-cy="'location-' + storeLocation.slug"
  >

    <ion-row class="ion-justify-contents-between">
      <ion-col v-if="storeLocation?.name" data-cy="location-name">
        <h1 class="ion-no-margin" v-if="detail">{{ storeLocation.name }}</h1>
        <h5 class="ion-no-margin" v-else>{{ storeLocation.name }}</h5>
      </ion-col>
      <ion-col v-if="storeLocation?.distance && detail" size="2">
        {{ storeLocation.distance ? storeLocation.distance + "mi" : "" }}
      </ion-col>
    </ion-row>

    <ion-row>
      <ion-col>
        <div>Address Display</div>
        <a class="small bold" data-cy="location-phone">Phone Number</a>
      </ion-col>
    </ion-row>

    <ion-row class="ion-text-start ion-align-items-center simple-row ion-justify-content-between color-dark" v-if="!detail">
      <ion-col class="small" v-if="storeLocation?.distance || storeLocation?.distance === 0">
        <span> {{ storeLocation.distance ? storeLocation.distance + "mi" : "0.00" }} | </span>

        <div>Store Hours</div>
      </ion-col>
    </ion-row>

    <ion-row v-else class="ion-margin-vertical">
      <ion-item-divider />
      <ion-skeleton-text style="width: 50%; margin: 20px 0" />
      <ion-item-divider />
    </ion-row>
  </ion-grid>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import { IonGrid, IonRow, IonCol, IonItemDivider, IonSkeletonText } from "@ionic/vue";
import { useRouter } from "vue-router";

export default defineComponent({
  props: {
    storeLocation: {
      type: Object as PropType<any>,
      required: true,
    },
    locationStatus: {
      type: Object as PropType<any>,
    },
    clickable: Boolean,
    detail: Boolean,
  },
  components: { IonGrid, IonRow, IonCol, IonItemDivider, IonSkeletonText },
  setup(props) {
    const router = useRouter();

    const select = () => {
      if (props.clickable && props.storeLocation) {
        router.push(`/location/${props.storeLocation?.slug}`);
      }
    };
    return { select };
  },
});
</script>

<style scoped>
.clickable:hover {
  cursor: pointer;
}
h1 {
  font-size: 18px;
  font-weight: bold;
  color: black;
  margin-bottom: 8px;
}
</style>
