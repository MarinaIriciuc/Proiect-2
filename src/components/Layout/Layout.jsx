import React from 'react';
import './Layout.css';
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

function Layout(props) {
    return(
        <div className="layout">
            <Header/>
                { props.children }
            <Footer/>
        </div>
    );
}

export default Layout;