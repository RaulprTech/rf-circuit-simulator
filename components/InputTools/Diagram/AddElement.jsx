import React from 'react';
import useToggle from '../../../hooks/useToggle';

export default (props) => {
  const onDragStart = (event, nodeType) => {
    event.dataTransfer.setData('application/reactflow', nodeType);
    event.dataTransfer.effectAllowed = 'move';
  };

  const [isOn, toggleIsOn] = useToggle();

  return (
    <>
      <div className="absolute bottom-0 right-0 mb-5 mr-5 z-10" >
        <div>
          <button title="New Component" onClick={toggleIsOn} className="block w-12 h-12 rounded-full transition-all shadow hover:shadow-lg transform hover:scale-110 hover:rotate-12">
            { !isOn &&        
            <img className="object-cover object-center w-full h-full rounded-full" src="https://cdn-icons-png.flaticon.com/512/1828/1828817.png" />
            }          
          </button>
        </div>
      </div>
      {isOn &&
      <aside className="absolute bottom-16 right-0 mb-8 z-10 bg-white px-5">
          <div className="grid grid-cols-1 gap-4 mt-6">
            <div className="" onDragStart={(event) => onDragStart(event, 'R')} draggable>
              <Options mode="R" />
            </div>
            <div className="" onDragStart={(event) => onDragStart(event, 'L')} draggable>
              <Options mode="L" />
            </div>
            <div className="" onDragStart={(event) => onDragStart(event, 'C')} draggable>
              <Options mode="C" />
            </div>
            <div className="" onDragStart={(event) => onDragStart(event, 'Z')} draggable>
              <Options mode="Z" />
            </div>
            <div className="" onDragStart={(event) => onDragStart(event, 'nodo')} draggable>
              <Options mode="Nodo" />
            </div>
          </div>
      </aside>
    }
    </>
  );
};


const Options = ({ mode }) => {
  return (
    <div className="p-2 flex flex-col items-center bg-white rounded-md justify-center shadow-xl cursor-pointer">
      <div className="rounded-full p-2 bg-indigo-200 flex flex-col items-center">
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
</svg>
      </div>
      <p className="text-xs mt-1 text-center font-semibold">{mode}</p>
    </div>
  )
}
