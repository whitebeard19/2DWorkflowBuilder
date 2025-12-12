import React from "react";
import { Handle, Position } from "@xyflow/react";
import BaseNode from './BaseNode';
import { useApp } from '../context/AppContext';


const ModelNode = ({id}) => {

  const {deleteNode} = useApp();

  return (
    <BaseNode title="Model">
      <button
        onClick={() => deleteNode(id)}
        className="absolute top-1 right-1 text-red-500 hover:text-red-700 text-sm"
      >
        ✕
      </button>
      <select className="w-full border p-2 rounded-md text-sm">
        <option>GPT 3.5</option>
        <option>GPT 4</option>
        <option>Llama 3</option>
      </select>

      <Handle type="target" position={Position.Left} style={{
          background: '#f97316',
          width: '8px',
          height: '8px',
        }} />
      <Handle type="source" position={Position.Right} style={{
          background: '#f97316',
          width: '8px',
          height: '8px',
        }} />
    </BaseNode>
  );
};

export default ModelNode;
