export default function ValidationFormElements(){
  return (
    <form className="w-full">
      <div className="form-group relative">
        <label htmlFor="successName">Your Name</label>
        <input type="text" name="" id="successName" placeholder="Enter your name" className="form-input-valid is-valid" required/>
        <i className="bg-transparent origin-center rotate-[-45deg] w-[25px] h-[12px] border-l-[2px] border-l-successGreen border-b-[2px] border-b-successGreen before:content=['*'] absolute top-[55%] right-[5%]"></i>
      </div>
      <div className="form-group relative">
        <p className="text-warningRed text-sm">Please enter a valid email address</p>
        <label htmlFor="errorEmail">Your Email</label>
        <input type="email" name="" id="errorEmail" placeholder="Enter your email address" className="form-input-invalid is-invalid" required/>
        <i className="bg-transparent origin-center rotate-[-45deg] w-[2px] h-[20px] border-[1px] border-warningRed before:content=['*'] absolute top-[65%] right-[5%]"></i>
        <i className="bg-transparent origin-center rotate-[45deg] w-[2px] h-[20px] border-[1px] border-warningRed after:content=['*'] absolute top-[65%] right-[5%]"></i>
      </div>
    </form>
  )
}