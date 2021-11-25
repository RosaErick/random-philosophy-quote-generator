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



  .quoteSpace {
   font-size:1.3em;
   padding: 25px 0;
  margin:-55px 0 50px;
  width:400px;
  position: relative;
  top:-150px;
  left:400px;
 
  }
`;

