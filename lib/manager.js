const Employee = require("./employee");

class Manager extends Employee{
    constructor(name, id, email, officeNumber) {
        super(name, id, email)
        this.officeNumber = parseInt(officeNumber)
}
    getJob() {
        return 'Manager';
    }
    getOfficeNumber() {
        return this.officeNumber
    }
};
module.exports = Manager;