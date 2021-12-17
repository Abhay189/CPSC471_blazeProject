import {Button,Form } from "react-bootstrap";
import './CSS/AdminSupplierForm.css';
import React,{useState}  from "react";
import axios, { Axios } from "axios";

function AdminInventoryAddForm(){
  const url = "https://localhost:44309/api/products";
  const [data, setData] =  useState({
    PID:"",
    iName: "",
    iSize: "",
    iPrice: "", 
    iColor: "",
    iDescr: ""
  })

  function submit(e){
    console.log("wow")
    e.preventDefault();
    axios.post(url,{ 
      PID: '56',
      Name:data.iName,
      Price: parseFloat(data.iPrice),
      Descr: data.iDescr,
      Color: data.iColor
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
        <input onChange= {(e)=> handle(e)} id= "iName" value = {data.iName}></input>
        </tr>
        <br/>
        <tr>
        <Form.Label className="lab">Size</Form.Label>
        <input onChange= {(e)=> handle(e)} id= "iSize" value = {data.iSize}></input>
        </tr>
        <br/>
        <tr>
        <Form.Label className="lab">Price</Form.Label>
        <input onChange= {(e)=> handle(e)} id= "iPrice" value = {data.iPrice}></input>
        </tr>
        <br/>
        <tr>
        <Form.Label className="lab">Color</Form.Label>
        <input onChange= {(e)=> handle(e)} id= "iColor" value = {data.iColor}></input>
        </tr>
        <br/>
        <tr>
        <Form.Label className="lab">Description</Form.Label>
        <input onChange= {(e)=> handle(e)} id= "iDescr" value = {data.iDescr}></input>
        </tr>
        <br/>
        <button>Submit</button>
        </table>
      </form>
    </div>
  )
}
export default AdminInventoryAddForm;
