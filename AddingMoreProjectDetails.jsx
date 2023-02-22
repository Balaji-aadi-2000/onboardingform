import React, { useState } from 'react'
import { DatePicker } from 'antd';
import { Link } from 'react-router-dom';
import AddIcon from '@mui/icons-material/Add';

function AddingMoreProjectDetails({deleteHandler}) {
    const [pddata , setPdData] = useState([]);

    const addingPdMapContainer = () => {
        const Mappdframes = [...pddata,[]];
        setPdData(Mappdframes);
    }

    const handleDelete = (i) => {
      const deletVal = [...pddata];
      deletVal.splice(i,1);
      setPdData(deletVal);
    }
  return (
    <div>
        <div className="projectDetails__field">
        <div className="pd__title">
          <p style={{'position' : 'relative' , "bottom" : '12px'}}>Project Details</p>
        </div>
        {/* add button field */}
        <div className="pd__addBtn">
        <AddIcon style={{'color' : '#9C9FA4'}}/>
          <button onClick={() => addingPdMapContainer()}>ADD</button>
        </div>
        <div className="pdInput__fields">
          <form>
            {/* row1 */}

          <div className="row">
          <div className="col">
          <label for="inputText" className="form-label">Project name</label>
          <input type="text" className="form-control" id="inputText" style={{'boxShadow' : 'none'}} />
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
            <div className="form-check " style={{'marginLeft' : '1.5rem','marginTop' : '5.5rem'}}>
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
          <button type="button" class="pd-btn1">SAVE</button>
          <button type="button" class="pd-btn2" onClick={() => deleteHandler()}>DELETE</button> 
          </div>
        </div>

        <div className="addingMapPd__items">
        {
            pddata.map((i) => {
                return (
                    <div className="projectDetails__field">
                        <div className="pd__title">
                          <p style={{'position' : 'relative' , "bottom" : '12px'}}>Project Details</p>
                        </div>
                        {/* add button field */}
                        <div className="pd__addBtn">
                        <AddIcon style={{'color' : '#9C9FA4'}}/>
                          <button onClick={() => addingPdMapContainer()}>ADD</button>
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
                        <div className="form-check " style={{'marginLeft' : '1.5rem','marginTop' : '5.5rem'}}>
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
                      <Link to= '/skills'><button type="button" class="pd-btn1">SAVE</button></Link>
                      <button type="button" class="pd-btn2" onClick={() => handleDelete(i)}>DELETE</button> 
                      </div>
                    </div>
                )
            })
        }
        </div>
    </div>
  )
}

export default AddingMoreProjectDetails