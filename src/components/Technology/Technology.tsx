import TechnologyList from "./TechnologyList";
import type { ITechnologyType } from "../../dataType/technologyDataType";
import { Suspense, useState } from "react";
import YourStack from "../YourStack/YourStacks";
import Skeleton from "../Skeleton/Skeleton";
import { Bounce, toast } from "react-toastify";

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

  // handle add to stack
  const handleAddToStack = (technology: ITechnologyType): void => {
    setYourStackTechnology([...yourStackTechnology, technology]);
    toast.success(`${technology.name} Add in Your Stack Bucket`, {
      position: "bottom-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Bounce,
    });
  };

  //handleRemove from stack
  const handleRemoveFromStack = (technology: ITechnologyType): void => {
    const restStackTechnology = yourStackTechnology.filter(
      (stack) => stack.id != technology.id,
    );
    setYourStackTechnology([...restStackTechnology]);
    toast.error(`${technology.name} is Delete form you Stack`, {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Bounce,
    });
  };

  const handleRemoveAll = () => {
    setYourStackTechnology([]);
    toast.error(`All Stack are Deleting`, {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Bounce,
    });
  };

  return (
    <div className="container mx-auto p-4 sm:p-6 md:p-8">
      <div className="flex flex-col justify-between text-center items-center mb-10 gap-2 lg:items-start">
        <h1 className="text-2xl sm:text-4xl font-extrabold">
          Explore the
          <span className="text-brand-gradient">Technologies</span>
        </h1>
        <p className="text-xs md:text-xl">
          Pick one technology per category to build your ideal stack.
        </p>
      </div>

      <div className="flex flex-col gap-3 items-stretch lg:flex-row lg:items-start">
        {/* Left Div */}
        <div className="flex-1">
          <Suspense fallback={<Skeleton />}>
            <TechnologyList
              technologyPromise={technologyDataPromise}
              yourStackTechnology={yourStackTechnology}
              handleAddToStack={handleAddToStack}
            />
          </Suspense>
        </div>

        {/* Right Div */}
        <div className="card w-full lg:w-96 bg-base-100 card-md shadow-sm">
          <YourStack
            yourStackTechnology={yourStackTechnology}
            handleRemoveFromStack={handleRemoveFromStack}
            handleRemoveAll={handleRemoveAll}
          />
        </div>
      </div>
    </div>
  );
};

export default Technology;
