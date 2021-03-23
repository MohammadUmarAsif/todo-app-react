import React from "react";
import './Add.css';
import { Container, Row, Col } from 'react-bootstrap';

class Add extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            value: ''
        }
    
    this.props.add.bind(this);
    this.checkSubmission = this.checkSubmission.bind(this);
    }

    checkSubmission() {
     
        if (event.key === "Enter") {

            this.props.add(this.state.value); 


            this.setState({
                value: ''
            });
            
        }
    }
    
    render() {
        return (
            <Container fluid>
            <Row >
                <input className="text-input" value={this.state.value} 
                onChange={()=>this.setState({value: event.target.value})}
                type="textarea" placeholder="Enter task..." onKeyPress={this.checkSubmission}>
                </input>
            </Row>
            </Container>
        );
      }
}

export default Add;