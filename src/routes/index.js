import { HeaderOnly } from '~/components/layout';
import NotFound from '~/components/notFound';
import Following from '~/pages/following';
import Home from '~/pages/home';
import Upload from '~/pages/upload';

export const publicRoute = [
    {
        path: '/',
        component: Home,
    },
    {
        path: '/following',
        component: Following,
    },
    {
        path: '/upload',
        component: Upload,
        layout: HeaderOnly,
    },
    {
        path: '*',
        component: NotFound,
        layout: null,
    },
];

export const privateRoute = [];
