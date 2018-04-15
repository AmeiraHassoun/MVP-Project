import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import List from './components/List.jsx';
import ListItem from './components/ListItem.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      texts:[]
    }
}

submit(term){
  
  $.ajax({
    type: 'POST',
    url: '/notes', 
    data: {text:term},
    success: (data) => {
      console.log('post',data)
    },
    error:(err)=>{
      console.error(err)
    }
  })

   $.ajax({
    type: 'GET',
    url: '/notes', 
    success: (data) => {
      this.setState({
        texts:data
      })
    },
    error:(err)=>{
      console.error(err)
    }
  })
}
  render () {
    return (<div>
      <h1>Weekly Diaries</h1>
      <List texts={this.state.texts}/>
      <ListItem add={this.submit.bind(this)}/>
      
    </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));