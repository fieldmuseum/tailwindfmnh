export default function RadioGroup() {
  return (
    <fieldset>
    <legend>Radio Labels</legend>
    <div className="form-radio-group">
      <input type="radio" className="form-radio-test" name="country" id="firstRadio"/>
      <label htmlFor="firstRadio" className="form-radio-label-test">Nigeria</label>
    </div>
    <div className="form-radio-group">
      <input type="radio" className="form-radio-test" name="country" id="secondRadio" />
      <label htmlFor="secondRadio" className="form-radio-label-test">Romania</label>
    </div>
    <div className="form-radio-group">
      <input type="radio" className="form-radio-test" name="country" id="thirdRadio" />
      <label htmlFor="thirdRadio" className="form-radio-label-test">Ireland</label>
    </div>
    <div className="form-radio-group">
      <input type="radio" className="form-radio-test" name="country" id="fourthRadio" />
      <label htmlFor="fourthRadio" className="form-radio-label-test">India</label>
    </div>
  </fieldset>
  )
}
