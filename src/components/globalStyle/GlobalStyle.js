import { createGlobalStyle } from 'styled-components';
import PhiloImg from '../../images/philo.jpg';

export const GlobalStyle = createGlobalStyle`
  body {
    color: #332c36;
    padding: 0;
    margin: 0;
    font-family: 'New Tegomin', serif;
    background: url(${PhiloImg}) center no-repeat; 
    display:flex;
  }
`;

