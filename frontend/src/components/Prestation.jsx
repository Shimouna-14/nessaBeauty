import '../styles/style.css'
import styled from 'styled-components'
import PropTypes from 'prop-types';

const Epilations = styled.div`
    width: 65%;
    @media screen and (max-width: 1023px) { width: 80%; }
    @media screen and (max-width: 600px) { width: 90%; }
`

const Soins = styled.div` width: 100%; `

const Modelages = styled.div` width: 100%; `

const CenterForfaits = styled.div` width: 100%; `

const CenterHomme = styled.div`width: 100%; `

export function EpilationsPresta({ id, namePresta, price }) {
    return(
        <>
            <Epilations className="margin" key={id}>
                <p>{namePresta}</p>
                <p>{price}</p>
            </Epilations>
        </>
    )
};

EpilationsPresta.prototype = {
    id: PropTypes.string.isRequired,
    namePresta: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired
};
EpilationsPresta.defaultProps = {
    id: "",
    namePresta: "",
    price: "",
};

export function SoinsPresta({ id, namePresta, price }) {
    return(
        <>
            <Soins className="margin" key={id}>
                <p>{namePresta}</p>
                <p>{price}</p>
            </Soins>
        </>
    )
};

SoinsPresta.prototype = {
    id: PropTypes.string.isRequired,
    namePresta: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired
};
SoinsPresta.defaultProps = {
    id: "",
    namePresta: "",
    price: "",
};


export function ModelagesPresta({ id, namePresta, price }) {
    return(
        <>
            <Modelages className="margin" key={id}>
                <p>{namePresta}</p>
                <p>{price}</p>
            </Modelages>
        </>
    )
};

ModelagesPresta.prototype = {
    id: PropTypes.string.isRequired,
    namePresta: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired
};
ModelagesPresta.defaultProps = {
    id: "",
    namePresta: "",
    price: "",
};

export function ForfaitsPreta({ id, namePresta, price }) {
    return(
        <>
            <CenterForfaits className="margin" key={id}>
                <p>{namePresta}</p>
                <p>{price}</p>
            </CenterForfaits>
        </>
    )
};

ForfaitsPreta.prototype = {
    id: PropTypes.string.isRequired,
    namePresta: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired
};
ForfaitsPreta.defaultProps = {
    id: "",
    namePresta: "",
    price: "",
};

export function EpilationsHommePresta({ id, namePresta, price }) {
    return(
        <>
            <CenterHomme className="margin" key={id}>
                <p>{namePresta}</p>
                <p>{price}</p>
            </CenterHomme>
        </>
    )
};

EpilationsHommePresta.prototype = {
    id: PropTypes.string.isRequired,
    namePresta: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired
};
EpilationsHommePresta.defaultProps = {
    id: "",
    namePresta: "",
    price: "",
};