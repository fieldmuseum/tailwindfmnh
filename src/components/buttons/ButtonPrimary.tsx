import Link from "next/link";

export default function ButtonPrimary() {
  return (
    <button
      className="button mt-5 px-[16px] py-[8px] bg-fieldBlue font-graphik font-[500] text-lg/[1.8rem] text-fieldGrayLighter tracking-wide relative group">
      <span className="relative z-10 block">
        <Link href={"#"}>Primary Button</Link>
      </span>
      <span className="absolute bottom-0 left-0 right-0 h-0"></span>
    </button>
  );
}
