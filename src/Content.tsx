
interface ContentProps{
   courses:Content[]
}
type Content={
 name: string,
 exerciseCount: number
}

const Content = ({courses}:ContentProps) => {
  return (<>
   {courses.map( c => <li key={c.name}> {c.name} {c.exerciseCount}</li>)}
   </>
  )
}

export default Content