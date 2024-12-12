import { Lexend_Zetta, Syncopate } from 'next/font/google'
import Link from 'next/link'
import React from 'react'
const syncopate = Syncopate({
    weight: "700",
    subsets:['latin']
  })
  const lx = Lexend_Zetta({
    weight:"400",
    subsets:['latin']
  })
  
function Brand() {
  return (
    <div className="text-center">
    <Link href="/"><h2 className={`text-xl ${syncopate.className} font-bold`} >FastDl</h2></Link>
    <p className={`text-[10px] ${lx.className} `}>GAMESKULL</p>
  </div>
  )
}

export default Brand