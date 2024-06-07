import { useParams } from "react-router-dom";
import data from "../data.json";

interface Student {
  id: number;
  name: string;
  age: number;
}

export default function StudentsDetail() {
  const { id } = useParams<{ id: string }>();
  const student = data.data.student.find((s: Student) => s.id === Number(id));

  if (!student) {
    return <h1>Student not found</h1>;
  }

  return (
    <>
      <h1>Student Detail</h1>
      <p>ID: {student.id}</p>
      <p>Name: {student.name}</p>
      <p>Age: {student.age}</p>
    </>
  );
}
