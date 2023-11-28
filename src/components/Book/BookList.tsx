import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material"
import { Author, Book, Publisher } from "../../types"

// 書籍一覧を表示する
export function BookList ({ books, authors, publishers, select }: { books: Book[], authors: Author[], publishers: Publisher[], select: (book: Book) => void }) {

  // 著者IDから著者名を取得する
  const getAuthorName = (id: string) => {
    return authors.find((v)=> v.id === id)?.name
  }

  // 出版社IDから出版社名を取得する
  const getPublisherName = (id: string) => {
    return publishers.find((v)=> v.id === id)?.name
  }

  // リストからアイテムを選択
  const handleClick = (book: Book) => {
    select(book)
  }

  return (
    <TableContainer sx={{ maxHeight: 750 }}>
      <Table stickyHeader>
        <TableHead>
          <TableRow>
            <TableCell style={{fontFamily:"Sawarabi Mincho"}}>タイトル</TableCell>
            <TableCell style={{fontFamily:"Sawarabi Mincho"}}>著者</TableCell>
            <TableCell style={{fontFamily:"Sawarabi Mincho"}}>出版社</TableCell>            
          </TableRow>
        </TableHead>
        <TableBody>
          {books.length == 0 &&
            <TableRow>
              <TableCell style={{ borderBottom: "none" }}>書籍が見つかりませんでした。</TableCell>
            </TableRow>}
          {books.map((book) => (
            <TableRow
              hover
              onClick={() => handleClick(book)}
              key={book.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 }, cursor: 'pointer' }}
            >
              <TableCell style={{fontFamily:"Sawarabi Mincho"}}>{book.title}</TableCell>
              <TableCell style={{fontFamily:"Sawarabi Mincho"}}>{getAuthorName(book.authorId)}</TableCell>
              <TableCell style={{fontFamily:"Sawarabi Mincho"}}>{getPublisherName(book.publisherId)}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}