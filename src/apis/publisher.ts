import axios from "axios"

// モックサーバーのURL
const Url: string = "http://localhost:3000/publisher/"

// 出版社を検索する
export const findPublisher = async () => {
  const response = await axios.get(Url)
  return response.data
}

// 出版社を登録する

// 出版社を削除する