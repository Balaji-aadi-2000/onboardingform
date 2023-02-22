import React, { useState } from 'react'
import AddingMoreSkillfields from './AddingMoreSkillfields';
import './skills.css'
import AddIcon from '@mui/icons-material/Add';
import AddingMoreSocialLinksfields from './AddingMoreSocialLinksfields';
import { Link } from 'react-router-dom';

function Skills() {

  const [sldata,setSlData] = useState([]);

  const toggleSldata = () => {
    const slframes = [...sldata,[]];
    setSlData(slframes)
  }

  const [socialLinksData, setSocialLinksData] = useState([]);

  const toggleSocialLinksData = () => {
    const socialLinksframes = [...socialLinksData,[]];
    setSocialLinksData(socialLinksframes);
  }


  const handleDelete = (i) => {
    const deletValExp = [...sldata];
    const deletValLic = [...socialLinksData];
    
    deletValExp.splice(i,1);
    deletValLic.splice(i,1);

    setSlData(deletValExp);
    setSocialLinksData(deletValLic);
    
  }

  return (
    <div className='main-section'>
      {/* skills section */}

      <div className="skills-section">
      <div className="title__3">
          <p style={{'position' : 'relative' , "bottom" : '12px'}}>Skills</p>
        </div>
        <div className="skills_addBtn">
          <AddIcon style={{'color' : '#9C9FA4'}}/>
          <button onClick={() => toggleSldata()}>ADD</button>
        </div>
        <div className="skillsInput__fields">
          <form>
          <div className="row">
          <div className="col">
          <label for="inputText" className="form-label">Skills</label>
          <input type="text" className="form-control" id="inputText" placeholder='Enter Skills' style={{'boxShadow' : 'none'}}/>
          </div>
          </div>
          </form>
          </div>
        <div className="language-section">
        <div className="title__4">
          <p style={{'position' : 'relative' , "bottom" : '12px'}}>Languages</p>
        </div>
        <div className="language_addBtn">
        <AddIcon style={{'color' : '#9C9FA4'}}/>
          <button onClick={() => toggleSldata()}>ADD</button>
        </div>
        <div className="languageInput__fields">
          <form>
          <div className="row">
          <div className="col">
          <label for="inputState" class="form-label">Languages</label>
          <select id="inputState" class="form-select" style={{'width' : '500px' , 'boxShadow' : 'none'}}>
            <option selected>Select</option>
            <option>English</option>
            <option>Hindi</option>
          </select>
          </div>
          </div>
          </form>
          </div>
        </div>
        <div className="sl-btn">
          <button type="button" class="sl-btn1">SAVE CHANGES</button>
          <button type="button" class="sl-btn2">DELETE</button> 
        </div>
        </div>
        
      {
        sldata.map(() => <AddingMoreSkillfields deleteHandler={handleDelete}/>)
      }


      {/* social links section */}

      <div className="socialLinks-section">
      <div className="socialLinks_title">
          <p style={{'position' : 'relative' , "bottom" : '12px'}}>Social Links</p>
        </div>
        <div className="socialLinks_addBtn">
        <AddIcon style={{'color' : '#9C9FA4'}}/>
          <button onClick={() => toggleSocialLinksData()}>ADD</button>
        </div>
        <div className="socialLinksInput__fields">
          <form>
            
          {/* row1 */}

          <div className="row">
          <div className="col">
          <label for="inputText" className="form-label">URL</label>
          <input type="text" className="form-control" id="inputText" placeholder='www.facebook.com' style={{'boxShadow' : 'none'}}/>
          </div>
          <div className="col">
          <label for="inputText" className="form-label">URL</label>
          <input type="text" className="form-control" id="inputText" placeholder='www.twitter.com' style={{'boxShadow' : 'none'}}/>
          </div>
          </div>

          {/* row2 */}

          <div className="row">
          <div className="col">
          <label for="inputText" className="form-label">URL</label>
          <input type="text" className="form-control" id="inputText" placeholder='www.facebook.com' style={{'boxShadow' : 'none'}}/>
          </div>
          <div className="col">
          <label for="inputText" className="form-label">URL</label>
          <input type="text" className="form-control" id="inputText" placeholder='www.twitter.com' style={{'boxShadow' : 'none'}}/>
          </div>
          </div>

          </form>
          </div>
          <div className="socialLinks-btn">
          <Link to = '/bankdetails'><button type="button" class="socialLinks-btn1">SAVE CHANGES</button></Link>
          <button type="button" class="socialLinks-btn2">DELETE</button> 
          </div>
      </div>

      {
        socialLinksData.map(() => <AddingMoreSocialLinksfields deleteHandler={handleDelete}/>)
      }
    </div>
  )
}

export default Skills

