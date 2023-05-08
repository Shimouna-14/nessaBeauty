import styled from "styled-components";
import { Link } from 'react-router-dom'

const Foot = styled.footer`
    height: 22em;
    width: 100%;
    background-color: #16212e;
    color: #DDCCC5;
    @media screen and (max-width: 600px) { height: 37em; }
`

const Row = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    @media screen and (max-width: 600px) { flex-direction: column-reverse; }
`

const Maps = styled.iframe`
`

const Section = styled.section`
    @media screen and (max-width: 600px) { text-align: center; }
`

const Center = styled.p`
    text-align: center;
    margin: 26px 40px;
`

function Footer() {
    let today = new Date();
    let year = today.getUTCFullYear();

    return (
        <Foot>
            <Row>
                <Section>
                    <p>Adresse de l'esthéticienne</p>
                    <div>
                        <Maps src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=17%20rue%20Paul%20Lorillon%2095440%20Ecouen%20+(Nessa'beauty)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed">
                            <a href="https://www.maps.ie/distance-area-calculator.html">measure distance on map</a>
                        </Maps>
                    </div>
                </Section>
                <Section>
                    <p>Contact :</p>
                    <p>06 34 20 46 62</p>
                    <p>LAVANIER Phylicia</p>
                    <p>Lundi - Samedi: 10h - 19h</p>
                    <p>Jeudi & Dimanche: Fermé</p>
                </Section>
            </Row>
            <Center>Copyright © {year} - Nessa'beauty | <Link to='/nessabeauty/mention-legale'>Mention Légale</Link></Center>
        </Foot>
    );
}

export default Footer;
