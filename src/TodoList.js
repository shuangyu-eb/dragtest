import React, {Component, Fragment} from 'react'
import axios from 'axios'
import TodoItem from './TodoItem';

class TodoList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            inputvalue: '',
            list: []

        }
        this.handleInputChange = this.handleInputChange.bind(this)
        this.handleBtnClick = this.handleBtnClick.bind(this)
        this.handleItemDelete = this.handleItemDelete.bind(this)

    }

    render() {

        return (
            <Fragment>

                <div>

                    <input
                        value={this.state.inputvalue}
                        onChange={this.handleInputChange}
                    ></input>
                    <button onClick={this.handleBtnClick}>commit</button>


                </div>

                <ul>
                    {
                        this.getTodoItem()



                    }
                </ul>
            </Fragment>


        )


    }

    componentDidMount() {
        axios.get('/api/todolist').then((res) => {this.setState(() => {return {list:res.data}});}).catch(() => {alert("erros")})
    }

    getTodoItem(){
        return this.state.list.map((item, index) => {

                return <div>< TodoItem content={item} index={index}
                                       handleItemDelete={this.handleItemDelete}/></div>

            }
        )
    }

    handleInputChange(e) {
        const value = e.target.value;
        this.setState(() => ({
            inputvalue: value
        }));

    }


    handleBtnClick() {
        this.setState((prevState) => ({
                list: [...prevState.list, prevState.inputvalue],
                inputvalue: ""

        }));


    }

    handleItemDelete(index) {


        this.setState((prevState) => {
            const list = [...this.state.list];
            list.splice(index, 1);
            return {list}
        });

    }
}


export default TodoList;