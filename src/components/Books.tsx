import { Grid } from "@mui/material"
import { useState } from "react"
import { useAuthor } from "../hooks/useAuthor"
import { useBook } from "../hooks/useBook"
import { usePublisher } from "../hooks/usePublisher"
import { Book } from "../types"
import { BookDetail } from "./Book/BookDetail"
import { BookList } from "./Book/BookList"
import { BookRegister } from "./Book/BookRegister"
import { BookSearch } from "./Book/BookSearch"

export function Books () {
  const { books, registerBook, editBook, deleteBook } = useBook()
  const authors = useAuthor()
  const publishers = usePublisher()
  const [filterBooks, setFilterBooks] = useState<Book[]>(books)
  const [selected, setSlected] = useState<Book>()
  
  return (
    <div className="books">
      <BookDetail
        selected={selected}
        authors={authors}
        publishers={publishers}
        setSelected={setSlected}
        editBook={editBook}
        deleteBook={deleteBook}
      />
      <Grid container>
        <Grid item xs={10}>
          <BookSearch
            books={books}
            search={setFilterBooks}
          />
        </Grid>
        <Grid item xs={2}>
          <BookRegister
            authors={authors}
            publishers={publishers}
            registerBook={registerBook}
          />
        </Grid>
      </Grid>
      <div>
        <BookList
          books={filterBooks}
          authors={authors}
          publishers={publishers}
          select={setSlected}
        />
      </div>
    </div>
  )
}
