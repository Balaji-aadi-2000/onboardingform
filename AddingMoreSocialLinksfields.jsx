import React, { useState } from 'react'
import AddIcon from '@mui/icons-material/Add'
import { Link } from 'react-router-dom'

function AddingMoreSocialLinksfields({deleteHandler}) {

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
        <div className="socialLinks-section">
        <div className="socialLinks_title">
            <p style={{'position' : 'relative' , "bottom" : '12px'}}>Social Links</p>
        </div>
        <div className="socialLinks_addBtn">
        <AddIcon style={{'color' : '#9C9FA4'}}/>
          <button onClick={() => addingMoresections()}>ADD</button>
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
          <input type="text" className="form-control" id="inputText" placeholder='www.twitter.com'style={{'boxShadow' : 'none'}}/>
          </div>
          </div>

          </form>
          </div>
          <div className="socialLinks-btn">
         <Link to = '/bankdetails'><button type="button" class="socialLinks-btn1">SAVE CHANGES</button></Link> 
          <button type="button" class="socialLinks-btn2" onClick={() => deleteHandler()}>DELETE</button> 
          </div>
         </div>

         <div className="addingSocialLinksSection">
            {
                addDatas.map((i) => {
                    return (
                        <div className="socialLinks-section">
                            <div className="socialLinks_title">
                                <p style={{'position' : 'relative' , "bottom" : '12px'}}>Social Links</p>
                                </div>
                                <div className="socialLinks_addBtn">
                                <AddIcon style={{'color' : '#9C9FA4'}}/>
                                <button onClick={() => addingMoresections()}>ADD</button>
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
                                <Link to= '/bankdetails'><button type="button" class="socialLinks-btn1">SAVE CHANGES</button></Link>
                                <button type="button" class="socialLinks-btn2" onClick={() => handleDelete(i)}>DELETE</button> 
                                </div>
                            </div>
                    )
                })
            }
         </div>
    </div>
  )
}

export default AddingMoreSocialLinksfields