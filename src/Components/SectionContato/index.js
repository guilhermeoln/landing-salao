import './sectionContato.css';
import firebase from '../../firebaseConnection';
import { useState,useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';


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
                    <h2>ENTRE EM CONTATO</h2>
                    <input type='text' value={nome} placeholder='NOME' onChange={(e) => setNome(e.target.value)}/>
                    <textarea placeholder='MENSAGEM' value={mensagem} onChange={(e) => setMensagem(e.target.value)}>

                    </textarea>
                    <a href={`https://wa.me/5581998059073?text=${mensagem}`} target="_blank" onClick={ salvarInfo }>
                        ENVIAR MENSAGEM
                    </a>
            </form>
            </div>
            <div className='text-contato'>
                <h3>ENDEREÇO</h3>
                <p>Rua Lorem Ipsum, 504</p>
                <h3>CONTATOS</h3>
                <p>WhatsApp: (81)9999-9999</p>
                <h3>HORÁRIOS</h3>
                <p>- Segunda a Sexta: 05:00 às 18:00h</p>
                <p>- Sábado: 09:00 às 12:00h</p>
            </div>
        </div>
    );
}