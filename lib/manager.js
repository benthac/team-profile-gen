const Employee = require("./employee");

class Manager extends Employee{
    constructor(name, id, email, officeNumber) {
        super(name, id, email)
        this.officeNumber = parseInt(officeNumber)
}
    getRole() {
        return this.roll
    }
};
module.exports = Manager;