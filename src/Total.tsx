import React from 'react'

interface ContentProps{
   courses:Content[]
}
type Content={
 name: string,
 exerciseCount: number
}

const Total = ({courses}:ContentProps) => {
  return (
    <div>{
       <p>
        Number of exercises{" "}
        {courses.reduce((carry, part) => carry + part.exerciseCount,0)}
      </p>
      }</div>
  )
}

export default Total;