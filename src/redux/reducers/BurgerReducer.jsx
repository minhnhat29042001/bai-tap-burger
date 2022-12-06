const burgerState = {
    burger: {
    salad: 2,
    cheese: 2,
    beef: 2
    },
    menu: {
    salad: 10,
    cheese: 20,
    beef: 55
    }, 
    total:85
   
}

export const BurgerReducer = (state =burgerState,action) =>{
    switch(action.type){
        case 'ADD_BREADMID':{
            let {propsBurger,amount} = action;
            if(amount===-1 && state.burger[propsBurger]<1){
                return {...state}
            }
            let burgerUpdate ={...state.burger};
            burgerUpdate[propsBurger]+= amount;
            state.burger =burgerUpdate;
         state.total += amount * state.menu[propsBurger];
            return {...state}
        }
    }
 
    return {...state}
}