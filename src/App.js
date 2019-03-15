import React, { Component,Fragment } from 'react';
import './style.css'
import { CSSTransition } from 'react-transition-group';

class App extends Component {
  constructor(props){
     super(props)
     this.state = {
       show :true,
       list :[]
     }

     this.handleToggle = this.handleToggle.bind(this)
     this.handleAddItem = this.handleAddItem.bind(this)


  }
  render() {
    return (
        <Fragment>
            {
                this.state.list.map((item) => {
                    return (
                        <CSSTransition  in = {this.state.show}
                                        timeout = {1000}
                                        classNames = 'fade'
                                        unmountOnExit
                                        appear={true}
                        >
                        <div>{item}</div>
                        </CSSTransition>
                    )

                })
            }
            <button onClick={this.handleAddItem}>toggle</button>

        </Fragment>


    )

  }

  handleToggle(){
    this.setState({

      show : this.state.show ? false : true

    })

  }

  handleAddItem(){
      this.setState((prevState) => {
          return { list:[...prevState.list,'item']
          }
      })

  }

}

export default App;
