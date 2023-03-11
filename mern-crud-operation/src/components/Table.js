import React, { useEffect, useState } from 'react'
import { Container } from 'react-bootstrap';
import Table from 'react-bootstrap/Table';
import { Edit, Eye, Trash2 } from 'react-feather'
import { NavLink } from 'react-router-dom'
import axios from 'axios'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import ListGroup from 'react-bootstrap/ListGroup'

const MyTable = () => {
  
  const [detail, setDetail] = useState([]);
  const [student1, setStudent1] = useState({});
  const [ student2, setStudent2] = useState({  name: '', email:'', subject:'', country:'', state:'', age:'', gender:'', languages:[]})

  const [select1, setSelect1] = useState(false);
  const [select2, setSelect2] = useState(false);
  const [select3, setSelect3] = useState(false);
  const [select4, setSelect4] = useState(false);

  const [check1, setCheck1] = useState(false);
  const [check2, setCheck2] = useState(false);

  const [show2, setShow2] = useState(false);
  const [show1, setShow1] = useState(false);

  const [checkbox1, setCheckbox1] = useState(false);
  const [checkbox2, setCheckbox2] = useState(false);
  const [checkboxData, setcheckboxData] = useState([]);

  const [country, setCountry] = useState({});
  const [state, setState] = useState({});

  const [country1, setCountry1] = useState(false);
  const [country2, setCountry2] = useState(false);
  const [country3, setCountry3] = useState(false);
  const [country4, setCountry4] = useState(false);

  const [state1, setState1] = useState(false);
  const [state2, setState2] = useState(false);
  const [state3, setState3] = useState(false);
  const [state4, setState4] = useState(false);

  const [subject, setSubject] = useState({});

  const CollectData = (e) => {
    setStudent1({...student1, [e.target.name]:e.target.value})
    console.log(e.target.value)
  }

  useEffect( () => {
    axios.get("http://localhost:5000/getAllStudents")
    .then((res) => {setDetail(res.data)})
    .catch((err) => console.log('Error from getAllStudents'))
  });

  const deleteUserData = (id) => {
    axios.delete(`http://localhost:5000/delete/${id}`)
    .then(res => alert(res.data))
    .catch(err => console.log(err))
  }
  const id1 = student1._id
  const updateAStudent = (e) => {
    e.preventDefault()
    axios.patch(`http://localhost:5000/update/${id1}`, student1)
    .then(res => {
      alert(res.data)
      setShow1(false)
    })
    .catch(err => alert(err.response.data))
  }

  const handleClose1 = (e) => {
    setShow1(false)
  };
  const handleShow1 = (student) => {
    setShow1(true)
    setStudent1(student)
    setSelect1(false)
    setSelect2(false)
    setSelect3(false)
    setSelect4(false)
    setCountry1(false)
    setCountry2(false)
    setCountry3(false)
    setCountry4(false)
    setState1(false)
    setState2(false)
    setState3(false)
    setState4(false)
    setCheckbox1(false)
    setCheckbox2(false)
    if(student.subject === 'Maths'){
      setSelect2(true)
    } else if(student.subject === 'Science'){
      setSelect1(true)
    } else if(student.subject === 'Commerce'){
      setSelect3(true)
    } else if(student.subject === 'Arts'){
      setSelect4(true)
    }
    if(student.country === "India"){
      setCountry1(true)
    } else if(student.country === "Japan"){
      setCountry2(true)
    } else if(student.country === "China"){
      setCountry3(true)
    } else if(student.country === "Russia"){
      setCountry4(true)
    }
    if(student.state === "Rajasthan"){
      setState1(true)
    } else if(student.state === "Maharashtra"){
      setState2(true)
    } else if(student.state === "Goa"){
      setState3(true)
    } else if(student.state === "Kerala"){
      setState4(true)
    }
    if(student.gender === 'male'){
      setCheck1(true)
      setCheck2(false)
    } else if(student.gender === 'female'){
      setCheck2(true)
      setCheck1(false)
    }
    for(let i=0; i<student.languages.length; i++){
      if(student.languages[i] === "Hindi"){
          setCheckbox1(true)
      } else if(student.languages[i] === "English"){
        setCheckbox2(true)
      }
    }
  };

  const checkboxFun1 = (e)=> {
    setCheckbox1(!checkbox1)
    if (checkboxData.includes(e.target.value)) {
     const deselect = checkboxData.filter(
       (myproduct) => myproduct !== e.target.value
     )
     setcheckboxData(deselect)
     setStudent1({...detail, [e.target.name]:deselect})
   } else {
     setcheckboxData([...checkboxData, e.target.value])
     setStudent1({...detail, [e.target.name]:[...checkboxData, e.target.value]})
   }
  }
  const checkboxFun2 = (e)=> {
    setCheckbox2(!checkbox2)
    if (checkboxData.includes(e.target.value)) {
     const deselect = checkboxData.filter(
       (myproduct) => myproduct !== e.target.value
     )
     setcheckboxData(deselect)
     setStudent2({...detail, [e.target.name]:deselect})
   } else {
     setcheckboxData([...checkboxData, e.target.value])
     setStudent2({...detail, [e.target.name]:[...checkboxData, e.target.value]})
   }
}

  const handleClose2 = () => setShow2(false);
  const handleShow2 = (student) => {
    setShow2(true)
    setStudent2(student)
  };

  
  const radio = () => {
    setCheck1(!check1)
    setCheck2(!check2)
  }

  useEffect(() => {
    axios.get("http://localhost:5000/drop/getone/63ca2c026a3a91d8331a1416")
    .then(res => setCountry(res.data))
    .catch(err => console.log(err.message))
    axios.get("http://localhost:5000/drop/getone/63ca30a48141871ac77228d6")
    .then(res => setState(res.data))
    .catch(err => console.log(err.message))
    axios.get("http://localhost:5000/drop/getone/63ca2b981597dc316b02cfca")
      .then(res => setSubject(res.data))
      .catch(err => console.log(err.message))
  }, []);
    
  return (
    <Container className='mt-5'>
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Student Name</th>
          <th>Email Id</th>
          <th>Subject</th>
          <th>Gender</th>
          <th>age</th>
        </tr>
      </thead>
      <tbody>
    {detail.length === 0 ? <tr className="text-center"><td colSpan='7'>Empty database</td></tr> : detail.map((student,index) => 
        <tr key={index}>
          <td>{index+1}</td>
          <td>{student.name}</td>
          <td>{student.email}</td>
          <td>{student.subject}</td>
          <td>{student.gender}</td>
          <td>{student.age}</td>
          <td><NavLink to={`/oneStudentDetail/${student._id}`}><span className='ms-3 text-success icon-a1'><Eye/></span></NavLink><span className='ms-3 text-danger icon-a1'><Trash2 onClick={() => deleteUserData(student._id)} /></span><NavLink to={`/update/${student._id}`}><span className='text-warning ms-3 icon-a1'><Edit/></span></NavLink><button className="btn btn-warning ms-3" onClick={() => handleShow1(student)}>Edit</button><button onClick={() => handleShow2(student)} className='btn btn-success ms-3'>View</button></td>
        </tr>)}
      </tbody>
    </Table>

    {/* //Edit modal */}
      <Modal show={show1} onHide={handleClose1}>
      <Container className='p-4'>
        <h2>Update Exist Student</h2>
    <Form>
        <div className='row'>

      <Form.Group className="mb-3 col-md-6" controlId="name">
        <Form.Label>Full Name</Form.Label>
        <Form.Control name='name' onChange={CollectData} value={student1.name} type="text" placeholder="Enter your full name" />
      </Form.Group>

      <Form.Group className="mb-3 col-md-6" controlId="email">
        <Form.Label>Email</Form.Label>
        <Form.Control name='email' onChange={CollectData} value={student1.email} type="text" placeholder="Enter your email id" />
      </Form.Group>

      <Form.Group className="mb-3 col-md-6" controlId="formBasicPassword">
        <Form.Label>subject</Form.Label>
        <Form.Select name="subject" onChange={CollectData} aria-label="subject">
        <option>Select</option>
        <option selected={select1}>{subject.option1}</option>
      <option selected={select2}>{subject.option2}</option>
      <option selected={select3}>{subject.option3}</option>
      <option selected={select4}>{subject.option4}</option>
      </Form.Select>
      </Form.Group>

      <Form.Group className="mb-3 col-md-6" controlId="formBasicPassword">
        <Form.Label>Country</Form.Label>
        <Form.Select onChange={CollectData} name="country" aria-label="country">
        <option>Select</option>
      <option selected={country1}>{country.option1}</option>
      <option selected={country2}>{country.option2}</option>
      <option selected={country3}>{country.option3}</option>
      <option selected={country4}>{country.option4}</option>
      </Form.Select>
      </Form.Group>

      <Form.Group className="mb-3 col-md-6" controlId="formBasicPassword">
        <Form.Label>State</Form.Label>
        <Form.Select onChange={CollectData} name="state" aria-label="state">
        <option>Select</option>
      <option selected={state1}>{state.option1}</option>
      <option selected={state2}>{state.option2}</option>
      <option selected={state3}>{state.option3}</option>
      <option selected={state4}>{state.option4}</option>
      </Form.Select>
      </Form.Group>

      <Form.Group className="mb-3 col-md-6" controlId="formBasicPassword">
        <Form.Label>Age</Form.Label>
        <Form.Control value={student1.age} onChange={CollectData} name='age' type="number" placeholder="Enter your age" />
      </Form.Group>

      <Form.Group className="mb-3 col-md-6" controlId="gender">
        <Form.Label>Gender</Form.Label>
        <Form.Check name="gender"
            type='radio'
            id='male'
            label='Male'
            value="male"
            onChange={CollectData}
            checked={check1}
            onClick={radio}     
            />
        <Form.Check name="gender"
            type='radio'
            id='female'
            label='Female'
            value="female"
            onChange={CollectData}
            checked={check2}
            onClick={radio}     
          />
      </Form.Group>
      <div key="default-checkbox" className="mb-3 col-md-6">
        <label className='mb-1'>Languages</label>
          <Form.Check 
            type="checkbox"
            id="Hindi"
            label="Hindi"
            value="Hindi"
            name="languages"
            onChange={checkboxFun1}
            checked={checkbox1}
            />
          <Form.Check
            type="checkbox"
            label="English"
            id="English"
            value="English"
            name="languages"
            onChange={checkboxFun2}
            checked={checkbox2}
          />
          </div>
      <div to='/' className='col-md-12 m-2'>
      <Button onClick={updateAStudent} variant="primary" type="submit">
        Update
      </Button>
      <button onClick={handleClose1} type="button" className="ms-2 btn btn-dark">
        Close
      </button>
      </div>
    </div>
    </Form>
    </Container>
      </Modal>

    {/* //Detail modal */}
      <Modal show={show2} onHide={handleClose2}>
      <ListGroup className='container p-4'>
        <h2>Student detail</h2>
      <ListGroup.Item>Name = {student2.name}</ListGroup.Item>
      <ListGroup.Item>Email = {student2.email}</ListGroup.Item>
      <ListGroup.Item>Subject = {student2.subject}</ListGroup.Item>
      <ListGroup.Item>Country = {student2.country}</ListGroup.Item>
      <ListGroup.Item>State = {student2.state}</ListGroup.Item>
      <ListGroup.Item>Age = {student2.age}</ListGroup.Item>
      <ListGroup.Item>Gender = {student2.gender}</ListGroup.Item>
      <ListGroup.Item>Languages = {student2.languages.map((lang, key) => key+1+lang+" ")}</ListGroup.Item>
      <div className='m-2'>
      <Button onClick={handleClose2} variant="dark" type="button">
        Close
      </Button>
      </div>    
      </ListGroup>
      </Modal>
    </Container>
  );
}

export default MyTable;