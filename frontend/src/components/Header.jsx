import styled from 'styled-components'
import '../styles/style.css'
import Logo from '../images/logo.png'
import { useState } from 'react'
import IconChevron from '../images/chevron-down-solid.webp'

const Head = styled.header`
    background-color: #16212E;
    height: 180px;
    display: flex;
    justify-content: center;
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


const Menu = styled.div`
    display: flex;
    justify-content: space-between;
    @media screen and (max-width: 600px) {
        display: none;
    }
`

const MenuMobile = styled.div`
    @media screen and (max-width: 600px) {
        flex-direction: column;
        width: 100%;
        background-color: #16212E;
        position: absolute;
        left: 0;
        top: 180px;
        padding: 0 40px;
    }
`

const Margin = styled.p`
    margin: auto 25px;
    @media screen and (max-width: 600px) {
        margin: inherit;
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
                                <p className='white'>Accueil</p>
                                <p className='white'>Services</p>
                                <p className='white'>Prestations</p>
                            </MenuMobile>
                        </>
                    )}
                    <Menu>
                        <p className='white'>Accueil</p>
                        <Margin className='white'>Services</Margin>
                        <p className='white'>Prestations</p>
                    </Menu>
                </nav>
                <img className='logo' src={Logo} alt='Logo Nessa Beauty' />
            </Div>
        </Head>
    )
}

export default Header;