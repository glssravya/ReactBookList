export function selectBook(book){
	//selectBook is an action - so it should return an object that always contains type and sometimes payload
	return{
		type :"BOOK_SELECTED",
		payload : book
	} 
}