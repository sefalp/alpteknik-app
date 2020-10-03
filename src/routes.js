import AddNewProduct from './pages/AddNewProduct'
import Home from './pages/Home'
import ProductPage from './pages/ProductPage'
import EditProduct from './components/EditProduct'
import Login from './pages/Login'
import SignUp from './pages/SignUp'


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
        path: '/add_new_product',
        component: AddNewProduct,
        name: 'add-new-product'
    },
    {
        path: '/edit_product/:id',
        component: EditProduct,
        name: 'edit_product',
        props: true
    },
    {
        path: '/login',
        component: Login,
        name: 'login'
    },
    {
        path: '/sign_up',
        component: SignUp,
        name: 'sign_up'
    }
]