import './sectionContato.css';
import firebase from '../../firebaseConnection';
import { useState,useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { FaWhatsapp } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaMapMarker } from "react-icons/fa";


export default function SectionContato(){

    useEffect(() =>{
        Aos.init({ duration: 2000})
    },[])

    const [mensagem, setMensagem] = useState('');
    const [nome, setNome] = useState('');

    async function salvarInfo(){
        await firebase.firestore().collection('clientes').add({
            mensagem: mensagem,
            nome: nome
        }).then(() =>{
            console.log('SUCESSO!');
            setMensagem('');
            setNome('');
        }).catch((err) => console.log(err))
    }


    return(
        <div className="container-contato">
            <div className='main-contato'>
            <form data-aos="fade-right">
                    <h2>TIRE SUA DÚVIDA</h2>
                    <input type='text' value={nome} placeholder='NOME' onChange={(e) => setNome(e.target.value)}/>
                    <textarea placeholder='MENSAGEM' value={mensagem} onChange={(e) => setMensagem(e.target.value)}>

                    </textarea>
                    <a href={`https://wa.me/5581998059073?text=${mensagem}`} target="_blank" onClick={ salvarInfo }>
                        ENVIAR MENSAGEM
                    </a>
            </form>
            </div>
            <div className='text-contato'>
                <h2>CONTATO</h2>
                <p><FaMapMarker className='icon'/>Rua Lorem Ipsum</p>
                <p><FaWhatsapp className='icon'/>(81)99999-9999</p>
                <p><FaInstagram className='icon'/>@loremipsum</p>
            </div>
        </div>
    );
}