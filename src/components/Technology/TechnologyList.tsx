import { use } from "react";
import type { ITechnologyType } from "../../dataType/technologyDataType";
import TechnologyCard from "./TechnologyCard";
type TechnologyListProps = {
  technologyPromise: Promise<ITechnologyType[]>;
};

const TechnologyList = ({ technologyPromise }: TechnologyListProps) => {
  const technologyData = use(technologyPromise);

  return (
    <div className="grid grid-cols-3 gap-4">
      {technologyData.map((technology) => (
        <TechnologyCard key={technology.id} technology={technology} />
      ))}
    </div>
  );
};

export default TechnologyList;
