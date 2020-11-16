import React from 'react'
import { Route } from "react-router-dom";
import Navbar from "../components/Navbar";
import Carousle from "../components/Carousel";
import New from '../components/New';
import ListMovie from "../contaimers/Home/ListMovie"



function HomeLayout(props) {
    return (
        <div>
            <Navbar />
            <Carousle/>
            <ListMovie/>
            <New/>
        </div>
    );
}

export default function HomeTemplate({Component, ...props}) {
    return (
        <Route
            {...props}
            render={propsComponent => (
                <HomeLayout>
                    <Component {...propsComponent} />
                </HomeLayout>
            )}
        />
    );
}
