import { Button, Dialog, DialogActions, DialogContent, DialogTitle, MenuItem, TextField } from "@mui/material";
import { useState } from "react";
import { Author, BookParam, Publisher } from "../../types";

// 書籍を登録する
export function BookRegister ({ authors, publishers, registerBook }: { authors: Author[], publishers: Publisher[], registerBook: (param: BookParam) => void }) {
  const [open, setOpen] = useState(false)
  const [title, setTitle] = useState("")
  const [authorId, setAuthorId] = useState("")
  const [publisherId, setPublisherId] = useState("")

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const register = () => {
    const param: BookParam = {
      title: title,
      authorId: authorId,
      publisherId: publisherId
    };
    registerBook(param)
    setTitle("")
    setAuthorId("")
    setPublisherId("")
    setOpen(false)
  }

  return (
    <div>
      <Button variant="contained" onClick={handleClickOpen} style={{ background: "#4e413b" }}>
        新規登録
      </Button>
      <Dialog open={open} onClose={handleClose} fullWidth>
        <DialogTitle>書籍登録</DialogTitle>
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
          <Button variant="contained" onClick={register} style={{ background: "#4e413b" }}>登録</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}