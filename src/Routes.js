import BancaIndex from '../src/components/banca/index';
import Home from './components/Home.vue';

export const routes = [
    {path: '/', component: Home},
    {path: '/bancas', component: BancaIndex, titulo: 'Bancas'}
];