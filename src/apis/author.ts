import axios from "axios"

// モックサーバーのURL
const Url: string = "http://localhost:3000/author/"

// 著者を検索する
export const findAuthor = async () => {
  const response = await axios.get(Url)
  return response.data
}

// 著者を登録する

// 著者を削除する
