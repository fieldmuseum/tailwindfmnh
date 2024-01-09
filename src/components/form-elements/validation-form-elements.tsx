export default function ValidationFormElements(){
  return (
    <form className="w-full">
      <div className="form-group">
        <label htmlFor="successName">Your Name</label>
        <input type="text" name="" id="successName" className="form-input"/>
      </div>
      <div className="form-group">
        <label htmlFor="errorEmail">Your Email</label>
        <input type="email" name="" id="errorEmail" className="form-input"/>
      </div>
    </form>
  )
}