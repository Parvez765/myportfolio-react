import React from 'react';
import "./Sevice.css"
import serviceImg from "../../Images/service-01.png"
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import review1 from "../../Images/Review1-01.png"
import review2 from "../../Images/Review2-01.png"
import review3 from "../../Images/Review3-01.png"
import review4 from "../../Images/Review4-01.png"




import {FaCode, FaFigma, FaFilePowerpoint, FaPencilRuler} from "react-icons/fa"

const Services = () => {
    return (
        <div>
            <img src={serviceImg} alt="" className='serviceImg'></img>
            <div className='mt-5 mb-5 container'>
                <h2 className='mb-5 heading'>Services I Provide</h2>
                <div className='d-flex flex-md-column flex-lg-row align-items-center'>
                    <Card className='cardDetail me-4 mb-4' style={{ width: '18rem' }}>
                        <Card.Body>
                        <FaCode className='icons'></FaCode>
                            <Card.Title>Web Development</Card.Title>
                            <Card.Text>
                        I Provide Web Development Service. I Am Expertise At Html, Css, Bootstrap, ReactJs
                            </Card.Text>
                            
                        </Card.Body>
                    </Card>
                    <Card className='cardDetail me-4 mb-4' style={{ width: '18rem' }}>
                        <Card.Body>
                        <FaFigma className='icons'></FaFigma>
                            <Card.Title>Prototype Design</Card.Title>
                            <Card.Text>
                       I am Mid Level Prototype Designer. I Can Design Website Prototype Using Figma
                            </Card.Text>
                            
                        </Card.Body>
                    </Card>
                    <Card className='cardDetail me-4 mb-4' style={{ width: '18rem' }}>
                        <Card.Body>
                        <FaFilePowerpoint className='icons'></FaFilePowerpoint>
                            <Card.Title>PPT Presentaion</Card.Title>
                            <Card.Text>
                       Expert At PowerPoint Presentaion. Also I can Make Animation using Powerpoint Software
                            </Card.Text>
                            
                        </Card.Body>
                    </Card>
                    <Card className='cardDetail' style={{ width: '18rem' }}>
                        <Card.Body>
                        <FaPencilRuler className='icons'></FaPencilRuler>
                            <Card.Title>Graphic Design</Card.Title>
                            <Card.Text>
                       I Have A Better Knowledge At Graphic Designing Sector. I Have An 3 Years Experience At This Field
                            </Card.Text>
                            
                        </Card.Body>
                    </Card>
               </div>
            </div>
            <div className=''>
                <h2 className='mt-5 mb-5 heading'>Testimonials</h2>
                <img src={review1} className="review" alt="" />
                <img src={review2} className="review" alt="" />
                <img src={review3} className="review" alt="" />
                <img src={review4} className="review" alt="" />
            </div>
        </div>
    );
};

export default Services;