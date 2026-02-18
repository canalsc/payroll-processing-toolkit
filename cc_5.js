
//Array of 3 employees
let employees = [ 
    { 
        name: "Hank Green", 
        rate:  20, 
        hours: 70
    }, 
    { 
        name: "Jane Doe", 
        rate: 19,
        hours: 60
    }, 
    { 
        name: "Bill Nye", 
        rate: 22, 
        hours: 40
    }
]; 

//Base Pay Function
function calculateBasePay(rate, hours) { 
    if (hours > 40) {
        hours = 40
    };
    return rate * hours;
};

//Over Time Function
function calculateOverTimePay(rate, hours) { 
    if (hours > 40) {
        rate * 1.5
    };
    return calculateBasePay(rate * hours);
}; 

//Gross Pay function
function grossPay(rate, hours) { 
    if (hours > 40) {
        rate * 1.5}
    else { 
        rate * 1
    } 
    return rate * hours
}; 

//Net Pay Function
function calculateTaxes(grossPay) { 
    return grossPay * 0.85;
}; 

//Payroll Process Function
function processPayroll(employees) { 
    console.log(`Name: ${employees.name} | Base Pay: $${calculateBasePay(employees.rate, employees.hours)} | Over Time Pay: $${calculateOverTimePay(employees.rate, employees.hours)} | Gross Pay $${grossPay(employees.rate, employees.hours)} | Net Pay $${calculateTaxes(employees.rate, employees.hours)}`)
}; 

//Loop and display
for (const employee of employees) {
    console.log(processPayroll(employee));
};