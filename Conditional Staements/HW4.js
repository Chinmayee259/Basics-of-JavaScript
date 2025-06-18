/*Write a code which can give grades of students according to their score
80-100 : A
70-89 : B
60-69 : C
50-59 : D
0-49 : E */

let score = prompt("Enter your score : ");
if(score >= 80 && score <= 100){
    console.log("Geade : A");
}
else if(score >= 70 && score <= 89){
    console.log("Grade : B");
}
else if(score >= 60 && score <= 69){
    console.log("Grade : C");
}
else if(score >= 50 && score <= 59){
    console.log("Grade : D");
}
else{
    console.log("Grade : E");
}
