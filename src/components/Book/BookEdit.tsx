import { Button, Dialog, DialogActions, DialogContent, DialogTitle, MenuItem, TextField } from "@mui/material"
import { useState } from "react"
import { Author, Book, Publisher } from "../../types"

// 書籍を編集する
export function BookEdit ({ book, authors, publishers, editBook, setBook }: { book: Book, authors: Author[], publishers: Publisher[], editBook: (book: Book) => void, setBook: (book: Book) => void }) {
  const [open, setOpen] = useState(false)
  const [id, setId] = useState("")
  const [title, setTitle] = useState("")
  const [authorId, setAuthorId] = useState("")
  const [publisherId, setPublisherId] = useState("")

  const handleClickOpen = () => {
    setOpen(true);
    setId(book.id)
    setTitle(book.title)
    setAuthorId(book.authorId)
    setPublisherId(book.publisherId)
  };

  const handleClose = () => {
    setOpen(false);
  };

  const edit = () => {
    const param: Book = {
      id: id,
      title: title,
      authorId: authorId,
      publisherId: publisherId
    };
    editBook(param)
    setBook(param)
    setOpen(false)
  }

  return (
    <div>
      <Button variant="contained" onClick={handleClickOpen} style={{ background: "#4e413b" }}>
        編集
      </Button>
      <Dialog open={open} onClose={handleClose} fullWidth>
        <DialogTitle>書籍編集</DialogTitle>
        <DialogContent>
          <TextField
            margin="dense"
            id="name"
            label="タイトル"
            value={title}
            onChange={(e)=> setTitle(e.target.value)}
            fullWidth
            size="small"
            InputLabelProps={{ shrink: true }}
          />
          <TextField
            select
            margin="dense"
            id="name"
            label="著者"
            value={authorId}
            onChange={(e)=> setAuthorId(e.target.value)}
            fullWidth
            size="small"
            InputLabelProps={{ shrink: true }}
          >
            {authors.map((author) => (
              <MenuItem key={author.id} value={author.id}>
                {author.name}
              </MenuItem>
            ))}
          </TextField>
          <TextField
            select
            margin="dense"
            id="name"
            label="出版社"
            value={publisherId}
            onChange={(e)=> setPublisherId(e.target.value)}
            fullWidth
            size="small"
            InputLabelProps={{ shrink: true }}
          >
            {publishers.map((publisher) => (
              <MenuItem key={publisher.id} value={publisher.id}>
                {publisher.name}
              </MenuItem>
            ))}
          </TextField>
        </DialogContent>
        <DialogActions>
          <Button variant="text" onClick={handleClose}>キャンセル</Button>
          <Button variant="contained" onClick={edit} style={{ background: "#4e413b" }}>編集</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}