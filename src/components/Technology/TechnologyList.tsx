import { use } from "react";
import type { ITechnologyType } from "../../dataType/technologyDataType";
import TechnologyCard from "./TechnologyCard";

type TechnologyListProps = {
  technologyPromise: Promise<ITechnologyType[]>;
  yourStackTechnology: ITechnologyType[];
  handleAddToStack: (technology: ITechnologyType) => void;
};

const TechnologyList = ({
  technologyPromise,
  yourStackTechnology,
  handleAddToStack,
}: TechnologyListProps) => {
  const technologyData = use(technologyPromise);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {technologyData.map((technology) => (
        <TechnologyCard
          key={technology.id}
          technology={technology}
          handleAddToStack={handleAddToStack}
          isAlreadyInStack={yourStackTechnology.some(
            (stack) => stack.id === technology.id,
          )}
        />
      ))}
    </div>
  );
};

export default TechnologyList;
