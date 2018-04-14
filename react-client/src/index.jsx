import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import List from './components/List.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      Note: {
        title:'',
        text:''
      }
    }

    this.onChange = this.onChange.bind(this)
    this.submit = this.submit.bind(this)
}

onChange(e){
  var Note = this.state.Note
  var name = e.target.name
  var value = e.target.value
  Note[name] = value;
  this.setState({Note})
}

submit(){
  $.ajax({
    type: 'POST',
    url: '/Notes',
    data: this.state,
    sucess: (data) => {
      console.log('post',data)
    }
  })
}
  render () {
    return (<div>
      <h1>Item List</h1>
      <input type="text" placeholder="tilte" name="title" value={this.state.tilte} onChange={this.onChange}/>
      <input type="text" placeholder="text" name="text" value={this.state.text} onChange={this.onChange}/>
     <button onClick={this.submit}>Submit></button>
    </div>)
  }
}
ReactDOM.render(<App />, document.getElementById('app'));