import { Course } from './types';

type Props = { 
  courses: Course[]
}

const Total = ({ courses }: Props) => {
  return (
    <p>
      Number of exercises{" "}
      {courses.reduce((carry, part) => carry + part.exerciseCount, 0)}
    </p>
  )
};

export default Total;