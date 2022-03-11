import React from 'react';
import styled from 'styled-components';
import CardLog from '../CardLog/CardLog';
import './TaskCard.css';

// Require Editor CSS files.
import 'froala-editor/css/froala_style.min.css';
import 'froala-editor/css/froala_editor.pkgd.min.css';
import FroalaEditorComponent from 'react-froala-wysiwyg';
import TaskHeader from '../TaskHeader';

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
  background-color: white;
  width: 100%;
`

const HeaderDiv = styled.div`
  background-color: #531e17;
  width: 100%;
  height: 10%;
`

const TextEditorDiv = styled.div`
  display: flex;
  height: 90%;
  margin-top: 20px;
`

// В конфиге можно будет посзже настроить именно тот функционал, который нужен
const configEditor = {
  attribution: false
};

export default function TaskCard() {
  return (
    <MainDiv>
      <LeftDiv>
        <HistoryDiv>
          History
        </HistoryDiv>
        <LogDiv>
         <CardLog/>
        </LogDiv>
      </LeftDiv>
      <MainContentDiv>
        <TaskHeader />
        <TextEditorDiv>
          <FroalaEditorComponent config={configEditor} tag='textarea' />
        </TextEditorDiv>
      </MainContentDiv>
    </MainDiv>
  );
}
