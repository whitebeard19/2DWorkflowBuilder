import React, { createContext, useContext, useEffect, useState } from 'react'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged, signInWithPopup, updateProfile } from "firebase/auth";

import {auth} from "../FireBase/firebaseConfig";

// Context Settings
const AppContext = createContext();
export const useApp = () => useContext(AppContext);


// LocalStorage Helper Functions
const LS_PROJECTS = "workflow-projects";
const LS_CURRENT = "current-project-id";

const loadProjects = () => {
    return JSON.parse(localStorage.getItem(LS_PROJECTS)) || {};
};

const loadCurrentProjectId = () => {
    return localStorage.getItem(LS_CURRENT) || null;
};

//Provider Component

export const AppProvider = ({children}) => {
    const [projects, setProjects] = useState(loadProjects);
    const [currentProjectId, setCurrentProjectId] = useState(loadCurrentProjectId());

    // Auth States
    const [currentUser, setCurrentUser] = useState(null);
    const [loading, setLoading] = useState(true);

    // Signup
    const signup = async (email, password, name) => {
        const result = await createUserWithEmailAndPassword(auth, email, password);

        await updateProfile(result.user, {
            displayName: name
        });

        return result.user;
    };

    // Login
    const login = async (email,password) => {
        await signInWithEmailAndPassword(auth, email, password);
    };

    // Logout
    const logout = async () => {
        await signOut(auth);
    };

    // Check user state on refresh
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            setCurrentUser(user);
            setLoading(false);
        });

        return unsubscribe;
    }, []);

    useEffect(() => {
        if(!currentProjectId){
            const id = crypto.randomUUID();
            const defaultProject = {
                name: "New Project",
                nodes: [],
                edges: []
            };

            const newProjects = {...projects, [id]: defaultProject};
            setProjects(newProjects);
            setCurrentProjectId(id);
            localStorage.setItem(LS_PROJECTS, JSON.stringify(newProjects));
            localStorage.setItem(LS_CURRENT,id);
        }
    }, []);

    // Save projects on change
    useEffect(() => {
        localStorage.setItem(LS_PROJECTS, JSON.stringify(projects));
    }, [projects]);

    // Save current projects
    useEffect(() => {
        if(currentProjectId){
            localStorage.setItem(LS_CURRENT, currentProjectId);
        }
    }, [currentProjectId]);


    // Project Crud Functions
    const createProject = (name = "Untitled Project") => {
        const id = crypto.randomUUID();

        const newProject = {
            name,
            nodes: [],
            edges: []
        };

        const updated = {...projects, [id]: newProject};
        setProjects(updated);
        setCurrentProjectId(id);
    };

    const renameProject = (id, name) => {
        const updated = {
            ...projects,
            [id]: {...projects[id], name},
        };
        setProjects(updated);
    };

    const deleteProject = (id) => {
        const updated = {...projects};
        delete updated[id];

        setProjects(updated);

        const newId = Object.keys(updated)[0] || null;
        setCurrentProjectId(newId);
    };

    // Canvas Data Logic
    const updateNodes = (newNodes) => {
        setProjects((prev) => ({
            ...prev,
            [currentProjectId]: {
                ...prev[currentProjectId],
                nodes: newNodes,
            },
        }));
    };

    const updateEdges = (newEdges) => {
        setProjects((prev) => ({
            ...prev,
            [currentProjectId]: {
                ...prev[currentProjectId],
                edges: newEdges,
            },
        }));
    };

    const addNode = (nodetype) => {
        const node = {
            id: crypto.randomUUID(),
            type: nodetype,
            position: {x: Math.random() * 300 +50, y: Math.random() * 300 + 50},
            data: {label: nodetype},
        };

        setProjects((prev) => ({
            ...prev,
            [currentProjectId]:{
                ...prev[currentProjectId],
                nodes: [...(prev[currentProjectId].nodes || []), node],
            },
        }));
    }

    const deleteNode = (nodeId) => {
        setProjects(prev => {
            const project = prev[currentProjectId];

            const filteredNodes = project.nodes.filter(n => n.id !== nodeId);
            const filteredEdges = project.edges.filter(e => e.source !== nodeId && e.target !== nodeId);

            return {
                ...prev,
                [currentProjectId]:{
                    ...project,
                    nodes: filteredNodes,
                    edges: filteredEdges,
                }
            };
        });
    };

    const value = {
        projects,
        currentProjectId,
        setCurrentProjectId,
        currentProject: projects[currentProjectId] || {},

        createProject,
        renameProject,
        deleteProject,

        updateNodes,
        updateEdges,
        addNode,
        deleteNode,

        currentUser,
        signup,
        login,
        logout,
        loading,
    };


    return <AppContext.Provider value={value}>{children}</AppContext.Provider>

}
