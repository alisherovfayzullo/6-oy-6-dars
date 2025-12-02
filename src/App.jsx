import { useEffect, useState } from "react";
import JobsList from "./components/JobsList";
import Navbar from "./components/Navbar";
import { RingLoader } from "react-spinners";

const BASE_API = "https://json-api.uz/api/project/jobs-list/jobs";

function App() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  async function getData() {
    setLoading(true);
    try {
      const response = await fetch(BASE_API);
      if (!response.ok) {
        throw new Error("Xatolik bor:" + response.status);
      }
      const data = await response.json();
      setData(data);
      console.log(data);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    getData();
  }, []);

  if (loading) {
    return (
      <div className="w-full h-screen flex  items-center justify-center">
        <RingLoader color="#5ca5a5" />
      </div>
    );
  }
  return (
    <>
      <Navbar />
      <main className="pt-[77px] pb-[120px]">
        <div className="container">
          <JobsList data={data} />
        </div>
      </main>
    </>
  );
}

export default App;
