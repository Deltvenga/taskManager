import React from 'react';
import styled from 'styled-components';

const MainDiv = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
  margin: 0;
  padding: 0;
  background-color: #e7e7e7;
`

const LeftDiv = styled.div`
  height: 100vh;
  background-color: antiquewhite;
  width: 25%;
`

const LogDiv = styled.div`
  height: 50%;
  background-color: wheat;
`

const HistoryDiv = styled(LogDiv)`
  background-color: khaki;
`

const MainContentDiv = styled.div`
  background-color: #445c20;
  width: 100%;
`

const HeaderDiv = styled.div`
  background-color: #531e17;
  width: 100%;
  height: 10%;
`

export default function TaskCard() {
  return (
    <MainDiv>
      <LeftDiv>
        <HistoryDiv>
          History
        </HistoryDiv>
        <LogDiv>
          Log
        </LogDiv>
      </LeftDiv>
      <MainContentDiv>
        <HeaderDiv>
          Header
        </HeaderDiv>
        MAIN CONTENT
      </MainContentDiv>
    </MainDiv>
  );
}
