import { useEffect, useState } from "react";
import { BASE_API } from "../api/url";

function useFetch() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  async function getData() {
    setLoading(true);

    try {
      const response = await fetch(BASE_API);

      if (!response.ok) {
        throw new Error("Ma'lumot xatolik bilan kelyapti: " + response.status);
      }

      const json = await response.json();
      setData(json.data);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    getData();
  }, []);

  return { loading, error, data };
}

export default useFetch;
