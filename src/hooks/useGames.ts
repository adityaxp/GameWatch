import React, { useEffect } from "react";
import ApiClient from "../services/ApiClient";
import { CanceledError } from "axios";

export interface Platform {
  id: number;
  name: string;
  slug: string;
}

export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
  rating_top: number;
}

interface GamesResponse {
  count: number;
  results: Game[];
}

const useGames = () => {
  const [games, setGames] = React.useState<Game[]>([]);
  const [error, setError] = React.useState("");

  useEffect(() => {
    const controller = new AbortController();

    ApiClient.get<GamesResponse>("/games", { signal: controller.signal })
      .then((res) => setGames(res.data.results))
      .catch((err: Error) => {
        if (err instanceof CanceledError) {
          return;
        } else {
          setError(err.message);
        }
      });

    return () => controller.abort();
  }, []);

  return { games, error };
};

export default useGames;
