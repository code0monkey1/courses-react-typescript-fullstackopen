import React from 'react';
import { CoursePart } from './types';

interface CourseProps{
  courses: CoursePart[];
}

const Content = (props: CourseProps) => {
  return (
    <>
      {props.courses.map((c) => (
        <li key={c.name}>
          {c.name} {c.exerciseCount}
        </li>
      ))}
    </>
  );
};

export default Content;