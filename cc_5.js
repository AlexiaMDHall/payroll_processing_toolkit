//  step 2 create an array
let employees = [
{name: "Sarah", hourlyRate: 26.50, hoursWorked: 50 },
{name: "Alicia", hourlyRate: 34.50, hoursWorked: 80},
{name: "Tim", hourlyRate: 30, hoursWorked: 65},
{name: "Andrue", hourlyRate: 25, hoursWorked: 70},
{name: "Kerry", hourlyRate: 33, hoursWorked: 40}
];

 const regularHoursLimit = 40
 const overtimePayMultiplier = 1.5

 // step 3 write a function
function calculatedBasePay (Rate, hours) {
    if (hours <= 40){
        return Rate * hours;
}
}

function calculateOvertimePay (Rate, hours) { 
    if (hours > 40)
        return 1.5 * 40;
}
function calculateTaxes(grossPay){
    const taxRate = .15;
    const taxAmount = grosspay * taxRate;
    const netPay = grossPay - taxAmount;
    return netPay;
}
function processPayroll (employees){
    const employee = {
        name: basePay, overtimePay, grossPay, netPay
    }
}