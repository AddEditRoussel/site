import sanityClient from "../sanityClient";
import { useEffect, useState } from "react";

export const useFetch = (query: any) => {
  const [error, setError] = useState(false);
  const [data, setData] = useState<null | []>(null);

  useEffect(() => {
    sanityClient
      .fetch(query)
      .then((data: any) => {
        setData(data);
      })
      .catch((error: any) => {
        console.log({ error });
        setError(error);
      });
  }, []);

  return { data, isLoading: !data && !error, error };
};
