import AddNewProduct from './pages/AddNewProduct'
import Home from './pages/Home'
import ProductPage from './pages/ProductPage'
import EditProduct from './components/EditProduct'
import Login from './pages/Login'
import SignUp from './pages/SignUp'
import profileManagement from './pages/profileManagement'


export default [
    {
        path: '/',
        component: Home,
        name: 'home'

    },
    {
        path: '/product-page/:id',
        component: ProductPage,
        name: 'product-page',
        props: true

    },
    {
        path: '/product/add-new',
        component: AddNewProduct,
        name: 'add-new-product'
    },
    {
        path: '/product/edit/:id',
        component: EditProduct,
        name: 'edit_product',
        props: true
    },
    {
        path: '/user/login',
        component: Login,
        name: 'login'
    },
    {
        path: '/user/sign-up',
        component: SignUp,
        name: 'signUp'
    },
    {
        path: '/user/profile_management/:user',
        component: profileManagement,
        name: 'profile_management',
        props: true
    }


]