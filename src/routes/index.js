import SignIn from '../component/SignIn'
import SignUp from '../component/SignUp';

const Routes = [
    {
        path:'/SignIn',
        component: SignIn,
        needAuth: false,
    },
    {
        path:'/SignUp',
        component: SignUp,
        needAuth: false,
    }
];

export default Routes;