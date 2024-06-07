import { Link } from "react-router-dom";
import data from "../data.json";

export default function StudentsList() {
  console.log(data);
  const students = data.data.student;
  return (
    <>
      <h1>Students</h1>
      <div>
        {students.map((student) => (
          <h3 key={student.id}>
            <Link to={`/students/${student.id}`}>{student.name}</Link>
          </h3>
        ))}
      </div>
    </>
  );
}
