import Book from "./Book"
import AddButton from "./AddButton"
const BookList = () => {
  return (
    <>
    <div className="main-flex book-list-container disable-select">
        <Book></Book>
        <Book></Book>
        <Book></Book>
        <Book></Book>
        <Book></Book>
        <Book></Book>
        <Book></Book>
        <Book></Book>
        <Book></Book>
        <Book></Book>
        <Book></Book>
  
    </div>
    <AddButton></AddButton>
    </>
    
  )
}

export default BookList