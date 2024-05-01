import styled,{css} from "styled-components"

const center = css`
display: flex;
justify-content: center;
align-items: center;
`
export const ContainerMequi = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: rgba(255, 199, 44, 1);
    padding: 2em;

    div {
        display: flex;
        align-items: center;
    }
`;

export const ContainerPrincipal = styled.div`
    justify-content: space-evenly;
    width: 80%;
    text-transform: uppercase;

    h1 {
        color: white;
        font-size: 46px;
        width: 450px;
    }

    span {
        color: red;
    }
`;

export const ContainerImagens = styled.div`
    display: flex;
    justify-content: space-evenly;
    width: 40%;
    margin-top: 20px;
    padding: 1em;
    img {
        width: 90px;
        height: 90px;
    }
`;


export const Promocao = styled.section`
background-color: #FEB706;
height: 60vh;
${center}
flex-direction: column;
justify-content: space-evenly;
h2{
    color: white;
}

`

export const Centro = styled.div`

${center}
justify-content: space-evenly;
width: 70vw;

`
export const Card = styled.div`

height: 40vh;
background-color: white;
border-radius: 10px;
text-align: center;


p{
   font-weight: bold; 
   height: 10vh;
   ${center}
}
button{
    background-color: #FFBC0D;
    padding: 10px 20px;
    border-radius: 10px;
    border: none;
    font-weight: bold;
}
`

export const Section = styled.section`
height: 60vh;
background-color: yellow;
 ${center}
`