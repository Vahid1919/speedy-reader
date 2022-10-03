import Nav from "./components/Nav"
import BookList from "./components/BookList"
import { useState } from 'react'




const Dashboard = ({books}) => {
  const [currentBookList, updateBookList] = useState(books)
  return (
    <div>
      <Nav></Nav>
      <BookList books={currentBookList} updateBookList={updateBookList}></BookList>

    </div>
  )
}

export const getServerSideProps = async (context) => {
    const res = await fetch(`http://localhost:3000/api/books/`)

    const books = await res.json()

    return {
        props : {
            books
        }
    }
}


export default Dashboard