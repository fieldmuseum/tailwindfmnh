import React from 'react'

export default function OrderedList (){
    return(
        <ol className={`list-base list-numbered font-lyonReg text-fieldGrayDark counted-list`}>
            <li>Roman Period mummy from Egypt</li>
            <li>Etruscan vase made in the Greek style</li>
            <li>The crowning of Greek pharaohs</li>
            <li>Etruscan gold jewelry</li>
            <li>Bronze bathtub from Pompeii, made in Italy by the Pompeiiens</li>
        </ol>
    )
}