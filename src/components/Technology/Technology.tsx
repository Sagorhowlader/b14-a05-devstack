import TechnologyList from "./TechnologyList";
import type { ITechnologyType } from "../../dataType/technologyDataType";
import { Suspense, useState } from "react";
import YourStack from "../YourStack/YourStacks";

const fetchTechnologyData = async (): Promise<ITechnologyType[]> => {
  const response = await fetch("/data.json");
  const technologiesData = await response.json();
  return technologiesData;
};

const Technology = () => {
  const [yourStackTechnology, setYourStackTechnology] = useState<
    ITechnologyType[]
  >([]);
  const [technologyDataPromise] = useState(() => fetchTechnologyData());

  return (
    <div className="container mx-auto p-4 sm:p-6 md:p-8">
      <div className="flex flex-col justify-between items-center mb-10 gap-2 md:items-start">
        <h1 className="text-2xl sm:text-4xl font-extrabold">
          Explore the
          <span className="bg-gradient-to-r from-orange-500 via-pink-500 to-violet-600 bg-clip-text text-transparent">
            Technologies
          </span>
        </h1>
        <p>Pick one technology per category to build your ideal stack.</p>
      </div>

      <div className="flex flex-col gap-3 items-stretch md:flex-row md:items-start">
        {/* Left Div */}
        <div className="flex-1">
          <Suspense fallback={"Loading....."}>
            <TechnologyList
              technologyPromise={technologyDataPromise}
              yourStackTechnology={yourStackTechnology}
              setYourStackTechnology={setYourStackTechnology}
            />
          </Suspense>
        </div>

        {/* Right Div */}
        <div className="card w-full md:w-96 bg-base-100 card-md shadow-sm">
          <YourStack
            yourStackTechnology={yourStackTechnology}
            setYourStackTechnology={setYourStackTechnology}
          />
        </div>
      </div>
    </div>
  );
};

export default Technology;
