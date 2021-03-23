import React from "react";
import Button from 'react-bootstrap/Button'
import Todo from './Todo.js';
import Add from './Add.js';
import "./Todo-Block.css";

class TodoBlock extends React.Component {

    constructor(props) {
        super(props);

        let all = [
            ['Complete Todo App', 'Today', false],
            ['Study Networking', '18 March 2020', false],
            ['Water the Plants', '13 March 2020', false],
            ['Test recent React-App', '12 March 2020', false],
            ['Complete Assignment by 25 March', '2 March 2020', false],
        ];

        this.state = {
            todos: all
          };

          this.statusChange = this.statusChange.bind(this);
          this.delete = this.delete.bind(this);
          this.add = this.add.bind(this);
    }
    statusChange() {

        let temp = this.state.todos;
        let temp_todo = temp[Number(event.target.name)]
        temp[Number(event.target.name)][2] = !temp_todo[2];

        this.setState({
            todos: temp
        });
        
    }

    delete() {
        let temp = this.state.todos;
        let idx = Number(event.target.name);
        let part_1 = temp.slice(0, idx);
        let part_2 = temp.slice(idx+1, temp.length);

        temp = part_1.concat(part_2);

        this.setState({
            todos: temp
        });
    }

    add(text) {

        let d = new Date();

        let temp = [[text, d.toDateString(), false]];
        temp = temp.concat(this.state.todos);

        this.setState({
            todos: temp
        });

    }
    
    render() {

        let array = this.state.todos;
        
        return (
            <div>
                <h4 id="todoHeading">Add Todo</h4>
                <Add add={this.add}/>
                <h4 id="todoHeading">My Todos</h4>
                <div>
                    {array.map((value, idx) => (
                        <Todo text={value[0]} last_modified={value[1]} status={value[2]} key={idx} idx={idx} 
                        delete={this.delete}
                        statusChange={this.statusChange}/>
                    ))}
                </div>
            </div>
        );
    }
}

export default TodoBlock;