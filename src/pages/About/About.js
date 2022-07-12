// STYLES
import styles from './About.module.css';

import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div className={styles.about}>
      <h1>
        Sobre o Eu, <span>Leandro</span>
      </h1>
      <div>
        <p>
          Este projeto consiste em um blog pessoal desenvolvido em React e Firebase.
        </p>
        <p>
          Nele, irei documentar meu dia a dia, contando um pouco dos aprendizados enquanto estudo programação. Além disso, irei compartilhar alguns posts sobre outras áreas de interesse como fotografia e games.
        </p>
        <p>
          Sinta-se à vontade para criar uma conta e compartilhar suas ideias comigo também!
        </p>
      </div>
      <Link to="/posts/create" className="btn" >Criar post</Link>
    </div>
  );
};

export default About;