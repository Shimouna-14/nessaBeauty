import '../styles/style.css'
import Logo from '../assets/logo.webp'
import { useState } from 'react'
import Chevron from '../assets/vector/chevron.svg'
import { HashLink } from 'react-router-hash-link';
import { Link } from 'react-router-dom'


function Header() {
    const [isOpen, setIsOpen] = useState(true)

    return (
        <header className='bg-blue h-44 flex justify-center sm:h-28'>
            <div className='flex justify-between items-center w-11/12 h-auto'>
                <nav>
                    {isOpen ? (
                        <>
                            <img className='hidden h-12 w-12 p-2.5 cursor-pointer sm:inline' src={Chevron} alt="Icon chevron down solid" onClick={() => setIsOpen(false)} />
                        </>
                    ) : (
                        <>
                            <img className='hidden h-12 w-12 p-2.5 cursor-pointer sm:inline' src={Chevron} alt="Icon chevron down solid" onClick={() => setIsOpen(true)} />
                            <div className='w-full absolute bg-blue left-0 top-28 pl-9 lg:hidden z-10'>
                                <Link to='/nessabeauty'><p className='beige '>Accueil</p></Link>
                                <HashLink smooth to={'/#prestation'}><p className='beige py-5'>Prestations</p></HashLink>
                            </div>
                        </>
                    )}
                    <div className='flex justify-between sm:hidden'>
                        <Link to='/nessabeauty'><p className='beige text-3xl pl-10'>Accueil</p></Link>
                        <HashLink smooth to={'/nessabeauty/#prestation'}><p className='beige text-3xl pl-10'>Prestations</p></HashLink>
                    </div>
                </nav>
                <Link rel="preload" to='/nessabeauty'><img className='h-36 sm:h-24' src={Logo} alt='Logo Nessa Beauty' /></Link>
            </div>
        </header>
    )
}

export default Header;