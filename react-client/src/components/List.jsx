import React from 'react';
import ListItem from './ListItem.jsx';

const List = (props) => (
  <div>
    <ul> Add one to your experience credit :) </ul>
    {props.texts.map(function(text){
    	return <li> {text.text}</li>
    })}
  </div>
)

export default List;