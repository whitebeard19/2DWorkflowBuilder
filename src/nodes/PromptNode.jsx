import React from "react";
import { Handle, Position } from "@xyflow/react";
import BaseNode from './BaseNode';
import { useApp } from '../context/AppContext';


const PromptNode = ({id}) => {

  const {deleteNode} = useApp();

  return (
    <BaseNode title="Prompt">
      <button
        onClick={() => deleteNode(id)}
        className="absolute top-1 right-1 text-red-500 hover:text-red-700 text-sm"
      >
        ✕
      </button>
      <textarea
        className="w-full border p-2 rounded-md text-sm"
        placeholder="Write your prompt..."
      />

      <Handle type="target" position={Position.Left} style={{
          background: '#f97316',
          width: '8px',
          height: '8px',
        }}/>
      <Handle type="source" position={Position.Right} style={{
          background: '#f97316',
          width: '8px',
          height: '8px',
        }} />
    </BaseNode>
  );
};

export default PromptNode;
