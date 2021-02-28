import React, { Component } from 'react'
import { Card, Media, CardImg, CardImgOverlay, CardText, CardBody, CardTitle, ListGroup, ListGroupItem } from 'reactstrap';


class Dishdetail extends Component{
    constructor(props){
        super(props);
        this.state={
        }
    }


    componentDidMount(){
        console.log('Dishdetail Component didMount is invoked');
    }

    componentDidUpdate(){
        console.log('Dishdetail Component didUpdate is invoked');
    }

    renderDish(dish){
        if(dish!=null){
            return(
                <div>
                 <Card >
                    <CardImg width="100%" src={dish.image} alt={dish.name}/>
                    <CardBody>
                        <CardTitle >{dish.name}</CardTitle>
                        <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
                </div>
            );
        }
        else{
            return(
                <div></div>
            )
        }
    }

    renderComments(dish){
        if(dish!=null){
            const comments=dish.comments.map((c)=>{
                let date= new Date(c.date).toDateString();
                return(  
                    <div key={c.id}>
                        <ul className="list-unstyled">
                            <li >{c.comment}</li>
                            <br/>
                            <li>-- {c.author}, {date.substring(3,10)},{date.substring(10) }</li>
                        </ul>
                    </div>
                )
            })
            return (
                <div>
                    <h4>Comments</h4>
                    {comments}
                </div>
            )
        }
        else{
            return(
                <div></div>
            )
        }
    }
    render(){
        console.log('Dishdetail Component render is invoked');
        const dish= this.props.dish;

        return(
            <div className="container">
                <div className="row">
                    <div className="col-12 col-md-5 m-1">
                    {this.renderDish(dish)}
                </div>
                <div className="col-12 col-md-5 m-1">
                    {this.renderComments(dish)}
                </div>
                </div>
            </div>
        )
    }
}

export default Dishdetail;





        // if(comments!=null){
        //     this.state.heading=<h4>Comments</h4>
        //     this.state.comments=comments.map((c)=>{
        //         return (
        //             <div key={c.id}>
        //                 <ListGroup >
        //                     <ListGroupItem className="border-0">{c.comment}</ListGroupItem>
        //                     <ListGroupItem className="border-0">-- {c.author}, {new Date(c.date).toDateString().slice(3) }</ListGroupItem>
        //                 </ListGroup>
        //              </div>
        //         )})
        //         }
        // {this.state.heading}
        // {this.state.comments}
        