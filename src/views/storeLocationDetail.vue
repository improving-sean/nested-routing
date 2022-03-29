<template>
<ion-page>
  <ion-grid itemtype="http://schema.org/Restaurant" class="ion-no-padding">
    <ion-toolbar mode="ios" color="white">
      <ion-button slot="end" @click="$emit('close')" fill="clear" color="medium" data-cy="button-close">
        <ion-icon slot="icon-only" :md="closeOutline" :ios="closeOutline" />
      </ion-button>

      <ion-title class="ion-text-center">{{cachedLocation.slug}}</ion-title>
    </ion-toolbar>
    <ion-row v-if="true" class="detail-map">
      <ion-col>
        <hereMap class="map" />
      </ion-col>
    </ion-row>

    <ion-row class="ion-padding-horizontal" v-if="true">
      <ion-col size="12">
        <div>Some information about the store</div>
      </ion-col>
      <ion-col class="ion-text-center" size="12">
        <div>a list of order types for the store</div>
      </ion-col>
    </ion-row>
    <ion-button
      color="primary"
      expand="full"
      class="ion-no-margin force-bottom full-width ion-text-capitalize"
      size="large"
      data-cy="button-pickup"
    >
      Pick up here
    </ion-button>
  </ion-grid>
</ion-page>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import { IonToolbar, IonTitle, IonGrid, IonRow, IonCol, IonIcon, IonButton, IonPage } from "@ionic/vue";
import hereMap from '@/components/hereMap.vue'
import { closeOutline } from "ionicons/icons";

export default defineComponent({
  components: { IonToolbar, IonTitle, IonGrid, IonRow, IonCol, IonIcon, IonButton, hereMap, IonPage },
  setup() {
    const cachedLocation = {
        "id": "37",
        "slug": "downtown-columbus",
        "name": "Downtown Columbus",
        "details": "<p>The Downtown Columbus restaurant is within walking distance of many businesses and conveniently located just off the COTA bus line. Positioned near the business district, they are able to serve and extremely diverse community and have proudly delivered clean, fun, fast and friendly service since 1992.</p>\r\n<p>&nbsp;</p>\r\n<p>Associates are proud to foster a culture grounded in teamwork and are led by veterans Saba and Brenda, who have been at the restaurant for 20 years and 18 years, respectively. Staff also participate together in community events such as those at the Columbus Commons, the Mayor&rsquo;s Bike Rides and the Columbus March of Dimes March for Babies. Additionally, the restaurant supports United Way and two women&rsquo;s rehabilitation centers, Rachel&rsquo;s House and Amethyst.</p>\r\n<p><strong><br /><br />Find Donatos Downtown on</strong></p>\r\n<p><a href=\"https://www.google.com/search?q=donatos+pizza+280+S+Grant+Ave%2C+Columbus%2C+OH+43215&amp;oq=donatos+pizza+280+S+Grant+Ave%2C+Columbus%2C+OH+43215&amp;gs_l=psy-ab.3..38.28681.28681.0.28840.1.1.0.0.0.0.96.96.1.1.0....0...1.2.64.psy-ab..0.1.95.izXGfNFoC-k#lrd=0x883888cbbc647057:0x31a8adac50f48c58,3,\" target=\"_blank\"><img src=\"https://files.donatos.com/2017/07/19/17441605_google-icon.svg\" alt=\"Google\" width=\"39\" height=\"40\" /></a> <a href=\"http://www.yelp.com/biz/donatos-pizza-columbus-13\" target=\"_blank\"><img style=\"margin-left: 5px;\" src=\"http://files.donatos.com/2016/01/07/LOGOS-02.svg\" alt=\"Yelp\" width=\"40\" height=\"40\" /></a> <a href=\"https://www.zomato.com/columbus-oh/donatos-pizza-11-columbus\" target=\"_blank\"><img style=\"margin-left: 5px;\" src=\"http://files.donatos.com/2016/01/07/LOGOS-06.svg\" alt=\"Zomato\" width=\"40\" height=\"40\" /></a> <a href=\"http://www.facebook.com/333515556833543\" target=\"_blank\"><img style=\"margin-left: 5px;\" src=\"http://files.donatos.com/2016/01/07/LOGOS-01.svg\" alt=\"Facebook\" width=\"40\" height=\"40\" /></a> <a href=\"http://www.tripadvisor.com/Restaurant_Review-g50226-d2706610-Reviews-Donatos_Pizza-Columbus_Ohio.html\" target=\"_blank\"><img style=\"margin-left: 5px;\" src=\"http://files.donatos.com/2016/01/07/LOGOS-04.svg\" alt=\"&ldquo;Trip\" width=\"40\" /></a> <a href=\"http://www.yellowpages.com/columbus-oh/mip/donatos-pizzeria-468651551?lid=468651551\" target=\"_blank\"><img style=\"margin-left: 5px;\" src=\"http://files.donatos.com/2016/01/07/LOGOS-05.svg\" alt=\"yp dot com\" width=\"40\" /></a></p>",
        "banner_image": "329",
        "address1": "280 South Grant Avenue",
        "address2": "",
        "city": "Columbus",
        "state": "OH",
        "zip": "43215",
        "phone": "6144642500",
        "refreshed": "2022-01-14 02:02:29",
        "latitude": "39.95752700",
        "longitude": "-82.98961100",
        "delivery_charge": "3.65",
        "yelp": "//www.yelp.com/biz/donatos-pizza-columbus-13",
        "time_zone": "-5",
        "dst_indicator": "0",
        "open": "1",
        "maxOrderDays": "14",
        "notes": null,
        "red_robin": "0",
        "has_loyalty": "1",
        "status": "PUBLISHED",
        "created": "2014-02-20 09:56:59",
        "created_by": null,
        "updated": "2022-01-14 02:02:29",
        "updated_by": "61",
        "logo": "3485",
        "stored_payments": "1",
        "pos": "3",
        "radius": 100,
        "distance": "0.00"
      }
    return {closeOutline, cachedLocation};
  },
});
</script>

<style scoped>
.map {
  min-height: 30vh;
  max-height: 30vh;
}
@media screen and (max-width: 960px) {
  .detail-map {
    margin-bottom: 16px;
  }
}
</style>
