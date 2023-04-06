import styled from 'styled-components'
import '../styles/style.css'
import Logo from '../images/logo.png'
import { useState } from 'react'
import IconChevron from '../images/chevron-down-solid.webp'

const Header = styled.header`
    background-color: #16212E;
    height: 11em;
    display: flex;
    justify-content: center;
    @media screen and (max-width: 600px) {
        height: 9em;
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
    height: 2.5em;
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
        top: 8em;
        padding: 0 40px;
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
    height: 8em;
    width: auto;
    @media screen and (max-width: 600px) {
        height: 6em;
        width: auto;
    }
`

const Margin = styled.p`
    margin: auto 25px;
    @media screen and (max-width: 600px) {
        margin: inherit;
    }
`

function Headerer() {
    const [isOpen, setIsOpen] = useState(true)

    return (
        <Header>
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
                                <p className='beige'>Accueil</p>
                                <p className='beige'>Services</p>
                                <p className='beige'>Prestations</p>
                            </MenuMobile>
                        </>
                    )}
                    <Menu>
                        <p className='beige'>Accueil</p>
                        <Margin className='beige'>Services</Margin>
                        <p className='beige'>Prestations</p>
                    </Menu>
                </nav>
                <Img className='logo' src={Logo} alt='Logo Nessa Beauty' />
            </Div>
        </Header>
    )
}

export default Headerer;