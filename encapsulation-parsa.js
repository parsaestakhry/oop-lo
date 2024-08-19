let employee = {
    baseSalary : 89000,
    overtime : 20,
    rate: 12,
    getWage: function () {
        return this.baseSalary + (this.overtime * this.rate)
    }
}

employee.getWage()