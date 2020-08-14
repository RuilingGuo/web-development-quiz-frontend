import React from 'react'
import '../styles/App.css'
import Card from 'antd/es/card';
import Button from 'antd/es/button';

class Product extends React.Component {
    render() {
        const {product} = this.props;

        return <Card
        hoverable
        style={{ width: 240 }}
        cover={<img alt="example" src={product.imgUrl} />}>
        <p>{product.productName}</p>
        <p>单价：{product.price}元/{product.unit}</p>
        <Button size = 'small'></Button>
      </Card>
    }
}

export default Product;





