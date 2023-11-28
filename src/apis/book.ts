import axios from "axios"
import { Book } from "../types"

// モックサーバーのURL
const Url: string = "http://localhost:3000/book/"

// 書籍を検索する
export const findBook = async () => {
  const response = await axios.get(Url)
  return response.data
}

// 書籍を登録する
export const registerBook = async (param: Book) => {
  const response = await axios.post(Url, param)
  return response.data
}

// 書籍を編集する
export const editBook = async (param: Book) => {
  const response = await axios.put(`${Url}/${param.id}`, param)
  return response.data
}

// 書籍を削除する
export const deleteBook = async (id: string) => {
    await axios.delete(`${Url}/${id}`);
    return id;
};