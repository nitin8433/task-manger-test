 import React from 'react';
import { TextField, Button, List, ListItem, ListItemText, ListItemSecondaryAction, IconButton } from '@material-ui/core';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import SaveIcon from '@material-ui/icons/Save';
 import { useTaskContext } from '../context/TaskContext';
const TaskComponent = () => {
  const {
    tasks,
    taskInput,
    editIndex,
    editTask,
    handleTaskInput,
    addTask,
    toggleEdit,
    deleteTask,
    setEditTask,
  } = useTaskContext();

  return (
    <div>
      <TextField
        label="New Task"
        variant="outlined"
        value={taskInput}
        onChange={handleTaskInput}
      />
      <Button variant="contained" color="primary" onClick={addTask}>
        Add
      </Button>
      <List>
        {tasks.map((task, index) => (
          <ListItem key={index}>
            {editIndex === index ? (
              <>
                <TextField
                  value={editTask}
                  onChange={(e) => setEditTask(e.target.value)}
                />
                <IconButton onClick={() => toggleEdit(index)} edge="end" aria-label="save">
                  <SaveIcon />
                </IconButton>
              </>
            ) : (
              <>
                <ListItemText primary={task} />
                <ListItemSecondaryAction>
                  <IconButton
                    onClick={() => toggleEdit(index)}
                    edge="end"
                    aria-label="edit"
                  >
                    <EditIcon />
                  </IconButton>
                  <IconButton
                    onClick={() => deleteTask(index)}
                    edge="end"
                    aria-label="delete"
                  >
                    <DeleteIcon />
                  </IconButton>
                </ListItemSecondaryAction>
              </>
            )}
          </ListItem>
        ))}
      </List>
    </div>
  );
};

export default TaskComponent;
