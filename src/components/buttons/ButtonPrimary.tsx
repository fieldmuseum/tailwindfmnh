import Link from "next/link";
import localFont from "next/font/local";

export default function ButtonPrimary() {
  return (
    <button
      className="button mt-5 bg-fieldBlue 
                 text-lg text-fieldGrayLighter 
                 font-graphikBold tracking-wider 
                 relative text-white group
                 "
    >
      <span className="relative z-10 block px-5 py-3 transition duration-300 ease-in-out ">
        <Link href={"#"}>Primary Button</Link>
      </span>
      <span className="absolute bottom-0 left-0 right-0 h-0 transition-all duration-300 origin-bottom scale-x-0 transform bg-blue-700 group-hover:h-full group-hover:scale-x-100"></span>
    </button>
  );
}
