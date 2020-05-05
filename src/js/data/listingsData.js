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
    type: 'Villa',
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
    type: 'Lägenhet',
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
    type: 'Lägenhet',
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
    type: 'Lägenhet',
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
    type: 'Lägenhet',
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
    type: 'Lägenhet',
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
    type: 'Lägenhet',
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
    type: 'Lägenhet',
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
    type: 'Radhus',
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
    id: 9,
    address: 'Växelmyntsgatan 3D',
    city: 'Göteborg',
    state: 'Västra Götalands län',
    rooms: 3,
    price: 3275000,
    sqft: 106,
    homeType: 'radhus',
    type: 'Radhus',
    route: {
      city: "goteborg",
      address: "vaxelmyntsgatan-3d"
    },
    coords: {
      lat: 57.674262,
      lng: 11.911688
    },
    image: apartment10
  },
  {
    id: 10,
    address: 'Selma Lagerlöfs gata 5',
    city: 'Linköping',
    state: 'Östergötland',
    rooms: 3,
    price: 2095000,
    sqft: 80,
    homeType: 'apartment',
    type: 'Lägenhet',
    route: {
      city: "linkoping",
      address: "selma-lagerlofs-gata-5"
    },
    coords: {
      lat: 58.393206,
      lng: 15.583817
    },
    image: apartment11
  },
  {
    id: 11,
    address: 'Ryttarvägen 19',
    city: 'Stockholm',
    state: 'Stockholms län',
    rooms: 4,
    price: 9750000,
    sqft: 120,
    homeType: 'villa',
    type: 'Villa',
    route: {
      city: "stockholm",
      address: "ryttarvagen-19"
    },
    coords: {
      lat: 59.313961,
      lng: 18.265024
    },
    image: apartment12
  },
  {
    id: 12,
    address: 'Friggavägen 20',
    city: 'Stockholm',
    state: 'Stockholms län',
    rooms: 6,
    price: 9500000,
    sqft: 180,
    homeType: 'fritidshus',
    type: 'Fritidshus',
    route: {
      city: "stockholm",
      address: "friggavagen-20"
    },
    coords: {
      lat: 59.139023,
      lng: 18.427246
    },
    image: apartment13
  },
  {
    id: 13,
    address: 'Ringvägen 66',
    city: 'Stockholm',
    state: 'Stockholms län',
    rooms: 4,
    price: 6250000,
    sqft: 90,
    homeType: 'apartment',
    type: 'Lägenhet',
    route: {
      city: "stockholm",
      address: "ringvagen-66"
    },
    coords: {
      lat: 59.308111,
      lng: 18.064882
    },
    image: apartment14
  },
  {
    id: 14,
    address: 'Lyckestigen 41',
    city: 'Göteborg',
    state: 'Västra Götalands län',
    rooms: 6,
    price: 7500000,
    sqft: 140,
    homeType: 'fritidshus',
    type: 'Fritidshus',
    route: {
      city: "goteborg",
      address: "lyckestigen-41"
    },
    coords: {
      lat: 57.631968,
      lng: 11.927179
    },
    image: fritidshus
  },
  {
    id: 15,
    address: 'Poesigränd 7',
    city: 'Linköping',
    state: 'Östergötlands län',
    rooms: 5,
    price: 4525000,
    sqft: 142,
    homeType: 'radhus',
    type: 'Radhus',
    route: {
      city: "linkoping",
      address: "poesigrand-7"
    },
    coords: {
      lat: 58.392120,
      lng: 15.582786
    },
    image: radhus
  },
  {
    id: 16,
    address: 'Ingebäcksvägen 12',
    city: 'Göteborg',
    state: 'Västra Götalands län',
    rooms: 4,
    price: 3500000,
    sqft: 136,
    homeType: 'radhus',
    type: 'Radhus',
    route: {
      city: "goteborg",
      address: "ingebacksvagen-12"
    },
    coords: {
      lat: 57.802931,
      lng: 11.995780
    },
    image: radhus2
  },
  {
    id: 17,
    address: 'Henriksborgsvägen 84',
    city: 'Stockholm',
    state: 'Stockholms län',
    rooms: 6,
    price: 9500000,
    sqft: 158,
    homeType: 'radhus',
    type: 'Radhus',
    route: {
      city: "stockholm",
      address: "henriksborgsvagen-84"
    },
    coords: {
      lat: 59.314347,
      lng: 18.113643
    },
    image: radhus3
  },
  {
    id: 18,
    address: 'Utsädesgatan 67',
    city: 'Linköping',
    state: 'Östergötlands län',
    rooms: 6,
    price: 2975000,
    sqft: 125,
    homeType: 'radhus',
    type: 'Radhus',
    route: {
      city: "linkoping",
      address: "utsadesgatan-67"
    },
    coords: {
      lat: 58.377582,
      lng: 15.578091
    },
    image: radhus4
  },
  {
    id: 19,
    address: 'Hornsgatan 151',
    city: 'Stockholm',
    state: 'Stockholms län',
    rooms: 1,
    price: 2500000,
    sqft: 35,
    homeType: 'apartment',
    type: 'Lägenhet',
    route: {
      city: "stockholm",
      address: "hornsgatan-151"
    },
    coords: {
      lat: 59.315023,
      lng: 18.032540
    },
    image: apartment15
  },
  {
    id: 20,
    address: 'Katarina Bangata 59',
    city: 'Stockholm',
    state: 'Stockholms län',
    rooms: 1,
    price: 3000000,
    sqft: 35,
    homeType: 'apartment',
    type: 'Lägenhet',
    route: {
      city: "stockholm",
      address: "katarina-bangata-59"
    },
    coords: {
      lat: 59.309540,
      lng: 18.087983
    },
    image: apartment16
  }
];

export default listingsData;
