import React from 'react';
import './Produit.css'



export default function Produit(props) {



    return <div className={props.stock > 1 ? 'produit-content' : props.stock > 0 ? 'produit-content stock-faible' : 'produit-content stock-null'}>
        <div className='img-container'>
            <img src={props.img}/>
        </div>
        <h2>{props.nom}</h2>
        <p>Prix : {props.prix}€</p>
        <p>Stock : {props.stock} unités</p>
        {(props.stock > 0 && props.argent >= props.prix) && <button onClick={props.ajoutPanier}>Acheter</button>}
    </div>;
}
