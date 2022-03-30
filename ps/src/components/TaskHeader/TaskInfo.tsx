import { DialogContent, DialogTitle, Modal, ModalProps, Stack } from '@mui/material'
import styled from 'styled-components'

const TaskName = styled(DialogTitle)`
  font: 500 16px/24px "Roboto";
  color: #373745;
  border-bottom: 1px solid #efefef;
`
const TaskContent = styled(DialogContent)`
  font: 400 14px/24px "Roboto";
  color: #373745;
`
const TaskInfo = (props: ModalProps) => {
  return (
    <Modal 
      {...props}
      sx={{ 
        padding: '20px',
        width: '500px',
        height: 'fit-content',
        maxHeight: '60%',
        overflowY: 'auto',
        margin: 'auto'
      }}>
      <Stack bgcolor={'#FFF'} borderRadius='4px'>
        <TaskName sx={{ 
          padding: '0 0 8px',
          margin: '16px 24px'
        }}>
          Супер важная задача
        </TaskName>
        <TaskContent>{props.children}</TaskContent>
      </Stack>
    </Modal>
  )
}

export { TaskInfo }
