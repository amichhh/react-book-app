import { Button, Grid, TextField } from "@mui/material"
import { useEffect, useState } from "react"
import { Book } from "../../types"

// 書籍を検索する
export function BookSearch ({ books, search }: { books: Book[], search: (filterBooks: Book[]) => void}) {
  const [keyword, setKeyword] = useState<string>("")

  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setKeyword(event.target.value)
  }

  const handleOnClick = () => {
    const result = filterBook(books, keyword)
    search(result)
  }
  
  // booksが変更されたときに発火(初回の非同期処理完了後を想定)
  useEffect(() => {
    const result = filterBook(books, keyword)
    search(result)
  }, [books])

  return (
    <Grid container>
      <Grid item xs={8}>
        <TextField
          fullWidth
          size="small"
          onChange={handleOnChange}
        />
      </Grid>
      <Grid item xs={2}>
        <Button
          variant="contained"
          onClick={handleOnClick}
          style={{ background: "#4e413b" }}
        >
          検索
        </Button>
      </Grid>
    </Grid>
  )
}

// 書籍をタイトルで検索
const filterBook = (books: Book[], keyword: string) => {
  if (keyword) {
    const regex = new RegExp(`^.*${keyword}.*$`)
    const filterBooks: Book[] = books.filter((book: Book) => regex.test(book.title))
    return filterBooks
  }
  return books
}