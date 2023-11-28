// 書籍
export type Book = {
  "id": string
  "title": string
  "authorId": string
  "publisherId": string
}

// 書籍登録パラメータ
export type BookParam = {
  "title": string
  "authorId": string
  "publisherId": string
}

// 著者
export type Author = {
  "id": string
  "name": string
}

// 出版社
export type Publisher = {
  "id": string
  "name": string
}