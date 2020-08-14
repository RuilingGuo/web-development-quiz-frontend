import React from 'react'
import '../styles/App.css'
import Card from 'antd/es/card';
import Button from 'antd/es/button';
import '../styles/Product.css'

class Product extends React.Component {
    render() {
        const {product} = this.props;

        return <div className = "product">
            <Card
            hoverable
            style={{ width: 200 }}
            cover={<img alt={product.productName} src={product.imgUrl} />}>
                <p className="productName">{product.productName}</p>
                <p className="productPrice">单价：{product.price}元/{product.unit}</p>
                <Button size = 'middle' shape = 'circle'>+</Button>              
            </Card>
        </div>

    }
}

export default Product;