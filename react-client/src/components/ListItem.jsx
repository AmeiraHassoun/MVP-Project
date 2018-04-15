import React from 'react';

class ListItem extends React.Component{
	constructor(props){
		super(props)
		this.state = {
			text :''
		}
		this.onChange=this.onChange.bind(this)
		this.submit=this.submit.bind(this)
	}

	onChange(e){
		this.setState({
			text:e.target.value
		})
	}

	submit(){
		this.props.add(this.state.text)
	}

	render(){
		return(
		  <div>
		   <input value={this.state.text} onChange={this.onChange}/>
		   <button onClick={this.submit}>Deposite</button>
		  </div>
	)
   }
   
}

export default ListItem;