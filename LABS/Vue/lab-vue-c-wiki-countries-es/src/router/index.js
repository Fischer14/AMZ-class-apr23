import { createRouter, createWebHistory } from 'vue-router';
import CountriesList from '../components/CountriesList.vue';
import CountriesDetails from '../src/components/CountriesDetails.vue';

const routes = [
  {
    path: '/',
    name: 'list',
    components: {
      default: CountriesList,
      details: CountriesDetails,
    },
  },
  {
    path: '/list/:alpha3Code',
    name: 'details',
    components: {
      default: CountriesList,
      details: CountriesDetails,
    },
    props: true,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
