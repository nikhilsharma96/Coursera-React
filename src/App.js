import logo from './logo.svg';
import { Navbar, NavbarBrand } from 'reactstrap';
import './App.css';
import React, {Component} from 'react';
import Menu from './components/MenuComponent';
import { DISHES } from './shared/dishes';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      dishes:DISHES
    }
    // console.log(this.state.dishes)
  }
  render(){return (
    <div >
      <Navbar dark color="primary">
        <div className="container">
          <NavbarBrand href="/">Ristorante Con Fusion</NavbarBrand>
        </div>
      </Navbar>
      <Menu dishes={this.state.dishes}/>
    </div>
  );}
}

export default App;
