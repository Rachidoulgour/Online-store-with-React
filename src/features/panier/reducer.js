const panierSansItem = (panier, item)=>panier.filter(panierItem=> panierItem.id !==item.id)
const itemDansPanier = (panier, item)=>panier.filter(panierItem=> panierItem.id ===item.id)[0]
const AjouterAuPanier = (panier, item)=>{
    const panierItem = itemDansPanier(panier, item)
    return panierItem === undefined ? [...panierSansItem(panier, item), {...item, quantite: 1}]
                                    : [...panierSansItem(panier, item), {...panierItem, quantite: panierItem.quantite + 1}]
}
const panierReducer=(state=[], action)=>{
    switch(action.type){
        case 'ACHETER':
            return AjouterAuPanier(state, action.payload)
        case 'ELIMINER':
            const firstMatchIndex=state.indexOf(action.payload)
            return state.filter((item,index)=>index!==firstMatchIndex)
        default:
            return state;
    }

}
export default panierReducer;