import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';

const routes: Array<RouteRecordRaw> = [
  { 
    path: "/",
    redirect: "location"
  },
  {
    path: "/location",
    name: "Locations",
    meta: {
      title: "Find a nearby Donatos",
      description: "",
      hideFooter: true,
    },
    component: () => import("@/views/locationsPage.vue"),
    children: [
      {
        path: "/location",
        name: "Pickup",
        component: () => import("@/views/storeLocationList.vue"),
      },
      {
        path: "/location/:slug",
        name: "Location Detail",
        component: () => import("@/components/modals/storeLocationDetailModal.vue"),
        props: true,
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
