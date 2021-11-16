import React, { useState, useRef } from 'react';
import ReactFlow, {
  ReactFlowProvider,
  addEdge,
  removeElements,
  Controls,
  Background,       
  ArrowHeadType,   // Forma de flechas 
  updateEdge        // Editar conexiones
} from 'react-flow-renderer';


import AddElement from './AddElement'

const initialElements = [
  {
    id: 'V1',
    // type: 'input',
    type: 'customnode',
    data: { label: (
      <>
        <h2>V1</h2>
      </>
    ) },
    position: { x: 50, y: 250 },
    style: { border: '1px solid #777', padding: 20 },
  },
  {
    id: 'V2',
    // type: 'output',
    type: 'customnode',
    data: { label: 'V2' },
    position: { x: 1200, y: 250 },
    style: { border: '1px solid #777', padding: 20 },
  },
];

let id = 0;

let idR = 0;
let idC = 0;
let idL = 0;
let idZ = 0;

let edges = []

export default () => {
  const reactFlowWrapper = useRef(null);
  const [reactFlowInstance, setReactFlowInstance] = useState(null);
  const [elements, setElements] = useState(initialElements);

  const onConnect = (params) => {
    setElements((els) => addEdge({...params,  type: 'floating', arrowHeadType: ArrowHeadType.Arrow, animated: true, style: { stroke: '#000' }}, els)
    );
    console.log('Conexiones', params)          // parece que de aqui se puede sacar las conexiones
    edges.push(params)
  }


  const onElementsRemove = (elementsToRemove) =>
    setElements((els) => removeElements(elementsToRemove, els));

  const onLoad = (_reactFlowInstance) =>
    setReactFlowInstance(_reactFlowInstance);

  const onEdgeUpdate = (oldEdge, newConnection) =>
    setElements((els) => updateEdge(oldEdge, newConnection, els));

  const onDragOver = (event) => {
    event.preventDefault();
    event.dataTransfer.dropEffect = 'move';
  };

  const onDrop = (event) => {
    event.preventDefault();


    const reactFlowBounds = reactFlowWrapper.current.getBoundingClientRect();
    const type = event.dataTransfer.getData('application/reactflow');
    const position = reactFlowInstance.project({
      x: event.clientX - reactFlowBounds.left,
      y: event.clientY - reactFlowBounds.top,
    });

    if(type=='R'){
      const getIdR = () => `R${idR++}`;
      const newR = {
        id: getIdR(),
        type: 'customnode',
        sourcePosition: 'right',
        targetPosition: 'left',
        position,
        data: { label: `${type}${idR}` },
      };
      setElements((es) => es.concat(newR));
    }else if(type=='L'){
      const getIdL = () => `L${idL++}`;
      const newL = {
        id: getIdL(),
        type: 'customnode',
        sourcePosition: 'right',
        targetPosition: 'left',
        position,
        data: { label: `${type}${idL}` },
      };
      setElements((es) => es.concat(newL));
    }else if(type=='C'){
      const getIdC = () => `C${idC++}`;
      const newC = {
        id: getIdC(),
        type: 'customnode',
        sourcePosition: 'right',
        targetPosition: 'left',
        position,
        data: { label: `${type}${idC}` },
      };
      setElements((es) => es.concat(newC));
    }else if(type=='Z'){
      const getIdZ = () => `Z${idZ++}`;
      const newZ = {
        id: getIdZ(),
        type: 'customnode',
        sourcePosition: 'right',
        targetPosition: 'left',
        position,
        data: { label: `${type}${idZ}` },
      };
      setElements((es) => es.concat(newZ));
    }else{
      const getId = () => `${id++}`;
      const newNode = {
        id: getId(),
        type: 'smoothstep',
        sourcePosition: 'right',
        targetPosition: 'left',
        position,
        data: { label: `${id}` },
        style: {padding: 10}
      };
      setElements((es) => es.concat(newNode));
    }

    
    // setElements((es) => es.concat(newNode));
  };

  return (
    <ReactFlowProvider>
      <article className="diagram-layout" ref={reactFlowWrapper}>
        <ReactFlow
          elements={elements}
          onConnect={onConnect}
          onElementsRemove={onElementsRemove}
          onLoad={onLoad}
          onDrop={onDrop}
          onDragOver={onDragOver}
          onEdgeUpdate={onEdgeUpdate}
        >
          <Controls />
          <Background
            variant="dots"
            gap={16}
            size={1}
          />
        </ReactFlow>
      </article>
      <AddElement />
    </ReactFlowProvider>
  );
};

