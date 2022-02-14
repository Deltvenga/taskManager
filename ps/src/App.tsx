import React from 'react';
import styled from "styled-components";
import TaskCard from "./components/TaskCard/TaskCard";

const MainDiv = styled.div`
  width: 100%;
  height: 100vh;
  margin: 0;
  padding: 0;
  background-color: #e7e7e7;
`

function App() {
  return (
    <MainDiv>
      <TaskCard />
    </MainDiv>
  );
}

export default App;
