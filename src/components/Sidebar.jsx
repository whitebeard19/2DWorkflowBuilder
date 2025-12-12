import React, { useState } from 'react'
import { useApp } from '../context/AppContext';
import { toCamelCase } from '../utils/toCamelCase';
import { ChevronDown, ChevronRight, Plus, Pencil, Trash2 } from 'lucide-react';


// Node Category
const sections = [
  {category: "Inputs", nodes: ["Text Input", "Chat Input"] },
  {category: "Prompts", nodes: ["Prompt"] },
  {category: "Models", nodes: ["Model"] },
  {category: "Logic", nodes: ["Condition"] },
  {category: "Outputs", nodes: ["Text Output", "Chat Output"] },
];

const Sidebar = () => {

  const {
    projects,
    currentProjectId,
    createProject,
    deleteProject,
    renameProject,
    addNode,
    setCurrentProjectId,
  } = useApp();

  const [expanded, setExpanded] = useState(null);
  const [editingProjectName, setEditingProjectName] = useState(false);
  const [newProjectName, setNewProjectName] = useState("");


  const toggleAccordion = (index) => {
    setExpanded(expanded === index ? null : index);
  };

  const currentProject = projects[currentProjectId] || null;

  if (!currentProjectId || !currentProject) {
    return (
      <div className="w-64 bg-[#F8FAFF] border-r border-slate-200 h-screen p-4 text-center">
        <p className="text-slate-500">No projects found.</p>
        <button
          className="mt-4 w-full border border-slate-300 bg-gray-100 px-3 py-2 rounded hover:bg-[#DCE8FF]"
          onClick={() => createProject()}
        >
          + Create Project
        </button>
      </div>
    );
  }
  

  return (
    <div className='w-64 bg-[#F8FAFF] border-r border-slate-200 h-screen p-4 overflow-y-auto'>
      {/** Project Section */}
      <div className='mb-6'>
        <label className='block text-lg font-semibold text-slate-900 mb-1'>Project</label>

        {/** Dropdown */}

        <select
          className='w-full border border-slate-300 rounded px-3 py-2 mb-2 bg-white'
          value={currentProjectId || ""}
          onChange={(e) => setCurrentProjectId(e.target.value)}
        >
          {Object.entries(projects).map(([id, proj]) => (
            <option value={id} key={id}>{proj.name}</option>
          ))}
        </select>


        {/** Rename Project */}
        <div className='flex gap-2 mb-2'>
          {editingProjectName ? (
            <>
            <input
              className='border border-slate-300 rounded px-2 py-1 w-full'
              placeholder='New Name'
              value={newProjectName}
              onChange={(e) => setNewProjectName(e.target.value)}            
            />
            <button
              className='px-3 bg-blue-500 text-white rounded'
              onClick={() => {
                renameProject(currentProjectId, newProjectName);
                setEditingProjectName(false);
              }}
            >
              ✓
            </button>

            </>
          ) : (
            <button
              className='w-full flex items-center border border-slate-300 px-3 py-3 rounded bg-white hover:bg-[#E6EEFF]'
              onClick={() => {
                setNewProjectName(currentProject?.name);
                setEditingProjectName(true);
              }}
            >
              <Pencil size={16} className='mr-6 text-blue-500' /> Rename Project
            </button>
          )}
        </div>

        {/** Delete Project */}
        <button
          className='w-full flex items-center border border-slate-300 px-3 py-2 rounded text-red-600 bg-white hover:bg-red-50'
          onClick={() => deleteProject(currentProjectId)}
        >
          <Trash2 size={16} className='mr-6'/> Delete Project
        </button>

        {/** New Project */}
        <button
          className='w-full flex items-center mt-2 border border-slate-300 px-3 py-2 rounded bg-[#E6EEFF] hover:bg-[#DCE8FF]'
          onClick={() => createProject()}
        >
          <Plus size={16} className='mr-6 text-blue-600' /> Create Project
        </button>
      </div>

      {/** Nodes Section */}
      <h3 className='text-lg font-semibold mb-3 text-slate-800'>Nodes</h3>

      {sections.map((section, index) => (
        <div key={section.category} className='mb-4 border-b border-slate-200 pb-2'>
          <button
            onClick={() => toggleAccordion(index)}
            className='w-full flex justify-between items-center text-left font-semibold text-slate-700'
          >
            {section.category}
            <span>{expanded === index ? <ChevronDown size={18} /> :<ChevronRight size={18} />}</span>
          </button>

          {/** Accordion Content  */}

          <div
            className={`transition-all duration-300 overflow-hidden ${expanded === index ? "max-h-40" : "max-h-0"}`}
          >
            <div className='mt-2 flex flex-col gap-2'>
              {section.nodes.map((node) => (
                <button
                  key={node}
                  onClick={() => addNode(toCamelCase(node))}
                  className='w-full flex justify-between items-center border border-slate-300 px-3 py-2 rounded bg-[#E6EEFF] hover:bg-[#DCE8FF] text-left'
                >
                  {node}
                  <Plus size={16} className="text-blue-600" />
                </button>
              ))}

            </div>

          </div>

        </div>
      ))}

    </div>
  )
}

export default Sidebar;