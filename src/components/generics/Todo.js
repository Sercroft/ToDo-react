import React from 'react';
import styled from 'styled-components';
import theme from '../../theme';
import { LiaTrashAlt, LiaPenSolid } from "react-icons/lia";

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: ${theme.colors.gray};
  color: ${theme.colors.white};
  padding: 0.75rem 1rem;
  border-radius: 5px;
  margin-bottom: 1rem;
`

const Task = styled.p`
    color: ${props => props.completed ? `${theme.colors.purple2}` : `${theme.colors.white}`};
    text-decoration: ${props => props.completed ? 'line-through' : 'none'};
    cursor: pointer;
`

const IconsContainer = styled.div`
  cursor: pointer;
`

const Todo = ({ task, taskComplete, editTask, deleteTask }) => {
  return(
    <Container>
      <Task 
        onClick={() => taskComplete(task.id)}
        completed={task.completed}
      >
        {task.task}
      </Task>
      <IconsContainer>
        <LiaPenSolid 
          size={20}
          onClick={() => editTask(task.id)}
        />

        <LiaTrashAlt 
          size={20} 
          onClick={() => deleteTask(task.id)}
        />
      </IconsContainer>
    </Container>
  );
}

export default Todo;