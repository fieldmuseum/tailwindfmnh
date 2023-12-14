
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
      <div className='mb-6 form-group'>
        <label htmlFor="Message" className='form-label'>Message</label>
        <textarea  id="basicTextarea" name="Message" className='form-textarea' placeholder="Leave a Message" spellCheck="false" cols={30} rows={4}></textarea>
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
    </form>
  )
}