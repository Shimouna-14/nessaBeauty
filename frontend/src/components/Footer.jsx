import { Link } from 'react-router-dom'

function Footer() {
    let today = new Date();
    let year = today.getUTCFullYear();

    return (
        <footer className="h-[22em] sm:h-[36em] bg-blue text-beige mt-16">
            <div className='flex justify-around items-center sm:flex-col-reverse'>
                <section className='sm:text-center'>
                    <p className='text-2xl my-6'>Adresse de l'esthéticienne</p>
                    <div rel="preload">
                        <iframe title="maps" src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=17%20rue%20Paul%20Lorillon%2095440%20Ecouen%20+(Nessa'beauty)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed">
                            <a href="https://www.maps.ie/distance-area-calculator.html">measure distance on map</a>
                        </iframe>
                    </div>
                </section>
                <section className='sm:text-center'>
                    <p className='mt-10'>Contact :</p>
                    <p>07 66 48 19 31</p>
                    <p>Phylicia</p>
                    <p className='mt-8 '>Lundi - Samedi: 10h - 19h</p>
                    <p>Jeudi & Dimanche: Fermé</p>
                </section>
            </div>
            <p className='text-center my-10'>Copyright © {year} - Nessa'beauty | <Link to='/mention-legale'>Mention Légale</Link></p>
        </footer>
    );
}

export default Footer;
