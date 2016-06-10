function Person(attr) {
  this.distance = attr.distance;
  this.gender = attr.gender;
  this.age = attr.age;
};

Person.prototype.calculate_VO2_max = function() {
  calculator = new CPRCalculator();
  calculator.VO2_max(this);
};

Person.prototype.give_assesment = function() {
  calculator = new CPRCalculator();
  calculator.Assesment(this);
};
