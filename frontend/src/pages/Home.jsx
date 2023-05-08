import '../styles/style.css'
import styled from 'styled-components'
import ImgStone from '../images/3d-stepping-stones-in-the-ocean-at-sunset.jpg'
import { EpilationsPresta, SoinsPresta, ModelagesPresta, ForfaitsPreta, EpilationsHommePresta } from '../components/Prestation'
import { Epilations, Soins, Modelages, Forfaits, EpilationsHomme } from '../components/ListPrestation'

const Img = styled.div`
    display: flex;
    justify-content: center;
    top: -20px;
    position: relative;
    @media screen and (max-width: 600px) { position: initial; }
`

const Stone = styled.img`
    height: auto;
    width: 70%;
    border-radius: 3px;
    @media screen and (max-width: 600px) {
        width: 100%;
        border-radius: 0;
    }
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
    height: 21em;
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
    width: 100%;
    margin-bottom: 7em;
    padding-bottom: 5em;
    @media screen and (max-width: 600px) {}
`

const TxtTarif = styled.section`
    background-color: #E9E1DA;
    height: 90%;
    width: 90%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-bottom: 5em;
    @media screen and (max-width: 600px) { padding-bottom: 2.5em }
`

const ThreeBloc = styled.section`
    display: flex;
    align-items: center;
    width: 100%;
    margin-top: 5em;
    @media screen and (max-width: 800px) { flex-direction: column; }
    @media screen and (max-width: 600px) { margin-top: 2.5em }
`

const Section = styled.section`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`
const Span = styled.span`
    width: 1px;
    height: 580px;
    background: #000;
    @media screen and (max-width: 800px) { display: none; }
`

const Width = styled.div`
    width: 65%;
    @media screen and (max-width: 1023px) { width: 80%; }
    @media screen and (max-width: 600px) { width: 90%; }
`

const WidthCenter = styled.div`
    margin: 10px 0;
    width: 50%;
    @media screen and (max-width: 1023px) { width: 80%; }
    @media screen and (max-width: 600px) { width: 90%; }
`

function Home() {
    return(
        <>
            <main>
                <Img><Stone src={ImgStone} alt='3d stepping stones in the ocean at sunset' /></Img>
                <Presention>
                <TxtPresentation>
                    <H1>Esthéticienne à domicile sur la commune Écouen</H1>
                    <H2>Professionnelle de la beauté depuis 2006, forte de mon expérience, je vous propose des soins visage et corps, épilation.</H2>
                </TxtPresentation>
                </Presention>
                <SemiCirle id='prestation'> <H3>Nessa'beauty</H3> </SemiCirle>
                <Rectangle>
                    <TxtTarif>
                        <ThreeBloc>
                            <Section id='borderRight'>
                                <h4>Épilations</h4>
                                {Epilations.map((prestation) =>(
                                    <EpilationsPresta
                                        key={prestation.id}
                                        namePresta={prestation.name}
                                        price={prestation.price}
                                    />
                                ))}
                            </Section>
                            <Span></Span>
                            <Section>
                                <h4>Soins Visage</h4>
                                <Width>
                                    {Soins.map((prestation) =>(
                                        <SoinsPresta
                                            key={prestation.id}
                                            namePresta={prestation.name}
                                            price={prestation.price}
                                        />
                                        ))}
                                </Width>
                                <h4>Modelage</h4>
                                <Width>
                                    {Modelages.map((prestation) =>(
                                        <ModelagesPresta
                                            key={prestation.id}
                                            namePresta={prestation.name}
                                            price={prestation.price}
                                        />
                                    ))}
                                </Width>
                            </Section>
                        </ThreeBloc>
                        <WidthCenter>
                            <h4>Forfaits</h4>
                            {Forfaits.map((prestation) =>(
                            <ForfaitsPreta
                                key={prestation.id}
                                namePresta={prestation.name}
                                price={prestation.price}
                            />
                        ))}
                        </WidthCenter>
                        <WidthCenter>
                            <h4>Épilations Hommes</h4>
                            {EpilationsHomme.map((prestation) =>(
                                <EpilationsHommePresta
                                    key={prestation.id}
                                    namePresta={prestation.name}
                                    price={prestation.price}
                                />
                            ))}
                        </WidthCenter>
                    </TxtTarif>
                </Rectangle>
            </main>
        </>
    );
}

export default Home;