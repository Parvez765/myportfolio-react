import React from 'react';
import { Button } from 'react-bootstrap';
import About from '../About/About';
import Expertices from '../Expertice/Expertices';
import Quotes from '../Quotes/Quotes';
import "./Home.css"

const Home = () => {
    return (
        <div>
            <div  className='homeContainer'>
            <div>
                <p className='mt-5'>Hi, I Am Md. Parvez</p>
                <h1 className='header mb-0'>I Will Help You <br></br>To Bring <span className='heading'>Your Dream Come true</span></h1>
                <p className='paragraph'>Front End Web Developer</p>
                <button className='aboutbtn'>Say Hello</button>
            </div>
            </div>
            <div className='mt-5 mb-5 bg-warning text-black pt-3'>
                <About></About>
            </div>
            <div>
                <Expertices></Expertices>
            </div>
            <div className='mt-5'>
            <Quotes></Quotes>
            </div>
        </div>
    );
};

export default Home;