import React from "react";

export default function TitledList() {
  return (
    <dl
      className={` def-list md:flex md:flex-wrap md:columns-2 font-graphik text-fieldGrayDarker`}
    >
      <div>
        <dt>CHICAGO RESIDENTS</dt>
        <dd>
          Chicago residents can save $5 or more on the price of their ticket.
        </dd>
      </div>
      <div>
        <dt>MUSEUMS FOR ALL</dt>
        <dd>
          Illinois families with EBT(Link) or WIC Cards receive $3 General
          Admission for up to six people.
        </dd>
      </div>
      <div>
        <dt>ILLINOIS TEACHERS</dt>
        <dd>
          Illinois teachers (pre-K through 12) enjoy complementary General
          Admission.
        </dd>
      </div>
    </dl>
  );
}
