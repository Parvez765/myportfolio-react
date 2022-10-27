import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import "./Expertices.css"
import { FaFigma, FaHtml5, FaCss3, FaBootstrap, FaReact, FaFilePowerpoint, FaGithub } from "react-icons/fa";


const Expertices = () => {
    return (
        <div className='excontainer p-5'>
            <div>
                <h2 className='expertise mb-5'>My Expertise Field</h2>
                <h5 className='expertiseText mb-5'>I Have Expertise at Html, Css, Bootstarp, Tailwind, JavaScript, Reactjs Also<br></br> I Know Graphical Software Like Adobe Illustrator, AdobePhotshop. I also Know MS Powerpoint as Well <br></br><br></br>I Can Also work From Scratch as You Want and Can Help You To Make Your Dream Come True</h5>
            </div>
            <div>
                <h2 className='expertise mb-5'>Technologies I Loved To Play With</h2>
                <FaFigma className='socialIcons me-4'></FaFigma>
                <FaHtml5 className='socialIcons me-4'></FaHtml5>
                <FaCss3 className='socialIcons me-4'></FaCss3>
                <FaBootstrap className='socialIcons me-4'></FaBootstrap>
                <FaReact className='socialIcons me-4'></FaReact>
                <FaGithub className='socialIcons me-4'></FaGithub>
                <FaFilePowerpoint className='socialIcons me-4'></FaFilePowerpoint>
            </div>
        </div>
    );
};

export default Expertices;