import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, Grid, IconButton } from "@mui/material";
import { useEffect, useState } from "react";
import { Author, Book, Publisher } from "../../types";
import { BookEdit } from './BookEdit';

// 書籍の詳細を表示する
export function BookDetail ({ selected, authors, publishers, setSelected, editBook, deleteBook }: { selected: (Book | undefined), authors: Author[], publishers: Publisher[], setSelected: (book: Book | undefined) => void, editBook: (param: Book) => void, deleteBook: (id: string) => void}) {
  const [open, setOpen] = useState(false)
  const [book, setBook] = useState<Book>()

  useEffect(() => {
    if (selected) {
      setOpen(true)
      setBook(selected)
    }
  }, [selected])

  const handleClickDelete = () => {
    if (book) {
      if (confirm(`『${book.title}』を削除してもよろしいですか？`)) {
        deleteBook(book.id)
        setOpen(false)
        setSelected(undefined)
      }
    }
  }

  const handleClose = () => {
    setOpen(false)
    setSelected(undefined)
  };
  
  return (
    <Dialog open={open} onClose={handleClose} fullWidth>
      <DialogTitle fontFamily={"Sawarabi Mincho"}>
        <Grid container>
          <Grid item xs={11}>書籍詳細</Grid>
          <Grid item>
            <IconButton
              onClick={handleClose}
            >
              <HighlightOffIcon />
            </IconButton>
          </Grid>
        </Grid>
      </DialogTitle>
      <DialogContent>
        <Grid fontFamily={"Sawarabi Mincho"}>
          <Grid item fontSize={14}>書籍ID</Grid>
          <Grid item fontSize={18} style={{ paddingBottom: 15 }}>{book?.id}</Grid>
          <Grid item fontSize={14}>タイトル</Grid>
          <Grid item fontSize={18} style={{ paddingBottom: 15 }}>{book?.title}</Grid>
          <Grid item fontSize={14}>著者</Grid>
          <Grid item fontSize={18} style={{ paddingBottom: 15 }}>{getAuthorName(book?.authorId, authors)}</Grid>
          <Grid item fontSize={14}>出版社</Grid>
          <Grid item fontSize={18} style={{ paddingBottom: 15 }}>{getPublisherName(book?.publisherId, publishers)}</Grid>
        </Grid>
      </DialogContent>
      <DialogActions>
        <Button
          variant="contained"
          color="error"
          onClick={handleClickDelete}
          style={{ background: "#ff6d24" }}
        >
          削除
        </Button>
        {book &&
          <BookEdit
            book={book}
            authors={authors}
            publishers={publishers}
            editBook={editBook}
            setBook={setBook}
          />
        }
      </DialogActions>
    </Dialog>
  )
}

// 著者IDから著者名を取得する
const getAuthorName = (id: string | undefined, authors: Author[]) => {
  return authors.find((v)=> v.id === id)?.name
}

// 出版社IDから出版社名を取得する
const getPublisherName = (id: string | undefined, publishers: Publisher[]) => {
  return publishers.find((v)=> v.id === id)?.name
}