import { useEffect, useState } from "react";
import * as api from "../apis/publisher";
import { Publisher } from "../types";

export const usePublisher = () => {
  const [publishers, setPublishers] = useState<Publisher[]>([])

  // Book取得処理
  useEffect(() => {
    api.findPublisher().then((publishers: Publisher[]) => {
      setPublishers([...publishers])
    })
  }, []);

  return publishers
}