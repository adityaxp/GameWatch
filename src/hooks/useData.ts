import React from "react";
import ApiClient from "../services/ApiClient";
import { CanceledError } from "axios";

interface FetchResponse<T> {
  count: number;
  results: T[];
}

const useData = <T>(endpoint: string) => {
  const [data, setGames] = React.useState<T[]>([]);
  const [error, setError] = React.useState<string>("");
  const [loading, setLoading] = React.useState<boolean>(false);

  React.useEffect(() => {
    const controller = new AbortController();

    setLoading(true);

    ApiClient.get<FetchResponse<T>>(endpoint, { signal: controller.signal })
      .then((res) => {
        setGames(res.data.results);
        setLoading(false);
      })
      .catch((err: Error) => {
        if (err instanceof CanceledError) {
          setLoading(false);
          return;
        } else {
          setLoading(false);
          setError(err.message);
        }
      });

    return () => controller.abort();
  }, []);

  return { data, error, loading };
};

export default useData;
