import { use, type Dispatch, type SetStateAction } from "react";
import type { ITechnologyType } from "../../dataType/technologyDataType";
import TechnologyCard from "./TechnologyCard";
type TechnologyListProps = {
  technologyPromise: Promise<ITechnologyType[]>;
  yourStackTechnology: ITechnologyType[];
  setYourStackTechnology: Dispatch<SetStateAction<ITechnologyType[]>>;
};

const TechnologyList = ({
  technologyPromise,
  yourStackTechnology,
  setYourStackTechnology,
}: TechnologyListProps) => {
  const technologyData = use(technologyPromise);

  return (
    <div className="grid grid-cols-3 gap-4">
      {technologyData.map((technology) => (
        <TechnologyCard
          key={technology.id}
          technology={technology}
          yourStackTechnology={yourStackTechnology}
          setYourStackTechnology={setYourStackTechnology}
        />
      ))}
    </div>
  );
};

export default TechnologyList;
