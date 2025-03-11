function Person(ssn,firstname,lastname){
    this.ssn = ssn
    this.firstname = firstname
    this.lastname = lastname
}

Person.prototype.getFullName = function () {
    return `${this.firstname} ${this.lastname}`
}