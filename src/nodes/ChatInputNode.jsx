import React from 'react'
import BaseNode from './BaseNode';
import { Handle, Position } from '@xyflow/react';
import { useApp } from '../context/AppContext';


const ChatInputNode = ({id}) => {

  
  const {deleteNode} = useApp();
    
  return (
    <BaseNode title="Chat Input">
        {/* DELETE BUTTON */}
        <button
          onClick={() => deleteNode(id)}
          className="absolute top-1 right-1 text-red-500 hover:text-red-700 text-sm"
        >
          ✕
        </button>
        <input 
            type="text" 
            placeholder='User message...'
            className='w-full border p-2 rounded-md text-sm'
        />

        <Handle type='source' position={Position.Right} style={{
          background: '#f97316',
          width: '8px',
          height: '8px',
        }}/>
    </BaseNode>
  )
}

export default ChatInputNode