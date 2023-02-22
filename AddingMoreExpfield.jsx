import React, {useState} from 'react'
import { DatePicker } from 'antd';
import AddIcon from '@mui/icons-material/Add';

function AddingMoreExpfield({deleteHandler}) {

        const [data , setData] = useState([]);
      
        const addingMapContainer = () => {
          const Mapframes = [...data,[]]
          setData(Mapframes);
        }

        const handleDelete = (i) => {
          const deletVal = [...data];
          deletVal.splice(i,1);
          setData(deletVal);
        }
        
  return (
    <div>
        <div className="addExperience__field">
        <div className="title">
          <p>Add Experience</p>
        </div>
        {/* add button field */}
        <div className="addBtn">
        <AddIcon style={{'color' : '#9C9FA4'}}/>
          <button onClick={() => addingMapContainer()}>ADD</button>
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
          <div className="col" style={{'marginBottom' : '21px'}}>
          <label for="inputText" className="form-label">Start Date</label>
          <DatePicker style={{'width' : '500px' , 'height' : '45px' , 'position' : 'unset' , 'border': '1px solid #79767E'}}></DatePicker>
          </div>
          <div className="exp__checkBox" style={{'position' : 'absolute', 'right' : '2.2rem'}}>
            <div className="form-check " style={{'marginLeft' : '1.5rem','marginTop' : '5rem'}}>
                <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" style={{'width' : '18px' , 'height' : '18px'}}/>
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
          <select id="inputState" class="form-select" style={{'width' : '500px','boxShadow' : 'none'}}>
            <option selected>Madhya Pradesh</option>
            <option>...</option>
          </select>
          </div>
          <div className="col" style={{'position' : 'relative' , 'right' : '4rem'}}>
          <label for="inputState" class="form-label">Job Type</label>
          <select id="inputState" class="form-select" style={{'width' : '500px' , 'boxShadow' : 'none'}}>
            <option selected>Internship</option>
            <option>...</option>
          </select>
          </div>
          </div>

          </form>
          </div>

          {/* Healine */}
          <form style={{'position' : 'relative' , 'bottom' : '22rem'}}> 
          <div class="form-group" style={{'lineHeight':'0px'}}>
              <label for="inputText" className="experienceheadlineLabel form-label">Description</label>
              <input type="text" className="experienceheadline form-control" id="inputText" placeholder='Description' style={{'boxShadow' : 'none'}}/>
          </div>
          </form>

          {/* buttons */}
          <div className="experience-btn">
          <button type="button" class="exp-btn1">SAVE</button>
          <button type="button" class="exp-btn2" onClick={() => deleteHandler()}>DELETE</button> 
          </div>
        </div>

        <div className="addingMap__items">
          {
            data.map((i) => {
              return(
                <div className="addExperience__field">
                      <div className="title">
                        <p>Add Experience</p>
                      </div>
                      {/* add button field */}
                      <div className="addBtn">
                      <AddIcon style={{'color' : '#9C9FA4'}}/>
                        <button onClick={() => addingMapContainer()}>ADD</button>
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
                      <div className="col" style={{'marginBottom' : '21px'}}>
                      <label for="inputText" className="form-label">Start Date</label>
                      <DatePicker style={{'width' : '500px' , 'height' : '45px' , 'position' : 'unset' , 'border': '1px solid #79767E'}}></DatePicker>
                      </div>
                      <div className="exp__checkBox" style={{'position' : 'absolute', 'right' : '2.2rem'}}>
                        <div className="form-check " style={{'marginLeft' : '1.5rem','marginTop' : '5rem'}}>
                            <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" style={{'width' : '18px' , 'height' : '18px'}}/>
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
                      <select id="inputState" class="form-select" style={{'width' : '500px','boxShadow' : 'none'}}>
                        <option selected>Madhya Pradesh</option>
                        <option>...</option>
                      </select>
                      </div>
                      <div className="col" style={{'position' : 'relative' , 'right' : '4rem'}}>
                      <label for="inputState" class="form-label">Job Type</label>
                      <select id="inputState" class="form-select" style={{'width' : '500px' , "boxShadow" : 'none'}}>
                        <option selected>Internship</option>
                        <option>...</option>
                      </select>
                      </div>
                      </div>

                      </form>
                      </div>

                      {/* Healine */}
                      <form style={{'position' : 'relative' , 'bottom' : '22rem'}}> 
                      <div class="form-group" style={{'lineHeight':'0px'}}>
                          <label for="inputText" className="experienceheadlineLabel form-label">Description</label>
                          <input type="text" className="experienceheadline form-control" id="inputText" placeholder='Description' style={{'boxShadow' : 'none'}}/>
                      </div>
                      </form>

                      {/* buttons */}
                      <div className="experience-btn">
                      <button type="button" class="exp-btn1">SAVE</button>
                      <button type="button" class="exp-btn2" onClick={() => handleDelete(i)}>DELETE</button> 
                      </div>
                          </div>
                        )
                      })
                    }

                  </div>
               </div>
  )
}

export default AddingMoreExpfield