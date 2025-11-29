// Fayl nomi: JobsItem.jsx

function JobsItem({ job }) {
  const {
    title,
    company_name,
    create_time,
    image,
    isFeatured,
    isNew,
    skills,
    work_plasce,
    work_time,
  } = job;

  return (
    <li
      className={`p-6 bg-white rounded-[5px] shadow-[0_15px_20px_-5px_#0D718226] flex flex-col md:flex-row items-start md:items-center justify-between gap-4 ${
        isFeatured ? "border-l-[5px] border-[#5CA5A5] pl-[20px] md:pl-6" : ""
      }`}
    >
      <div className="flex items-center gap-6 w-full md:w-auto">
        <img
          className="rounded-full w-20 h-20 md:w-22 md:h-22 -mt-10 md:mt-0"
          src={image}
          alt={title}
        />

        <div>
          <div className="flex items-center gap-3 mb-1">
            <span className="text-[#5CA5A5] font-bold text-md">
              {company_name}
            </span>
            {isNew && (
              <span className="bg-[#5CA5A5] text-white rounded-full px-2 py-1 text-xs font-bold uppercase">
                New!
              </span>
            )}
            {isFeatured && (
              <span className="bg-[#2B3939] text-white rounded-full px-2 py-1 text-xs font-bold uppercase">
                Featured
              </span>
            )}
          </div>
          <h3 className="font-bold text-xl hover:text-[#5CA5A5] cursor-pointer mb-1">
            {title}
          </h3>
          <div className="flex text-[#7C8F8F] text-sm gap-3">
            <span>{create_time}</span>
            <span>&middot;</span>
            <span>{work_time}</span>
            <span>&middot;</span>
            <span>{work_plasce}</span>
          </div>
        </div>
      </div>

      <div className="flex flex-wrap gap-3 items-center pt-4 border-t w-full md:w-auto md:border-t-0 md:pt-0">
        {skills &&
          skills.map((skill, index) => (
            <span
              key={index}
              className="bg-[#EFF6F6] text-[#5CA5A5] font-bold px-2 py-1 rounded cursor-pointer hover:bg-[#5CA5A5] hover:text-white transition"
            >
              {skill}
            </span>
          ))}
      </div>
    </li>
  );
}

export default JobsItem;
