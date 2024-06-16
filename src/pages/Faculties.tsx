import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

export interface FacultyType {
  photo_url: string,
  name: string
  age : number
  specialization: string 
  qualification: string 
  description: string
  courses: string 
}

const Faculties = () => {
  const [faculties, setFaculties] = useState< FacultyType[] | null>(null);

  useEffect(() => {
    fetch('/faculties.json')
      .then((response) => response.json())
      .then((data) => setFaculties(data))
      .catch((error) => console.error('Error fetching the JSON:', error));
  }, []);

  return (
    <div>
      Hello World
    </div>
  )
}

export default Faculties