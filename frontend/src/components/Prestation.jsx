export function EpilationsPresta({ id, name, price }) {
  return (
    <div
      className="flex justify-between w-[65%] md:w-[80%] sm:w-[90%]"
      key={id}
    >
      <p className="m-0.5">{name}</p>
      <p className="m-0.5">{price}</p>
    </div>
  );
}

export function SoinsPresta({ id, name, price }) {
  return (
    <div className="flex justify-between " key={id}>
      <p className="m-0.5">{name}</p>
      <p className="m-0.5">{price}</p>
    </div>
  );
}

export function ModelagesPresta({ id, name, price }) {
  return (
    <div className="flex justify-between" key={id}>
      <p className="m-0.5">{name}</p>
      <p className="m-0.5">{price}</p>
    </div>
  );
}

export function ForfaitsCirePreta({ id, name, price }) {
  return (
    <div className="flex justify-between" key={id}>
      <p className="m-0.5">{name}</p>
      <p className="m-0.5">{price}</p>
    </div>
  );
}

export function EpilationsHommePresta({ id, name, price }) {
  return (
    <div className="flex justify-between" key={id}>
      <p className="m-0.5">{name}</p>
      <p className="m-0.5">{price}</p>
    </div>
  );
}

export function VisagePresta({ id, name, unique, forfait }) {
  return (
    <section className='flex justify-between' key={id}>
      <section>
      <p className="w-36 sm:w-[5em] mt-6">{name}</p>
      </section>
      <section className="text-center pr-2">
        <p className="text-beige">Séance</p>
        <p>{unique}</p>
      </section>
      <section className="text-center">
        <p className="text-beige">6 séances + 2 offertes</p>
        <p>{forfait}</p>
      </section>
    </section>
  );
}

export function HautPresta({ id, name, unique, forfait }) {
  return (
    <section className='flex justify-between' key={id}>
      <section>
      <p className="w-36 sm:w-[5em] mt-6">{name}</p>
      </section>
      <section className="text-center pr-2">
        <p className="text-beige">Séance</p>
        <p>{unique}</p>
      </section>
      <section className="text-center">
        <p className="text-beige">6 séances + 2 offertes</p>
        <p>{forfait}</p>
      </section>
    </section>
  );
}

export function BasPresta({ id, name, unique, forfait }) {
  return (
    <section className='flex justify-between' key={id}>
      <section>
      <p className="w-36 sm:w-[5em] mt-6">{name}</p>
      </section>
      <section className="text-center pr-2">
        <p className="text-beige">Séance</p>
        <p>{unique}</p>
      </section>
      <section className="text-center">
        <p className="text-beige">6 séances + 2 offertes</p>
        <p>{forfait}</p>
      </section>
    </section>
  );
}

export function CorpsPresta({ id, name, unique, forfait }) {
  return (
    <section className='flex justify-between' key={id}>
      <section>
      <p className="w-36 sm:w-[5em] mt-6">{name}</p>
      </section>
      <section className="text-center pr-2">
        <p className="text-beige">Séance</p>
        <p >{unique}</p>
      </section>
      <section className="text-center">
        <p className="text-beige">6 séances + 2 offertes</p>
        <p>{forfait}</p>
      </section>
    </section>
  );
}

export function ForfaitLaserPresta({ id, name, unique, forfait }) {
  return (
    <section className='flex justify-between' key={id}>
      <section>
      <p className="w-36 sm:w-[5em] mt-6">{name}</p>
      </section>
      <section className="text-center pr-2">
        <p className="text-beige">Séance</p>
        <p>{unique}</p>
      </section>
      <section className="text-center">
        <p className="text-beige">6 séances + 2 offertes</p>
        <p>{forfait}</p>
      </section>
    </section>
  );
}
