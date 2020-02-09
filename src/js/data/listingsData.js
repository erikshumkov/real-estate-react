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
    id: 1,
    address: 'Hallegatan 10',
    city: 'Linköping',
    state: 'Östergötland',
    rooms: 5,
    price: 3500000,
    sqft: 140,
    homeType: 'villa',
    image: apartment
  },
  {
    id: 2,
    address: 'Sivs Gränd 20A',
    city: 'Göteborg',
    state: 'Västra Götalands län',
    rooms: 3,
    price: 1750000,
    sqft: 85,
    homeType: 'apartment',
    image: apartment2
  },
  {
    id: 3,
    address: 'Lagmansgatan 32',
    city: 'Stockholm',
    state: 'Stockholms län',
    rooms: 3,
    price: 2795000,
    sqft: 86,
    homeType: 'apartment',
    image: apartment3
  },
  {
    id: 4,
    address: 'Thorells gata 55',
    city: 'Göteborg',
    state: 'Västra Götalands län',
    rooms: 4,
    price: 3395000,
    sqft: 110,
    homeType: 'apartment',
    image: apartment4
  },
  {
    id: 5,
    address: 'Övre Hallegatan 12',
    city: 'Linköping',
    state: 'Östergötland',
    rooms: 4,
    price: 2995000,
    sqft: 110,
    homeType: 'apartment',
    image: apartment5
  },
  {
    id: 6,
    address: 'Åbringsvägen 27',
    city: 'Stockholm',
    state: 'Stockholms län',
    rooms: 4,
    price: 2645000,
    sqft: 125,
    homeType: 'apartment',
    image: apartment6
  },
  {
    id: 7,
    address: 'Flormansgatan 1A',
    city: 'Linköping',
    state: 'Östergötland',
    rooms: 4,
    price: 2195000,
    sqft: 115,
    homeType: 'apartment',
    image: apartment7
  },
  {
    id: 8,
    address: 'Kungsvägen 8',
    city: 'Linköping',
    state: 'Östergötland',
    rooms: 3,
    price: 2695000,
    sqft: 86,
    homeType: 'apartment',
    image: apartment8
  },
  {
    id: 9,
    address: 'Ornövägen 9',
    city: 'Stockholm',
    state: 'Stockholms län',
    rooms: 5,
    price: 5295000,
    sqft: 110,
    homeType: 'radhus',
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
    image: apartment16
  }
];

export default listingsData;
