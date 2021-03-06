import React from 'react'
import { Card, CardImg, Breadcrumb, CardText, CardBody, CardTitle, 
     BreadcrumbItem, Button, Modal, ModalHeader, ModalBody, Row, Label, Col} from 'reactstrap';
import { Link } from 'react-router-dom';
import { Control, Errors, LocalForm } from 'react-redux-form';
import { Loading } from './LoadingComponent';
import { baseUrl } from '../shared/baseUrl';
import { FadeTransform, Fade, Stagger} from 'react-animation-components';


    const required= (val)=> val && val.length;
    const maxLength = (len)=> (val)=> !(val) || (val.length<=len);
    const minLength = (len)=> (val)=> (val) && (val.length>=len);


    class CommentForm extends React.Component{
        constructor(props){
            super(props);
            this.state={
                isModalOpen:false
            }
            this.toggleModal = this.toggleModal.bind(this);
            this.handleLogin=this.handleSubmit.bind(this);
        }

        handleSubmit(values){
            this.toggleModal();
            console.log(values,this.props);
            this.props.postComment(this.props.dishId, values.rating, values.author, values.comment);
        }
        toggleModal(){
            this.setState({
                isModalOpen:!this.state.isModalOpen
            })
        }
        render(){
            return(
                <div>
                    <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                        <ModalHeader toggle={this.toggleModal}>Submit Comment</ModalHeader>
                        <ModalBody>
                            <LocalForm onSubmit={(values)=>this.handleSubmit(values)}>
                                <Row className="form-group">
                                    <Label htmlFor=".rating" md={2}>Rating</Label>
                                    <Col md={{size:3, offset:1}}>
                                        <Control.select model=".rating" name="rating"
                                            className="form-control" >
                                            <option>1</option>
                                            <option>2</option>
                                            <option>3</option>
                                            <option>4</option>
                                            <option>5</option>
                                        </Control.select>
                                    </Col>
                                </Row>
                                <Row className="form-group">
                                    <Label htmlFor=".name" md={2}>Author</Label>
                                    <Col md={5}>
                                        <Control.text model=".author" name="author"
                                        className="form-control" placeholder="Your Name"
                                        validators={{
                                            required,
                                            mainLength:minLength(3),
                                            maxLength: maxLength(15)
                                        }}/>   
                                    <Errors 
                                        className="text-danger"
                                        model=".author"
                                        show="touched"
                                        messages={{
                                            required: 'Required',
                                            minLength: 'Must be greater than 2 characters',
                                            maxLength: 'Must be 15 characters or less'
                                        }}
                                    />   
                                    </Col>
                                </Row>
                                <Row className="form-group">
                                    <Label htmlFor=".comment" md={2}>Comment</Label>
                                    <Col md={10}>
                                        <Control.textarea model=".comment" id="comment" name="comment" 
                                        rows="6"  className="form-control"/>
                                    </Col>
                                </Row>
                                <Row className="form-group">
                                    <Col md={{size:10, offset:2}}>
                                        <Button type="submit" color="primary">
                                            Submit
                                        </Button>
                                    </Col>
                                </Row>
                            </LocalForm>
                        </ModalBody>
                    </Modal>
                    <Button outline onClick={this.toggleModal}>
                        <span class="fa fa-pencil"></span>
                         Submit form</Button>
                </div>
            )
        }
    }

    function RenderDish({dish}){
        if(dish!=null){
            return(
                <div>
                    <FadeTransform in
                    transformProps={{
                        exitTransform: 'scale(0.5) translateY(-50%)'}}>
                        <Card >
                            <CardImg width="100%" src={baseUrl + dish.image} alt={dish.name}/>
                            <CardBody>
                                <CardTitle >{dish.name}</CardTitle>
                                <CardText>{dish.description}</CardText>
                            </CardBody>
                        </Card>
                    </FadeTransform>
                </div>
            );
        }
        else{
            return(
                <div></div>
            )
        }
    }

    function RenderComments({comments, postComment, dishId}){
        if(comments!=null){
                   var comment=(<div>
                         <Stagger in>
                        {comments.map((comment) => {
                            return (
                                <Fade in>
                                <ul className="list-unstyled">
                                <li key={comment.id}>
                                <p>{comment.comment}</p>
                                <p>-- {comment.author} , {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comment.date)))}</p>
                                </li>
                                </ul>
                                </Fade>
                            );
                        })}
                        </Stagger>
                    </div>)
            return (
                <div>
                    <h4>Comments</h4>
                    {comment}
                    <CommentForm dishId={dishId} postComment={postComment} />
                </div>
            )
        }
        else{
            return(
                <div></div>
            )
        }
    }
    const Dishdetail=(props)=>{
        if(props.isLoading){
            return(
                <div className="container">
                    <div className="row">
                        <Loading />
                    </div>
                </div>
            )
        }
        else if(props.errMess){
            return(
                <div className="container">
                    <div className="row">
                        <h4>{props.errMess}</h4>
                    </div>
                </div>
            )
        }
        else if(props.dish!=null){
            console.log(props.comments)

        return(
            <div className="container">
                <div className="row">
                    <Breadcrumb>
                        <BreadcrumbItem><Link to="/menu">Menu</Link></BreadcrumbItem>
                        <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
                        <div className="col-12">
                            <h3>{props.dish.name}</h3>
                            <hr/>
                        </div>
                    </Breadcrumb>
                </div>
                <div className="row">
                    <div className="col-12 col-md-5 m-1">
                        <RenderDish dish={props.dish} />
                    </div>
                    <div className="col-12 col-md-5 m-1">
                    <RenderComments comments={props.comments}
                        postComment={props.postComment}
                        dishId={props.dish.id}
                    />
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
        