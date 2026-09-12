import type { ITechnologyType } from "../../dataType/technologyDataType";
import YourStackCard from "./YourStackCard";

type YourStackProps = {
  yourStackTechnology: ITechnologyType[];
  handleRemoveFromStack: (technology: ITechnologyType) => void;
  handleRemoveAll: () => void;
};

const YourStack = ({
  yourStackTechnology,
  handleRemoveFromStack,
  handleRemoveAll,
}: YourStackProps) => {
  return (
    <div className="card card-md bg-base-100 shadow-sm">
      <div className="card-body">
        <h2 className="text-base font-bold">Your Stack</h2>

        {yourStackTechnology.length === 0 ? (
          <div className="flex flex-col gap-2.5">
            <p className="text-xs text-[#94A3B8]">
              No technologies selected yet.
            </p>

            <div className="flex items-center justify-center border border-dashed border-[#94A3B8]/40 p-6">
              <h1 className="text-xs text-[#94A3B8]">Your stack is empty.</h1>
            </div>
          </div>
        ) : (
          <>
            <p className="text-xs text-[#94A3B8]">
              {yourStackTechnology.length} Technology Selected
            </p>

            {yourStackTechnology.map((stack) => (
              <YourStackCard
                key={stack.id}
                stack={stack}
                handleRemoveFromStack={handleRemoveFromStack}
              />
            ))}

            <button
              className="btn btn-outline btn-error w-full"
              onClick={handleRemoveAll}
            >
              Remove All
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default YourStack;
