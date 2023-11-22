import React from 'react'

export default function TitledList () {
    return(
        <dl className={` def-list md:flex md:flex-wrap md:columns-2 font-graphik text-fieldGrayDarker`}>
                    <div>
                        <dt>
                            <h6>CHICAGO RESIDENTS</h6>
                        </dt>   
                        <dd>Chicago residents can save $5 or more on the price of their ticket.</dd>
                    </div>
                    <div>
                        <dt>
                            <h6>MUSEUMS FOR ALL</h6>
                        </dt>
                        <dd>Illinois families with EBT(Link) or WIC Cards receive $3 General Admission for up to six people.</dd>
                    </div>
                    <div>
                        <dt>
                            <h6>ILLINOIS TEACHERS</h6>
                        </dt>
                        <dd>Illinois teachers (pre-K through 12) enjoy complementary General Admission.</dd>
                    </div>
        </dl>
    )
}