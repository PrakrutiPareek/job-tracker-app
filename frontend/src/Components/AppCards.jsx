import {mockAppCards} from "../Data/mockAppCards";

const AppCards = () => {
  return (
    <div className="grid grid-cols-4 gap-6">
      {mockAppCards.map((card) => {
        return (
          <div key={card.heading} className="bg-(--navy-blue) p-4 rounded-xl">
            <h2 className="font-semibold text-[16px]">{card.heading}</h2>
            <div className="flex justify-between items-center text-2xl">
              {card.total}
              <span className="text-[14px] bg-(--gray) text-(--navy-blue) px-3 py-1 rounded-xl">
                {card.percentage}
              </span>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default AppCards;
