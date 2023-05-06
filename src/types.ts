 interface CoursePartBase {
        name: string;
        exerciseCount: number;
  }

 interface CoursePartBasic extends CoursePartBase {
   description: string;
   kind:'basic'
}
interface CoursePartGroup extends CoursePartBase {
  groupProjectCount: number;
  kind:'group'
}

 interface CoursePartBackground extends CoursePartBase {
  description: string;
  backgroundMaterial: string;
  kind:'background'
}

// creating the discriminated union

export type CoursePart = CoursePartBackground| CoursePartGroup | CoursePartBasic