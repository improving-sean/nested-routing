<template>
<ion-page>
  <locationSearch class="ion-hide-lg-down ion-margin-horizontal ion-margin-bottom" data-cy="desktop-search" />
  <div>
    <div v-for="location in sort(nearLocations)" :key="location.id" class="grey-highlight">
      <locationLineItem :storeLocation="location" clickable class="ion-padding-vertical ion-padding-start" />
      <ion-item-divider />
    </div>
  </div>
</ion-page>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import locationLineItem from "@/components/locationLineItem.vue";
import locationSearch from "@/components/locationSearch.vue"
import { IonItemDivider, IonPage } from "@ionic/vue";

export default defineComponent({
  components: { locationLineItem, IonItemDivider, locationSearch, IonPage },
  setup() {
    const sort = (locations: any[]) => locations.sort((a, b) => b.highlighted - a.highlighted);
    const skeleText: any[] = [{ width: 60, height: "15px" }, { width: 90 }, { width: 20, display: "inline-block" }];
    const nearLocations = [
      {
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
      },
      {
        "id": "1",
        "slug": "thurman-ave",
        "name": "Thurman Ave",
        "details": "<p>This is where it all began. In 1963, Ohio State University Sophomore Jim Grote bought a pizza place for just $1300, and decided he&rsquo;d build his business on three fundamentals: creating a superior product, hiring great people, and adhering to strong principles that promote goodwill in business and the community.</p>\r\n<p>&nbsp;</p>\r\n<p>Today, Donatos has grown to more than 150 restaurants, and the Thurman Avenue location is still running strong. John, a manager who&rsquo;s been with the company for 20 years, says high energy, positive attitude, and a positive atmosphere for Associates and customers alike are the ingredients that continue to make the Thurman Avenue Donatos a success.</p>\r\n<p>&nbsp;</p>\r\n<p>We are proud to support nearby Children&rsquo;s Hospital and Reeb Avenue Center. Come by the Thurman Ave location, and experience the history of Donatos!</p>\r\n<p><strong><br />Find Donatos Thurman Avenue on</strong></p>\r\n<p><a href=\"https://www.google.com/search?q=donatos+pizza+1000+Thurman+Ave%2C+Columbus%2C+OH+43206&amp;oq=donatos+pizza+1000+Thurman+Ave%2C+Columbus%2C+OH+43206&amp;gs_l=psy-ab.3..38.3783.3783.0.4051.1.1.0.0.0.0.96.96.1.1.0....0...1.2.64.psy-ab..0.1.95.Xz0zwcfE75k#lrd=0x883888991dc2289d:0xf29a153f0c8171e4,3,\" target=\"_blank\"><img src=\"https://files.donatos.com/2017/07/19/17441605_google-icon.svg\" alt=\"Google\" width=\"40\" height=\"40\" /></a> <a href=\"http://www.yelp.com/biz/donatos-pizza-columbus-4\" target=\"_blank\"><img style=\"margin-left: 5px;\" src=\"http://files.donatos.com/2016/01/07/LOGOS-02.svg\" alt=\"Yelp\" width=\"40\" height=\"40\" /></a> <a href=\"https://www.zomato.com/columbus-oh/donatos-pizza-columbus\" target=\"_blank\"><img style=\"margin-left: 5px;\" src=\"http://files.donatos.com/2016/01/07/LOGOS-06.svg\" alt=\"Zomato\" width=\"40\" height=\"40\" /></a> <a href=\"http://www.facebook.com/490437934429752\" target=\"_blank\"><img style=\"margin-left: 5px;\" src=\"http://files.donatos.com/2016/01/07/LOGOS-01.svg\" alt=\"Facebook\" width=\"40\" height=\"40\" /></a> <a href=\"http://www.tripadvisor.com/Restaurant_Review-g50226-d4659285-Reviews-Donatos_Pizza-Columbus_Ohio.html\" target=\"_blank\"><img style=\"margin-left: 5px;\" src=\"http://files.donatos.com/2016/01/07/LOGOS-04.svg\" alt=\"&ldquo;Trip\" width=\"40\" /></a> <a href=\"http://www.yellowpages.com/columbus-oh/mip/donatos-pizzeria-468651582?lid=468651582\" target=\"_blank\"><img style=\"margin-left: 5px;\" src=\"http://files.donatos.com/2016/01/07/LOGOS-05.svg\" alt=\"yp dot com\" width=\"40\" /></a></p>",
        "banner_image": "329",
        "address1": "1000 Thurman Avenue",
        "address2": "",
        "city": "Columbus",
        "state": "OH",
        "zip": "43206",
        "phone": "6144446823",
        "refreshed": "2022-01-14 02:00:07",
        "latitude": "39.93902600",
        "longitude": "-82.96888200",
        "delivery_charge": "3.65",
        "yelp": "//www.yelp.com/biz/donatos-pizza-columbus-4",
        "time_zone": "-5",
        "dst_indicator": "0",
        "open": "1",
        "maxOrderDays": "14",
        "notes": null,
        "red_robin": "0",
        "has_loyalty": "1",
        "status": "PUBLISHED",
        "created": "2014-02-20 09:51:16",
        "created_by": null,
        "updated": "2022-01-14 02:00:07",
        "updated_by": "147",
        "logo": "3485",
        "stored_payments": "1",
        "pos": "3",
        "radius": 100,
        "distance": "1.68"
      },
      {
        "id": "65",
        "slug": "short-north-first-and-high",
        "name": "Short North (First And High)",
        "details": "<p><strong>Passion. Creativity. Responsibility. Those are the ingredients we use.</strong></p>\r\n<p>We're excited to have a home in the vibrant Short North Arts District. This Donatos is unique in Columbus, as it features craft beers, <a href=\"http://www.donatos.com/snschedule\">live music</a>, and special <a href=\"http://www.donatos.com/menu?location=65\">menu items</a> not available anywhere else in Columbus!</p>\r\n<p>Swing by and enjoy a Hot Chicken, Sriracha Jack or Skinny Pizza! We have vegan and gluten-free options too.</p>\r\n<p>Check out our great selection of local craft beers and handcrafted cocktails at the <a href=\"http://www.blackbrickbar.com\" target=\"_blank\">Black Brick &raquo;</a></p>\r\n<p>Same Donatos. New expression. Stop by and visit!</p>\r\n<p><strong><br />Find Donatos Short North on</strong></p>\r\n<p><a href=\"https://www.google.com/search?q=donatos+pizza+920+N+High+St%2C+Columbus%2C+OH+43201&amp;oq=donatos+pizza+920+N+High+St%2C+Columbus%2C+OH+43201&amp;gs_l=psy-ab.3..38.20163.20163.0.20417.1.1.0.0.0.0.91.91.1.1.0....0...1.2.64.psy-ab..0.1.90.gi6j7yCDzL0#lrd=0x88388eda07ca6d17:0xf610fa3c0a67e1c0,3,\" target=\"_blank\"><img src=\"https://files.donatos.com/2017/07/19/17441605_google-icon.svg\" alt=\"Google\" width=\"39\" height=\"40\" /></a> <a href=\"http://www.yelp.com/biz/donatos-pizza-columbus-18\" target=\"_blank\"><img style=\"margin-left: 5px;\" src=\"http://files.donatos.com/2016/01/07/LOGOS-02.svg\" alt=\"Yelp\" width=\"40\" height=\"40\" /></a> <a href=\"https://www.zomato.com/columbus-oh/donatos-pizza-25-columbus\" target=\"_blank\"><img style=\"margin-left: 5px;\" src=\"http://files.donatos.com/2016/01/07/LOGOS-06.svg\" alt=\"Zomato\" width=\"40\" height=\"40\" /></a> <a href=\"http://www.facebook.com/643296085789482\" target=\"_blank\"><img style=\"margin-left: 5px;\" src=\"http://files.donatos.com/2016/01/07/LOGOS-01.svg\" alt=\"Facebook\" width=\"40\" height=\"40\" /></a> <a href=\"http://www.tripadvisor.com/Restaurant_Review-g50226-d4761960-Reviews-Donatos_Pizza-Columbus_Ohio.html\" target=\"_blank\"><img style=\"margin-left: 5px;\" src=\"http://files.donatos.com/2016/01/07/LOGOS-04.svg\" alt=\"&ldquo;Trip\" width=\"40\" /></a> <a href=\"http://www.yellowpages.com/columbus-oh/mip/donatos-pizzeria-473835785?lid=473835785\" target=\"_blank\"><img style=\"margin-left: 5px;\" src=\"http://files.donatos.com/2016/01/07/LOGOS-05.svg\" alt=\"yp dot com\" width=\"40\" /></a></p>\r\n<p><iframe style=\"border: 0;\" src=\"https://www.google.com/maps/embed?pb=!1m0!3m2!1sen!2sus!4v1466437898784!6m8!1m7!1szIq_uK1trIMAAAQvPAUBUA!2m2!1d39.98122502968373!2d-83.0042384349336!3f51!4f0!5f0.7820865974627469\" width=\"600\" height=\"450\" frameborder=\"0\" allowfullscreen=\"\"></iframe></p>",
        "banner_image": "329",
        "address1": "920 N. High Street",
        "address2": "",
        "city": "Columbus",
        "state": "OH",
        "zip": "43201",
        "phone": "6144215100",
        "refreshed": "2022-01-14 02:09:25",
        "latitude": "39.98114200",
        "longitude": "-83.00391600",
        "delivery_charge": "3.99",
        "yelp": "//www.yelp.com/biz/donatos-pizza-columbus-18",
        "time_zone": "-5",
        "dst_indicator": "0",
        "open": "1",
        "maxOrderDays": "14",
        "notes": null,
        "red_robin": "0",
        "has_loyalty": "1",
        "status": "PUBLISHED",
        "created": "2014-02-06 23:40:22",
        "created_by": null,
        "updated": "2022-01-14 02:09:25",
        "updated_by": "61",
        "logo": "3485",
        "stored_payments": "1",
        "pos": "3",
        "radius": 100,
        "distance": "1.80"
      },
      {
        "id": "5",
        "slug": "osu-campus",
        "name": "OSU Campus",
        "details": "<p>You may recognize the Donatos on OSU campus from Season 5 of the CBS show <em><a href=\"/cbs.com/shows/undercover_boss/video/0B540B26-8D1D-77C0-766D-A544E105EFFC/undercover-boss-donatos/\" target=\"_blank\">Undercover Boss</a></em>!</p>\r\n<p><img src=\"http://files.donatos.com/2016/06/06/Screen-Shot-2016-06-06-at-1.59.01-PM.jpg\" alt=\"\" width=\"377\" height=\"196\" /></p>\r\n<p>Open since 1978, this Donatos sits directly on High Street and boasting a full bar venue and party room, this restaurant is a popular spot to watch the game. The restaurant supports Ohio State athletic teams and the Columbus Crew, and often keeps both well fed.</p>\r\n<p>If you prefer your pizza delivered, rest assured it&rsquo;s in good hands: Chris has been a driver for 26 years.</p>\r\n<p>Donatos Campus location also hosts live music in Donatos Basement! If you're interested in playing there, hit us up at&nbsp;<a href=\"mailto:Donatosbasementbooking@gmail.com\" target=\"_blank\">Donatosbasementbooking@gmail.com</a></p>\r\n<p><strong><br /><br />Find Donatos OSU Campus on</strong></p>\r\n<p><a href=\"https://www.google.com/search?q=donatos+pizza+2084+N+High+St%2C+Columbus%2C+OH+43201&amp;oq=donatos+pizza+2084+N+High+St%2C+Columbus%2C+OH+43201&amp;gs_l=psy-ab.3..38.20779.20779.0.21080.1.1.0.0.0.0.257.257.2-1.1.0....0...1.2.64.psy-ab..0.1.257.bO__r3X-ajM#lrd=0x88388ebb6716802d:0x3906ee5c40aae8d1,3,\" target=\"_blank\"><img src=\"https://files.donatos.com/2017/07/19/17441605_google-icon.svg\" alt=\"Google\" width=\"39\" height=\"40\" /></a> <a href=\"http://www.yelp.com/biz/donatos-pizza-columbus-10\" target=\"_blank\"><img style=\"margin-left: 5px;\" src=\"http://files.donatos.com/2016/01/07/LOGOS-02.svg\" alt=\"Yelp\" width=\"40\" height=\"40\" /></a> <a href=\"https://www.zomato.com/columbus-oh/donatos-pizza-pub-columbus\" target=\"_blank\"><img style=\"margin-left: 5px;\" src=\"http://files.donatos.com/2016/01/07/LOGOS-06.svg\" alt=\"Zomato\" width=\"40\" height=\"40\" /></a> <a href=\"http://www.facebook.com/207697086081687\" target=\"_blank\"><img style=\"margin-left: 5px;\" src=\"http://files.donatos.com/2016/01/07/LOGOS-01.svg\" alt=\"Facebook\" width=\"40\" height=\"40\" /></a> <a href=\"http://www.tripadvisor.com/Restaurant_Review-g50226-d512672-Reviews-Donatos_Pizzeria_on_High-Columbus_Ohio.html\" target=\"_blank\"><img style=\"margin-left: 5px;\" src=\"http://files.donatos.com/2016/01/07/LOGOS-04.svg\" alt=\"?Trip\" width=\"40\" /></a> <a href=\"http://www.yellowpages.com/columbus-oh/mip/donatos-pizzeria-30309668?lid=30309668target=\"><img style=\"margin-left: 5px;\" src=\"http://files.donatos.com/2016/01/07/LOGOS-05.svg\" alt=\"yp dot com\" width=\"40\" /></a></p>",
        "banner_image": "329",
        "address1": "2084 N. High Street",
        "address2": "",
        "city": "Columbus",
        "state": "OH",
        "zip": "43201",
        "phone": "6142945371",
        "refreshed": "2022-01-14 02:02:18",
        "latitude": "40.00484400",
        "longitude": "-83.00867300",
        "delivery_charge": "3.65",
        "yelp": "//www.yelp.com/biz/donatos-pizza-columbus-10",
        "time_zone": "-5",
        "dst_indicator": "0",
        "open": "1",
        "maxOrderDays": "14",
        "notes": "<p>\n\n<svg version=\"1.1\" id=\"Layer_1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\"\n\t viewBox=\"0 0 50 50\" style=\"enable-background:new 0 0 50 50;\" xml:space=\"preserve\">\n<title>Party Room Icon</title>\n<g>\n\t<path d=\"M44.8,24.5c-0.2-0.7-0.6-1.3-1.2-1.7c-1.7-1-4.4-0.2-4.5-0.2l-4.5,1.5c-1.3-1.7-2.9-3.5-4.5-5.2l4.9-4.9\n\t\tc0.1-0.1,2.3-2.5,2.1-4.7c-0.1-0.8-0.4-1.5-1-2.1c-0.7-0.7-1.5-1-2.5-1c-1,0-1.8,0.4-2.5,1c-0.5,0.5-0.9,1.2-1,1.9L30,9.6l1,0.2\n\t\tl0.1-0.5c0.1-0.5,0.3-1,0.7-1.3c0.5-0.5,1.1-0.7,1.8-0.7c0,0,0,0,0,0c0.7,0,1.3,0.3,1.8,0.8c0.4,0.4,0.7,0.8,0.7,1.4\n\t\tc0.1,1.8-1.9,3.9-1.9,3.9l-4.9,4.9c-2.2-2.2-4.4-4-6.5-5.4L24.4,8c0-0.1,0.8-2.8-0.2-4.5c-0.4-0.6-0.9-1.1-1.6-1.2\n\t\tc-1.6-0.6-3.4,0.2-3.9,1.8c-0.2,0.6-0.2,1.4,0,2l0.2,0.5l0.9-0.3l-0.2-0.5c-0.1-0.4-0.1-0.9,0-1.4c0.4-1.1,1.6-1.6,2.7-1.2\n\t\tc0.5,0.1,0.8,0.4,1,0.8c0.8,1.3,0.1,3.7,0.1,3.7l-1.5,4.5c-2.2-1.4-4.2-2.2-5.5-2.2c0,0,0,0,0,0c-0.7,0-1.3,0.2-1.7,0.6\n\t\tc-0.4,0.4-0.6,1-0.6,1.6l-0.1,0L0.2,48.2l35.9-13.9l0,0c0.6,0,1.2-0.2,1.5-0.6c1.5-1.5,0.1-4.9-2.5-8.6l4.2-1.4\n\t\tc0,0,2.4-0.7,3.7,0.1c0.4,0.2,0.6,0.6,0.8,1.1c0.4,1.1-0.2,2.3-1.2,2.6c-0.4,0.2-0.9,0.2-1.3,0l-0.5-0.2l-0.3,1l0.5,0.2\n\t\tc0.3,0.1,0.6,0.1,0.9,0.1c0.4,0,0.7-0.1,1.1-0.2C44.5,27.8,45.3,26,44.8,24.5z M20.5,23.3v16l-5.6,2.2l-0.6-27l0.1-0.4\n\t\tC15.2,16.6,17.6,20,20.5,23.3z M27.1,29.6l0,7.1L21.2,39V24.1c0.5,0.5,1,1,1.5,1.5C24.1,27.1,25.6,28.5,27.1,29.6z M14.1,41.7\n\t\tL8,44.1V30.8l5.6-14.5L14.1,41.7z M7.2,32.7v11.7l-5.3,2L7.2,32.7z M27.8,36.4l0-6.2c2.4,1.8,4.7,3.2,6.5,3.7L27.8,36.4z M37,33\n\t\tL37,33c-0.2,0.2-0.5,0.3-0.9,0.3c0,0,0,0,0,0c-2.6,0-7.8-3.4-12.6-8.3c-6.3-6.4-9.3-12.3-8-13.6c0.2-0.2,0.5-0.3,0.9-0.3\n\t\tc0,0,0,0,0,0c1.2,0,3.1,0.8,5.2,2.2l-1.3,4l0.9,0.3l1.2-3.7c1.9,1.3,4.1,3.1,6.1,5.2l-2.5,2.5l0.7,0.7l2.5-2.5\n\t\tc1.6,1.7,3.1,3.3,4.2,4.9l-4,1.3l0.3,0.9l4.3-1.4C36.8,29.1,37.8,32.1,37,33z\"/>\n\t<g>\n\t\t<polygon points=\"41.4,19.3 37,18.1 38.6,15.7 43.1,16.9 \t\t\"/>\n\t</g>\n\t<g>\n\t\t<rect x=\"27.2\" y=\"2.6\" transform=\"matrix(0.9954 -9.533253e-02 9.533253e-02 0.9954 -0.2709 2.6898)\" width=\"1.7\" height=\"3.3\"/>\n\t</g>\n\t<g>\n\t\t<rect x=\"42.5\" y=\"30\" transform=\"matrix(0.2739 -0.9618 0.9618 0.2739 1.1121 64.6429)\" width=\"1.7\" height=\"3.3\"/>\n\t</g>\n\t<g>\n\t\t<path d=\"M27,12.5c-0.5,0-1-0.2-1.4-0.7c-0.3-0.4-0.4-0.8-0.4-1.3c0.1-0.5,0.3-0.9,0.6-1.1c0.7-0.6,1.8-0.5,2.4,0.3\n\t\t\tc0.6,0.7,0.5,1.8-0.3,2.4l0,0C27.8,12.3,27.4,12.5,27,12.5z M27.5,11.3l0.3,0.4L27.5,11.3c0.3-0.3,0.4-0.7,0.1-1\n\t\t\tc-0.2-0.3-0.7-0.4-1-0.1c-0.2,0.1-0.2,0.3-0.3,0.5c0,0.2,0,0.4,0.1,0.5C26.7,11.5,27.2,11.6,27.5,11.3L27.5,11.3z\"/>\n\t</g>\n\t<g>\n\t\t<path d=\"M47.6,30.7c-0.4,0-0.9-0.2-1.2-0.5c-0.7-0.7-0.7-1.7-0.1-2.4c0.1-0.1,0.3-0.2,0.4-0.3c0.7-0.5,1.8-0.4,2.3,0.3\n\t\t\tc0.3,0.4,0.4,0.8,0.4,1.3c-0.1,0.5-0.3,0.9-0.6,1.2l-0.2,0.1C48.4,30.5,48,30.7,47.6,30.7C47.6,30.7,47.6,30.7,47.6,30.7z\n\t\t\t M47.8,28.1c-0.2,0-0.3,0.1-0.4,0.2c-0.1,0.1-0.2,0.1-0.2,0.2c-0.3,0.3-0.3,0.7,0,1c0.1,0.1,0.3,0.2,0.5,0.2\n\t\t\tc0.2,0,0.4-0.1,0.5-0.2l0.2-0.2c0.1-0.1,0.1-0.2,0.2-0.4c0-0.2,0-0.4-0.2-0.5C48.2,28.2,48,28.1,47.8,28.1z\"/>\n\t</g>\n</g>\n</svg>\nParty Room\n</p>",
        "red_robin": "0",
        "has_loyalty": "1",
        "status": "PUBLISHED",
        "created": "2014-02-20 09:51:53",
        "created_by": null,
        "updated": "2022-01-14 02:02:18",
        "updated_by": "61",
        "logo": "3485",
        "stored_payments": "1",
        "pos": "3",
        "radius": 100,
        "distance": "3.42"
      },
      {
        "id": "258",
        "slug": "bexley",
        "name": "Bexley",
        "details": "<p>From the beginning in 1963, Jim Grote built Donatos on three fundamentals: creating a superior product, hiring great people, and adhering to strong principles that promote goodwill in business and the community. His philosophy was simple and powerfully successful: \"To make the best pizza and treat others the way I would like to be treated.\"<br /><br />Today, our family-owned company remains a pizza favorite. Working with his daughter, Donatos Chairwoman Jane Grote Abell, Jim remains a guiding influence at Donatos. Jim's generosity is about more than our ample pizza toppings, the Edge-to-Edge(R) mantra we're known for. It's also evident in the way we care about serving our customers the very best pizza, the way we treat our associates like family and the way we always strive to be a good neighbor to everyone in Bexley.</p>\r\n<p><strong><br /><br />Find Donatos Bexley on</strong></p>\r\n<p><a href=\"https://www.google.com/search?site=&amp;source=hp&amp;q=donatos+pizza+2800+E+Main+St%2C+Columbus%2C+OH+43209&amp;oq=donatos+pizza+2800+E+Main+St%2C+Columbus%2C+OH+43209&amp;gs_l=psy-ab.3..38.703.6239.0.7100.16.14.0.0.0.0.136.1104.8j4.12.0....0...1.1.64.psy-ab..4.12.1103.0..35i39k1j0i67k1j0i131k1j0i20k1.ZU0PTKZ4xAs#lrd=0x8838883965071fe3:0xf1da061cead0f47b,3,\" target=\"_blank\"><img src=\"https://files.donatos.com/2017/07/19/17441605_google-icon.svg\" alt=\"Google\" width=\"39\" height=\"40\" /></a> <a href=\"http://www.yelp.com/biz/donatos-pizza-columbus-12\" target=\"_blank\"><img style=\"margin-left: 5px;\" src=\"http://files.donatos.com/2016/01/07/LOGOS-02.svg\" alt=\"Yelp\" width=\"40\" height=\"40\" /></a> <a href=\"https://www.zomato.com/columbus-oh/donatos-pizza-12-columbus\" target=\"_blank\"><img style=\"margin-left: 5px;\" src=\"http://files.donatos.com/2016/01/07/LOGOS-06.svg\" alt=\"Zomato\" width=\"40\" height=\"40\" /></a> <a href=\"http://www.facebook.com/1592525860976043\" target=\"_blank\"><img style=\"margin-left: 5px;\" src=\"http://files.donatos.com/2016/01/07/LOGOS-01.svg\" alt=\"Facebook\" width=\"40\" height=\"40\" /></a> <a href=\"http://www.tripadvisor.com/Restaurant_Review-g50226-d4464252-Reviews-Donatos_Pizza-Columbus_Ohio.html\" target=\"_blank\"><img style=\"margin-left: 5px;\" src=\"http://files.donatos.com/2016/01/07/LOGOS-04.svg\" alt=\"&ldquo;Trip\" width=\"40\" /></a> <a href=\"http://www.yellowpages.com/columbus-oh/mip/donatos-pizzeria-4428502?lid=4428502\" target=\"_blank\"><img style=\"margin-left: 5px;\" src=\"http://files.donatos.com/2016/01/07/LOGOS-05.svg\" alt=\"yp dot com\" width=\"40\" /></a></p>",
        "banner_image": "329",
        "address1": "2800 East Main Street",
        "address2": "",
        "city": "Columbus",
        "state": "OH",
        "zip": "43209",
        "phone": "6142354477",
        "refreshed": "2022-01-14 02:03:13",
        "latitude": "39.95686400",
        "longitude": "-82.92372900",
        "delivery_charge": "3.65",
        "yelp": "//www.yelp.com/biz/donatos-pizza-columbus-12",
        "time_zone": "-5",
        "dst_indicator": "0",
        "open": "1",
        "maxOrderDays": "14",
        "notes": "<p>\n\n<svg version=\"1.1\" id=\"Layer_1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\"\n\t viewBox=\"0 0 50 50\" style=\"enable-background:new 0 0 50 50;\" xml:space=\"preserve\">\n<title>Party Room Icon</title>\n<g>\n\t<path d=\"M44.8,24.5c-0.2-0.7-0.6-1.3-1.2-1.7c-1.7-1-4.4-0.2-4.5-0.2l-4.5,1.5c-1.3-1.7-2.9-3.5-4.5-5.2l4.9-4.9\n\t\tc0.1-0.1,2.3-2.5,2.1-4.7c-0.1-0.8-0.4-1.5-1-2.1c-0.7-0.7-1.5-1-2.5-1c-1,0-1.8,0.4-2.5,1c-0.5,0.5-0.9,1.2-1,1.9L30,9.6l1,0.2\n\t\tl0.1-0.5c0.1-0.5,0.3-1,0.7-1.3c0.5-0.5,1.1-0.7,1.8-0.7c0,0,0,0,0,0c0.7,0,1.3,0.3,1.8,0.8c0.4,0.4,0.7,0.8,0.7,1.4\n\t\tc0.1,1.8-1.9,3.9-1.9,3.9l-4.9,4.9c-2.2-2.2-4.4-4-6.5-5.4L24.4,8c0-0.1,0.8-2.8-0.2-4.5c-0.4-0.6-0.9-1.1-1.6-1.2\n\t\tc-1.6-0.6-3.4,0.2-3.9,1.8c-0.2,0.6-0.2,1.4,0,2l0.2,0.5l0.9-0.3l-0.2-0.5c-0.1-0.4-0.1-0.9,0-1.4c0.4-1.1,1.6-1.6,2.7-1.2\n\t\tc0.5,0.1,0.8,0.4,1,0.8c0.8,1.3,0.1,3.7,0.1,3.7l-1.5,4.5c-2.2-1.4-4.2-2.2-5.5-2.2c0,0,0,0,0,0c-0.7,0-1.3,0.2-1.7,0.6\n\t\tc-0.4,0.4-0.6,1-0.6,1.6l-0.1,0L0.2,48.2l35.9-13.9l0,0c0.6,0,1.2-0.2,1.5-0.6c1.5-1.5,0.1-4.9-2.5-8.6l4.2-1.4\n\t\tc0,0,2.4-0.7,3.7,0.1c0.4,0.2,0.6,0.6,0.8,1.1c0.4,1.1-0.2,2.3-1.2,2.6c-0.4,0.2-0.9,0.2-1.3,0l-0.5-0.2l-0.3,1l0.5,0.2\n\t\tc0.3,0.1,0.6,0.1,0.9,0.1c0.4,0,0.7-0.1,1.1-0.2C44.5,27.8,45.3,26,44.8,24.5z M20.5,23.3v16l-5.6,2.2l-0.6-27l0.1-0.4\n\t\tC15.2,16.6,17.6,20,20.5,23.3z M27.1,29.6l0,7.1L21.2,39V24.1c0.5,0.5,1,1,1.5,1.5C24.1,27.1,25.6,28.5,27.1,29.6z M14.1,41.7\n\t\tL8,44.1V30.8l5.6-14.5L14.1,41.7z M7.2,32.7v11.7l-5.3,2L7.2,32.7z M27.8,36.4l0-6.2c2.4,1.8,4.7,3.2,6.5,3.7L27.8,36.4z M37,33\n\t\tL37,33c-0.2,0.2-0.5,0.3-0.9,0.3c0,0,0,0,0,0c-2.6,0-7.8-3.4-12.6-8.3c-6.3-6.4-9.3-12.3-8-13.6c0.2-0.2,0.5-0.3,0.9-0.3\n\t\tc0,0,0,0,0,0c1.2,0,3.1,0.8,5.2,2.2l-1.3,4l0.9,0.3l1.2-3.7c1.9,1.3,4.1,3.1,6.1,5.2l-2.5,2.5l0.7,0.7l2.5-2.5\n\t\tc1.6,1.7,3.1,3.3,4.2,4.9l-4,1.3l0.3,0.9l4.3-1.4C36.8,29.1,37.8,32.1,37,33z\"/>\n\t<g>\n\t\t<polygon points=\"41.4,19.3 37,18.1 38.6,15.7 43.1,16.9 \t\t\"/>\n\t</g>\n\t<g>\n\t\t<rect x=\"27.2\" y=\"2.6\" transform=\"matrix(0.9954 -9.533253e-02 9.533253e-02 0.9954 -0.2709 2.6898)\" width=\"1.7\" height=\"3.3\"/>\n\t</g>\n\t<g>\n\t\t<rect x=\"42.5\" y=\"30\" transform=\"matrix(0.2739 -0.9618 0.9618 0.2739 1.1121 64.6429)\" width=\"1.7\" height=\"3.3\"/>\n\t</g>\n\t<g>\n\t\t<path d=\"M27,12.5c-0.5,0-1-0.2-1.4-0.7c-0.3-0.4-0.4-0.8-0.4-1.3c0.1-0.5,0.3-0.9,0.6-1.1c0.7-0.6,1.8-0.5,2.4,0.3\n\t\t\tc0.6,0.7,0.5,1.8-0.3,2.4l0,0C27.8,12.3,27.4,12.5,27,12.5z M27.5,11.3l0.3,0.4L27.5,11.3c0.3-0.3,0.4-0.7,0.1-1\n\t\t\tc-0.2-0.3-0.7-0.4-1-0.1c-0.2,0.1-0.2,0.3-0.3,0.5c0,0.2,0,0.4,0.1,0.5C26.7,11.5,27.2,11.6,27.5,11.3L27.5,11.3z\"/>\n\t</g>\n\t<g>\n\t\t<path d=\"M47.6,30.7c-0.4,0-0.9-0.2-1.2-0.5c-0.7-0.7-0.7-1.7-0.1-2.4c0.1-0.1,0.3-0.2,0.4-0.3c0.7-0.5,1.8-0.4,2.3,0.3\n\t\t\tc0.3,0.4,0.4,0.8,0.4,1.3c-0.1,0.5-0.3,0.9-0.6,1.2l-0.2,0.1C48.4,30.5,48,30.7,47.6,30.7C47.6,30.7,47.6,30.7,47.6,30.7z\n\t\t\t M47.8,28.1c-0.2,0-0.3,0.1-0.4,0.2c-0.1,0.1-0.2,0.1-0.2,0.2c-0.3,0.3-0.3,0.7,0,1c0.1,0.1,0.3,0.2,0.5,0.2\n\t\t\tc0.2,0,0.4-0.1,0.5-0.2l0.2-0.2c0.1-0.1,0.1-0.2,0.2-0.4c0-0.2,0-0.4-0.2-0.5C48.2,28.2,48,28.1,47.8,28.1z\"/>\n\t</g>\n</g>\n</svg>\nParty Room\n</p>",
        "red_robin": "0",
        "has_loyalty": "1",
        "status": "PUBLISHED",
        "created": "2014-02-20 10:12:09",
        "created_by": null,
        "updated": "2022-01-14 02:03:13",
        "updated_by": "61",
        "logo": "3485",
        "stored_payments": "1",
        "pos": "3",
        "radius": 100,
        "distance": "3.48"
      }
    ]

    return {
      nearLocations,
      sort,
      skeleText,
    };
  },
});
</script>

<style scoped>
.grey-highlight:hover {
  background-color: var(--ion-color-light);
}
</style>
