import React from 'react';
import './Panier.css'

export default function Panier(props) {
    return <div className='panier-element'>
                <p>Produit : {props.nom} || Unités : {props.quantite}</p>
                <button onClick={props.rendreArticle}>Rendre</button>
            </div>
}



