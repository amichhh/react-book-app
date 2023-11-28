import { useEffect, useState } from "react";
import { ulid } from "ulid";
import * as api from "../apis/book";
import { Book, BookParam } from "../types";

export const useBook = () => {
  const [books, setBooks] = useState<Book[]>([])

  // Book取得処理
  useEffect(() => {
    api.findBook().then((books: Book[]) => {
      setBooks([...books])
    })
  }, []);

  // Book登録処理
  const registerBook = (param: BookParam) => {
    const newBook: Book = {
      id: ulid(),
      title: param.title,
      authorId: param.authorId,
      publisherId: param.publisherId
    }
    api.registerBook(newBook).then((registered) => {
      setBooks([ ...books, registered])
    })
  }

  // Book編集処理
  const editBook = (param: Book) => {
    api.editBook(param).then((edited) => {
      const newBooks = books.map((book) => (
        book.id !== edited.id ? book : edited
      ))
      setBooks(newBooks)
    })
  }

  // Book削除処理
  const deleteBook = (id: string) => {
    api.deleteBook(id).then((deleted) => {
      const newBooks = books.filter((book) => (
        book.id !== deleted
      ))
      setBooks(newBooks)
    })
  }

  return { books, registerBook, editBook, deleteBook }
}