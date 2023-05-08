
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
      
      let details=null

     switch (course.kind) {

            case "basic":
              details=<>
                <i>Description : {course.description}</i>
              </>
              break;
            case "background":
               details=<>
                <i>Description : {course.description}</i>
                <p>Background Material : {course.backgroundMaterial}</p>
               </>
               break;
            case "group":
               details=<>
                 <p>Group Project Count: {course.groupProjectCount}</p>
               </>  
               break;
            case "special":
               details = <>
                  <i>Description : {course.description}</i>
                  <ul>Requirements: {course.requirements.join(", ")} </ul> 
               </>
               break;   
            default :
              return  assertNever(course)
           }

    return <li>
       <h2>Name :{course.name}</h2>
       <h3>{details}</h3>
       <h4>Exercise Count:{course.exerciseCount}</h4>
       <hr/>
      </li>
}

export default Content;