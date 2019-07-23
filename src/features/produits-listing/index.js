import React from 'react';
import ProductListItem from './produit-list-item.js';
import {panierItemsAvecQuantite} from '../panier/index'

import {connect} from 'react-redux';

function ProductListing(props){
    return <div>
    {
        props.products.map(product =>
        <ProductListItem product={product} 
            AjouterAuPanier={props.AjouterAuPanier}
            panierItem={props.panier.filter(panierItem => panierItem.id === Product.id)[0]}
        />)
    }

    </div>
}
function mapStateToProps(state){
    return ({panier:state.panier})
}
function mapDispatchToProps(dispatch){
    return {
        AjouterAuPanier: (item)=>{
            dispatch({type:'AJOUTER',
        payload:item})
        },
        EliminerDuPanier: (item)=>{
            dispatch({type: 'ELIMINER',
        payload: item})
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(ProductListing);