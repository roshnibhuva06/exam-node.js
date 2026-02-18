import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Register from "./pages/register";
import Login from "./pages/login";
import Task from "./pages/task";
import "./App.css"

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Register />
    <Login />
    <Task />
  </StrictMode>,
)
