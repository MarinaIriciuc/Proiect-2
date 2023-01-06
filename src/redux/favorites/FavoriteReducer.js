import {ADD_TO_FAVORITES, REMOVE_FROM_FAVORITES} from "./FavoriteConstants";

const initialState = {
    favorites: []
}


export function favoriteReducer(state = initialState, action) {
    switch (action.type) {
        case ADD_TO_FAVORITES:
            let productInFavorites = false;
            const updatedProducts = state.favorites.map(product => {
                if (product.id === action.payload.product.id) {
                    productInFavorites = true;
                    return {
                        ...product,
                        quantity: product.quantity + 1
                    }
                } else {
                    return product;
                }
            })

            if (!productInFavorites) {
                return Object.assign({}, state, {
                    favorites: [
                        ...state.favorites,
                        {
                            ...action.payload.product,
                            quantity: 1
                        }
                    ]
                })
            } else {
                return Object.assign({}, state, {
                    favorites: updatedProducts
                });
            }
        case REMOVE_FROM_FAVORITES:
            const filteredProducts = state.favorites.filter(product => {
                return product.id !== action.payload.id
            });

            return Object.assign({}, state, {
                favorites: filteredProducts
            });
        default:
            return state;
    }
}