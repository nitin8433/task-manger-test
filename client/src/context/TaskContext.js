import React, { createContext, useContext, useState } from 'react';

const TaskContext = createContext();

export const useTaskContext = () => {
  const context = useContext(TaskContext);
  if (!context) {
    throw new Error('useTaskContext must be used within a TaskProvider');
  }
  return context;
};

export const TaskProvider = ({ children }) => {
  const [tasks, setTasks] = useState([]);
  const [taskInput, setTaskInput] = useState('');
  const [editIndex, setEditIndex] = useState(null);
  const [editTask, setEditTask] = useState('');

  const handleTaskInput = (e) => {
    setTaskInput(e.target.value);
  };

  const addTask = () => {
    if (taskInput.trim() !== '') {
      setTasks([...tasks, taskInput]);
      setTaskInput('');
    }
  };

  const toggleEdit = (index) => {
    if (editIndex === null) {
      setEditIndex(index);
      setEditTask(tasks[index]);
    } else {
      const updatedTasks = [...tasks];
      updatedTasks[editIndex] = editTask;
      setTasks(updatedTasks);
      setEditIndex(null);
      setEditTask('');
    }
  };

  const deleteTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
    setEditIndex(null);
    setEditTask('');
  };

  const contextValue = {
    tasks,
    taskInput,
    editIndex,
    editTask,
    handleTaskInput,
    addTask,
    toggleEdit,
    deleteTask,
    setEditTask,
  };

  return (
    <TaskContext.Provider value={contextValue}>
      {children}
    </TaskContext.Provider>
  );
};
