import 'bootstrap/dist/css/bootstrap.min.css';
import './style.scss';
import React from 'react';
import ReactDOM from 'react-dom';
// import React, { useState } from 'react'; 

const ItemTodoList = (props) => {	
  return (
      <div className="card" key={props.id}>
        <div className = "row align-items-center card-body">
          <p className = "col-11 card-text">
            <label className = 'form-check-label'>
              <input type = 'checkbox' className = 'form-check-input'></input>
              {props.text}
            </label>
          </p>
          <button className = "btn btn-primary col-1 deleteBtn">Delete</button>
        </div>
      </div>
  )
};

const data = [
  {
    id:'1',
    text: 'По клику по кнопке, должен добавляться новый пункт списка',
    isView: true
  },
  {
    id:'2',
    text: 'Надо генерировать уникальные ключи',
    isView: true
  },
  {
    id:'3',
    text: 'При клике по кноке delete надо удалять пункт',
    isView: true,
  },
  {
    id:'4',
    text: 'При клике по чекбоксу зачеркивать пункт',
    isView: true
  },
];


class Form extends React.Component{

  state = {
    id: '',
    text:'',
    isView: true,
  }
  // constructor(props) {
  //   super(props);
  //   this.state = {
      
  //   };

  //   this.handleChange = this.handleChange.bind(this);
  //   this.handleSubmit = this.handleSubmit.bind(this);
  // }

  

  handleChange(event) {
    this.setState({text: event.target.value});
  }

  handleSubmit(event) {
    this.setState({
      isView: false
    })
    alert('Отправленное имя: ' + this.state.text + this.state.isView);
    event.preventDefault();
  }


  render(){
    return(
     <div>
      <form onSubmit={this.handleSubmit} id='to-do-form'>
        <div className="input-group mb-3">
          <input 
            value={this.state.value} 
            onChange={this.handleChange} 
            type="text" 
            id='input' 
            className="form-control" 
            placeholder="Text..." />
          <button 
            className="btn btn-outline-primary" 
            type="submit" 
            id="button-addon2" 
            form="to-do-form">
              Add Task
            </button>
        </div>
      </form>
      {
        data.map( (item) => <ItemTodoList text={item.text} key={item.id}/>  )
      }
     </div>
     )
  }
}



const App = (state) => {	
    return (
        <div className="container" id='container'>
          <h1 className="header_title">TO DO LIST</h1>
          <Form />
        </div>
    )
};


ReactDOM.render(<App />, document.getElementById('root'));