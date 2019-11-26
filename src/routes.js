import Home from './pages/Home';
import Document from './pages/Document';

export default [
    {
        path: '/',
        exact: true,
        component: Home
    },
    {
        path: '/document',
        exact: true,
        component: Document
    },
]