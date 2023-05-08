
// import { CoursePart } from './types';
import { assertNever } from "./utils";

import { Course } from "./types";

type Props = { 
  courses: Course[]
}


const Content = ({courses}:Props) => {

      return (

        <ul>
          {courses.map(course =><Part key={course.name} course={course} />)}
        </ul>
      )
};

const Part =({course}:{course:Course})=> {
      
      let description=""

     switch (course.kind) {

            case "basic":
              description = course.description;
              break;
            case "background":
               description= course.description +" "+ course.backgroundMaterial;
               break;
            case "group":
               description = course.groupProjectCount+""
               break;
            case "special":
               description = course.requirements.join("-")
               break;   
            default :
              return  assertNever(course)
           }

    return <li>{description}</li>
}

export default Content;