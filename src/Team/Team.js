import {} from './Team.css';
import ejlogo from '../img/ejlogo-black.png';

function Team() {
  return (
    <div className="team">
      <h1>Ainda com dúvidas?</h1>
      <p>Caso ainda tenha alguma dúvida ou incerteza, ou queira apenas saber mais sobre como trabalhamos e gerenciamos nossos projetos, nossos contatos estão abertos e estamos anciososos para trabalhar juntos!</p>
      
            <p>Nosso trabalho é mudar o seu trabalho, com tecnologia e segurança.</p>
      <img className='ejlogob' src={ejlogo} alt="ejlogo" />
      <button className="button-74">Contact us</button>

    </div>
  );
}

export default Team;