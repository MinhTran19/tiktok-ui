// Layout for Upload
import { HeaderOnly } from '~/components/Layouts';


// Pages component
import Home from '~/pages/Home';
import Following from '~/pages/Following';
import Profile from '~/pages/Profile';
import Upload from '~/pages/Upload';
import Search from '~/pages/Search';

// Public routes can join don't need SignIn
const publicRoutes = [
    {path: '/', component: Home},
    {path: '/following', component: Following},
    {path: '/profile', component: Profile},
    {path: '/upload', component: Upload, layout: HeaderOnly},
    {path: '/search', component: Search, layout: null}
]

// Private routes is must SignIned to join component
const privateRoutes = [

]

export {publicRoutes, privateRoutes}