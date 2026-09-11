import React from "react";
import type { ITechnologyType } from "../../dataType/technologyDataType";
type TechnologyCardProps = {
  technology: ITechnologyType;
};
const TechnologyCard = ({ technology }: TechnologyCardProps) => {
  return (
    <div className="card border border-base-300">
      <div className="card-body">
        <div className="flex justify-between items-start">
          <img
            src={technology.icon}
            alt={technology.name}
            className="w-14 h-14 object-contain"
          />
          <span className="badge badge-primary">{technology.badge}</span>
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
          <button className="btn btn-primary w-full">Add to Stack</button>
        </div>
      </div>
    </div>
  );
};

export default TechnologyCard;
