import Book from "./Book"
import AddButton from "./AddButton"
const BookList = ({books, updateBookList}) => {
  console.log(books)

  const deleteBook = (id) => {
    const newBookList = books.filter(book => {
      return book.id !== id;
    });

    updateBookList(newBookList)
  }


  return (
    <>
    <div className="main-flex book-list-container disable-select">
        {
            books.map((book, index) =>
            (<Book key={index} id={book.id} name={book.name} dateAdded={book.dateAdded} deleteBook={deleteBook} ></Book>)
            )
        }
        
        
        
  
    </div>
    <AddButton></AddButton>
    </>
    
  )
}

export default BookList