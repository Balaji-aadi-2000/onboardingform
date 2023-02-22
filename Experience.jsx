import React, { useState } from 'react'
import { DatePicker } from 'antd';
import { Link } from 'react-router-dom';
import AddIcon from '@mui/icons-material/Add';
import AddingMoreExpfield from './AddingMoreExpfield';
import AddingMoreLicencefield from './AddingMoreLicencefield';
import AddingMoreProjectDetails from './AddingMoreProjectDetails';
import './experience.css'
import './licensesCertification.css'
import './projectDetails.css'

function Experience() {

  const [add , setAdd] = useState([])
  const [licenceAddField , setLicenceAddField] = useState([]);
  const [pdField, setpdField] = useState([]);
  

  const addingContainer = () => {
    const frames = [...add,[]]
    setAdd(frames);
  }

  const handleDelete = (i) => {
    const deletValExp = [...add];
    const deletValLic = [...licenceAddField];
    const deletValPd = [...licenceAddField];
    deletValExp.splice(i,1);
    deletValLic.splice(i,1);
    deletValPd.splice(i,1);
    setAdd(deletValExp);
    setLicenceAddField(deletValLic);
    setpdField(deletValPd);
  }

  const addingLContiner = () => {
    const licenceframes = [...licenceAddField,[]]
    setLicenceAddField(licenceframes);
  }

  const addingpdContainer = () => {
    const pdframes = [...pdField,[]]
    setpdField(pdframes);
  }

  
  return (
    <div className='main__container'>
      {/* Experience field */}

      <div className="addExperience__field">
        <div className="title">
          <p style={{'position' : 'relative' , "bottom" : '12px'}}>Add Experience</p>
        </div>
        {/* add button field */}
        <div className="addBtn">
        <AddIcon style={{'color' : '#9C9FA4'}}/>
          <button onClick={() => addingContainer()}>ADD</button>
        </div>
        <div className="experienceInput__fields">
          <form>
            {/* row1 */}

          <div className="row">
          <div className="col">
          <label for="inputText" className="form-label">Company name</label>
          <input type="text" className="form-control" id="inputText" style={{'boxShadow' : 'none'}}/>
          </div>
          <div className="col" style={{'position' : 'relative' , 'right' : '4rem'}}>
          <label for="inputText" className="form-label">Designation</label>
          <input type="text" className="form-control" id="inputText" style={{'boxShadow' : 'none'}}/>
          </div>
          </div>

            {/* row 2 */}

          <div className="row">
          <div className="col" style={{'marginBottom' : '36px'}}>
          <label for="inputText" className="form-label">Start Date</label>
          <DatePicker style={{'width' : '500px' , 'height' : '45px' , 'position' : 'unset' , 'border': '1px solid #79767E'}}></DatePicker>
          </div>
          <div className="exp__checkBox" style={{'position' : 'absolute', 'right' : '2.2rem'}}>
            <div className="form-check " style={{'marginLeft' : '1.5rem','position' : 'relative' , 'top' : '5rem'}}>
                <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" style={{'width' : '18px' , 'height' : '18px'}} />
                <p style={{'position' : 'relative' , 'left' : '13px' , 'top' : '13px' , 'fontSize' : '16px'}}>Currently working here</p>
          </div>
          </div>
          <div className="col" style={{'position' : 'relative' , 'right' : '4rem'}}>
          <label for="inputText" className="form-label">End Date</label>
          <DatePicker style={{'width' : '500px' , 'height' : '45px', 'position' : 'unset' , 'border': '1px solid #79767E'}}></DatePicker>
          </div>
          </div>

          {/* row 3 */}

          <div className="row">
          <div className="col">
          <label for="inputState" class="form-label">Location</label>
          <select id="inputState" class="form-select" style={{ 'width' : '500px','boxShadow' : 'none'}}>
            <option selected>Madhya Pradesh</option>
            <option>...</option>
          </select>
          </div>
          <div className="col" style={{'position' : 'relative' , 'right' : '4rem'}}>
          <label for="inputState" class="form-label">Job Type</label>
          <select id="inputState" class="form-select" style={{'width' : '500px' ,'boxShadow' : 'none'}}>
            <option selected>Internship</option>
            <option>...</option>
          </select>
          </div>
          </div>

          </form>
          </div>

          {/* Healine */}
          <form style={{'position' : 'relative' , 'bottom' : '20.5rem'}}> 
          <div class="form-group" style={{'lineHeight':'0px'}}>
              <label for="inputText" className="experienceheadlineLabel form-label">Description</label>
              <input type="text" className="experienceheadline form-control" id="inputText" placeholder='Description' style={{'boxShadow' : 'none'}}/>
          </div>
          </form>

          {/* buttons */}
          <div className="experience-btn">
          <button type="button" class="exp-btn1">SAVE</button>
          <button type="button" class="exp-btn2">DELETE</button> 
          </div>
        </div>
     
      { 
        add.map(() => <AddingMoreExpfield deleteHandler={handleDelete}/> )
      }
     
      

      {/* licence and certificaion field */}

      <div className="licenses__certification__field">
        <div className="title__2">
          <p>Licenses & Certifications</p>
        </div>
        {/* add button field */}
        <div className="addBtn__2">
        <AddIcon style={{'color' : '#9C9FA4'}}/>
          <button onClick={() => addingLContiner()}>ADD</button>
        </div>
        <div className="lc__Input__fields">
          <form style={{'position' : 'relative' , "top" : '2rem'}}>
            {/* row1 */}

          <div className="row">
          <div className="col">
          <label for="inputText" className="form-label">Name * </label>
          <input type="text" className="form-control" id="inputText"  style={{'boxShadow' : 'none'}}/>
          </div>
          <div className="col" style={{'position' : 'relative' , 'right' : '4rem'}}>
          <label for="inputText" className="form-label">Issuing Organisation </label>
          <input type="text" className="form-control" id="inputText"  style={{'boxShadow' : 'none'}}/>
          </div>
          </div>

            {/* row 2 */}

          <div className="row">
          <div className="col" style={{'marginBottom' : '21px'}}>
          <label for="inputText" className="form-label">Issue Date</label>
          <DatePicker style={{'width' : '500px' , 'height' : '45px' , 'position' : 'unset' , 'border': '1px solid #79767E'}}></DatePicker>
          </div>
    
          <div className="col" style={{'position' : 'relative' , 'right' : '4rem'}}>
          <label for="inputText" className="form-label">Expiry Date</label>
          <DatePicker style={{'width' : '500px' , 'height' : '45px', 'position' : 'unset' , 'border': '1px solid #79767E'}}></DatePicker>
          </div>
          </div>

          {/* row 3 */}

          <div className="row">
          <div className="col">
          <label for="inputText" className="form-label">Credential URL </label>
          <input type="text" className="form-control" id="inputText" style={{'boxShadow' : 'none'}} />
          </div>
          <div className="col" style={{'position' : 'relative' , 'right' : '4rem'}}>
          <label for="inputText" className="form-label">Credential ID</label>
          <input type="text" className="form-control" id="inputText" style={{'boxShadow' : 'none'}} />
          </div>
          </div>

          </form>
          </div>

          {/* buttons */}
          <div className="lc-btn">
          <button type="button" class="lc-btn1">SAVE</button>
          <button type="button" class="lc-btn2">DELETE</button> 
          </div>
        </div>

      {
        licenceAddField.map(() => <AddingMoreLicencefield deleteHandler={handleDelete}/> )
      }

      
      {/* project details field */}

      <div className="projectDetails__field">
        <div className="pd__title">
          <p style={{'position' : 'relative' , "bottom" : '12px'}}>Project Details</p>
        </div>
        {/* add button field */}
        <div className="pd__addBtn">
        <AddIcon style={{'color' : '#9C9FA4'}}/>
          <button onClick={() => addingpdContainer()}>ADD</button>
        </div>
        <div className="pdInput__fields">
          <form>
            {/* row1 */}

          <div className="row">
          <div className="col">
          <label for="inputText" className="form-label">Project name</label>
          <input type="text" className="form-control" id="inputText" style={{'boxShadow' : 'none'}}/>
          </div>
          <div className="col" style={{'position' : 'relative' , 'right' : '4rem'}}>
          <label for="inputText" className="form-label">Project URL</label>
          <input type="text" className="form-control" id="inputText" style={{'boxShadow' : 'none'}}/>
          </div>
          </div>

            {/* row 2 */}

          <div className="row">
          <div className="col" style={{'marginBottom' : '36px'}}>
          <label for="inputText" className="form-label">Start Date</label>
          <DatePicker style={{'width' : '500px' , 'height' : '45px' , 'position' : 'unset' , 'border': '1px solid #79767E'}}></DatePicker>
          </div>
          <div className="exp__checkBox" style={{'position' : 'absolute', 'right' : '2.2rem'}}>
            <div className="form-check " style={{'marginLeft' : '1.5rem','position' : 'relative' , 'top' : '5rem'}}>
                <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" style={{'width' : '18px' , 'height' : '18px'}}/>
                <p style={{'position' : 'relative' , 'left' : '13px' , 'top' : '13px' , 'fontSize' : '16px'}}>Currently working here</p>
          </div>
          </div>
          <div className="col" style={{'position' : 'relative' , 'right' : '4rem'}}>
          <label for="inputText" className="form-label">End Date</label>
          <DatePicker style={{'width' : '500px' , 'height' : '45px', 'position' : 'unset' , 'border': '1px solid #79767E'}}></DatePicker>
          </div>
          </div>

          </form>
          </div>

          {/* Healine */}
          <form style={{'position' : 'relative' , 'bottom' : '24.5rem'}}> 
          <div class="form-group" style={{'lineHeight':'0px'}}>
              <label for="inputText" className="pd_headlineLabel form-label">Description</label>
              <input type="text" className="pd_headline form-control" id="inputText" placeholder='Description' style={{'boxShadow' : 'none'}}/>
          </div>
          </form>

          {/* buttons */}
          <div className="pd-btn">
         <Link to = '/skills'><button type="button" class="pd-btn1">SAVE</button></Link>
          <button type="button" class="pd-btn2">DELETE</button> 
          </div>
        </div>

      {
        pdField.map(() => <AddingMoreProjectDetails deleteHandler={handleDelete}/>)
      }
      
    </div>
  )
}

export default Experience




