import { IoMdClose } from "react-icons/io";
import type { ITechnologyType } from "../../dataType/technologyDataType";

type YourStackCardProps = {
  stack: ITechnologyType;
  handleRemoveFromStack: (technology: ITechnologyType) => void;
};

const YourStackCard = ({
  stack,
  handleRemoveFromStack,
}: YourStackCardProps) => {
  return (
    <div className="card card-xs mb-2.5 bg-base-100 p-3.5 shadow-sm">
      <div className="card-body flex flex-row items-center justify-between">
        <div className="flex items-center gap-2.5">
          <img
            src={stack.icon}
            alt={`${stack.name} icon`}
            className="h-8 w-8 object-contain"
          />

          <div className="flex flex-col gap-0.5">
            <h2 className="text-xs font-bold">{stack.name}</h2>
            <p>{stack.category}</p>
          </div>
        </div>

        <button
          type="button"
          onClick={() => handleRemoveFromStack(stack)}
          aria-label={`Remove ${stack.name}`}
        >
          <IoMdClose className="h-5 w-5" />
        </button>
      </div>
    </div>
  );
};

export default YourStackCard;
