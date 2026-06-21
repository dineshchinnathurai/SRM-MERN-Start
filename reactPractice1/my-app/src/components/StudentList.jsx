function StudentList({ students }) {
  return (
    <>
      <h2>Registered Students</h2>

      {
        students.map((student, index) => (
          <p key={index}>
            ✓ {student}
          </p>
        ))
      }
    </>
  );
}

export default StudentList;