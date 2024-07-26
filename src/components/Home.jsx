import React from "react";
import SearchIcon from '@mui/icons-material/Search';
import '../components/Home.css'
// import hero_bg from '../Images/hero_bg.jpg'
// import home_bg from '../images/home_bg.jpg';

const Home = () => {

    return (
        <div>
            <div className="header">
                <div className="logo">
                    <h2>MedInsight</h2>
                </div>

                <div className="searchBtn">
                    {/* <SearchIcon /> */}
                    <input type="text" placeholder="search by medicine name" name="search" />
                    <div className="icon">
                        <SearchIcon />
                    </div>

                </div>

                <div className="navbar">
                    <nav>Home</nav>
                    <nav>About</nav>
                    <nav>Contact</nav>
                </div>

                {/* <div className="searchBtn">
                    <SearchIcon />
                    <input type="text" placeholder="search" name="search" />
                </div> */}
            </div>

            <div className="background" >
                <div className="content">
                    <b style={{ fontSize: '56px', color: 'green' }}>MedInsight</b>
                    <div style={{ color: 'black',fontSize:"18px",fontWeight:"bold" }}>
                        A platform where you will be getting all the information <br />
                        regarding the medicines with it's uses.
                    </div>
                </div>

            </div>

        </div>
    )
}

export default Home;