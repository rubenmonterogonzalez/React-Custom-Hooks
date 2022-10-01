import { useState, useEffect, useRef } from "react";
import Proptypes from "prop-types";

export const useFetch = (url) => {
  const isMounted = useRef(true);
  const [state, setState] = useState({
    data: null,
    loading: true,
    error: null,
  });

  useEffect(() => {
    return () => {
      isMounted.current = false;
    };
  }, []);

  const getQuotes = async () => {
    setState({ data: null, loading: true, error: null });

    const response = await fetch(url);
    const data = await response.json();

    setTimeout(() => {
      if (!isMounted.current) {
        setState({
          loading: false,
          error: null,
          data,
        });
      }
    }, 1000);
  };

  useEffect(() => {
    getQuotes();
  }, [url]);

  return state;
};

useFetch.proptypes = {
  url: Proptypes.string.isRequired
}
