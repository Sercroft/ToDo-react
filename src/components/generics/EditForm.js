import React, { useState } from 'react'
import styled from 'styled-components';
import theme from '../../theme';


const Container = styled.div`
  display: grid;
  place-content: center;
  padding: 12px;
  background-color: ${theme.colors.bgColorForm};
  border: 1px solid black;
  border-radius: 12px;
  margin-bottom: 1.5rem;
`

const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-bottom: 1rem;
`


const InputForm = styled.input`
  font-family: "Nunito Sans", sans-serif;
  outline: none;
  background: none;
  border: 1px solid ${theme.colors.purple};
  border-radius: 6px;
  padding: 0.5rem 1rem;
  margin-top: 1rem;
  margin-bottom: 1rem;
  width: 300px;
  color: ${theme.colors.white};
  
  &::placeholder{
    color: ${theme.colors.gray};
  }
  `

const TextError = styled.h5`
  font-family: "Nunito Sans", sans-serif;
  font-weight: 300;
  color: ${theme.colors.white};
  text-align: left;
  margin-top: -10px;
`

const ButtonForm = styled.button`
  font-family: "Nunito Sans", sans-serif;
  font-weight: 600;
  font-size: 16px;
  background: ${theme.colors.purple};
  color: ${theme.colors.white};
  border: none;
  border-radius: 20px;
  padding: 0.55rem;
  cursor: pointer;
`

const EditToDoForm = ({ editTask, task }) => {

  const [value, setValue] = useState(task.task);
  const [isEmpty, setIsEmpty] = useState(false);


  const handleChange = (e) => {
    setValue(e.target.value);
    setIsEmpty(e.target.value === '');
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(isEmpty)

    if(!isEmpty){
      return editTask(value, task.id);
    }
  }

  return(
    <Container>
      <Form onSubmit={handleSubmit}>
        <InputForm 
          type='text' 
          placeholder='Update your task!' 
          value={value}
          onChange={handleChange}  
        />

        {isEmpty && <TextError>Please, type your task! 😮</TextError>}

        <ButtonForm type='submit'>Update task!</ButtonForm>
      </Form>
    </Container>
    
  );
}

export default EditToDoForm;