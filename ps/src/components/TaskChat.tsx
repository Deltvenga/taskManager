import * as React from 'react';
import Box from '@mui/material/Box';
import styled from 'styled-components';
import Drawer from '@mui/material/Drawer';
import {Button, IconButton, TextField} from "@mui/material";
import SendIcon from '@mui/icons-material/Send';
import './TaskChat.css'
type Anchor = 'top' | 'left' | 'bottom' | 'right';

const MainDiv = styled.div`
  display: flex;
  width: 100%;
  flex-wrap: wrap;
  height: 100%;
  margin: 0;
  padding: 0;
  background-color: #e7e7e7;
`

const MessageDiv = styled.div`
  display: flex;
  height: 10%;
  justify-content: space-around;
  align-items: center;
  width: 550px;
  margin: 0;
  padding: 0;
  background-color: #E8E9FF;
`

const ChatDiv = styled.div`
  height: 90%;
  width: 100%;
  margin: 0;
  padding: 0;
  background-color: #e7e7e7;
`

export default function TemporaryDrawer(props: {open: boolean, onClose: () => void}) {
    const [state, setState] = React.useState({});

    const toggleDrawer =
        (anchor: Anchor, open: boolean) =>
            (event: React.KeyboardEvent | React.MouseEvent) => {
                if (
                    event.type === 'keydown' &&
                    ((event as React.KeyboardEvent).key === 'Tab' ||
                        (event as React.KeyboardEvent).key === 'Shift')
                ) {
                    return;
                }

                setState({ ...state, [anchor]: open });
            };

    const messageInput = (anchor: Anchor) => (
        <Box
            sx={{ width: 550}}
            className="messageBox"
            role="presentation"
            onClick={toggleDrawer(anchor, false)}
            onKeyDown={toggleDrawer(anchor, false)}
        >
            <MainDiv>
                <ChatDiv></ChatDiv>
                <MessageDiv>
                    <TextField
                        sx={{
                            width: 460,
                            height: 68,
                            background: '#FFFFFF',
                            borderRadius: 40,
                            marginLeft: 5
                        }}
                        id="standard-multiline-static"
                        className="messageInput"
                        multiline
                        rows={2}
                        defaultValue="Default Value"
                        variant="outlined"
                    />
                    <IconButton sx={{
                        width: 59,
                        height: 59,
                        marginLeft: 2,
                        marginRight: 2,
                        borderRadius: 59}}
                                color="primary" aria-label="add to shopping cart">
                        <SendIcon />
                    </IconButton>
                </MessageDiv>
            </MainDiv>
        </Box>
    );

    return (
        <div>
            {
                <Drawer
                    anchor={'right'}
                    open={props.open}
                    onClose={props.onClose}>
                    {messageInput('right')}
                </Drawer>
            }
        </div>
    );
}