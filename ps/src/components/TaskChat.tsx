import * as React from 'react';
import Box from '@mui/material/Box';
import styled from 'styled-components';
import Drawer from '@mui/material/Drawer';
import {IconButton, TextField} from "@mui/material";
import SendIcon from '@mui/icons-material/Send';
import ControlPointIcon from '@mui/icons-material/ControlPoint';
import EastIcon from '@mui/icons-material/East';
import Avatar from '@mui/material/Avatar';
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
  justify-content: space-around;
`

const ChatDiv = styled.div`
  height: 80%;
  width: 100%;
  margin: 0;
  padding: 0;
  background-color: #e7e7e7;
`
const MessageBox = styled.div`
    height: 20%;
    align-items: center;
    width: 550px;
    margin: 0;
    padding: 0;
    background-color: #E8E9FF;
`
const AvatarBox = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
`
const SentMessageBox = styled.div`
    position: relative;
    display: flex;
    margin-left: 46px;
    justify-content: space-between;
    align-items: baseline;
    background-color: #EFEAFF;
    border-radius: 20px;
    padding: 12px;
    z-index: 1;
`

const SentMessage = styled.div`
`

const MessageTime = styled.div`
    margin-left: 5px;
`

const SentMessageAvatar = styled.div`
    position: relative;
    display: flex;
    width: 100%;
    margin-top: 16px;
    bottom: -16px;
    left: 64px;
    z-index: 2;
`

const SentMessageContainer = styled.div`
    width: 463px;
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
                <ChatDiv>
                    <SentMessageContainer>
                        <SentMessageAvatar>
                            <Avatar sx={{width: 32, height: 32}}>RN</Avatar>
                            <IconButton sx={{color:'black'}} disableRipple={true}>
                                <EastIcon/>
                            </IconButton>
                        </SentMessageAvatar>
                        <SentMessageBox>
                            <SentMessage>
                                Я уже приступил и даже сделал чутка верстки, затем возьмусь за еще чутка верстки
                            </SentMessage>
                            <MessageTime>
                                12:35
                            </MessageTime>
                        </SentMessageBox>
                    </SentMessageContainer>
                </ChatDiv>
                <MessageBox>
                    <AvatarBox>
                        <div className='AvatarButton'>
                            Кому: <IconButton sx={{
                                width: 36,
                                height: 36,
                                borderRadius: 59}}
                                color="primary">
                                <ControlPointIcon/>
                            </IconButton>
                        </div>
                    </AvatarBox>
                    <MessageDiv>
                        <TextField
                            sx={{
                                width: 460,
                                height: 68,
                                background: '#FFFFFF',
                                borderRadius: 5,
                                marginLeft: 5
                            }}
                            id="standard-multiline-static"
                            className="messageInput"
                            multiline
                            rows={2}
                            placeholder="Написать сообщение..."
                            variant="outlined"
                        />
                        <IconButton sx={{
                            width: 59,
                            height: 59,
                            marginLeft: 2,
                            marginRight: 2,
                            borderRadius: 59}}
                                    color="primary">
                            <SendIcon />
                        </IconButton>
                    </MessageDiv>
                </MessageBox>
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