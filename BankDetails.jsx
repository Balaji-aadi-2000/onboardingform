import React from 'react'
import './bankDetails.css'

function BankDetails() {
  return (
    <div className='main-section'>
      <div className="bankdetails__field">
      <div className="bd__title">
          <p style={{'position' : 'relative' , "bottom" : '12px'}}>Bank Details</p>
        </div>

        <div className="bdInput__fields">
          <form style={{'position' : 'relative' , 'top' : '1rem'}}>

          <div className="row">
          <div className="col" >
          <label for="inputState" class="form-label">Bank name</label>
          <select id="inputState" class="form-select" style={{'width' : '500px', 'boxShadow' : 'none'}}>
            <option selected>SBI</option>
            <option>HDFC</option>
            <option>IDBI</option>
          </select>
          </div>
          <div className="col">
          <label for="inputText" className="form-label">Account Holder Name</label>
          <input type="text" className="form-control" id="inputText" placeholder='Name' style={{'boxShadow' : 'none'}}/>
          </div>
          </div>

          <div className="row">
          <div className="col">
          <label for="inputText" className="form-label">Account No</label>
          <input type="text" className="form-control" id="inputText" placeholder='Eg. 000123456789' style={{'boxShadow' : 'none'}}/>
          </div>
          <div className="col">
          <label for="inputText" className="form-label">Confirm Account No</label>
          <input type="text" className="form-control" id="inputText" placeholder='Select' style={{'boxShadow' : 'none'}}/>
          </div>
          </div>

          <div className="row">
          <div className="col" >
          <label for="inputState" class="form-label">IFSC Code</label>
          <select id="inputState" class="form-select" style={{'width' : '500px', 'boxShadow' : 'none'}}>
            <option selected>Eg. HDFCXXXXX21</option>
            <option>...</option>
          </select>
          </div>
          </div>

          </form>
          </div>


          <div className="bd-btn">
          <button type="button" class="bd-btn1">CONFIRM BANK DETAILS</button>
          <button type="button" class="bd-btn2">SAVE CHANGES</button> 
          </div>
       </div>

       <div className="final-btn">
          <button type="button" class="final-btn1">SAVE </button>
          <button type="button" class="final-btn2">VIEW DETAILS</button> 
        </div>
    </div>
  )
}

export default BankDetails