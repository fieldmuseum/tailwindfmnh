
export default function BasicFormElements() {
  return (
    <form className='w-full'>
      <div className='mb-6 form-group'>
        <label htmlFor="Name" className='form-label'>Name</label>
        <input type="text" name="Name" id="basicName" className='form-input' placeholder="Enter Your Name" required/>
      </div>
      <div className='mb-6 form-group'>
        <label htmlFor="Email" className='form-label'>Email</label>
        <input type="text" name="Email" id="basicEmail" className='form-input' placeholder="Enter Your Email" required/>
      </div>
      <div className="mb-6 form-group">
        <label htmlFor="basicPhone">Phone</label>
        <input type="tel" name="phone-input" id="basicPhone" className="form-input" placeholder="Enter Your Phone Number" pattern="[\+]\d{2}[\(]\d{2}[\)]\d{4}[\-]\d{4}" required/>
      </div>
      <div className='mb-6 form-group'>
        <label htmlFor="Message" className='form-label'>Message</label>
        <textarea  id="basicTextarea" name="Message" className='form-textarea' placeholder="Leave a Message" spellCheck="false" cols={30} rows={4}></textarea>
      </div>
      <div className="mb-6 form-group">
        <label htmlFor="datePicker" className="form-label">Datepicker</label>
        <input type="date" name="date-picker" id="datePicker" className="form-input" />
      </div>
      <div className="mb-6 form-group">
        <label htmlFor="countriesSelect" className="form-label">Select</label>
        <select name="countries-select" id="countriesSelect" className="form-input pr-1">
          <option selected value="default">Pick a Country</option>
          <option value="NI">Nigeria</option>
          <option value="IR">Ireland</option>
          <option value="RO">Romania</option>
          <option value="IN">India</option>
        </select>
      </div>
      <fieldset>
        <legend>Radio Labels</legend>
        <div className="form-radio-group">
          <input type="radio" className='form-radio' name="country" id="firstRadio"/>
          <label htmlFor="firstRadio" >Nigeria</label>
        </div>
        <div className="form-radio-group">
          <input type="radio" className='form-radio' name="country" id="secondRadio" />
          <label htmlFor="secondRadio">Romania</label>
        </div>
        <div className="form-radio-group">
          <input type="radio" className='form-radio' name="country" id="thirdRadio" />
          <label htmlFor="thirdRadio">Ireland</label>
        </div>
        <div className="form-radio-group">
          <input type="radio" className='form-radio' name="country" id="fourthRadio" />
          <label htmlFor="fourthRadio" >India</label>
        </div>
      </fieldset>
      <fieldset>
        <legend>Checkboxes</legend>
        <div className="form-checkbox-group">
          <input type="checkbox" value="Nigeria" id="firstCheck" className="form-checkbox"/>
          <label htmlFor="firstCheck" className="form-checkbox-label">Nigeria</label>
        </div>
        <div className="form-checkbox-group">
          <input type="checkbox" value="Romania" id="secondCheck" className="form-checkbox"/>
          <label htmlFor="secondCheck" className="form-checkbox-label">Romania</label>
        </div>
        <div className="form-checkbox-group">
          <input type="checkbox"  value="Ireland" id="thirdCheck" className="form-checkbox"/>
          <label htmlFor="thirdCheck" className="form-checkbox-label">Ireland</label>
        </div>
        <div className="form-checkbox-group">
          <input type="checkbox" value="India" id="fourthCheck" className="form-checkbox"/>
          <label htmlFor="fourthCheck" className="form-checkbox-label">India</label>
        </div>
      </fieldset>
    </form>
  )
}