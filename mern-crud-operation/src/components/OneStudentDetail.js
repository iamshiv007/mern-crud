import React, { useEffect, useState } from 'react'
import ListGroup from 'react-bootstrap/ListGroup'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'

export const OneStudentDetail = () => {
    const [oneStudent, setoneStudent] = useState({  name: '', email:'', subject:'', country:'', state:'', age:'', gender:'', languages:[]});

    const {id} = useParams()

    useEffect(() => {
        axios.get(`http://localhost:5000/getOneStudent/${id}`)
        .then((res) =>  {setoneStudent(res.data)})
        .catch(arr => console.log('Error from getOneStudent'))
        // eslint-disable-next-line
    }, []);

    const navigate = useNavigate()
    const goBack = () => {
        navigate('/')
    }
  return (
    <ListGroup className='container w-50 mt-5'>
        <h2>Student detail</h2>
      <ListGroup.Item>Name = {oneStudent.name}</ListGroup.Item>
      <ListGroup.Item>Email = {oneStudent.email}</ListGroup.Item>
      <ListGroup.Item>Subject = {oneStudent.subject}</ListGroup.Item>
      <ListGroup.Item>Country = {oneStudent.country}</ListGroup.Item>
      <ListGroup.Item>State = {oneStudent.state}</ListGroup.Item>
      <ListGroup.Item>Age = {oneStudent.age}</ListGroup.Item>
      <ListGroup.Item>Gender = {oneStudent.gender}</ListGroup.Item>
      <ListGroup.Item>Languages = {oneStudent.languages.map((lang, key) => key+1+lang+" ")}</ListGroup.Item>
      <div>
      <button className='btn btn-dark mt-2' onClick={goBack}>back</button>
      </div>
    </ListGroup>
  )
}

export default OneStudentDetail;
