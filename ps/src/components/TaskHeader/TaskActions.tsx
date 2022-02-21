import { MenuItem, Popover, PopoverProps, Stack } from '@mui/material'
import { AssignmentInd, DeleteOutline, Done, Edit, } from '@mui/icons-material'
import styled from 'styled-components'

const TaskActions = (props: PopoverProps) => {
	const StyledMenuItem = styled(MenuItem)`
		padding: 8px !important;
		min-height: 32px !important;
		height: fit-content;
	`
	const StyledMenuItemText = styled(Stack)`
		font: 400 12px/16px "Roboto";
		letterSpacing: 0.25px;
		color: #373745;
		white-space: break-spaces;
		justify-content: flex-start;
	`

	const menuItemIconStyles = {
		width: '16px',
		height: '16px',
		color: '#373745'
	}
	
	return (
		<Popover 
			id='mouse-over-popover'
			anchorOrigin={{
				vertical: 'bottom',
				horizontal: 'right'
			}}
			transformOrigin={{
				vertical: 'top',
				horizontal: 'right'
			}}
			disableRestoreFocus
			sx={{ padding: '4px 0 !important', maxWidth: '350px' }}
			{...props}
		>
			<StyledMenuItem>
				<Stack direction='row' spacing={2}>
					<Edit sx={menuItemIconStyles} />
					<StyledMenuItemText>
						РедактироватьРедактировать Редактировать Редактировать
						</StyledMenuItemText>
				</Stack>
			</StyledMenuItem>

			<StyledMenuItem>
				<Stack direction='row' spacing={2}>
					<AssignmentInd sx={menuItemIconStyles} />
					<StyledMenuItemText>
						Переназначить
					</StyledMenuItemText>
				</Stack>
			</StyledMenuItem>

			<StyledMenuItem>
				<Stack direction='row' spacing={2}>
					<Done sx={menuItemIconStyles} />
					<StyledMenuItemText>
						Завершить
					</StyledMenuItemText>
				</Stack>
			</StyledMenuItem>

			<StyledMenuItem>
				<Stack direction='row' spacing={2}>
					<DeleteOutline sx={{ ...menuItemIconStyles, color: 'red' }}/>
					<StyledMenuItemText sx={{ color: 'red' }}>
						Удалить
					</StyledMenuItemText>
				</Stack>
			</StyledMenuItem>
		</Popover>
	)
}

export { TaskActions }
