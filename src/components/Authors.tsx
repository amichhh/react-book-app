import { Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField } from "@mui/material"
import { useAuthor } from "../hooks/useAuthor"

export function Authors () {
  return (
    <div className="authors">
      <div>
        <AuthorSearch />
      </div>
      <div>
        <AuthorList />
      </div>
      
      <table></table>
    </div>
  )
}

function AuthorSearch () {
  return (
    <div>
      <TextField
        size="small"
      />
      <Button>
        検索
      </Button>
    </div>
  )
}

function AuthorList () {
  const authors = useAuthor()

  return (
    <TableContainer>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>著者ID</TableCell>
            <TableCell>著者名</TableCell>        
          </TableRow>
        </TableHead>
        <TableBody>
          {authors.map((author) => (
            <TableRow
              key={author.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell>{author.id}</TableCell>
              <TableCell>{author.name}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}