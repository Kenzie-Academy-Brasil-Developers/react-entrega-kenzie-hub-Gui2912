import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`

    body{
      font-family: 'Inter', sans-serif;
    }

    *{
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }

    ul,li{
      list-style: none;
    }

    button{
      cursor: pointer;
      border: none;
      padding: 10px 20px;
      border-radius: 4px;
      font-size: 14px;
    }

    :root{
      --gray0: #F8F9FA;
      --gray1: #868E96;
      --gray2: #343B41;
      --gray3: #212529;
      --gray4: #121214;
      --color-primary: #FF577F;
      --color-primary-focus: #FF427F;
      --color-primary-negative: #59323F;
    }

    .d-flex{display: flex;}

    .align-items-center{align-items: center;}
    .align-items-start{align-items: flex-start;}
    .align-items-end{align-items: flex-end;}

    .text-start{text-align: start;}
    .text-center{text-align: center;}
    .p-0{padding: 0;}
    .p-40{padding: 40px 0}
    .mg-auto{margin: 0 auto}
    .mg-20{margin: 20px 0}
    .w-100{width: 100%}


    .justify-content-center{justify-content: center;}
    .justify-content-between{justify-content: space-between;}
    .justify-content-around{justify-content: space-around;}
    .justify-content-end{justify-content: flex-end;}

    
    .wrap{flex-wrap: wrap;}
    .flex-column{flex-direction: column;}
    .flex-row{flex-direction: row;}

    .div{
      max-width: 370px;
      width:100%;
      margin: 25px 0;
    }

    .link-button-register{
      text-decoration: none;
      padding: 10px;
      border-radius: 4px;
      color: white;
      background-color: var(--gray3);
    }

    .link-button-login{
      text-decoration: none;
      width: 100%;
      padding: 15px;
      border-radius: 4px;
      color: var(--gray4);
      background-color: var(--gray0);
      text-align: center;
    }

    .mg-botton20{
      margin-bottom: 20px;
    }
`;
