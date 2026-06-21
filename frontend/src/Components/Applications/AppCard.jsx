const AppCard = ({name, statusCounts, percentage}) => {
  return (
    <div className="bg-(--navy-blue) p-4 rounded-xl">
      <h2 className="font-semibold text-[16px]">{name}</h2>
      <div className="flex justify-between items-center text-2xl">
        {statusCounts}
        {percentage !== undefined && (
          <span className="text-[14px] bg-(--gray) text-(--black) text-2xl font-extrabold px-3 py-1 rounded-xl">
            {percentage}%
          </span>
        )}
      </div>
    </div>
  );
};

export default AppCard;
