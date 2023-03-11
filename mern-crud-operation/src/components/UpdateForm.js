import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Container } from 'react-bootstrap';
import { useParams, useNavigate, NavLink } from 'react-router-dom'

const UpdateForm = () => {
  const [select1, setSelect1] = useState(false);
  const [select2, setSelect2] = useState(false);
  const [select3, setSelect3] = useState(false);
  const [select4, setSelect4] = useState(false);
  const [check1, setCheck1] = useState(false);
  const [check2, setCheck2] = useState(false);
  const [ detail, setDetail] = useState({email:'', name: '', gender:'', subject:'', age:''})
  const [checkbox1, setCheckbox1] = useState(false);
  const [checkbox2, setCheckbox2] = useState(false);
  const [checkboxData, setcheckboxData] = useState([]);
  const [country, setCountry] = useState({});
  const [state, setState] = useState({});
  const [subject, setSubject] = useState({});

  const [country1, setCountry1] = useState(false);
  const [country2, setCountry2] = useState(false);
  const [country3, setCountry3] = useState(false);
  const [country4, setCountry4] = useState(false);

  const [state1, setState1] = useState(false)
  const [state2, setState2] = useState(false)
  const [state3, setState3] = useState(false)
  const [state4, setState4] = useState(false)

  const {id} = useParams();

    useEffect(() => {
      axios.get(`http://localhost:5000/getOneStudent/${id}`)
      .then(res => {
        setDetail(res.data)
        setcheckboxData(res.data.languages)
        if(res.data.subject === 'Maths'){
        setSelect2(true)
      } else if(res.data.subject === 'Science'){
        setSelect1(true)
      } else if(res.data.subject === 'Commerce'){
        setSelect3(true)
      } else if(res.data.subject === 'Arts'){
        setSelect4(true)
      }
      if(res.data.country === "India"){
        setCountry1(true)
      } else if(res.data.country === "Japan"){
        setCountry2(true)
      } else if(res.data.country === "China"){
        setCountry3(true)
      } else if(res.data.country === "Russia"){
        setCountry4(true)
      }
      if(res.data.state === "Rajasthan"){
        setState1(true)
      } else if(res.data.state === "Maharashtra"){
        setState2(true)
      } else if(res.data.state === "Goa"){
        setState3(true)
      } else if(res.data.state === "Kerala"){
        setState4(true)
      }

      if(res.data.gender === 'male'){
        setCheck1(true)
        setCheck2(false)
      } else if(res.data.gender === 'female'){
        setCheck2(true)
        setCheck1(false)
      }
      for(let i=0; i<res.data.languages.length; i++){
        if(res.data.languages[i] === "Hindi"){
            setCheckbox1(true)
        } else if(res.data.languages[i] === "English"){
          setCheckbox2(true)
        }
      }
    })
    // eslint-disable-next-line
  }, []);

    const checkboxFun1 = (e)=> {
      setCheckbox1(!checkbox1)
      if (checkboxData.includes(e.target.value)) {
       const deselect = checkboxData.filter(
         (myproduct) => myproduct !== e.target.value
       )
       setcheckboxData(deselect)
       setDetail({...detail, [e.target.name]:deselect})
     } else {
       setcheckboxData([...checkboxData, e.target.value])
       setDetail({...detail, [e.target.name]:[...checkboxData, e.target.value]})
     }
    }
    const checkboxFun2 = (e)=> {
      setCheckbox2(!checkbox2)
      if (checkboxData.includes(e.target.value)) {
       const deselect = checkboxData.filter(
         (myproduct) => myproduct !== e.target.value
       )
       setcheckboxData(deselect)
       setDetail({...detail, [e.target.name]:deselect})
     } else {
       setcheckboxData([...checkboxData, e.target.value])
       setDetail({...detail, [e.target.name]:[...checkboxData, e.target.value]})
     }
 }

    const CollectData = (e) => {
      setDetail({...detail, [e.target.name]:e.target.value})
      console.log(e.target.value)
    }
    
    const navigate = useNavigate()
    const updateAStudent = (e) => {
      e.preventDefault()
      axios.patch(`http://localhost:5000/update/${id}`, detail)
      .then(res => {
        alert(res.data)
        navigate('/')
      })
      .catch(err => alert(err.response.data))
    }

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
        <h2>Update Exist Student</h2>
    <Form>
        <div className='row'>

      <Form.Group className="mb-3 col-md-6" controlId="name">
        <Form.Label>Full Name</Form.Label>
        <Form.Control name='name' onChange={CollectData} value={detail.name} type="text" placeholder="Enter your full name" />
      </Form.Group>

      <Form.Group className="mb-3 col-md-6" controlId="email">
        <Form.Label>Email</Form.Label>
        <Form.Control name='email' onChange={CollectData} value={detail.email} type="text" placeholder="Enter your email id" />
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
        <Form.Control value={detail.age} onChange={CollectData} name='age' type="number" placeholder="Enter your age" />
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
      <div to='/' className='col-md-12'>
      <Button onClick={updateAStudent} className='me-2' variant="primary" type="submit">
        Update
      </Button>
      <Button variant="dark" type="submit">
      <NavLink to="/">
        close
      </NavLink>
      </Button>
      </div>

    </div>
    </Form>
    </Container>
  )
}

export default UpdateForm
