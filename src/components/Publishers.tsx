import { Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField } from "@mui/material"
import { usePublisher } from "../hooks/usePublisher"

export function Publishers () {
  return (
    <div className="publishers">
      <div>
        <PublisherSearch />
      </div>
      <div>
        <PublisherList />
      </div>
      
      <table></table>
    </div>
  )
}

function PublisherSearch () {
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

function PublisherList () {
  const publishers = usePublisher()

  return (
    <TableContainer>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>出版社ID</TableCell>
            <TableCell>出版社名</TableCell>        
          </TableRow>
        </TableHead>
        <TableBody>
          {publishers.map((publisher) => (
            <TableRow
              key={publisher.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell>{publisher.id}</TableCell>
              <TableCell>{publisher.name}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}