import React, {useState} from 'react'
import { DatePicker } from 'antd';
import AddIcon from '@mui/icons-material/Add';


function AddingMoreLicencefield({deleteHandler}) {

    
    const [lcfield , setLcfield] = useState([])
    
    const addinglcMapContainer = () => {
        const Maplcframes = [...lcfield,[]]
        setLcfield(Maplcframes);
    }

    const handleDelete = (i) => {
      const deletVal = [...lcfield];
      deletVal.splice(i,1);
      setLcfield(deletVal);
    }

  return (
    <div>
        <div className="licenses__certification__field">
        <div className="title__2">
          <p>Licenses & Certifications</p>
        </div>
        {/* add button field */}
        <div className="addBtn__2">
        <AddIcon style={{'color' : '#9C9FA4'}}/>
          <button onClick={() => addinglcMapContainer()}>ADD</button>
        </div>
        <div className="lc__Input__fields">
          <form style={{'position' : 'relative' , "top" : '2rem'}}>
            {/* row1 */}

          <div className="row">
          <div className="col">
          <label for="inputText" className="form-label">Name * </label>
          <input type="text" className="form-control" id="inputText" style={{'boxShadow' : 'none'}}/>
          </div>
          <div className="col" style={{'position' : 'relative' , 'right' : '4rem'}}>
          <label for="inputText" className="form-label">Issuing Organisation </label>
          <input type="text" className="form-control" id="inputText" style={{'boxShadow' : 'none'}}/>
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
          <input type="text" className="form-control" id="inputText" style={{'boxShadow' : 'none'}}/>
          </div>
          <div className="col" style={{'position' : 'relative' , 'right' : '4rem'}}>
          <label for="inputText" className="form-label">Credential ID</label>
          <input type="text" className="form-control" id="inputText" style={{'boxShadow' : 'none'}}/>
          </div>
          </div>

          </form>
          </div>

          {/* buttons */}
          <div className="lc-btn">
          <button type="button" class="lc-btn1">SAVE</button>
          <button type="button" class="lc-btn2" onClick={() => deleteHandler()}>DELETE</button> 
          </div>
        </div>

        <div className="addingMaplc__items">
            {
                lcfield.map((i) => {
                    return (
                        <div className="licenses__certification__field">
                            <div className="title__2">
                              <p>Licenses & Certifications</p>
                            </div>
                            {/* add button field */}
                            <div className="addBtn__2">
                            <AddIcon style={{'color' : '#9C9FA4'}}/>
                              <button onClick={() => addinglcMapContainer()}>ADD</button>
                            </div>
                            <div className="lc__Input__fields">
                              <form style={{'position' : 'relative' , "top" : '2rem'}}>
                                {/* row1 */}

                            <div className="row">
                            <div className="col">
                            <label for="inputText" className="form-label">Name * </label>
                            <input type="text" className="form-control" id="inputText" style={{'boxShadow' : 'none'}}/>
                            </div>
                            <div className="col" style={{'position' : 'relative' , 'right' : '4rem'}}>
                            <label for="inputText" className="form-label">Issuing Organisation </label>
                            <input type="text" className="form-control" id="inputText" style={{'boxShadow' : 'none'}}/>
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
                            <input type="text" className="form-control" id="inputText" style={{'boxShadow' : 'none'}}/>
                            </div>
                            <div className="col" style={{'position' : 'relative' , 'right' : '4rem'}}>
                            <label for="inputText" className="form-label">Credential ID</label>
                            <input type="text" className="form-control" id="inputText" style={{'boxShadow' : 'none'}}/>
                            </div>
                            </div>

                            </form>
                            </div>

                            {/* buttons */}
                            <div className="lc-btn">
                            <button type="button" class="lc-btn1">SAVE</button>
                            <button type="button" class="lc-btn2" onClick={() => handleDelete(i)}>DELETE</button> 
                            </div>
                         </div>
                    )
                })
            }
        </div>
    </div>
  )
}

export default AddingMoreLicencefield