import React from 'react'
import '../styles/App.css'
import Product from './Product'
import '../styles/StoreHome.css'


class StoreHome extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            productList:[]
        }
    }

    componentDidMount() {
        fetch('http://localhost:8080/product/list',{
            method: 'GET',
            headers:{
                'Content-Type':'application/json;charset=UTF-8'
              },
              cache: 'default'
        })
        .then(res => res.json())
        .then((data) => {
            this.setState({
                productList: data
            })
        })
    }

    render() {
        return <div className = 'products'>
            {this.state.productList.map(product => (
                <Product key = {product.id} product = {product} ></Product>
            ))}
        </div>
    }
}

export default StoreHome;