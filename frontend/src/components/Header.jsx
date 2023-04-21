import styled from 'styled-components'
import '../styles/style.css'
import Logo from '../images/logo.png'
import { useState } from 'react'
import IconChevron from '../images/chevron.png'
import { HashLink } from 'react-router-hash-link';
import { Link } from 'react-router-dom'

const Head = styled.header`
    background-color: #16212E;
    height: 11em;
    display: flex;
    justify-content: center;
    @media screen and (max-width: 600px) {
        height: 7em;
    }
`

const Div = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 90%;
    height: auto;
`

const Chevron = styled.img`
    display: none;
    height: 2em;
    width: auto;
    padding-left: 10px;
    cursor: pointer;
    @media screen and (max-width: 600px) {
        display: initial;
    }
`

const MenuMobile = styled.div`
    display: none;
    @media screen and (max-width: 600px) {
        display: initial;
        width: 100%;
        background-color: #16212E;
        position: absolute;
        left: 0;
        top: 7em;
        z-index: 2;
    }
`

const Menu = styled.div`
    display: flex;
    justify-content: space-between;
    @media screen and (max-width: 600px) {
        display: none;
    }
`

const Img = styled.img`
    height: 9em;
    width: auto;
    @media screen and (max-width: 600px) {
        height: 6em;
        width: auto;
    }
`

function Header() {
    const [isOpen, setIsOpen] = useState(true)

    return (
        <Head>
            <Div>
                <nav>
                    {isOpen ? (
                        <>
                            <Chevron src={IconChevron} alt="Icon chevron down solid" onClick={() => setIsOpen(false)} />
                        </>
                    ) : (
                        <>
                            <Chevron src={IconChevron} alt="Icon chevron down solid" onClick={() => setIsOpen(true)} />
                            <MenuMobile>
                                <Link to='/nessabeauty'><p className='beige'>Accueil</p></Link>
                                <HashLink smooth to={'/nessabeauty/#prestation'}><p className='beige'>Prestations</p></HashLink>
                            </MenuMobile>
                        </>
                    )}
                    <Menu>
                        <Link to='/nessabeauty'><p className='beige'>Accueil</p></Link>
                        <HashLink smooth to={'/nessabeauty/#prestation'}><p className='beige'>Prestations</p></HashLink>
                    </Menu>
                </nav>
                <Link to='/nessabeauty'><Img className='logo' src={Logo} alt='Logo Nessa Beauty' /></Link>
            </Div>
        </Head>
    )
}

export default Header;