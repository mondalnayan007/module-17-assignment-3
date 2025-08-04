/** Problem 06 :  (Current Salary )  */
var experience = 40;
var startingSalary = 30000;
//write your code here

 var newSalary = startingSalary;

for(var years = 1 ; years <= experience; years++){
     newSalary =newSalary + newSalary * 5/100;

}
 console.log(newSalary.toFixed(2));
   
