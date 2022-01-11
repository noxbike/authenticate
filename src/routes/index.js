import Dashboard from '../component/Dashboard';
import SignIn from '../component/SignIn'
import SignUp from '../component/SignUp';

const Pages = [
    {
        path:'/SignIn',
        component: SignIn,
        needAuth: false,
    },
    {
        path:'/SignUp',
        component: SignUp,
        needAuth: false,
    },
    {
        path:'/',
        component: Dashboard,
        needAuth: true,
    }
];

export default Pages;