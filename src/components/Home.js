import React, { useState } from "react";
import { useAuth0 } from '@auth0/auth0-react';
import styled from 'styled-components';
import LogoutButton from "./generics/LogoutButton";
import ToDoForm from "./generics/ToDoForm";
import theme from "../theme";
import { v4 as uuidv4 } from 'uuid';
import Todo from "./generics/Todo";
import EditToDoForm from "./generics/EditForm";

// Initialize uuid
uuidv4();

const Container = styled.div`
    display: grid;
    place-content: center;
    background-color: ${theme.colors.purple};
    min-height: 100vh;
    text-align: center;
    padding: 10px;
`

const ProfileContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 1.5rem;
`

const ProfileImageContainer = styled.div`
    padding: 10px;
`

const ProfileImage = styled.img`
    display: block;
    margin: 0 auto;
    width: 64px;
    height: 64px;
    border-radius: 20px;
`

const ProfileInfo = styled.p`
    font-family: "Nunito Sans", sans-serif;
    font-size: 20px;
    color: ${theme.colors.white};
`

const Home = () => {
    
    const { user } = useAuth0();
    const [tasks, setTasks] = useState([]);

    const addTask = task => {
        setTasks([...tasks, {
            id: uuidv4(), 
            task: task, 
            completed: false, 
            isEditing: false
        }]);
    }

    const taskComplete = (id) => {
        setTasks(tasks.map((task) => task.id === id ? 
            {...task, completed: !task.completed} : task));
    }

    const deleteTask = (id) => {
        setTasks(tasks.filter((task) => task.id !== id));
    }

    const editToDo = (id) => {
        setTasks(tasks.map((task) => task.id === id ? 
            {...task, isEditing: !task.isEditing} : task));
    }

    const editTask = (task, id) => {
        setTasks(tasks.map((toDo) => toDo.id === id ? 
            {...toDo, task: task, isEditing: !toDo.isEditing} : toDo));
    }

    return(
        <Container>
            <ProfileContainer>
                <ProfileImageContainer>
                    <ProfileImage src={user.picture} alt={user.name} loading="lazy" />
                </ProfileImageContainer>
                
                <ProfileInfo>{user.name}</ProfileInfo>
                <ProfileInfo>Email: {user.email}</ProfileInfo>
                
                <LogoutButton /> 

            </ProfileContainer>
            
            <ToDoForm addTask={addTask}/>   
            <br/>
            
            {tasks.map((task) => (

                task.isEditing ? (
                    <EditToDoForm 
                        key={task.id}
                        editTask={editTask}
                        task={task}
                    />    
                ) : (
                    <Todo 
                        key={task.id} 
                        task={task} 
                        taskComplete={taskComplete}
                        editTask={editToDo}
                        deleteTask={deleteTask}
                    />
                )
            ))}
        </Container>
    );
}

export default Home;