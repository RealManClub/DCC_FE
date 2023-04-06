import React from "react";
import TaskCard from "@/src/Common/TaskCard";
import styled from "styled-components";
import Search from "@/src/Common/Search";

const LeftTaskBoard = () => {
  return (
    <TaskBoardContainer>
      <TaskCardZone>

        <MainTitleAndSearchZone>
          <TaskBoardTitle>할 일</TaskBoardTitle>
          <Search title = {"내 할 일"}/>
        </MainTitleAndSearchZone>

        <TaskCard
          title={"test1234"}
          category={"category"}
          date={"3월 29일"}
          status={"진행중"}
        />
        <TaskCard
          title={"test2"}
          category={"category"}
          date={"3월 29일"}
          status={"진행중"}
        />
        <TaskCard
          title={"test3"}
          category={"category"}
          date={"3월 29일"}
          status={"진행중"}
        />
      </TaskCardZone>
    </TaskBoardContainer>
  );
};

const TaskBoardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 45vw;
  height: 80vh;

  background-color: #d9d9d9;
  border-radius: 20px;

  box-shadow: 0px 1px 1px black;
`;

const TaskCardZone = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;

  margin-top: 20px;
`;

const MainTitleAndSearchZone = styled.div`
  width: 40vw;
  display: flex;
  flex-direction: row;  
  justify-content: space-between;
  align-items: center;

  a{
    font-weight: 100;
  }
`;

const TaskBoardTitle = styled.h1`
  font-size: 25pt;
  letter-spacing: -1px;
  margin-bottom: 20px;
`;

export default LeftTaskBoard;