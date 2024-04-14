import axios from "axios";
import { useEffect, useReducer } from "react";

const useFetch = (url = "") => {
  const [state, dispatch] = useReducer(
    (state, { type, payload }) => {
      switch (type) {
        case "LOADING":
          return { ...state, loading: true, error: false, data: [] };
        case "SUCCESS":
          return { ...state, loading: false, error: false, data: payload };
        case "ERROR":
          return {
            ...state,
            loading: false,
            errorMessage: payload.message,
            error: true,
            fullError: payload,
          };
        default:
          return state;
      }
    },
    {
      data: [],
      loading: true,
      errorMessage: "",
      error: false,
      fullError: null,
    },
  );
  useEffect(() => {
    let unmounted = false;
    axios
      .get(url)
      .then((response) => {
        if (!unmounted) {
          dispatch({ type: "SUCCESS", payload: response.data });
        }
      })
      .catch((error) => {
        if (!unmounted) {
          dispatch({ type: "ERROR", payload: error });
        }
      });
    return () => {
      unmounted = true;
    };
  }, [url]);

  return state;
};

export default useFetch;
