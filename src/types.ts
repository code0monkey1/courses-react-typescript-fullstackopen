interface ParentCourse{
  name: string,
  exerciseCount: number
}

interface BasicCourse extends ParentCourse{
  description: string
  kind:'basic'
}

interface GroupCourse extends ParentCourse{
  groupProjectCount: number,
  kind:'group'
}

interface BackgroundCourse extends ParentCourse{
  description: string,
  backgroundMaterial:string,
  kind:"background"
}

interface SpecialCourse extends ParentCourse{

  description:string,
  requirements:string[],
  kind:"special"
}

export type Course = GroupCourse | BackgroundCourse | SpecialCourse | BasicCourse
