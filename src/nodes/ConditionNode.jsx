import React from "react";
import { Handle, Position } from "@xyflow/react";
import BaseNode from "./BaseNode";
import { useApp } from '../context/AppContext';


const ConditionNode = ({id}) => {

  const {deleteNode} = useApp();

  return (
    <BaseNode title="Condition">

      <button
        onClick={() => deleteNode(id)}
        className="absolute top-1 right-1 text-red-500 hover:text-red-700 text-sm"
      >
        ✕
      </button>
      <input
        className="w-full border p-2 rounded-md text-sm"
        placeholder="text contains 'hello'"
      />

      <div className="flex justify-between text-xs text-gray-500 mt-1">
        <span>False</span>
        <span>True</span>
      </div>

      <Handle id="false" type="source" position={Position.Bottom} style={{ 
        left: 20,
        background: 'red',
        width: '8px',
        height: '8px', 
        }} />
        
      <Handle id="true" type="source" position={Position.Bottom} style={{ 
        left: '85%',
        background: 'green',
        width: '8px',
        height: '8px', 
        }} />

      <Handle type="target" position={Position.Top} />
    </BaseNode>
  );
};

export default ConditionNode;
