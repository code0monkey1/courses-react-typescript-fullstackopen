import React from 'react';

type Course = {
  name: string;
  exerciseCount: number;
  description?: string;
  groupProjectCount?: number;
  backgroundMaterial?: string;
};

interface CourseProps{
  courses: Course[];
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