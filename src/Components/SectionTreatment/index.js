import './treatment.css'
import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import { FaCheck } from "react-icons/fa";


export default function SectionTreatment(){

    useEffect(() =>{
        Aos.init({ duration: 2000})
    },[])

    return(
        <div className="container-services">
            <div className='services-col1' data-aos="fade-right">
                <img src='https://i.pinimg.com/736x/11/0e/f6/110ef65440b59675226b56099e5d1d14.jpg' alt="lavando-cabelo"/>
            </div>
            <div className='services-col2' data-aos="fade-right">
                <h2>TRATAMENTOS</h2>
                <h3><FaCheck className='icon'/>Máscaras de Hidratação:</h3>
                <p>Repõe água e umidade, trazendo maciez, maleabilidade e suavidade.</p>
                <h3><FaCheck className='icon'/>Nutrição e Regeneração dos Fios:</h3>
                <p>Traz brilho, confere força, vitalidade, sela a hidratação e acaba com as pontas duplas e ressecadas</p>
                <h3><FaCheck className='icon'/>Queratinização:</h3>
                <p>Devolve a queratina perdida durante processos químicos, proporcionando corpo estrutura aos fios. 
                    Indicada para cabelos muito danificados.
                </p>
                <h3><FaCheck className='icon'/>Instantâneo com Ampola:</h3>
                <p>Age rapidamente no lavatório e o resultado é imediato.</p>
            </div>
        </div>
    );
}