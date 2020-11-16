import HomePage from "../contaimers/Home/HomePage";
import ListMovie from '../contaimers/Home/ListMovie';
import New from "../components/New";



const routesHome = [
    {
        exact: true,
        path: "/",
        component: HomePage
    },
    {
        exact: false,
        path: "/list-movie",
        component: ListMovie
    },
    {
        exact: false,
        path: "/new",
        component: New
    },
]

export {routesHome};