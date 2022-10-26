// 90 to 100 - A
// 70 to 89 - B
// 50 to 69 - C
// lower then 50 - F

var studentScore = 95
if(studentScore > 90){
    console.log('Student has scored an A')
} else if (studentScore >=70 && studentScore <=89){
    console.log('Student has scored an B')
} else if (studentScore >=50 && studentScore <=69){
    console.log('Student has scored an C')
} else {
    console.log('Student has got an F')
}