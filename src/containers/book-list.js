/*import React,{ Component } from 'react';
import { connect } from 'react-redux'; 

class BookList extends Component{
	render() {
		return (<ul className="list-group col-md-4">
				{this.renderList()} //Calling a helper function.
			</ul>);
	}
	renderList(){
		return this.props.books.map((book)=>{
			return (
				<li key="(book.title)" className="list-group-item">{book.title}</li>
			)
		})
	}
}

const mapStatetoProps = (state) => {
	return {
		'books': state.books
	}

}

export default connect(mapStatetoProps)(BookList);

*/
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectBook } from '../actions/index.js';
import { bindActionCreators } from 'redux';
class BookList extends Component{
	render(){
		return (<ul className="list-group col-md-4">
			{this.renderList()}
		 </ul>);
	}
	renderList(){
		return this.props.books.map((book)=>{
			return(
			<li 
				onClick = {() => this.props.selectBook(book)} 
				key="{book.title}" 
				className="list-group-item">
				{book.title}
			</li>
			); 
		});
	}
}

const mapStateToProps = (state) => {
	return {
		"books":state.books
	}
}
const mapDispatchToProps = (dispatch) => {
	return bindActionCreators({selectBook},dispatch);
}

export default connect(mapStateToProps,mapDispatchToProps)(BookList);