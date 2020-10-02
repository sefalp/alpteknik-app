import AddNewProduct from './components/AddNewProduct'
import Home from './pages/Home'
import ProductPage from './pages/ProductPage'
import EditProduct from './components/EditProduct'

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
    }
]