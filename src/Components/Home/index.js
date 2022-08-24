import './home.css'
import { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';

export default function Home(){

    useEffect(() =>{
        Aos.init({ duration: 2000})
    },[])



    return(
        <section>
            <div className='text-home'>
                <h1 data-aos="fade-right">SHALON LINE</h1>
                <p data-aos="fade-right">CUIDADOS CAPILARES PERSONALIZADOS COM TOQUE PROFISSIONAL</p>
            </div>
            <div className='form-home'>
                <form data-aos="fade-right">
                    <h2>AGENDAR HORÁRIO</h2>
                    <button>VERIFICAR DISPONIBILIDADE</button>
                    <button>REALIZAR AGENDAMENTO</button>
                </form>
            </div>
        </section>
    );
}