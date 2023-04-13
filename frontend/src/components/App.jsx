import Footer from "./Footer";
import Header from "./Header";
import '../styles/style.css'
import styled from 'styled-components'
import ImgStone from '../images/3d-stepping-stones-in-the-ocean-at-sunset.jpg'

const Div = styled.div`
  display: flex;
  justify-content: center;
  position: relative;
  top: -20px;
  @media screen and (max-width: 600px) { position: initial; }
`

const Stone = styled.img`
  height: auto;
  width: 70%;
  border-radius: 3px;
  @media screen and (max-width: 600px) { width: 100%; }
`

const Presention = styled.section`
  background-color: #DDCCC5;
  width: 100%;
  height: 26em;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 4em 0;
  @media screen and (max-width: 1023px) { margin: 2.5em 0; }
`

const TxtPresentation = styled.div`
  background-color: #E9E1DA;
  width: 60%;
  height: 70%;
  border-radius: 10px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  @media screen and (max-width: 1023px) {
    width: 90%;
    height: 75%;
  }
`

const H1 = styled.h1`
  @media screen and (max-width: 600px) { width: 85%; }
`

const H2 = styled.h2`
  width: 68%;
  @media screen and (max-width: 600px) { width: 85%; }
`

const SemiCirle = styled.div`
  background-color: #16212E;
  width: 100%;
  height: 25em;
  border-radius: 100em 100em 0 0 ;
  display: flex;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 1023px) { height: 17em; }
  @media screen and (max-width: 600px) { height: 12em; }
`

const H3 = styled.h3`
  font-size: 10em;
  margin: 0;
  font-family: 'MonteCarlo';
  color: #E9E1DA;
  font-weight: 400;
  @media screen and (max-width: 1023px) {
    padding-top: 0.5em;
    font-size: 7em;
  }
  @media screen and (max-width: 600px) {
    padding-top: 0.5em;
    font-size: 5em;
  }
`

const Rectangle = styled.div`
  background-color: #16212E;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50em;
  width: 100%;
  margin-bottom: 10em;
  @media screen and (max-width: 600px) {}
`

const TxtTarif = styled.section`
  background-color: #E9E1DA;
  height: 90%;
  width: 90%;
`

function App() {
  return (
    <div>
      <Header></Header>
      <main>
        <Div>
          <Stone src={ImgStone} alt='3d stepping stones in the ocean at sunset' />
        </Div>
        <Presention className="bgLeaf">
          <TxtPresentation>
            <H1>Esthéticienne à domicile sur la commune Écouen</H1>
            <H2>Professionnelle de la beauté depuis 2006, forte de mon expérience, je vous propose des soins visage et corps, épilation.</H2>
          </TxtPresentation>
        </Presention>
        <SemiCirle>
          <H3>Nessa'beauty</H3>
        </SemiCirle>
        <Rectangle>
          <TxtTarif>
            <p>LOREM ipsum dolor sit amet consectetur adipiscing elit ad feugiat fermentum malesuada imperdiet pretium non semper sapien nunc turpis ultricies at tincidunt porta posuere purus tempor sem lectus sed finibus quam faucibus sollicitudin vel dictumst elementum aenean in convallis montes phasellus quisque facilisi rhoncus libero curabitur commodo vitae ut felis</p>
          </TxtTarif>
        </Rectangle>
      </main>
      <Footer></Footer>
    </div>
  );
}

export default App;
