import React from "react";
import {
  Button,
  FormControl,
  InputLabel,
  NativeSelect,
  Popover,
  TextField,
  Typography,
} from "@mui/material";
import { useState } from 'react';

const Form = ({ createTask }) => {
  const [newTask, setNewTask] = useState({ category: "home" });
  const [open, setOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);

  const changeField = (event, field) => {
    setNewTask({ ...newTask, [field]: event.target.value });
  };
  const onSubmit = (event) => {
    event.preventDefault();
    createTask(newTask);
  };

  const handlePopoverOpen = (event) => {
    setOpen(true);
    setAnchorEl(event.currentTarget);
  };

  const handlePopoverClose = () => {
    setOpen(false);
    setAnchorEl(null);
  };

  return (
    <div style={{ width: 500, maxWidth: "100%", margin: "auto" }}>
      <p style={{ fontSize: 16 }}>Añadir Tareas</p>
      <form onSubmit={onSubmit}>
        <TextField
          fullWidth
          variant="standard"
          label="Título"
          id="title"
          onChange={(event) => changeField(event, "title")}
          margin="normal"
          role="input"
        />
        <TextField
          fullWidth
          variant="standard"
          label="Texto"
          id="text"
          onChange={(event) => changeField(event, "text")}
          margin="normal"
        />
        <FormControl fullWidth margin="normal">
          <InputLabel
            id="demo-simple-select-label"
            htmlFor="demo-simple-select"
          >
            Categoría
          </InputLabel>
          <NativeSelect
            type="select"
            defaultValue={newTask.category}
            inputProps={{
              name: "category",
              id: "demo-simple-select",
            }}
            onChange={(event) => changeField(event, "category")}
          >
            <option value="home">Casa</option>
            <option value="office">Trabajo</option>
            <option value="hobbie">Ocio</option>
          </NativeSelect>
        </FormControl>
        <Button type="submit" variant="outlined">
          Crear 
        </Button>
      </form>
      <Typography
        aria-owns={open ? "mouse-over-popover" : undefined}
        aria-haspopup="true"
        onMouseEnter={handlePopoverOpen}
        onMouseLeave={handlePopoverClose}
        sx={{
          marginTop: "20px",
        }}
      >
        ¿Quieres más información?
      </Typography>
      <Popover
        id="mouse-over-popover"
        open={open}
        sx={{
          pointerEvents: "none",
        }}
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
        disableRestoreFocus
      >
        <Typography sx={{ p: 2 }}>
          Rellenando el formulario anterior podrás crear una nueva tarea.
        </Typography>
      </Popover>
    </div>
  );
};

export default Form;
