import React from 'react';
import { FaFacebook, FaLinkedin, FaGithub } from 'react-icons/fa';
import { Link } from 'react-router-dom';

import "./About.css"


const About = () => {
    return (
        <div>
           <h4>About Me</h4>
            <h6 className='aboutText'>Md. Parvez Hossain Sakib, A Passionate Web Developer, and a very fast learner<br></br>Loves To Take Challange At Any Circusmentence. Comfortable With Any Technology and<br></br> Loves To work At A Team. He has a strong desire to develop professionally and constantly enhance his skills.<br></br> He is confident in his ability to come up with novel solutions that will make the most of his skill<br></br> set and help him accomplish his goal. In everything he did, he showed his work ethic, diligence, and devotion.<br></br>He is Also Expert At Graphic Design worked for 3 Years At An Agency and EdTech Platform<br></br><br></br>You Can Find Me Here Also</h6>
            <div className='icons'>
                <div className='me-2'>
               <a href="https://www.facebook.com/pervez.me/" target="_blank"> <FaFacebook  className='socialIcon'></FaFacebook></a>
                </div>
                <div className='me-2'>
                <a href="https://www.linkedin.com/in/parvez-sakib/" target="_blank"><FaLinkedin  className='socialIcon'></FaLinkedin></a>
                </div>
                <div>
                <a href="https://github.com/Parvez765" target="_blank"><FaGithub  className='socialIcon'></FaGithub></a>
               </div>
            </div>
        </div>
    );
};

export default About;