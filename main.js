//Student Enrollment Function
function student(name, age, grade){
  return{
    name: name,
    age: age,
    grade: grade,
    status(){
      console.log("Congratualtions Student Enrolled!!!");
    }
  }
}
const omar = student('Omar Farah', 19, 'Sophmore');
console.log(omar);
omar.status();

const saleh = student('Saleh Farah', 4, 'PreSchool');
console.log(saleh);
saleh.status();