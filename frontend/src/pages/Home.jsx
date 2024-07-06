import '../styles/style.css'
import ImgStone from '../images/3d-stepping-stones-in-the-ocean-at-sunset.webp'
import { EpilationsPresta, SoinsPresta, ModelagesPresta, ForfaitsPreta, EpilationsHommePresta } from '../components/Prestation'
import { Epilations, Soins, Modelages, Forfaits, EpilationsHomme } from '../data/prestation'

function Home() {
    document.title = "Nessa'beauty"
    return(
        <>
            <main>
                <div className='flex justify-center h-80 sm:h-40'><img className='h-full w-full object-cover opacity-90' rel='preload' src={ImgStone} alt='3d stepping stones in the ocean at sunset' /></div>
                <section className='bg-beige w-full h-96 flex justify-center items-center mb-16'>
                    <div className='bg-light-beige w-[90%] lg:w-3/5 h-[75%] lg:h-[70%] rounded-xl flex flex-col justify-center items-center text-center text-xl shadow-presentation'>
                        <h1 className='w-[85%] my-7'>Esthéticienne à domicile sur la commune Écouen</h1>
                        <h2 className='lg:w-8/12 w-[85%] mb-7'>Professionnelle de la beauté depuis 2006, forte de mon expérience, je vous propose des soins visage et corps, épilation.</h2>
                    </div>
                </section>
                <div className='bg-blue w-full h-80 rounded-t-[100em] flex justify-center items-center md:h-72 sm:h-48'>
                    <h3 className='text-[10em] md:text-[7em] sm:text-[5em] sm:text- m-0 text-light-beige pt-2 lg:pt-0 monteCarlo'>Nessa'beauty</h3>
                </div>
                <div className='bg-blue flex justify-center items-center w-full pb-20'>
                    <section className='bg-light-beige w-[90%] h-[90%] flex flex-col items-center justify-center py-20 sm:py-10'>
                        <section className='flex items-center w-full flex-col lg:flex-row'>
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
                            {/* Line.. */}
                            <span className='hidden lg:block w-[2px] h-[580px] bg-black'></span>
                            <section className='flex flex-col items-center w-full'>
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
                        <div className='w-2/4 md:w-[80%] sm:w-[90%]'>
                            <h4 className='text-center text-3xl my-9'>Forfaits</h4>
                            {Forfaits.map((prestation) =>(
                            <ForfaitsPreta
                                key={prestation.id}
                                name={prestation.name}
                                price={prestation.price}
                            />
                        ))}
                        </div>
                        <div className='w-2/4 md:w-[80%] sm:w-[90%]'>
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
                </div>
            </main>
        </>
    );
}

export default Home;