import React, {Component, Fragment} from 'react'
import axios from 'axios'
import TodoItem from './TodoItem';
import 'antd/dist/antd.css'
import {input,Button,List} from 'antd'



const data = [
    'Racing car sprays burning fuel into crowd.',
    'Japanese princess to wed commoner.',
    'Australian walks 100km after outback crash.',
    'Man charged over missing wedding girl.',
    'Los Angeles battles huge wildfires.',
];


class TodoList extends Component {

    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         inputvalue: '',
    //         list: []
    //
    //     }
    //     this.handleInputChange = this.handleInputChange.bind(this)
    //     this.handleBtnClick = this.handleBtnClick.bind(this)
    //     this.handleItemDelete = this.handleItemDelete.bind(this)
    //
    // }
    //
    // render() {
    //
    //     return (
    //         <Fragment>
    //
    //             <div>
    //
    //                 <input
    //                     value={this.state.inputvalue}
    //                     onChange={this.handleInputChange}
    //                 ></input>
    //                 <button onClick={this.handleBtnClick}>commit</button>
    //
    //
    //             </div>
    //
    //             <ul>
    //                 {
    //                     this.getTodoItem()
    //
    //
    //
    //                 }
    //             </ul>
    //         </Fragment>
    //
    //
    //     )
    //
    //
    // }
    //
    // componentDidMount() {
    //     axios.get('/api/todolist').then((res) => {this.setState(() => {return {list:res.data}});}).catch(() => {alert("erros")})
    // }
    //
    // getTodoItem(){
    //     return this.state.list.map((item, index) => {
    //
    //             return <div>< TodoItem content={item} index={index}
    //                                    handleItemDelete={this.handleItemDelete}/></div>
    //
    //         }
    //     )
    // }
    //
    // handleInputChange(e) {
    //     const value = e.target.value;
    //     this.setState(() => ({
    //         inputvalue: value
    //     }));
    //
    // }
    //
    //
    // handleBtnClick() {
    //     this.setState((prevState) => ({
    //             list: [...prevState.list, prevState.inputvalue],
    //             inputvalue: ""
    //
    //     }));
    //
    //
    // }
    //
    // handleItemDelete(index) {
    //
    //
    //     this.setState((prevState) => {
    //         const list = [...this.state.list];
    //         list.splice(index, 1);
    //         return {list}
    //     });
    //
    // }


    render() {

        return(

            <div style={ {marginTop : '10px' , marginLeft:'10px'}}>
                <div>
                    <input placeholder={'todo info'} style={{width : '300px' , marginRight : '10px'}}></input>
                    <Button type="primary">Commit</Button>
                </div>
                <List
                    style={{width:'300px',marginTop:'10px',marginLeft:'10px'}}
                    size="small"
                    bordered
                    dataSource={data}
                    renderItem={item => (<List.Item>{item}</List.Item>)}
                />
            </div>

        )
    }
}



export default TodoList;