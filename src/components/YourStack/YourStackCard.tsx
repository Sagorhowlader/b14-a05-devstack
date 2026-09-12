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
    <div className="card bg-base-100 card-xs shadow-sm mb-2.5 p-3.5">
      <div className="card-body flex flex-row justify-between items-center">
        <div className="flex flex-row justify-between items-center gap-2.5">
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

        <IoMdClose
          className="w-5 h-5"
          onClick={() => handleRemoveFromStack(stack)}
        />
      </div>
    </div>
  );
};

export default YourStackCard;
