import Card from "./Card"
import * as S from "./main_styled"
import bigmac from "../../assets/bigmac.png"
import sofa from "../../assets/sofa.png"
import restaurantes from "../../assets/restaurantes.png"
import juntos from "../../assets/juntos.png"
import batata from "../../assets/batata.png"
import sorvete from "../../assets/sorvete.png"

export default function Main() {
  return (
    <main>
      <S.ContainerMequi>
        <S.ContainerPrincipal>
      <img src={bigmac} alt="" />
      <h1>Bateu aquela <span>#fome</span> de <span>méqui</span>?</h1>
        </S.ContainerPrincipal>

        <S.ContainerImagens>
           <img src={bigmac} alt=''/>
                <img src={batata} alt=''/>
                <img src={sorvete} alt=''/>
        </S.ContainerImagens>

      
      </S.ContainerMequi>

      <S.Promocao>
        <h2>Promoção</h2>
        <S.Centro>
        <Card imagem={sofa} texto={"Que tal um #MéquiNoSofá?"}/>
         <Card imagem={restaurantes} texto={"Venha conhecer nossa nova loja"}/>
          <Card imagem={juntos} texto={"confira as medidas que o Mequi adotou"}/>
        </S.Centro>
      </S.Promocao>
    </main>
  )
}