import Home from './pages/Home';
import Roadmap from './pages/Roadmap';

export default [
    {
        path: '/',
        exact: true,
        component: Home
    },
    {
        path: '/roadmap',
        exact: true,
        component: Roadmap
    },
];