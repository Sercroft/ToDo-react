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
`

const Title = styled.h1`
    font-family: "Nunito Sans", sans-serif;
    font-weight: 600;
    color: ${theme.colors.white};
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

const ToDoForm = ({ addTask }) => {

  const [value, setValue] = useState('');
  const [isEmpty, setIsEmpty] = useState(true);

  const handleChange = (e) => {
    setValue(e.target.value);
    setIsEmpty(e.target.value === '');
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(isEmpty)

    if(typeof value === 'string' && !isEmpty){
      addTask(value);
      setValue(''); // Clean form 
      setIsEmpty(true)
    }
  }

  return(
    <Container>
      <Title>ToDo in React!</Title>
      <Form onSubmit={handleSubmit}>
        <InputForm 
          type='text' 
          placeholder='What is the task today? :D' 
          value={value}
          onChange={handleChange}  
        />

        {isEmpty && <TextError>Please, type your task! 😮</TextError>}

        <ButtonForm type='submit'>Add task!</ButtonForm>
      </Form>
    </Container>
  );
}

export default ToDoForm;