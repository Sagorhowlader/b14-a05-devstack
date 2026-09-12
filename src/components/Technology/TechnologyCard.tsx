import React, { type Dispatch, type SetStateAction } from "react";
import type { ITechnologyType } from "../../dataType/technologyDataType";
import { Bounce, toast } from "react-toastify";
type TechnologyCardProps = {
  technology: ITechnologyType;
  yourStackTechnology: ITechnologyType[];
  setYourStackTechnology: Dispatch<SetStateAction<ITechnologyType[]>>;
};
const TechnologyCard = ({
  technology,
  yourStackTechnology,
  setYourStackTechnology,
}: TechnologyCardProps) => {
  const isAlreadyInStack =
    yourStackTechnology.filter((item) => item.id === technology.id).length > 0;
  const handleAddtoStack = (technology: ITechnologyType) => {
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
  return (
    <div
      className={`card border ${isAlreadyInStack ? "border-secondary" : "border-base-300"}`}
    >
      <div className="card-body">
        <div className="flex justify-between items-start">
          <img
            src={technology.icon}
            alt={technology.name}
            className="w-14 h-14 object-contain"
          />
          <span className="badge badge-soft badge-secondary font-bold">
            {technology.badge}
          </span>
        </div>

        {/* Content */}
        <div className="mt-3">
          <h2 className="card-title">{technology.name}</h2>
          <p className="text-sm text-gray-500 mt-1">{technology.description}</p>
        </div>

        {/* Info */}
        <div className="mt-4 flex flex-wrap gap-1">
          <span className="badge badge-ghost">{technology.category}</span>
          <span className="badge badge-ghost">{technology.difficulty}</span>
          <span className="badge badge-ghost">⭐ {technology.rating}</span>
        </div>

        {/* Button */}
        <div className="card-actions mt-6">
          <button
            className="btn btn-neutral w-full  disabled:border-[#F4309E] disabled:text-[#F4309E]"
            disabled={isAlreadyInStack}
            onClick={() => {
              handleAddtoStack(technology);
            }}
          >
            {isAlreadyInStack ? "✓ Added to Stack" : "Add to Stack"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default TechnologyCard;
