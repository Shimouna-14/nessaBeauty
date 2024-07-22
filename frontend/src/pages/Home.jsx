import '../styles/style.css'
import Document from '../assets/Consentement-epilation-laser.pdf'
import ImgStone from '../assets/3d-stepping-stones-in-the-ocean-at-sunset.webp'
import LeafLeft from '../assets/leaf-top-left.png'
import LeafRight from '../assets/leaf-bottom-right.png'
import VectorBeigeBottomLeft from '../assets/vector/Vector-beige-bottom-left.svg'
import VectorBeigeCenter from '../assets/vector/Vector-beige-center.svg'
import VectorBrownRight from '../assets/vector/Vector-brown-right.svg'
import VectorBrownTopLeft from '../assets/vector/Vector-brown-top-left.svg'
import VectorWhiteBottomRight from '../assets/vector/Vector-white-bottom-right.svg'
import VectorWhiteTopRight from '../assets/vector/Vector-white-top-right.svg'
import RectangleTopLeft from '../assets/vector/rectangle-top-left.svg'
import RectangleTopRight from '../assets/vector/rectangle-top-right.svg'
import RectangleLeft from '../assets/vector/rectangle-left.svg'
import RectangleRight from '../assets/vector/rectangle-right.svg'
import { EpilationsPresta, SoinsPresta, ModelagesPresta, ForfaitsCirePreta, EpilationsHommePresta, VisagePresta, HautPresta, BasPresta, CorpsPresta, ForfaitLaserPresta } from '../components/Prestation'
import { Epilations, Soins, Modelages, ForfaitsCire, EpilationsHomme, Visage, Haut, Bas, Corps, ForfaitLaser } from '../data/prestation'

function Home() {
    document.title = "Nessa'beauty"

    return(
        <>
            <main>
                <div className='flex justify-center h-80 sm:h-40'><img className='h-full w-full object-cover opacity-90' rel='preload' src={ImgStone} alt='3d stepping stones in the ocean at sunset' /></div>
                <section className='bg-beige w-full h-96 flex justify-center items-center mb-16 overflow-hidden relative'>
                    <img className='absolute left-[-30px] top-[-204px] w-auto md:h-[30em] md:left-[-52px] md:top:[-173px]' src={LeafLeft} alt="Branche de feuille" />
                    <img className='absolute right-[-13px] bottom-[-183px] w-auto h-[30em] lg:h-auto md:right[-18px] md:bottom-[-177px]' src={LeafRight} alt="Branche de feuille" />
                    <div className='bg-light-beige w-[90%] lg:w-3/5 h-[75%] lg:h-[70%] rounded-xl flex flex-col justify-center items-center text-center text-xl shadow z-10'>
                        <h1 className='w-[85%] my-7'>Esthéticienne à domicile sur la commune Écouen</h1>
                        <h2 className='lg:w-8/12 w-[85%] mb-7'>Professionnelle de la beauté depuis 2006, forte de mon expérience, je vous propose des soins visage et corps, épilation.</h2>
                    </div>
                </section>
                <div className='bg-blue w-full h-80 rounded-t-[100em] flex justify-center items-center md:h-72 sm:h-48 overflow-hidden' id='prestation'>
                    <h3 className='text-[10em] md:text-[7em] sm:text-[5em] sm:text- m-0 text-light-beige pt-2 lg:pt-0 monteCarlo'>Nessa'beauty</h3>
                </div>
                <div className='bg-blue flex justify-center items-center flex-col w-full pb-20 overflow-hidden'>
                    {/*  */}
                    <section className='bg-light-beige w-[90%] h-[90%] flex flex-col items-center justify-center py-20 sm:py-10 m-20 mt-0
                     overflow-hidden relative'>
                        <img className='absolute left-[-81px] bottom-[-94px]' src={VectorBeigeBottomLeft} alt="Forme abtraite" />
                        <img className='absolute bottom-[483px] lg:bottom-[318px]' src={VectorBeigeCenter} alt="Forme abtraite" />
                        <img className='absolute right-0 bottom-[890px] lg:bottom-[450px]' src={VectorBrownRight} alt="Forme abtraite" />
                        <img className='absolute left-[-135px] top-[-271px]' src={VectorBrownTopLeft} alt="Forme abtraite" />
                        <img className='absolute bottom-[-235px] right-[-186px] lg:right-0' src={VectorWhiteBottomRight} alt="Forme abtraite" />
                        <img className='absolute top-[-200px] right-[-67px]' src={VectorWhiteTopRight} alt="Forme abtraite" />
                        <section className='flex items-center w-full flex-col lg:flex-row z-10'>
                            <section className='flex flex-col items-center w-full'>
                                <h4 className='text-center text-3xl my-9'>Épilations</h4>
                                {Epilations.map((prestation) =>(
                                    <EpilationsPresta
                                        key={prestation.id}
                                        name={prestation.name}
                                        price={prestation.price}
                                    />
                                ))}
                            </section>
                            {/* Line */}
                            <span className='hidden lg:block w-[2px] h-[580px] bg-black z-10'></span>
                            <section className='flex flex-col items-center w-full z-10'>
                                <h4 className='text-center text-3xl my-9'>Soins Visage</h4>
                                <div className='w-[65%] md:w-[80%] sm:w-[90%]'>
                                    {Soins.map((prestation) =>(
                                        <SoinsPresta
                                            key={prestation.id}
                                            name={prestation.name}
                                            price={prestation.price}
                                        />
                                        ))}
                                </div>
                                <h4 className='text-center text-3xl my-9'>Modelage</h4>
                                <div className='w-[65%] md:w-[80%] sm:w-[90%]'>
                                    
                                    {Modelages.map((prestation) =>(
                                        <ModelagesPresta
                                            key={prestation.id}
                                            name={prestation.name}
                                            price={prestation.price}
                                        />
                                    ))}
                                </div>
                            </section>
                        </section>
                        <div className='w-2/4 md:w-[80%] sm:w-[90%] z-10'>
                            <h4 className='text-center text-3xl my-9'>Forfaits</h4>
                            {ForfaitsCire.map((prestation) =>(
                            <ForfaitsCirePreta
                                key={prestation.id}
                                name={prestation.name}
                                price={prestation.price}
                            />
                        ))}
                        </div>
                        <div className='w-2/4 md:w-[80%] sm:w-[90%] z-10'>
                            <h4 className='text-center text-3xl my-9'>Épilations Hommes</h4>
                            {EpilationsHomme.map((prestation) =>(
                                <EpilationsHommePresta
                                    key={prestation.id}
                                    name={prestation.name}
                                    price={prestation.price}
                                />
                            ))}
                        </div>
                    </section> 
                    <section className='bg-light-beige w-[90%] py-20 sm:py-10 overflow-hidden relative'>
                            <img className='absolute left-[-25px] top-[-5px]' src={RectangleTopLeft} alt="Losange" />
                            <img className='absolute right-[-25px] top-36 sm:top-80' src={RectangleTopRight} alt="Losange" />
                            <img className='absolute left-[-25px] inset-y-[50em] sm:hidden' src={RectangleLeft} alt="Losange" />
                            <img className='absolute right-[-25px] inset-y-[80em] md:inset-y-[105em] sm:hidden' src={RectangleRight} alt="Losange" />
                            <img className='absolute left-[-25px] inset-y-[122em] md:inset-y-[155em] sm:hidden' src={RectangleLeft} alt="Losange" />
                        <h4 className='text-center text-3xl my-9 z-10 relative'>Épilation Laser Diode</h4>
                        <section className='px-36 md:px-16 sm:px-5 mb-20 flex flex-col z-10 relative'>
                            <p className='mb-5'>L'épilation définitive au laser diode est considérée comme l'une des techniques d'épilation les plus efficaces au monde. </p>
                            <p className='mb-5'>Sa particularité est, qu'en plus d'épiler efficacement (les résultats sont visibles dès la première séance.), le laser diode respecte la peau, évitant à cette dernière d'être brûlée ou endommagée. <br /> Convenant par la même occasion à tous les types de peau.</p>
                            <p className='mb-5'>En pratique, la lumière diffusée par le laser diode est absorbée par la pigmentation du poil, par sa mélanine. Le laser suit la pigmentation du poil de la tête à la racine. 
                            Le bulbe est ainsi éradiqué. Les poils disparaissent, repoussent plus fins et en moins grande quantité, 80 à 90 % des poils enlevés, en 8 séances minimum.</p>
                            <p className='sm:text-center'><strong>Merci de remplir <a className='underline text-black' href={Document} download="Consentement-epilation-laser.pdf">le formulaire de consentement</a>, à donner lors du 1er rendez-vous.</strong></p>
                        </section>
 
                        <section className='bg-beige pl-6 sm:pl-4 sm:pr-2 w-4/6 md:w-[95.5%] sm:w-full pr-14 py-5 rounded-r-2xl sm:rounded-2xl mb-10 shadow z-10 relative'>
                            <h4 className='text-3xl mb-5'>Visage</h4>
                            <section className='flex justify-between flex-col'>
                                {Visage.map((prestation) =>(
                                    <VisagePresta
                                        key={prestation.id}
                                        name={prestation.name}
                                        unique={prestation.unique}
                                        forfait={prestation.forfait}
                                    />
                                ))}
                            </section>                            
                        </section>

                        <section className='bg-beige pl-6 sm:pl-4 sm:pr-2 w-4/6 md:w-[95.5%] sm:w-full pr-14 py-5 rounded-l-2xl sm:rounded-2xl mb-10 ml-[33.333333%] md:ml-[4.5%] sm:ml-0 shadow z-10 relative'>
                            <h4 className='text-3xl mb-5'>Haut du corps</h4>
                            <section className='flex justify-between flex-col'>
                                {Haut.map((prestation) =>(
                                    <HautPresta
                                    key={prestation.id}
                                    name={prestation.name}
                                    unique={prestation.unique}
                                    forfait={prestation.forfait}
                                    />
                                ))}
                            </section>
                        </section>

                        <section className='bg-beige pl-6 sm:pl-4 sm:pr-2 w-4/6 md:w-[95.5%] sm:w-full pr-14 py-5 rounded-r-2xl sm:rounded-2xl mb-10 shadow z-10 relative'>
                            <h4 className='text-3xl mb-5'>Bas du corps</h4>
                            <section className='flex justify-between flex-col'>
                                {Bas.map((prestation) =>(
                                    <BasPresta
                                    key={prestation.id}
                                    name={prestation.name}
                                    unique={prestation.unique}
                                    forfait={prestation.forfait}
                                    />
                                ))}
                            </section>                            
                        </section>

                        <section className='bg-beige pl-6 sm:pl-4 sm:pr-2 w-4/6 md:w-[95.5%] sm:w-full pr-14 py-5 rounded-l-2xl sm:rounded-2xl mb-10 ml-[33.333333%] md:ml-[4.5%] sm:ml-0 shadow z-10 relative'>
                            <h4 className='text-3xl mb-5'>Corps</h4>
                            <section className='flex justify-between flex-col'>
                                {Corps.map((prestation) =>(
                                    <CorpsPresta
                                    key={prestation.id}
                                    name={prestation.name}
                                    unique={prestation.unique}
                                    forfait={prestation.forfait}
                                    />
                                ))}
                            </section>
                        </section>

                        <section className='bg-beige pl-6 sm:pl-4 sm:pr-2 w-4/6 md:w-[95.5%] sm:w-full pr-14 py-5 rounded-r-2xl sm:rounded-2xl mb-10 shadow z-10 relative'>
                            <h4 className='text-3xl mb-5'>Forfaits</h4>
                            <section className='flex justify-between flex-col'>
                                {ForfaitLaser.map((prestation) =>(
                                    <ForfaitLaserPresta
                                    key={prestation.id}
                                    name={prestation.name}
                                    unique={prestation.unique}
                                    forfait={prestation.forfait}
                                    />
                                ))}
                            </section>                            
                        </section>

                        <p className='text-right mr-9 sm:mx-4'>* Paiement en plusieurs fois à partir de 300 € <br />Voir les conditions des réglements sur place</p>
                                                    
                    </section>
                </div>
            </main>
        </>
    );
}

export default Home;