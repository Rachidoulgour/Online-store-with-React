import React from 'react';
import './produit-list-item.css';

export default function ProductListItem(props){
    
    return (
        <div className="product-list">
            <h3>{props.product.name}</h3>
            
            <img className="image" src={`/produits/${props.product.image}`} alt="Imagen"/>
            <div className="price">{props.product.price}€</div>
            <div>
                <button onClick={()=> props.AjouterAuPanier(props.product)}
                 className="acheter-btn">Acheter({
                     (props.panierItem && props.panierItem.quantite)|| 0
                 })</button>
            </div>
        </div>
        
    )
}