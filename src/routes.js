import Home from './pages/Home';
import Eminence from './pages/Eminence';

export default [
    {
        path: '/',
        exact: true,
        component: Home
    },
    {
        path: '/eminence',
        exact: true,
        component: Eminence
    },
];