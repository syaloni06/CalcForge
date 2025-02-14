import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import useCalculatorStore from "../store";
import DraggableButton from "./DraggableButton";
import { MdWbSunny } from "react-icons/md";
import { MdDarkMode } from "react-icons/md";
import { BsFillCalculatorFill } from "react-icons/bs";

const Calculator = () => {
  const {
    buttons,
    expression,
    updateExpression,
    rearrangeButtons,
    clearExpression,
    toggleDarkMode,
    darkMode,
    undo,
    redo,
  } = useCalculatorStore();

  const moveButton = (fromIndex, toIndex) => {
    const updatedButtons = [...buttons];
    const [movedItem] = updatedButtons.splice(fromIndex, 1);
    updatedButtons.splice(toIndex, 0, movedItem);
    rearrangeButtons(updatedButtons);
  };

  return (
    <DndProvider backend={HTML5Backend}>
      <div
        className={`flex flex-col items-center justify-center min-h-screen  ${
          darkMode ? "bg-gray-900 text-white" : "bg-gray-200 text-black"
        }`}
      >
        {/* Theme Toggle */}
        <button
          className="absolute top-4 right-4 p-2 hover:scale-110"
          onClick={toggleDarkMode}
        >
          {darkMode ? (
            <MdWbSunny className="text-4xl text-yellow-400" />
          ) : (
            <MdDarkMode className="text-4xl" />
          )}
        </button>

        {/* Calculator Box */}
        <div
          className={` w-full md:w-96 p-4 rounded-xl shadow-lg border ${
            darkMode
              ? "bg-gray-800 border-gray-600"
              : "bg-white border-gray-300"
          }`}
        >
          {/* Header */}
          <div
            className={`flex justify-between items-center px-4 py-2 rounded-t-lg border-b ${
              darkMode
                ? "bg-gray-700 border-gray-600"
                : "bg-red-100 border-gray-300"
            }`}
          >
            <div className="text-sm flex gap-1 font-bold">
              <BsFillCalculatorFill className="self-center text-lg"/>
              <span className="italic">CalcForge</span>
            </div>
            <div className="flex space-x-2">
              <div className="w-3 h-3 bg-red-500 rounded-full"></div>
              <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
            </div>
          </div>

          {/* Display */}
          <div
            className={`mb-4 p-5 text-right rounded-md text-3xl font-mono shadow-inner border h-16 flex items-center justify-end ${
              darkMode
                ? "bg-gray-700 border-gray-600"
                : "bg-gray-100 border-gray-300"
            }`}
          >
            {expression || "0"}
          </div>

          {/* Buttons */}
          <div className="grid grid-cols-4 gap-2">
            {buttons.map((btn, index) => (
              <DraggableButton
                key={btn}
                label={btn}
                index={index}
                moveButton={moveButton}
                updateExpression={updateExpression}
              />
            ))}
          </div>

          {/* Actions */}
          <div className="flex mt-4 space-x-2">
            <button
              className="flex-1 p-3 bg-red-500 text-white rounded-md font-semibold shadow-md hover:bg-red-600"
              onClick={clearExpression}
            >
              AC
            </button>
            <button
              className="flex-1 p-3 bg-blue-500 text-white rounded-md font-semibold shadow-md hover:bg-blue-600"
              onClick={undo}
            >
              Undo
            </button>
            <button
              className="flex-1 p-3 bg-green-500 text-white rounded-md font-semibold shadow-md hover:bg-green-600"
              onClick={redo}
            >
              Redo
            </button>
          </div>
        </div>
      </div>
    </DndProvider>
  );
};

export default Calculator;
