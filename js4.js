var victimAmount = prompt("How many disater victims do you wish to enter?")

victimName = []
for(i=0; i < victimAmount; i++){
victimName.push(prompt("Please enter victim's name."))
}
console.log(victimName)

victimNum = []
for(i=0; i < victimAmount; i++){
victimNum.push(prompt("Please enter victim's number."))
}
console.log(victimNum)

victimStreet = []
for(i=0; i < victimAmount; i++){
victimStreet.push(prompt("Please enter victim's street."))
}
console.log(victimStreet)

// Volunteer Info 

var volunteerAmount = prompt("How many volunteers do you wish to enter?")


volunteerName = []
for(i=0; i < volunteerAmount; i++){
	volunteerName.push(prompt("Please enter volunteer's name."))
}
console.log(volunteerName)

volunteerNum = []
for(i=0; i < volunteerAmount; i++){
	volunteerNum.push(prompt("Please enter volunteer's number."))
}
console.log(volunteerNum)

volunteerStreet = []
for(i=0; i < volunteerAmount; i++){
	volunteerStreet.push(prompt("Please enter volunteer's street."))
}
console.log(volunteerStreet)


alert("Victim's Info:" + "\n" + 
	"Victim's Name " + victimName + 
	"\n" + "Victim's Number "  + victimNum + 
	"\n" + "Victim's Street "  + victimStreet + "\n" +
	" and Volunteer's Info: " + "\n" +
	"Volunteer's Name " + volunteerName + "\n" +
	"Volunteer's Number " + volunteerNum + "\n" +
	"Volunteer's Steet " + volunteerStreet)

