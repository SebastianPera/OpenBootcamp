import { Paper, InputBase, Button, FormControl, InputLabel, Select, MenuItem } from '@mui/material'
import AddTaskIcon from '@mui/icons-material/AddTask';
import style from '../style/styled.module.css'


const Form = ({ task, setTask, handleFilter, handleSubmit, completed }) => {
  return (
    <div className={style.header}>
      <Paper component='form' onSubmit={handleSubmit} className={style.paper}>
        <InputBase value={task} onChange={(e) => setTask(e.target.value)} placeholder='New Task' sx={{ ml: 1, flex: 1 }}/>
        <Button type='submit' variant='contained' starticon={<AddTaskIcon/>} color='success' className={style.buttonForm}>
          Add Task
        </Button>
      </Paper>
      <FormControl sx={{ m: 1, minWidth: 80 }} size='small'>
        <InputLabel id='demo-simple-select-label'>Filter</InputLabel>
        <Select labelId='demo-simple-select-label' id='demo-simple-select' value={completed} label='Filter' onChange={handleFilter}>
          <MenuItem value={'All TODOS'}>All Tasks</MenuItem>
          <MenuItem value={'Completed'}>Completed</MenuItem>
          <MenuItem value={'Not Completed'}>Not Completed</MenuItem>     
        </Select>
      </FormControl>
    </div>
  )
}

export default Form