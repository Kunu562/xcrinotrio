import React from 'react';
import ReactFlow, { Node, Edge } from 'reactflow';
import 'reactflow/dist/style.css';

const initialNodes: Node[] = [
  {
    id: '1',
    type: 'input',
    data: { label: '💬' },
    position: { x: 0, y: 80 },
    style: {
      backgroundColor: 'white',
      width: 80,
      height: 80,
      borderRadius: '50%',
      border: '2px solid gray',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      fontSize: '2rem',
    },
  },
  {
    id: '2',
    type: 'input',
    data: { label: '✉️' },
    position: { x: 0, y: 240 },
    style: {
      backgroundColor: 'white',
      width: 80,
      height: 80,
      borderRadius: '50%',
      border: '2px solid gray',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      fontSize: '2rem',
    },
  },
  {
    id: '3',
    data: { label: '✨' },
    position: { x: 200, y: 160 },
    style: {
      backgroundColor: 'gray',
      width: 100,
      height: 100,
      borderRadius: '50%',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      color: 'white',
      fontSize: '2.5rem',
    },
  },
  {
    id: '4',
    data: { label: 'breezy' },
    position: { x: 400, y: 60 },
    style: {
      backgroundColor: 'white',
      width: 120,
      height: 60,
      borderRadius: '10%',
      border: '2px solid gray',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      color: 'blue',
      fontSize: '1.2rem',
      fontWeight: 'bold',
    },
  },
  {
    id: '5',
    data: { label: 'greenhouse' },
    position: { x: 400, y: 160 },
    style: {
      backgroundColor: 'white',
      width: 120,
      height: 60,
      borderRadius: '10%',
      border: '2px solid gray',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      color: 'green',
      fontSize: '1.2rem',
      fontWeight: 'bold',
    },
  },
  {
    id: '6',
    data: { label: 'workday' },
    position: { x: 400, y: 260 },
    style: {
      backgroundColor: 'white',
      width: 120,
      height: 60,
      borderRadius: '10%',
      border: '2px solid gray',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      color: 'orange',
      fontSize: '1.2rem',
      fontWeight: 'bold',
    },
  },
//   {
//     id: '7',
//     data: { label: '💲' },
//     position: { x: 250, y: 0 },
//     style: {
//       backgroundColor: 'white',
//       width: 40,
//       height: 40,
//       borderRadius: '50%',
//       border: '2px solid gray',
//       display: 'flex',
//       justifyContent: 'center',
//       alignItems: 'center',
//       fontSize: '1.5rem',
//     },
//   },
];

const initialEdges: Edge[] = [
  { id: 'e1-3', source: '1', target: '3', type: 'straight' },
  { id: 'e2-3', source: '2', target: '3', type: 'straight' },
  { id: 'e3-4', source: '3', target: '4', type: 'straight' },
  { id: 'e3-5', source: '3', target: '5', type: 'straight' },
  { id: 'e3-6', source: '3', target: '6', type: 'straight' },
];

const Design: React.FC = () => {
  return (
    <div className="w-[610px] h-[410px]">
      <ReactFlow nodes={initialNodes} edges={initialEdges} fitView>
        {/* <Background /> */}
        {/* <Controls /> */}
        {/* <MiniMap /> */}
      </ReactFlow>
    </div>
  );
};

export default Design;
