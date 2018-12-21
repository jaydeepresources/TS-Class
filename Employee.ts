class Employee {

    id: number
    name: string
    salary: number

    constructor() {
        console.log('constructor invoked...')
        this.id = 0
        this.name = ''
        this.salary = 0.0
    }

    print() {
        console.log('Id:' + this.id)
        console.log('Name:' + this.name)
        console.log('Salary:' + this.salary)
    }
}

let e1 = new Employee()
e1.id = 1
e1.name = 'John'
e1.salary = 10000.00

let e2 = new Employee()
e2.id = 2
e2.name = 'Adams'
e2.salary = 10220.00

let e3 = new Employee()
e3.id = 3
e3.name = 'Paul'
e3.salary = 16700.00

let employees: Employee[] = [e1, e2, e3]

employees.forEach(employee => {
    employee.print()
});