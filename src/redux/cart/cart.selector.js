/*selectors are being used to pass the state in mapStateToProps directly 
so it doesnt goes through all the states of the root reducers

selectCart is going to be the state inside cart

and each function reaches for one or more values
same in user.selector, may be even brighter
*/
import { createSelector } from 'reselect';

const selectCart = state => state.cart;

export const selectCartItems = createSelector(
    [selectCart],
    (cart) => cart.cartItems
);

export const selectCartHidden = createSelector(
    [selectCart],
    cart => cart.hidden
)

export const selectCartItemsCount = createSelector(
    [selectCartItems],
    cartItems => 
        cartItems.reduce((accumulatedQuantity, cartItem) => 
        accumulatedQuantity + cartItem.quantity, 0
        )
)

export const selectCartTotal = createSelector(
    [selectCartItems],
    cartItems => 
        cartItems.reduce((accumulatedQuantity, cartItem) => 
            accumulatedQuantity + cartItem.quantity * cartItem.price, 0
        )
)