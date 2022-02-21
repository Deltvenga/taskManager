import { IconButton, Stack } from "@mui/material";
import styled from 'styled-components';
import { InfoOutlined, MoreVert } from '@mui/icons-material/'
import React from "react";
import { TaskActions } from "./TaskActions";

const Header = styled.div`
  background-color: white;
  width: 100%;
  height: 8%;
  display: flex;
  align-items: center;
  box-shadow: 0px 4px 20px rgba(44, 57, 121, 0.09);
`
const TaskName = styled.div`
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
  max-width: 60%;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  color: #373745;
`

const TaskHeaderActions = styled(Stack)`
  align-items: center;
  margin-right: 0;
  margin-left: auto;
`

const TaskHeader = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handlePopoverOpen = (event: any) => {
    setAnchorEl(event.currentTarget);
  };

  const open = Boolean(anchorEl);

  const taskName = 'Project name';
  const iconStyles = {
    width: '20px',
    height: '20px',
    color: '#888888'
  };

  return (
    <Header>
      <Stack 
        direction='row'
        alignItems='center'
        width='100%' 
        padding='0 20px'>

        <TaskName title={taskName}>
          {taskName}
        </TaskName>

        <TaskHeaderActions direction='row' spacing={2}> 
          <IconButton size='small'>
            <InfoOutlined sx={iconStyles} />
          </IconButton>

          <IconButton 
            size='small' 
            onClick={handlePopoverOpen}
            aria-owns={open ? 'mouse-over-popover' : undefined}>
            <MoreVert sx={iconStyles} />
          </IconButton>
        </TaskHeaderActions>

      </Stack>

      <TaskActions
        open={open}
        anchorEl={anchorEl}
        onClose={() => setAnchorEl(null)} 
      />
    </Header>
  )
}

export default TaskHeader
