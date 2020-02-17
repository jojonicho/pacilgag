import { useEffect, useState } from "react";

export const useFetch = url => {
  const proxyUrl = "https://cors-anywhere.herokuapp.com/";

  const [state, setState] = useState({ data: null, loading: true });

  useEffect(() => {
    setState({ data: state.data, loading: true });
    window
      .fetch(proxyUrl + url)
      .then(x => x.json())
      .then(y => {
        setState({ data: y, loading: false });
      });
  }, [url, setState]);

  return state;
};
