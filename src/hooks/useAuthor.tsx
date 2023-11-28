import { useEffect, useState } from "react";
import * as api from "../apis/author";
import { Author } from "../types";

export const useAuthor = () => {
  const [authors, setAuthors] = useState<Author[]>([])

  // Book取得処理
  useEffect(() => {
    api.findAuthor().then((authors: Author[]) => {
      setAuthors([...authors])
    })
  }, []);

  return authors
}