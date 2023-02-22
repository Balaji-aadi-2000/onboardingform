import React from 'react'
import './personalInfo.css'
import { Link, useNavigate } from 'react-router-dom'

function Personalnfo() {

 const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/experience");
  }

  return (
    <div className='personalInfo'>
      <div className="profile">
        <img src="profile.png" alt=""  style={{'position':'absolute','top' : '1rem' , 'left' : '1.5rem'}}/>
        <button className='upload-btn'>UPLOAD NEW PHOTO</button>
        <button className='reset-btn'>RESET</button>
        <p className='description'>Allowed JPG, GIF or PNG. Max size of 800k</p>
      </div>
      <div className="main">
      <div className="form-check " style={{'marginBottom':'12rem' , 'marginLeft' : '1.5rem'}}>
           <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" style={{'boxShadow' : 'none'}}/>
           <label className="form-check-label" for="flexCheckDefault" style={{'fontSize' : '14px'}}>
             Open to work
           </label>
     </div>
      </div>
    <div className="input-fields">
    <form onSubmit={handleSubmit}>
    <div className="row">
          <div className="col">
          <label for="validationDefault01"  className="form-label">Full Name</label>
          <input type="text" className="form-control" id="validationDefault01" required style={{'boxShadow' : 'none'}}/>
          </div>
          <div className="col">
          <label for="validationDefault02" class="form-label">Email</label>
          <input type="email" class="form-control" id="validationDefault02" aria-describedby="emailHelp" required style={{'boxShadow' : 'none'}}/>
          </div>
    </div>
    <div className="row">
          <div className="col">
          <label for="validationDefault03" className="form-label">Mobile</label>
          <input type="number" className="form-control" id="validationDefault02" style={{'boxShadow' : 'none'}}/>
          </div>
          <div className="col">
          <label for="validationCustom04" class="form-label">Country</label>
          <select class="form-select" id="validationCustom04" required style={{'boxShadow' : 'none', 'height' : '45px' , 'border' : '1px solid  #79767E'}}>
            <option selected disabled value="">...</option>
            <option>India</option>
          </select>
          </div>
          </div>
          <div className="row">
          <div className="col">
          <label for="validationCustom04" class="form-label">State</label>
          <select class="form-select" id="validationCustom04" required style={{'boxShadow' : 'none', 'height' : '45px' , 'border' : '1px solid  #79767E'}}>
            <option selected disabled value="">...</option>
            <option>Chhattisgarh</option>
          </select>
          </div>
          <div className="col">
          <label for="validationCustom04" class="form-label">City</label>
          <select class="form-select" id="validationCustom04" required style={{'boxShadow' : 'none', 'height' : '45px' , 'border' : '1px solid  #79767E'}}>
            <option selected disabled value="">...</option>
            <option>Raipur</option>
          </select>
          </div>
   </div> 
   <div className="btn">
   <button type="submit" class="btn1">SAVE NEXT</button>
   <button type="button" class="btn2">CANCEL</button> 
   </div>
   </form>
   </div>
   <form>
   <div class="form-group" style={{'lineHeight':'0px'}}>
      <label for="inputText" className="headlineLabel form-label">Headline</label>
      <input type="text" className="headline form-control" id="inputText" placeholder='Write about yourself' style={{'boxShadow' : 'none'}}/>
   </div>
   </form>
</div>
  )
}

export default Personalnfo




