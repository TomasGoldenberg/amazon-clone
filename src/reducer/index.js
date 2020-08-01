export const initialState ={
    basket:[
        {
        id:"1",
        title:"The Lean Startup: How Innovation Creates Success",
        price:11.65,
        rating:4,
        image:"https://miro.medium.com/max/4452/1*zxtMIuwC0eMGDAQ8gkCtcg.jpeg"
    },
    {
        id:"2",
        title:"The Lean Startup: How Innovation Creates Success",
        price:11.65,
        rating:4,
        image:"https://miro.medium.com/max/4452/1*zxtMIuwC0eMGDAQ8gkCtcg.jpeg"
    },
],
};

const reducer =(state,action)=>{
    switch(action.type){
        case "ADD_TO_BASKET":
            
            return {
                ...state,
                basket: [...state.basket, action.payload]
            }

        case "REMOVE_FROM_BASKET":
            let newBasket= [...state.basket];
            const index = state.basket.findIndex((item)=> item.id === action.id);
            
            if(index >= 0){
               newBasket.splice(index, 1);
            }else{
                console.log("product it is not in the basket")
            };

            return{
                ...state,
                basket: newBasket 
            }

        
        default:
            return state;
        
    }
}

export default reducer;