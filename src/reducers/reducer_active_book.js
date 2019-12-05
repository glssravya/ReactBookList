export default (state = null,action) => {
	//state is not application state - but the state i.e. resonsible for.
	switch(action.type){
		case 'BOOK_SELECTED':
			return action.payload;	

	}
	return state
}