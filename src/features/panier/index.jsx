import React from 'react';
import { connect } from 'react-redux'

export const panierItemsAvecQuantite = ()=>{
    return panierItems.reduce((acc, item) => {
        const filteredItem = acc.filter(item2 => item2.id === item.id)[0]
        filteredItem !== undefined
        ? filteredItem.quantite++
        : acc.push({ ...item, quantite: 1, })
        return acc
    }, [])
}