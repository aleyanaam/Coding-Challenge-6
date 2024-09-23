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