function CourseList({ courses }) {
  return (
    <>
      <h2>Available Courses</h2>

      {
        courses.map((course, index) => (
          <p key={index}>
            📘 {course}
          </p>
        ))
      }
    </>
  );
}

export default CourseList;