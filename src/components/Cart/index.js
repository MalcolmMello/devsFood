import React from "react";
import { CartArea, CartHeader, CartText, CartIcon, CartBody } from './styled'

export default () => {
    return (
        <CartArea>
            <CartHeader>
                <CartIcon src="/assets/cart.png"/>
                <CartText>Meu Carrinho (x)</CartText>
            </CartHeader>
            <CartBody>

            </CartBody>
        </CartArea>
    )
}