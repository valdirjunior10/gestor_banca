import BancaIndex from '../src/components/banca/index';
import Home from './components/Home.vue';
import LancamentoIndex from '../src/components/lancamento/index';

export const routes = [
    {path: '/', component: Home},
    {path: '/bancas', component: BancaIndex, titulo: 'Bancas'},
    {path: '/lancamentos', component: LancamentoIndex, titulo: 'Lancamento'},
];