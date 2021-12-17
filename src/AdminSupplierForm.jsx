import {Button,Form } from "react-bootstrap";
import './CSS/AdminSupplierForm.css';
import React,{useState}  from "react";
import axios, * as others from 'axios';


function AdminSupplierAddForm(){
  const url = "https://localhost:44317/api/supplier";
  const [data, setData] =  useState({
    SupID:"",
    SName: "",
    SEmail: "",
    SPhone: "",
    SStreet: "",
    SCity: "", 
    SPostal: "",
    SDescr: ""
  })

  function submit(e){
    console.log("supplier")
    e.preventDefault();
    axios.post(url,{ 
      SupID: '56',
      Name:data.SName,
      Email: data.SEmail,
      PhoneNo: parseFloat(data.SPhone),
      Street: parseInt(data.SStreet),
      City: data.SCity,
      PostalCode: data.SPostal
    })

    .then(res => {
      console.log(res.data )
    })

  }
  function handle(e){
    const newData = {...data}
    newData[e.target.id] = e.target.value
    setData(newData)
    console.log(newData)
  }
 

  return(
    <div className="adminsupplierbackground">
      {/*<Form onSubmit= {(e)=> submit(e)}> 
        <Form.Group className="mb-3" onChange= {(e)=> handle(e)} id= "iName" value = {data.iName}>
          <Form.Label>Name</Form.Label>
          <Form.Control type="Semail" placeholder="Name" />
        </Form.Group>

        <Form.Group className="mb-3" onChange= {(e)=> handle(e)} id= "iSize" value = {data.iSize}>
          <Form.Label>Size</Form.Label>
          <Form.Control  type="Semail" placeholder="s" />
        </Form.Group>

        <Form.Group className="mb-3" onChange= {(e)=> handle(e)} id= "iPrice" value = {data.iPrice}>
          <Form.Label>Price</Form.Label>
          <Form.Control  type="Saddress" placeholder="30" />
        </Form.Group>

        <Form.Group className="mb-3" onChange= {(e)=> handle(e)} id= "iColor" value = {data.iColor} >
          <Form.Label>Color</Form.Label>
          <Form.Control type="Saddress" placeholder="Blue" />
        </Form.Group>

        <Form.Group className="mb-3" onChange= {(e)=> handle(e)} id= "iDescr" value = {data.iDescr}>
        <Form.Label>Description</Form.Label>
        <Form.Control as="textarea" rows={3} />
        </Form.Group>
        <button variant="primary" type="Isubmit">
          Submit
        </button>
      </Form>*/}
      <form onSubmit= {(e)=> submit(e)}>
        <table>
          <br/><br/>
        <tr>
        <Form.Label className="lab">Name</Form.Label>
        <input onChange= {(e)=> handle(e)} id= "SName" value = {data.SName}></input>
        </tr>
        <br/>
        <tr>
        <Form.Label className="lab">Email</Form.Label>
        <input onChange= {(e)=> handle(e)} id= "SEmail" value = {data.SEmail}></input>
        </tr>
        <br/>
        <tr>
        <Form.Label className="lab">Phone Number</Form.Label>
        <input onChange= {(e)=> handle(e)} id= "SPhone" value = {data.SPhone}></input>
        </tr>
        <br/>
        <tr>
        <Form.Label className="lab">Street</Form.Label>
        <input onChange= {(e)=> handle(e)} id= "SStreet" value = {data.SStreet}></input>
        </tr>
        <br/>
        <tr>
        <Form.Label className="lab">City</Form.Label>
        <input onChange= {(e)=> handle(e)} id= "SCity" value = {data.SCity}></input>
        </tr>
        <br/>
        <tr>
        <Form.Label className="lab">Postal Code</Form.Label>
        <input onChange= {(e)=> handle(e)} id= "SPostal" value = {data.SPostal}></input>
        </tr>
        <br/>
        <button>Submit</button>
        </table>
      </form>
    </div>
  )
}
export default AdminSupplierAddForm;