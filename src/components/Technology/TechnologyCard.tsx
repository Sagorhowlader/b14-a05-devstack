import type { ITechnologyType } from "../../dataType/technologyDataType";

type TechnologyCardProps = {
  technology: ITechnologyType;
  handleAddToStack: (technology: ITechnologyType) => void;
  isAlreadyInStack: boolean;
};

const TechnologyCard = ({
  technology,
  isAlreadyInStack,
  handleAddToStack,
}: TechnologyCardProps) => {
  return (
    <div
      className={`card h-full border ${
        isAlreadyInStack ? "border-secondary" : "border-base-300"
      }`}
    >
      <div className="card-body flex flex-col">
        {/* Image + Badge */}
        <div className="flex items-start justify-between">
          <img
            src={technology.icon}
            alt={technology.name}
            className="h-14 w-14 object-contain"
          />

          <span className="badge badge-soft badge-secondary font-bold">
            {technology.badge}
          </span>
        </div>

        {/* Content */}
        <div className="mt-3">
          <h2 className="card-title">{technology.name}</h2>

          <p className="mt-1 text-sm text-gray-500">{technology.description}</p>
        </div>

        {/* Info */}
        <div className="mt-4 flex flex-wrap gap-1">
          <span className="badge badge-ghost">{technology.category}</span>

          <span className="badge badge-ghost">{technology.difficulty}</span>

          <span className="badge badge-ghost">⭐ {technology.rating}</span>
        </div>

        {/* Button */}
        <div className="card-actions mt-auto pt-6">
          <button
            className="btn btn-neutral w-full disabled:border-[#F4309E] disabled:text-[#F4309E]"
            disabled={isAlreadyInStack}
            onClick={() => handleAddToStack(technology)}
          >
            {isAlreadyInStack ? "✓ Added to Stack" : "Add to Stack"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default TechnologyCard;
