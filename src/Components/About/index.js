import './about.css';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';


export default function About(){

    useEffect(() =>{
        Aos.init({ duration: 2000})
    },[])

    return(
        <article>
            <h2 data-aos="fade-right">SOLUÇÕES PROFISSIONAIS PARA O CUIDADO DO CABELO</h2>
            <div className="container-article" data-aos="fade-right">
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                    when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
                    It has survived not only five centuries, but also the leap into electronic typesetting, 
                </p>
                <a href='#'>LEIA MAIS</a>
            </div>
        </article>
    );
}