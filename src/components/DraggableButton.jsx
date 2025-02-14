import React from 'react';
import { useDrag, useDrop } from 'react-dnd';

const ItemType = 'BUTTON';

const DraggableButton = ({ label, index, moveButton, updateExpression }) => {
  const [, ref] = useDrag({
    type: ItemType,
    item: { index },
  });

  const [, drop] = useDrop({
    accept: ItemType,
    hover: (draggedItem) => {
      if (draggedItem.index !== index) {
        moveButton(draggedItem.index, index);
        draggedItem.index = index;
      }
    },
  });

  return (
    <button
      ref={(node) => ref(drop(node))}
      onClick={() => updateExpression(label)}
      className={`p-5 rounded-lg text-xl font-bold shadow-md border border-gray-300 transition duration-200
        ${label === '=' ? 'bg-blue-500 text-white hover:bg-blue-600' : 
          label === '/' || label === '*' || label === '-' || label === '+' ? 'bg-gray-400 text-black hover:bg-gray-500' : 
          'bg-gray-100 text-black hover:bg-gray-200'}
      `}
    >
      {label}
    </button>
  );
};

export default DraggableButton;
