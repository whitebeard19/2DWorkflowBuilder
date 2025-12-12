import React, { useCallback, useEffect, useRef } from 'react'
import { ReactFlow, Background, Controls, useNodesState, useEdgesState, addEdge, applyNodeChanges, applyEdgeChanges } from '@xyflow/react';
import "@xyflow/react/dist/style.css";
import { useApp } from '../context/AppContext';
import TextInputNode from '../nodes/TextInputNode';
import TextOutputNode from '../nodes/TextOutputNode';
import ChatInputNode from '../nodes/ChatInputNode';
import ChatOutputNode from '../nodes/ChatOutputNode';
import ModelNode from '../nodes/ModelNode';
import ConditionNode from '../nodes/ConditionNode';
import PromptNode from '../nodes/PromptNode';
 
const nodeTypes = {
    textInput: TextInputNode,
    chatInput: ChatInputNode,
    prompt: PromptNode,
    model: ModelNode,
    condition: ConditionNode,
    textOutput: TextOutputNode,
    chatOutput: ChatOutputNode, 
}


const Canvas = () => {
  const {currentProject, updateNodes, updateEdges} = useApp();


  const nodes = currentProject.nodes || [];
  const edges = currentProject.edges || [];

  const onNodesChange = useCallback(
    (changes) => {
      const updated = applyNodeChanges(changes, nodes);
      updateNodes(updated);
    },
    [nodes, updateNodes]
  );

  const onEdgesChange = useCallback(
    (changes) => {
      const updated = applyEdgeChanges(changes, edges);
      updateEdges(updated);
    },
    [edges, updateEdges]
  );

  const onConnect = useCallback(
    (params) => {
      const updated = addEdge(params, edges);
      updateEdges(updated);
    },
    [edges, updateEdges]
  );


  return (
    <div className='flex-1 h-full'>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        nodeTypes={nodeTypes}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        fitView
      >
        <Background />
        <Controls />
      </ReactFlow>
    </div>
  )
}

export default Canvas;