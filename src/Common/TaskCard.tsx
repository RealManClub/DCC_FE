import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFlag} from "@fortawesome/free-solid-svg-icons";


interface Props {
  taskStatus: string;
}

const TaskCard = ({ data, onDelete, onUpdate }: any) => {
  const { id, taskName, taskGroup, importance, taskStatus } = data;

  const delClick = () => {
    onDelete(id);
  };

  const upClick = () => {
    onUpdate(id);
  };

  return (
    <TaskCardContainer>
      <TaskCardInfoContainer>
        <TaskTitleP taskStatus={taskStatus}>{taskName}</TaskTitleP>
        <TaskCategoryP taskStatus={taskStatus}>{taskGroup} {importance == "true" && <span> | <FontAwesomeIcon icon={faFlag} /> </span>}</TaskCategoryP>
      </TaskCardInfoContainer>

      <TaskButtonZone>
        {taskStatus === "wip" && (
          <TaskCompleteButton onClick={upClick}>완료</TaskCompleteButton>
        )}

        <TaskDeleteButton onClick={delClick}>삭제</TaskDeleteButton>
      </TaskButtonZone>
    </TaskCardContainer>
  );
};

const TaskCardContainer = styled.div`
  width: 75vw;
  height: 7vh;
  border-radius: 20px;

  background-color: #fff;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  margin-bottom: 20px;

  box-shadow: 0px 0px 10px black;
`;

const TaskCardInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-left: 30px;
`;

const TaskTitleP = styled.p`
  font-size: 15pt;
  font-weight: 900;

  text-decoration: ${(props) =>
    props.taskStatus === "end" ? "line-through" : "none"};
`;

const TaskCategoryP = styled.p`
  font-weight: 100;

  text-decoration: ${(props) =>
    props.taskStatus === "end" ? "line-through" : "none"};
`;

const TaskButtonZone = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  
`;

const TaskCompleteButton = styled.button`
  width: 4vw;
  height: 3vh;
  margin-right: 0.2em;
  border: none;
  border-radius: 5px;

  font-size: 1em;
  font-weight: 900;

  color: #fff;
  background-color: #00ae68;

  :hover {
    background-color: #21825b;
  }
`;

const TaskDeleteButton = styled.button`
  width: 4vw;
  height: 3vh;
  margin-right: 1em;
  border: none;
  border-radius: 5px;

  font-size: 1em;
  font-weight: 900;

  color: #fff;
  background-color: #df3c3c;

  :hover {
    background: #750c0c;
    color: #fff;
  }
`;

const TaskStatusBanner = styled.div`
  width: 80px;
  height: 30px;
  text-align: center;
  font-size: 12pt;
  font-weight: 900;
  background-color: yellow;
  border-radius: 10px;
  margin-right: 30px;

  display: flex;
  justify-content: center;
  align-items: center;
`;
export default TaskCard;
