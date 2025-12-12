import React from "react";
import { Handle, Position } from "@xyflow/react";
import BaseNode from './BaseNode';
import { useApp } from '../context/AppContext';


const TextOutputNode = ({id}) => {

  const {deleteNode} = useApp();

  return (
    <BaseNode title="Text Output">
      <button
        onClick={() => deleteNode(id)}
        className="absolute top-1 right-1 text-red-500 hover:text-red-700 text-sm"
      >
        ✕
      </button>
      <div className="w-full border p-2 rounded-md bg-gray-50 text-sm">
        Output shown here...
      </div>

      <Handle type="target" position={Position.Left} style={{
          background: '#f97316',
          width: '8px',
          height: '8px',
        }} />
    </BaseNode>
  );
};

export default TextOutputNode;
