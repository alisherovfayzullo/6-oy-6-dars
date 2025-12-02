function JobsItem({ job }) {
  const {
    company_name,
    create_time,
    image,
    isFeatured,
    isNew,
    skills,
    title,
    work_place,
    work_time,
  } = job;

  const fixedImage = image.replace("./images/svg/", "/img/");

  return (
    <li
      className={`bg-white flex  rounded-[5px] shadow-card py-[32px] px-[40px] gap-[24px] ${
        isFeatured ? "border-l-[5px] border-primary" : ""
      }`}
    >
      <img
        className="rounded-full"
        src={fixedImage}
        alt={title}
        width={88}
        height={88}
      />
      <div className="flex flex-col">
        <div className="flex items-center gap-4 mb-2.5">
          <h3 className="text-primary font-bold text-[18px] ">
            {company_name}
          </h3>
          <div className="flex items-center gap-2 ">
            {isNew && (
              <span className="rounded-full pt-1.75 pb-0.75 px-2 text-white bg-primary">
                NEW
              </span>
            )}
            {isFeatured && (
              <span className="rounded-full pt-1.75 pb-0.75 px-2 text-white bg-secondary">
                FEATURED
              </span>
            )}
          </div>
        </div>
        <h2 className="font-bold text-[22px] text-secondary mb-1.75 hover:text-primary cursor-pointer">
          {title}
        </h2>
        <div className="text-gray text-lg font-medium tracking-[0.14px] flex gap-[20px] items-center">
          <span>day</span>
          <span className="w-1 h-1 rounded-full bg-gray"></span>
          <span>{work_time}</span>
          <span className="w-1 h-1 rounded-full bg-gray"></span>
          <span>{work_place}</span>
        </div>
      </div>
      <ul className="flex items-center gap-4 ml-auto">
        {skills.map((s) => {
          return (
            <li
              key={s}
              className="cursor-pointer bg-primary-10 text-primary font-bold tracking-[-0.12px] rounded-sm py-2 px-2 hover:bg-primary hover:text-white"
            >
              {s}
            </li>
          );
        })}
      </ul>
    </li>
  );
}

export default JobsItem;
