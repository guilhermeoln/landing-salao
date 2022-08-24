import './sectionInfo.css';
import logo from '../../assets/home-landing.jpeg';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';


export default function SectionInfo(){

    useEffect(() =>{
        Aos.init({ duration: 2000})
    },[])



    return(
        <div className='container-info'>
            <div className='col-info-left' data-aos="fade-right">
                <div className='col-img-left'>
                    <img src={logo} />
                </div>
                <div className='col-text-left'>
                    <h2>O QUE FAZEMOS</h2>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
                </div>
            </div>
            <div className='col-info-right' data-aos="fade-down">
                <div className='col-text-right'>
                    <h2>SOBRE</h2>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
                </div>
                <div className='col-img-right'>
                    <img src={logo} />
                </div>
            </div>
            <div className='col-info-left' data-aos="fade-right">
            <div className='col-img-left'>
                    <img src={logo} />
                </div>
                <div className='col-text-left'>
                    <h2>POR QUE NOS ESCOLHER</h2>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
                </div>
            </div>
        </div>
    );
}