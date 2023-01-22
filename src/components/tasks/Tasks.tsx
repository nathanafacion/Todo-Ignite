import React, { useState, useEffect } from "react";

import {
  StyledTasks,
  StyledTask,
  StyledInfo,
  StyledDeleted,
  StyledEmpty,
} from "./Tasks.styles";
import Trash from "../../images/trash.png";
import Empty from "../../images/Empty.png";
import { objectTask } from "../../interfaces/objectTask";

interface ITask {
  handleOnclickChecked: (id: string) => void;
  handleOnclickDelete: (id: string) => void;
  allTasks: Array<objectTask>;
}

const Tasks = ({
  allTasks,
  handleOnclickDelete,
  handleOnclickChecked,
}: ITask) => {
  const [taskDone, setTaskDone] = useState<number>(0);

  useEffect(() => {
    const countTasksDone = allTasks.reduce((acc, task) => {
      return task.checked ? acc + 1 : acc;
    }, 0);

    setTaskDone(countTasksDone);
  }, [allTasks]);

  return (
    <StyledTasks>
      <StyledInfo>
        <div className="TaskCreated">
          Tarefas Criadas <div className="Counter">{allTasks.length}</div>
        </div>
        <div className="TaskDone">
          Concluídas
          <div className="Counter">
            {taskDone} de {allTasks.length}
          </div>
        </div>
      </StyledInfo>
      {allTasks.length === 0 && (
        <StyledEmpty>
          <img src={Empty} />
        </StyledEmpty>
      )}
      {allTasks?.map((tasks: objectTask) => (
        <StyledTask key={tasks.id}>
          <input
            type="checkbox"
            onClick={() => handleOnclickChecked(tasks.id)}
          />
          <label className={tasks.checked ? "checked" : "not-checked"}>
            {tasks.value}
          </label>
          <StyledDeleted>
            <img src={Trash} onClick={() => handleOnclickDelete(tasks.id)} />
          </StyledDeleted>
        </StyledTask>
      ))}
    </StyledTasks>
  );
};

export default Tasks;
