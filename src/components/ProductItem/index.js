import React from "react";
import { 
    Container,
    ProductFotoArea,
    ProductInfoArea,
    ProductButtonArea,
    ProductPhoto,
    ProductName,
    ProductPrice,
    ProductIngredients,
    ProductButton
 } from './styled'

export default ({data}) => {
    return (
        <Container>
            <ProductFotoArea>
                <ProductPhoto src={data.image} />
            </ProductFotoArea>
            <ProductInfoArea>
                <ProductName>{data.name}</ProductName>
                <ProductPrice>R$ {data.price}</ProductPrice>
                <ProductIngredients>{data.ingredients}</ProductIngredients>
            </ProductInfoArea>
            <ProductButtonArea>
                <ProductButton src="/assets/next.png" />
            </ProductButtonArea>
        </Container>
    )
}