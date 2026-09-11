import type { Dispatch, SetStateAction } from "react";
import type { ITechnologyType } from "../../dataType/technologyDataType";
import YourStackCard from "./YourStackCard";
import { Bounce, toast } from "react-toastify";

type YourStackProps = {
  yourStackTechnology: ITechnologyType[];
  setYourStackTechnology: Dispatch<SetStateAction<ITechnologyType[]>>;
};

const YourStack = ({
  yourStackTechnology,
  setYourStackTechnology,
}: YourStackProps) => {
  const handleDelectStack = (technology: ITechnologyType) => {
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
  const handleRemoveAllButton = () => {
    setYourStackTechnology([]);
  };
  return (
    <div className="card bg-base-100 card-md shadow-sm">
      <div className="card-body">
        <h2 className="card-title">Your Stack</h2>

        {yourStackTechnology.length === 0 ? (
          <div>
            <p>No technologies selected yet.</p>

            <div className="flex justify-center items-center border border-dashed p-6">
              <h1>Your stack is empty.</h1>
            </div>
          </div>
        ) : (
          <>
            {yourStackTechnology.map((stack) => (
              <YourStackCard
                key={stack.id}
                stack={stack}
                handleDelectStack={handleDelectStack}
              />
            ))}

            <button
              className="btn btn-outline btn-error w-full"
              onClick={() => handleRemoveAllButton()}
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
