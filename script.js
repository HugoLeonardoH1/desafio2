

const students = [
  {name: "Luiz",
    grade1: 8,
    grade2: 10,
  },
   {name: "Juaum",
    grade1: 3,
    grade2: 3,
  },
   {name: "Dunha",
    grade1: 9,
    grade2: 3,
  },
   {name: "Zé",
    grade1: 10,
    grade2: 3,
  }
];


function CalcMedia(grade1,grade2){
 let media = (grade1 + grade2) /2
 return media
}




    for( let student of students){
      mediaFinal = CalcMedia(student.grade1 , student.grade2)
      if (mediaFinal > 7){
        alert(`O aluno ${student.name} foi aprovado com a média ${mediaFinal}`)
      }else{
        alert(`Infelizmente ${student.name} voce não passou, sua média foi ${mediaFinal}`)
      }
      }
