import '../styles/style.css'

export function EpilationsPresta({ id, name, price }) {
    return(
        <>
            <div className="flex justify-between w-[65%] md:w-[80%] sm:w-[90%]" key={id}>
                <p className='m-0.5'>{name}</p>
                <p className='m-0.5'>{price}</p>
            </div>
        </>
    )
};

export function SoinsPresta({ id, name, price }) {
    return(
        <>
            <div className="flex justify-between " key={id}>
                <p className='m-0.5'>{name}</p>
                <p className='m-0.5'>{price}</p>
            </div>
        </>
    )
};

export function ModelagesPresta({ id, name, price }) {
    return(
        <>
            <div className="flex justify-between" key={id}>
                <p className='m-0.5'>{name}</p>
                <p className='m-0.5'>{price}</p>
            </div>
        </>
    )
};


export function ForfaitsPreta({ id, name, price }) {
    return(
        <>
            <div className="flex justify-between" key={id}>
                <p className='m-0.5'>{name}</p>
                <p className='m-0.5'>{price}</p>
            </div>
        </>
    )
};

export function EpilationsHommePresta({ id, name, price }) {
    return(
        <>
            <div className="flex justify-between" key={id}>
                <p className='m-0.5'>{name}</p>
                <p className='m-0.5'>{price}</p>
            </div>
        </>
    )
};
