import React, { useState } from 'react'
import "./Dashboard.css"
import Navbar from './components/Navbar';
import Logoutmodel from './components/Logoutmodel';
import Sidebar from './components/Sidebar';
import Pagecontent from './components/Pagecontent';
import Footer from './components/Footer';
import 'bootstrap/dist/css/bootstrap.css';


function Dashboard() {

    const [style, setStyle] = useState("navbar-nav bg-gradient-primary sidebar sidebar-dark accordion");

    const [good, Setgood] = useState(0);

    const [neutral, Setneutral] = useState(0);

    const [bad, Setbad] = useState(0);



    const Changestyle = () => {
        if (style === "navbar-nav bg-gradient-primary sidebar sidebar-dark accordion") {
            setStyle("navbar-nav bg-gradient-primary sidebar sidebar-dark accordion toggled")
        } else {
            setStyle("navbar-nav bg-gradient-primary sidebar sidebar-dark accordion")
        }
    }
    const Changestyle1 = () => {
        if (style === "navbar-nav bg-gradient-primary sidebar sidebar-dark accordion") {
            setStyle("navbar-nav bg-gradient-primary sidebar sidebar-dark accordion toggled1")
        } else {
            setStyle("navbar-nav bg-gradient-primary sidebar sidebar-dark accordion")
        }
    }


    return (
        <div id="page-top">

            {/* <!-- Page Wrapper --> */}
            <div id="wrapper">

                <Sidebar style={style} Changestyle={Changestyle} />

                {/* <!-- Content Wrapper --> */}
                <div id="content-wrapper" className="d-flex flex-column">

                    {/* <!-- Main Content -->*/}
                    <div id="content">

                        <Navbar Changestyle1={Changestyle1} />

                        <Pagecontent good={good} Setgood={Setgood} neutral={neutral} Setneutral={Setneutral} bad={bad} Setbad={Setbad} />

                    </div>

                    {/* <!-- Footer Content -->*/}
                    <Footer />


                </div>

            </div>

            <Logoutmodel />



        </div>
    )
}

export default Dashboard