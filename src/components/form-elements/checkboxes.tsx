export default function Checkboxes() {
  return (
    <fieldset>
    <legend>Checkboxes</legend>
    <div className="form-checkbox-group">
      <input type="checkbox" value="Nigeria" id="firstCheck" className="form-checkbox-test" />
      <label htmlFor="firstCheck" className="form-checkbox-label-test">Nigeria</label>
    </div>
    <div className="form-checkbox-group">
      <input type="checkbox" value="Romania" id="secondCheck" className="form-checkbox-test" />
      <label htmlFor="secondCheck" className="form-checkbox-label-test">Romania</label>
    </div>
    <div className="form-checkbox-group">
      <input type="checkbox"  value="Ireland" id="thirdCheck" className="form-checkbox-test" />
      <label htmlFor="thirdCheck" className="form-checkbox-label-test">Ireland</label>
    </div>
    <div className="form-checkbox-group">
      <input type="checkbox" value="India" id="fourthCheck" className="form-checkbox-test" />
      <label htmlFor="fourthCheck" className="form-checkbox-label-test">India</label>
    </div>
  </fieldset>
  )
}
