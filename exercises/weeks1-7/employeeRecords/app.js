const employees = ['Stephen', 'Richard', 'Grant', 'Marco']

function Employee(name, jobTitle, salary, status = 'Full Time') {
    this.name = name
    this.jobTitle = jobTitle
    this.salary = salary
    this.status = status
    this.printEmployeeForm = function() {
        console.log(`Name: ${name} Job Title: ${jobTitle} Salary ${salary} Status: ${status}`)
    }
}
const employeeArr = []
const employeeOne = new Employee(employees[0], 'CFO', '$500K')
const employeeTwo = new Employee(employees[1], 'Senior Sales Rep', '$250K')
const employeeThree = new Employee(employees[2], 'Junior Sales Rep', '$100K', status = 'Contract')
const employeeFour = new Employee(employees[3], 'Junior Sales Rep', '$100K', status = 'Contract')

employeeArr.push(employeeOne, employeeTwo, employeeThree, employeeFour)

employeeOne.printEmployeeForm()
employeeTwo.printEmployeeForm()
employeeThree.printEmployeeForm()
employeeFour.printEmployeeForm()

console.log(employeeArr)