import { CoursePart } from './types';

type Props = { 
  parts: CoursePart[]
}

const Total = ({ parts }: Props) => {
  return (
    <p>
      Number of exercises{" "}
      {parts.reduce((carry, part) => carry + part.exerciseCount, 0)}
    </p>
  )
};

export default Total;