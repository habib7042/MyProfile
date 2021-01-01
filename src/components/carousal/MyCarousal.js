import React from 'react';
//Component
import Carousal from "react-bootstrap/Carousel";
import slide1 from '../../assets/pexels-jessica-lewis-593322.jpg';
import slide2 from '../../assets/pexels-pixabay-270360.jpg';
import slide3 from '../../assets/pexels-toni-cuenca-585752.jpg';
import Scrolldown from '../scrolldown/Scrorlldown';
// Style Css
import './carousal.style.css';


const MyCarousal = () => {
    return (
        <div id= 'home'>
            <Carousal controls ={false} indicators interval ={2000} pause = {false}>
                <Carousal.Item>
                    <img className='d-block w-100 custom-img' src={slide1} alt='Slide 1'/>
                </Carousal.Item>
                <Carousal.Item>
                    <img className='d-block w-100 custom-img' src={slide2} alt='Slide 2'/>
                </Carousal.Item>
                <Carousal.Item>
                    <img className='d-block w-100 custom-img' src={slide3} alt='Slide 3'/>
                </Carousal.Item>
            </Carousal>
            <Scrolldown/>
        </div>
    )
}

export default MyCarousal;