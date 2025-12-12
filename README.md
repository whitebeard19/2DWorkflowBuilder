# 🌟 Workflow Builder – Visual AI Workflow Designer

A beautifully designed **AI Workflow Builder** that lets users visually create, connect, and manage workflow nodes—similar to **Zapier**, **n8n**, or **Langflow**, but simplified and fully customizable.

This app is built with **React**, **Firebase Authentication**, **TailwindCSS**, and **XYFlow / React Flow** for node-based graph editing.  
Perfect for prototyping **AI pipelines**, **chatbot flows**, or **custom automation sequences**.

---

## ⚡ Key Features

### 🎨 Visual Node-Based Editor
- Drag-and-drop style workflow builder  
- Create nodes such as:
  - **Text Input**
  - **Prompt**
  - **Model**
  - **Condition**
  - **Text Output / Chat Output**
- Visually connect nodes with edges  
- Fully editable & deletable nodes  

---

### 📁 Project Management
- Create multiple workflow projects  
- Rename, delete, and switch projects instantly  
- Projects saved in **LocalStorage**  
- Clean UI with Tailwind transitions & icons  

---

### 🔐 User Authentication
- Firebase **Email/Password** login    
- Full **auth persistence** (user stays logged in after refresh)  
- Secured pages via `ProtectedRoute`  
- Auto user profile update (display name on signup)  

---

### 💾 Auto-Save Local Persistence
Your entire workflow is saved automatically:

- Nodes  
- Edges  
- Project metadata  
- Current project selection  

Even after closing or refreshing the browser, everything is restored.

---

## 💡 Original Use Case – Build AI Workflows

This app can become a complete **AI Workflow Builder**, allowing users to visually chain components like:

- LLM prompts  
- Model selection  
- Conditional logic  
- API calls  
- Input & output processing  

**Perfect for:**
- AI chatbot pipelines  
- Data processing workflows  
- Automation tasks  
- Custom agent behavior trees  

---

## 🧩 Tech Stack

| Tech | Purpose |
|------|---------|
| **React + Vite** | Frontend UI Framework |
| **XFlow / React Flow** | Node-based workflow graph |
| **TailwindCSS** | Modern UI styling |
| **Firebase Auth** | Secure authentication |
| **LocalStorage** | Persistent project saving |
| **Lucide Icons** | Clean, modern icons |

---

## 🚀 Features Planned / Future Extensions
- Drag-and-drop node placement  
- Export/Import workflow JSON  
- AI model integration (OpenAI / Gemini)  
- Executable workflow engine  
- Real-time collaboration  
- Advanced node templates & custom logic  

---

## 🎯 Goal of the Project

The primary goal is to create a **simple yet powerful foundation** for an AI workflow editor—easy to customize, extend, and develop into a full production-ready system.

---

## 🎉 Perfect for Learning

This project is excellent if you want to learn:

- React Hooks & State Management  
- Context API  
- Firebase Authentication  
- Node graph rendering  
- Component architecture  
- LocalStorage persistence  
- UI/UX design with TailwindCSS  

---

