import React from "react";
import './Todo.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Container, Row, Col } from 'react-bootstrap';
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { faPen } from "@fortawesome/free-solid-svg-icons";

class Todo extends React.Component {

    constructor(props) {
        super(props);

    
    this.props.statusChange.bind(this);
    this.props.delete.bind(this);
    }
    
    

    render() {
        return (
            <Container fluid>
            <Row className="todo">
                <Col xs={9} md={9} lg={10} xl={10}>
                    <div className="todo-box">
                        <div className="todo-upper">
                            <div className={this.props.status?"todo-text-complete":"todo-text-pending"}>
                                {this.props.text}
                            </div>
                            <button className={this.props.status?"todo-status todo-status-complete":"todo-status todo-status-pending"}
                            name={this.props.idx} onClick={this.props.statusChange}>
                            </button>
                        </div>
                        <div className="todo-lower">
                            {this.props.last_modified}
                        </div>
                    </div>
                </Col>
                <Col xs={3} md={3} lg={2} xl={2}>
                <div className="icon-box">
                    <button className="trash" name={this.props.idx} onClick={this.props.delete}>
                        <FontAwesomeIcon icon={faTrash}/>
                    </button>
                    <div className="trash">
                        <FontAwesomeIcon icon={faPen}/>
                    </div>
                </div>
                </Col>
            </Row>
            </Container>
        );
      }
}

export default Todo;