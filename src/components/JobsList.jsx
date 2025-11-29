import JobsItem from "./JobsItem.jsx";

function JobsList({ data }) {
  return (
    <ul className="flex flex-col gap-12 ">
      {data &&
        data.map((job) => {
          return <JobsItem key={job.id} job={job} />;
        })}
    </ul>
  );
}

export default JobsList;
