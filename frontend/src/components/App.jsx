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
  @media screen and (max-width: 600px) {
    position: initial;
  }
`

const Stone = styled.img`
  height: auto;
  width: 70%;
  border-radius: 3px;
  @media screen and (max-width: 600px) {
    width: 100%;
  }
`

const Presention = styled.section`
  background-color: #ddccc5;
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
  @media screen and (max-width: 600px) {width: 85%;}
`

const H2 = styled.h2`
  width: 68%;
  @media screen and (max-width: 600px) {width: 85%;}
`

const Tarif = styled.section`

`

function App() {
  return (
    <div>
      <Header></Header>
      <main>
        <Div>
          <Stone src={ImgStone} alt='3d stepping stones in the ocean at sunset' />
        </Div>
        <Presention>
          <TxtPresentation>
            <H1>Esthéticienne à domicile sur la commune Écouen</H1>
            <H2>Professionnelle de la beauté depuis 2006, forte de mon expérience,
              je vous propose des soins visage et corps, épilation.</H2>
          </TxtPresentation>
        </Presention>
        <Tarif>

        </Tarif>
      </main>
      <Footer></Footer>
    </div>
  );
}

export default App;
