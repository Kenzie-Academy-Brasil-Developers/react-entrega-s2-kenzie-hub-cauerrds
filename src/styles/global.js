import { createGlobalStyle } from "styled-components";
export default createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
}

:root{
    //Cores principais
    --pink: #FF577F;
    --pinkFocus: #FF427F;
    --pinkNegativo: #59323F;
    //Cores para fundos
    --grey1: #121214;
    --grey2: #212529;
    --grey3: #343B41;
    --grey4: #868E96;
    --grey5: #F8F9FA;
    //Cores para feedback
    --green: #3FE864;
    --pinkFeedback: #E83F5B;
    //Cores para fontes
    --white: #F8F9FA;
    --greyFont: #868E96;
    --pinkFont: #FF577F;
}

body{
    background-color: var(--grey1)  
}

body,input,button {
    font-family: "inter";
    font-size: 1rem;
} 

button{
    border: none;
    cursor: pointer;
}

a{
    text-decoration: none;
}

`;
