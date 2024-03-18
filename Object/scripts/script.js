function getPeopleInfo() {
    var firstName = prompt("Please Enter first name");
    var lastName = prompt("Please Enter last name ");
    var gender = prompt("Please Enter your Gender");
    var birthYear = parseInt(prompt("Please Enter your birth year"));
    var birthMonth = parseInt(prompt("Please Enter your birth month"));
    var birthDate = parseInt(prompt("Please Enter your birth date"));

    return{
        firstName : firstName,
        lastName : lastName,
        gender : gender,
        birthYear : birthYear,
        birthMonth : birthMonth,
        birthDate : birthDate,
    };
}

var compute = {
monthsAlive:function(birthYear,birthMonth,birthDate){
  var birthDte = new Date(birthYear,birthMonth - 1,birthDate);
  var currentDte = new Date();
  var months = (currentDte.getFullYear() - birthDte.getFullYear()) * 12;
  months -= birthDte.getMonth();
  months += currentDte.getMonth();
  return months <= 0 ? 0 : months;
},

daysAlive:function(birthYear,birthMonth,birthDate){
var birthDte = new Date(birthYear,birthMonth - 1,birthDate);
var currentDte = new Date();
var daysAlv = Math.floor((currentDte - birthDte) / (1000 * 60 * 60 *24) + 1);
return daysAlv <= 0 ? 0 : daysAlv;

}
};

var people = getPeopleInfo();
var months = compute.monthsAlive(people.birthYear, people.birthMonth, people.birthDate);
var days = compute.daysAlive(people.birthYear, people.birthMonth, people.birthDate);

console.log("Months alive : ", months);
console.log("Days Alive : ", days);


