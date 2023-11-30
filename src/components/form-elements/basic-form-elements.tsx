
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
          <input type="radio" name="Nigeria-radio" id="firstRadio"/>
          <label htmlFor="firstRadio" className="form-radio-label">Nigeria</label>
        </div>
        <div className="form-radio-group">
          <input type="radio" name="Romania-radio" id="secondRadio" />
          <label htmlFor="secondRadio" className="form-radio-label">Romania</label>
        </div>
        <div className="form-radio-group">
          <input type="radio" name="Ireland-radio" id="thirdRadio" />
          <label htmlFor="thirdRadio" className="form-radio-label">Ireland</label>
        </div>
        <div className="form-radio-group">
          <input type="radio" name="India-radio" id="fourthRadio" />
          <label htmlFor="fourthRadio" className="form-radio-label">India</label>
        </div>
      </fieldset>
    </form>
  )
}