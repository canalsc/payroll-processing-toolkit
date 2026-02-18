
//Array of 3 employees
let employees = [ 
    { 
        name: "Hank Green", 
        hourlyRate:  20, 
        hoursWorked: 70
    }, 
    { 
        name: "Jane Doe", 
        hourlyRate: 19,
        hoursWorked: 60
    }, 
    { 
        name: "Bill Nye", 
        hourlyRate: 22, 
        hoursWorked: 40
    }
]; 

//Function that returns pay for up to 40 hours 
function calculateBasePay(rate, hours) { 
    if (hours > 40) {
        hours = 40
    }
    return rate * hours
};

function calculateOverTimePay(rate, hours) { 
    if (hours > 40) {
        rate * 1.5;
    }
    return rate * hours
}; 

function calculateTaxes(grossPay) { 
    return (hours * rate) * 0.85;
}; 

function processPayroll(employees) { 
    console.log(`Name: ${employees.name} | Base Pay: ${calculateBasePay} | Over Time Pay: ${calculateOverTimePay} | Gross Pay ${} | Net Pay ${calculateTaxes}`)
}; 

processPayroll(employees);