import { Component } from "react"
import React from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';
import { Media } from 'reactstrap';

class Menu extends Component{
    constructor(props){
        super(props);//required whenever you define a component==>jsx attribute are passed into a component as a single object
        this.state={  //properties related to component that we can make use of
     
        }
        console.log('Menu Components constructor is invoked');
    }

    componentDidMount(){
        console.log('Menu Components didMount is invoked');
    }
    //whenever you create a list of items, every item needs a key for specification; helps to recognise each element for uniquely identification
    render(){
        console.log('Menu Components render is invoked');
        const menu = this.props.dishes.map((dish)=>{
            return (
                <div key={dish.id} className="col-12 col-md-5 mt-5">
                    <Card onClick={()=>this.props.onClick(dish.id)}>
                        <CardImg width="100%" src={dish.image} alt={dish.name}/>
                        <CardImgOverlay className="ml-5">
                            <CardTitle >{dish.name}</CardTitle>
                        </CardImgOverlay>
                    </Card>
                </div>
            )
        });
        return(
            <div className="container">
                <div className="row">
                        {menu}
                </div>
            </div>
        );
    }
}

export default Menu;