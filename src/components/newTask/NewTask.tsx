import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

import { StyledNewTask, InputStyled } from "./NewTask.styles";
import { objectTask } from "../../interfaces/objectTask";
import plus from "../../images/plus.png";

interface InewTask {
  handleNewTask: (newTask: objectTask) => void;
}

const NewTask = ({ handleNewTask }: InewTask) => {
  const [newTask, setNewTask] = useState<objectTask>({
    id: uuidv4(),
    checked: false,
    value: "",
  });

  const handleOnChange = (value: string) => {
    setNewTask({ id: uuidv4(), value, checked: false });
  };

  return (
    <StyledNewTask>
      <InputStyled>
        <input
          type="text"
          id="search"
          name="search"
          value={newTask.value}
          onChange={(e) => handleOnChange(e.target.value)}
        />
        <button
          onClick={() => {
            handleNewTask(newTask);
            setNewTask({ ...newTask, value: "" });
          }}
        >
          <p>Criar</p> <img src={plus} />
        </button>
      </InputStyled>
    </StyledNewTask>
  );
};

export default NewTask;
