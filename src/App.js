import "./styles.css";

export default function App() {
  const students = [
    {
      name: "John",
      age: 20,
      major: "Computer Science",
      courses: [
        {
          name: "Calculus",
          credits: 4,
          grade: "A"
        },
        {
          name: "English I",
          credits: 3,
          grade: "B-"
        },
        {
          name: "C Programming",
          credits: 3,
          grade: "A-"
        },
        {
          name: "Data Structures",
          credits: 3,
          grade: "A"
        }
      ]
    },
    {
      name: "Bob",
      age: 19,
      major: "Philosophy",
      courses: [
        {
          name: "Intro to Philosophy",
          credits: 3,
          grade: "A"
        },
        {
          name: "English I",
          credits: 3,
          grade: "B+"
        },
        {
          name: "College Algebra",
          credits: 3,
          grade: "B+"
        },
        {
          name: "Spanish I",
          credits: 3,
          grade: "A-"
        }
      ]
    },
    {
      name: "Mike",
      age: 22,
      major: "English",
      courses: [
        {
          name: "Creative Writing",
          credits: 4,
          grade: "A"
        },
        {
          name: "World Literature",
          credits: 3,
          grade: "B+"
        },
        {
          name: "Macroeconomics",
          credits: 3,
          grade: "B"
        },
        {
          name: "Intro to Psychology",
          credits: 3,
          grade: "A-"
        }
      ]
    }
  ];

  return (
    <div className="App">
      {students.map((student, index) => (
        <div key={index}>
          <p key={index}>
            {student.name} is {student.age} years old, and majoring in
            {student.major}.
          </p>
          <p>{student.name}'s Courses and Grades</p>
          <div>
            {student.courses.map((course, i) => (
              <li key={i}>
                {course.name} ({course.credits} credits), grade {course.grade}
              </li>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
