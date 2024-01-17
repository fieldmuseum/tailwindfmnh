export default function ValidationFormElements(){
  return (
    <form className="w-full">
      <div className="form-group flex flex-col">
        <label htmlFor="successName">Your Name</label>
        <input type="text" name="" id="successName" className="form-input-valid is-valid before:bg-transparent before:origin-center before:rotate-39 before:w-[10px] before:h-[6px] before:border-l-[1px] before:border-successGreen before:border-b-[1px] before:border-b-successGreen before:content=['*'] before:absolute top-[45%] right-[-2%]" required/>
      </div>
      <div className="form-group">
        <p className="text-warningRed text-sm">Please enter a valid email address</p>
        <label htmlFor="errorEmail">Your Email</label>
        <input type="email" name="" id="errorEmail" className="form-input-invalid is-invalid" required/>
      </div>
    </form>
  )
}