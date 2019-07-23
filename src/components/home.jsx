import React from 'react';
import './home.css';
import ProductListing from '../features/produits-listing';
import data from '../data/produits.json';

export default function Home(props){
    return <div className="home">
        <h2>Home</h2>
        <div className="produits">
        <ProductListing products={data.products} />
        </div>
    </div>
}