// Function to update student grades by city
export default function updateStudentGradeByCity(students, city, newGrades) {
  return students
    .filter(student => student.location === city)
    .map(student => {
      const Grade1 = newGrades.find(grade => grade.studentId === student.id);
      return {
        ...student,
        grade: Grade1 ? Grade1.grade : 'N/A',
      };
    });
}

