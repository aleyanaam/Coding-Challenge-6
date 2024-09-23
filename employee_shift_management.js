//Task 1 
const employees = [

    { name: 'John', shifts: [{ day: 'Monday', hours: 8 }, { day: 'Wednesday', hours: 6 }] },
    
    { name: 'Sara', shifts: [{ day: 'Tuesday', hours: 5 }, { day: 'Thursday', hours: 7 }] },
    
    { name: 'David', shifts: [{ day: 'Monday', hours: 8 }] },
    
    { name: 'Emily', shifts: [{ day: 'Friday', hours: 8 }] }
    
    ];

//Task 2 
function displayEmployeeShifts(employees) {
    //Map iterates over the employee array
    return employees.map(employee => {
    // Checks to see if an employee has no shifts
        if (employee.shifts.length === 0) {
            return `${employee.name} has no shifts.`;
        } else {
            //If an employee has a shift it is listed with the day and hours as well as the employee name
            let shiftInfo = employee.shifts.map(shift => `${shift.day}: ${shift.hours} hours`);
            return (`${employee.name} has the following shifts: ${shiftInfo}`);
        }
    }) 
}

console.log(displayEmployeeShifts(employees));

//Task 4
function calculateTotalHours(employeeName){
    // Finds the employee in the array
    let employee = employees.find(person => person.name === employeeName)
    // Checks if the employee has a shift
    if (employee && employee.shifts){
        // Calculates the total hours for the employee
        return employee.shifts.reduce((total,shift) => total + shift.hours)
    }else{
        //If the employee does not have a shift 0 is returned
        return 0
    }
    

}
console.log(`Total hours for John: ${calculateTotalHours('John')}`) // Outputs the results to test functionality

//Task 5
function listAvailableEmployees(day){
    //Filters employees to find the ones who do not have shifts on a particular day
    let availableEmployees = employees.filter(employee => {
        return !employee.shifts.some(shift => shift.day === day)
    })
    // Checks to see if any employees are available
    if (availableEmployees.length > 0 ) {{
        let names = availableEmployees.map(employee => employee.name)
        console.log (`On ${day}, the following employees are available ${employees.name}`)
    }} else{
        //Output message if no employees are available
        console.log(`On ${day}, no employees are available`)
    }

}
listAvailableEmployees('Monday')