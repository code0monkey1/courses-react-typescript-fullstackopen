

 interface CoursePartBase {
        name: string;
        exerciseCount: number;
  }

export interface CoursePartBasic extends CoursePartBase {
   description: string;
   kind:'basic'
}

export interface CoursePartGroup extends CoursePartBase {
  groupProjectCount: number;
  kind:'group'
}