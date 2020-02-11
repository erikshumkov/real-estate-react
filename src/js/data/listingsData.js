import apartment from '../../img/apartment.jpg';
import apartment2 from '../../img/apartment2.jpg';
import apartment3 from '../../img/apartment3.jpg';
import apartment4 from '../../img/apartment4.jpg';
import apartment5 from '../../img/apartment5.jpg';
import apartment6 from '../../img/apartment6.jpg';
import apartment7 from '../../img/apartment7.jpg';
import apartment8 from '../../img/apartment8.jpg';
import apartment9 from '../../img/apartment9.jpg';
import apartment10 from '../../img/apartment10.jpg';
import apartment11 from '../../img/apartment11.jpg';
import apartment12 from '../../img/apartment12.jpg';
import apartment13 from '../../img/apartment13.jpg';
import apartment14 from '../../img/apartment14.jpg';
import apartment15 from '../../img/apartment15.jpg';
import apartment16 from '../../img/apartment16.jpg';
import fritidshus from '../../img/fritidshus.jpg';
import radhus from '../../img/radhus.jpg';
import radhus2 from '../../img/radhus2.jpg';
import radhus3 from '../../img/radhus3.jpg';
import radhus4 from '../../img/radhus4.jpg';

const listingsData = [
  {
    id: 0,
    address: 'Lillängsgränd 13',
    city: 'Linköping',
    state: 'Östergötland',
    rooms: 5,
    price: 3500000,
    sqft: 140,
    homeType: 'villa',
    route: {
      city: "linkoping",
      address: "lillangsgrand-13"
    },
    coords: {
      lat: 58.3638084,
      lng: 15.698550
    },
    image: apartment
  },
  {
    id: 1,
    address: 'Eklandagatan 9',
    city: 'Göteborg',
    state: 'Västra Götalands län',
    rooms: 3,
    price: 1750000,
    sqft: 85,
    homeType: 'apartment',
    route: {
      city: "goteborg",
      address: "eklandagatan-9"
    },
    coords: {
      lat: 57.694363,
      lng: 11.986969
    },
    image: apartment2
  },
  {
    id: 2,
    address: 'Ernst Ahlgrens väg 5',
    city: 'Stockholm',
    state: 'Stockholms län',
    rooms: 3,
    price: 2795000,
    sqft: 86,
    homeType: 'apartment',
    route: {
      city: "stockholm",
      address: "ernst-ahlgrens-vag-5"
    },
    coords: {
      lat: 59.330457,
      lng: 18.004483
    },
    image: apartment3
  },
  {
    id: 3,
    address: 'Ebbe Liberathsgatan 16 A',
    city: 'Göteborg',
    state: 'Västra Götalands län',
    rooms: 4,
    price: 3395000,
    sqft: 110,
    homeType: 'apartment',
    route: {
      city: "goteborg",
      address: "ebbe-liberathsgatan-16"
    },
    coords: {
      lat: 57.680146,
      lng: 12.000723
    },
    image: apartment4
  },
  {
    id: 4,
    address: 'Engelbrektsgatan 7A',
    city: 'Linköping',
    state: 'Östergötland',
    rooms: 4,
    price: 2995000,
    sqft: 110,
    homeType: 'apartment',
    route: {
      city: "linkoping",
      address: "engelbrektsgatan-7a"
    },
    coords: {
      lat: 58.415438,
      lng: 15.620112
    },
    image: apartment5
  },
  {
    id: 5,
    address: 'Arvid Tydéns allé 16',
    city: 'Stockholm',
    state: 'Stockholms län',
    rooms: 4,
    price: 2645000,
    sqft: 125,
    homeType: 'apartment',
    route: {
      city: "stockholm",
      address: "arvid-tydens-alle-16"
    },
    coords: {
      lat: 59.352163,
      lng: 18.007279
    },
    image: apartment6
  },
  {
    id: 6,
    address: 'Djurgårdsgatan 9',
    city: 'Linköping',
    state: 'Östergötland',
    rooms: 4,
    price: 2195000,
    sqft: 115,
    homeType: 'apartment',
    route: {
      city: "linkoping",
      address: "djurgardsgatan-9"
    },
    coords: {
      lat: 58.407670,
      lng: 15.617906
    },
    image: apartment7
  },
  {
    id: 7,
    address: 'Kunskapslänken 94',
    city: 'Linköping',
    state: 'Östergötland',
    rooms: 3,
    price: 2695000,
    sqft: 86,
    homeType: 'apartment',
    route: {
      city: "linkoping",
      address: "kunskapslanken-94"
    },
    coords: {
      lat: 58.393428,
      lng: 15.584900
    },
    image: apartment8
  },
  {
    id: 8,
    address: 'Åbroddsgränd 53',
    city: 'Stockholm',
    state: 'Stockholms län',
    rooms: 5,
    price: 5295000,
    sqft: 110,
    homeType: 'radhus',
    route: {
      city: "stockholm",
      address: "abroddsgrand-53"
    },
    coords: {
      lat: 59.236435,
      lng: 18.219037
    },
    image: apartment9
  },
  {
    id: 10,
    address: 'Lönngatan 30C',
    city: 'Göteborg',
    state: 'Västra Götalands län',
    rooms: 3,
    price: 3275000,
    sqft: 106,
    homeType: 'radhus',
    route: {
      city: "linkoping",
      address: "hallegatan-10"
    },
    coords: {
      lat: 59.330457,
      lng: 18.004483
    },
    image: apartment10
  },
  {
    id: 11,
    address: 'Svängrumsgatan 52',
    city: 'Linköping',
    state: 'Östergötland',
    rooms: 3,
    price: 2095000,
    sqft: 80,
    homeType: 'apartment',
    route: {
      city: "linkoping",
      address: "hallegatan-10"
    },
    coords: {
      lat: 59.330457,
      lng: 18.004483
    },
    image: apartment11
  },
  {
    id: 12,
    address: 'Klädesvägen 50',
    city: 'Stockholm',
    state: 'Stockholms län',
    rooms: 4,
    price: 9750000,
    sqft: 120,
    homeType: 'villa',
    route: {
      city: "linkoping",
      address: "hallegatan-10"
    },
    coords: {
      lat: 59.330457,
      lng: 18.004483
    },
    image: apartment12
  },
  {
    id: 13,
    address: 'Orrvägen 2',
    city: 'Stockholm',
    state: 'Stockholms län',
    rooms: 6,
    price: 9500000,
    sqft: 180,
    homeType: 'fritidshus',
    route: {
      city: "linkoping",
      address: "hallegatan-10"
    },
    coords: {
      lat: 59.330457,
      lng: 18.004483
    },
    image: apartment13
  },
  {
    id: 14,
    address: 'Pollarbacken 16',
    city: 'Stockholm',
    state: 'Stockholms län',
    rooms: 4,
    price: 6250000,
    sqft: 90,
    homeType: 'apartment',
    route: {
      city: "linkoping",
      address: "hallegatan-10"
    },
    coords: {
      lat: 59.330457,
      lng: 18.004483
    },
    image: apartment14
  },
  {
    id: 15,
    address: 'Örnstigen 10',
    city: 'Göteborg',
    state: 'Västra Götalands län',
    rooms: 6,
    price: 7500000,
    sqft: 140,
    homeType: 'fritidshus',
    route: {
      city: "linkoping",
      address: "hallegatan-10"
    },
    coords: {
      lat: 59.330457,
      lng: 18.004483
    },
    image: fritidshus
  },
  {
    id: 16,
    address: 'Lärdomsvägen 9',
    city: 'Linköping',
    state: 'Östergötlands län',
    rooms: 5,
    price: 4525000,
    sqft: 142,
    homeType: 'radhus',
    route: {
      city: "linkoping",
      address: "hallegatan-10"
    },
    coords: {
      lat: 59.330457,
      lng: 18.004483
    },
    image: radhus
  },
  {
    id: 17,
    address: 'Björnvägen 12',
    city: 'Göteborg',
    state: 'Västra Götalands län',
    rooms: 4,
    price: 3500000,
    sqft: 136,
    homeType: 'radhus',
    route: {
      city: "linkoping",
      address: "hallegatan-10"
    },
    coords: {
      lat: 59.330457,
      lng: 18.004483
    },
    image: radhus2
  },
  {
    id: 18,
    address: 'Gunnarbogatan 33',
    city: 'Stockholm',
    state: 'Stockholms län',
    rooms: 6,
    price: 9500000,
    sqft: 158,
    homeType: 'radhus',
    route: {
      city: "linkoping",
      address: "hallegatan-10"
    },
    coords: {
      lat: 59.330457,
      lng: 18.004483
    },
    image: radhus3
  },
  {
    id: 19,
    address: 'Atterbomsvägen 35',
    city: 'Linköping',
    state: 'Östergötlands län',
    rooms: 6,
    price: 2975000,
    sqft: 125,
    homeType: 'radhus',
    route: {
      city: "linkoping",
      address: "hallegatan-10"
    },
    coords: {
      lat: 59.330457,
      lng: 18.004483
    },
    image: radhus4
  },
  {
    id: 20,
    address: 'Bodalsgatan 3B',
    city: 'Stockholm',
    state: 'Stockholms län',
    rooms: 1,
    price: 2500000,
    sqft: 35,
    homeType: 'apartment',
    route: {
      city: "linkoping",
      address: "hallegatan-10"
    },
    coords: {
      lat: 59.330457,
      lng: 18.004483
    },
    image: apartment15
  },
  {
    id: 21,
    address: 'Kvarngatan 1',
    city: 'Stockholm',
    state: 'Stockholms län',
    rooms: 1,
    price: 3000000,
    sqft: 35,
    homeType: 'apartment',
    route: {
      city: "linkoping",
      address: "hallegatan-10"
    },
    coords: {
      lat: 59.330457,
      lng: 18.004483
    },
    image: apartment16
  }
];

export default listingsData;
