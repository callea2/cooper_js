describe("V02 Max", function(){

  beforeEach(function() {
    person = new Person({distance: 2222, gender: 'male', age: 21});
    person.calculate_VO2_max();
  });

  it("should calculate VO2 max", function() {
    expect(person.VO2Value).toEqual(38.39);
  });

  it("should display specific VO2 message based on gender (female)", function() {
    person = new Person({distance: 2222, gender: 'female', age: 21});
    calculator.VO2_max(person);
    expect(person.VO2Message).toEqual("Average")
  });

  it("should display specific VO2 message based on gender (male)", function() {
    expect(person.VO2Message).toEqual("Below average")
  });

  it("should display specific VO2 message based on age", function() {
    person = new Person({distance: 2222, gender: 'male', age: 65});
    calculator.VO2_max(person);
    expect(person.VO2Message).toEqual("Very good")
  });
});

describe("Cooper Assesment", function(){

  beforeEach(function() {
    person = new Person({distance: 2222, gender: 'male', age: 21});
    person.give_assesment();
  });

  it("should give an assesment", function() {
    expect(person.AssMessage).toEqual("Average");
  });

  it("should give specific assesment message based on gender (female)", function() {
    person = new Person({distance: 2701, gender: 'female', age: 21});
    calculator.Assesment(person);
    expect(person.AssMessage).toEqual("Excellent")
  });

  it("should give specific assesment message based on age", function() {
    person = new Person({distance: 2401, gender: 'male', age: 78});
    calculator.Assesment(person);
    expect(person.AssMessage).toEqual("Excellent")
  });

});
