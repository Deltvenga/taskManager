import { DialogTitle, Modal, ModalProps } from '@mui/material'
import styled from 'styled-components'

const TaskName = styled(DialogTitle)`
  font: 500 16px/24px "Roboto";
  color: #373745;
`
const TaskInfo = (props: ModalProps) => {
  return (
    <Modal 
      {...props}
      sx={{ 
        padding: '20px',
        backgroundColor: 'white'
      }}>
      <TaskName>Супер важная задача</TaskName>

    </Modal>
  )
}

export { TaskInfo }
