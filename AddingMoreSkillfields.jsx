import React, { useState } from 'react'
import AddIcon from '@mui/icons-material/Add'

function AddingMoreSkillfields({deleteHandler}) {

    const [addDatas, setAddDatas] = useState([])

    const addingMoresections = () => {
        const addingFrames = [...addDatas,[]]
        setAddDatas(addingFrames);
    }

    const handleDelete = (i) => {
        const deletVal = [...addDatas];
        deletVal.splice(i,1);
        setAddDatas(deletVal);
      }

  return (
    <div>
        <div className="skills-section">
            <div className="title__3">
                <p style={{'position' : 'relative' , "bottom" : '12px'}}>Skills</p>
                </div>
                <div className="skills_addBtn">
                <AddIcon style={{'color' : '#9C9FA4'}}/>
                <button onClick={() => addingMoresections()}>ADD</button>
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
                <button onClick={() => addingMoresections()}>ADD</button>
                </div>
                <div className="languageInput__fields">
                <form>
                <div className="row">
                <div className="col">
                <label for="inputState" class="form-label">Languages</label>
                <select id="inputState" class="form-select" style={{'width' : '500px','boxShadow' : 'none'}}>
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
                <button type="button" class="sl-btn2" onClick={() => deleteHandler()}>DELETE</button> 
                </div>
            </div>

        <div className="addingSlSections">
            {
                addDatas.map((i) => {
                    return (
                    <div className="skills-section">
                        <div className="title__3">
                            <p style={{'position' : 'relative' , "bottom" : '12px'}}>Skills</p>
                            </div>
                            <div className="skills_addBtn">
                            <AddIcon style={{'color' : '#9C9FA4'}}/>
                            <button onClick={() => addingMoresections()} >ADD</button>
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
                            <button onClick={() => addingMoresections()}>ADD</button>
                            </div>
                            <div className="languageInput__fields">
                            <form>
                            <div className="row">
                            <div className="col">
                            <label for="inputState" class="form-label">Languages</label>
                            <select id="inputState" class="form-select" style={{'width' : '500px','boxShadow' : 'none'}}>
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
                            <button type="button" class="sl-btn2" onClick={() => handleDelete(i)}>DELETE</button> 
                            </div>
                    </div>
                    )
                })
            }
        </div>
    </div>
  )
}

export default AddingMoreSkillfields