import Navbar from "./components/Navbar.jsx";
import JobsList from "./components/JobsList.jsx";
import useFetch from "./hooks/useFetch.js";
import Loading from "./components/Loading.jsx";

function App() {
  const { data, loading } = useFetch();
  if (loading) {
    return <Loading />;
  }

  return (
    <>
      <Navbar />
      <main className="pt-[4.8rem] pb-[7.5rem]">
        <div className="container">{data && <JobsList data={data} />}</div>
      </main>
    </>
  );
}

export default App;
