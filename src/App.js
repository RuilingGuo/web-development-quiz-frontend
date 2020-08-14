import React, {Component} from 'react';
import './styles/App.css';
import {BrowserRouter as Router} from 'react-router-dom';
import {Route, Switch, NavLink } from 'react-router-dom';
import StoreHome from './components/StoreHome'
import Menu from 'antd/es/menu'

class App extends Component {
  render() {
    return (
      <div className="app">
        <Router>
          <div className="App">
            <Menu mode = 'horizontal' theme = "dark" defaultSelectedKeys= 'homePageItem'>
              <Menu.Item key='homePageItem'>
                <NavLink exact activeStyle={{textDecoration: 'underline'}} to="/">商城</NavLink>
              </Menu.Item>
              <Menu.Item >
                <NavLink exact activeStyle={{textDecoration: 'underline'}} to="/order">订单</NavLink>
              </Menu.Item>
              <Menu.Item >
                <NavLink exact activeStyle={{textDecoration: 'underline'}} to="/product">添加商品</NavLink>
              </Menu.Item>
            </Menu>

            <header>
            </header>
            {/* <hr/> */}
            <Switch>
              <Route exact path="/" component={StoreHome}></Route>
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;

