import React, { useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Container } from 'react-bootstrap';
import { NavLink, useNavigate } from 'react-router-dom'
import { useState } from 'react';
import axios from 'axios'
const AddNewStudent = () => {
    const [checkboxData, setcheckboxData] = useState([]);
    const [country, setCountry] = useState({});
    const [state, setState] = useState({});
    const [ detail, setDetail] = useState({  name: '', email:'', subject:'', country:'', state:'', age:'', gender:'', image:"", languages:[]})
    const [ subject, setSubject] = useState({})
    const [imageUrl, setImageUrl] = useState("");

    const CollectData = (e) => {
        setDetail({...detail, [e.target.name]:e.target.value})
    }

    const checkboxFun = (e)=> {
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

    const navigate = useNavigate()
    
    const submitForm = async (e) =>{
      e.preventDefault()
      console.log(detail)
        axios.post('http://localhost:5000/addAStudent', detail)
        .then(res => {
          if(res.data === "Student added successfully"){
            alert(res.data)
           navigate("/")
        }
      })
        .catch(err => alert(err.response.data))
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

    const imageFun = (e) =>{
      console.log(e.target.files)
      // const formData = new FormData()
      // formData.append('image', e.target.files[0])
      localStorage.setItem("StoreImageUrl", e.target.files[0].name)

      const reader = new FileReader()
      reader.onload = () => {
        if(reader.readyState === 2){
          setImageUrl(reader.result)
        }
      }
      reader.readAsDataURL(e.target.files[0])
      console.log(localStorage.getItem("StoreImageUrl"))
    }
    
    return (
      <Container className='mt-5'>
        <h2>New Student</h2>
    <Form>
        <div className='row'>

      <Form.Group className="mb-3 col-md-6" controlId="name">
        <Form.Label>Full Name</Form.Label>
        <Form.Control onChange={CollectData} name='name' type="text" placeholder="Enter your full name" />
      </Form.Group>

      <Form.Group className="mb-3 col-md-6" controlId="email">
        <Form.Label>Email</Form.Label>
        <Form.Control onChange={CollectData} name='email' type="text" placeholder="Enter your email id" />
      </Form.Group>

      <Form.Group className="mb-3 col-md-6" controlId="formBasicPassword">
        <Form.Label>subject</Form.Label>
        <Form.Select onChange={CollectData} name="subject" aria-label="subject">
        <option>Select</option>
      <option>{subject.option1}</option>
      <option>{subject.option2}</option>
      <option>{subject.option3}</option>
      <option>{subject.option4}</option>
      </Form.Select>
      </Form.Group>

      <Form.Group className="mb-3 col-md-6" controlId="formBasicPassword">
        <Form.Label>Country</Form.Label>
        <Form.Select onChange={CollectData} name="country" aria-label="country">
        <option>Select</option>
      <option>{country.option1}</option>
      <option>{country.option2}</option>
      <option>{country.option3}</option>
      <option>{country.option4}</option>
      </Form.Select>
      </Form.Group>

      <Form.Group className="mb-3 col-md-6" controlId="formBasicPassword">
        <Form.Label>State</Form.Label>
        <Form.Select onChange={CollectData} name="state" aria-label="state">
        <option>Select</option>
      <option>{state.option1}</option>
      <option>{state.option2}</option>
      <option>{state.option3}</option>
      <option>{state.option4}</option>
      </Form.Select>
      </Form.Group>

      <Form.Group className="mb-3 col-md-6" controlId="formBasicPassword">
        <Form.Label>Age</Form.Label>
        <Form.Control onChange={CollectData} name='age' type="number" placeholder="Enter your age" />
      </Form.Group>

      <Form.Group className="mb-3 col-md-6" controlId="gender">
        <Form.Label>Gender</Form.Label>
        <Form.Check name="gender"
            type='radio'
            id='male'
            label='Male'
            value="male"
            onChange={CollectData}
            />
        <Form.Check name="gender"
            type='radio'
            id='female'
            label='Female'
            value="female"
            onChange={CollectData}
          />
      </Form.Group>
      <Form.Group className="mb-3 col-md-6" controlId="formBasicPassword">
        <img style={{width:'100px'}} className="mb-3" src={imageUrl} alt="Empty" />
        <Form.Control onChange={imageFun} name='imageUrl' type="file" accept="image/*" />
      </Form.Group>
      <div key="default-checkbox" className="mb-3 col-md-6">
        <label className='mb-1'>Languages</label>
          <Form.Check 
            type="checkbox"
            id="Hindi"
            label="Hindi"
            value="Hindi"
            name="languages"
            onChange={checkboxFun}
          />
          <Form.Check
            type="checkbox"
            label="English"
            id="English"
            value="English"
            name="languages"
            onChange={checkboxFun}
          />
          </div>
      <div to='/' className='col-md-12'>
      <Button onClick={submitForm} className="me-2" variant="primary" type="submit">
        Submit
      </Button>
      <Button variant="dark" type="btn">
        <NavLink to="/">
        Close
        </NavLink>
      </Button>
      </div>

    </div>
    </Form>
    </Container>
  );
}

export default AddNewStudent;