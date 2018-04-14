import React from 'react';
import ListItem from './ListItem.jsx';

const List = (props) => (
  <div>
    <h4> Add one to your experience credit :) </h4>
    { props.texts.map(function(text){
    	return <p> {text.text}</p>
    })}
  </div>
)

export default List;