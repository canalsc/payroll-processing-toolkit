
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

//Base Pay Function
function calculateBasePay(rate, hours) { 
    if (hours > 40) {
        hours = 40
    };
    return rate * hours;
};

//Over Time Function
function calculateOvertimePay(rate, hours) { 
    if (hours <= 40) { 
        return 0
    };
    if (hours > 40) { 
        return (hours - 40) * rate * 1.5
    };
}; 

//Gross Pay function 
function grossPay(rate, hours) { 
     let basePay = calculateBasePay(rate, hours); 
     let overTimePay = calculateOvertimePay(rate, hours); 
     return basePay + overTimePay; 
};  

//Net Pay Function
function calculateTaxes(grossPay) { 
    return grossPay * 0.85;
}; 

//Payroll Process Function
function processPayroll(employees) { 
    return `Name: ${employees.name} | Base Pay: $${calculateBasePay(employees.hourlyRate, employees.hoursWorked)} | Over Time Pay: $${calculateOvertimePay(employees.hourlyRate, employees.hoursWorked)} | Gross Pay $${grossPay(employees.hourlyRate, employees.hoursWorked)} | Net Pay $${calculateTaxes(employees.hourlyRate, employees.hoursWorked)}`
}; 

//Loop and display 
let count = 1; 
for (const employee of employees) { 
    const payroll = processPayroll(employee);
    console.log(`===Pay Roll for Employee ${count}===`)
    console.log(processPayroll(employee)); 
    count++;
};