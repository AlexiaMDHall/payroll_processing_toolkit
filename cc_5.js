//  step 2 create an array
let employees = [
{name: "Sarah", hourlyRate: 26.50, hoursWorked: 50 },
{name: "Alicia", hourlyRate: 34.50, hoursWorked: 80},
{name: "Tim", hourlyRate: 30, hoursWorked: 65},
{name: "Andrue", hourlyRate: 25, hoursWorked: 70},
{name: "Kerry", hourlyRate: 33, hoursWorked: 40}
];

 // step 3 write a function
function calculatedBasePay (rate, hours) {
        return rate * hours;
}

function calculateOvertimePay (rate, hours ) { 
    let overtimeHours = hours - 40;
        return overtimeHours * rate * 1.5 ;
};

let tax = .15;
function calculateTaxes(grossPay){
    return grossPay * (1- tax);
};

function processPayroll (employee){
        let basePay = calculatedBasePay(employee.hourlyRate, employee.hoursWorked, 40);
        let overtimePay = 0;
        let grossPay = basePay + overtimePay
        let netPay = calculateTaxes(grossPay);

        if (employee.hoursWorked > 40) {
            overtimePay = calculateOvertimePay(employee.hourlyRate, employee. hoursWorked);
        }
        return { 

            name: employee.name,
            basepay: basePay,
            overtimePay: overtimePay,
            grossPay: grossPay,
            netPay: netPay
        };
    };

    // upload to console
    for (i = 0; i < employees.length; i++) {
        let payrollInformation = processPayroll(employees[i]);
        console.log(`Name: ${payrollInformation.name}` );
        console.log(`Base Pay: $${payrollInformation.basepay.toFixed(2)}`);
        console.log(`Overtime Pay:$${payrollInformation.overtimePay.toFixed(2)}`);
        console.log(`Gross Pay: $${payrollInformation.grossPay.toFixed(2)}`);
        console.log(`Net Pay: $${payrollInformation.netPay.toFixed(2)}`);
        console.log (`--------------------------------------`);
    }
