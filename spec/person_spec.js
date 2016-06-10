describe("Person", function(){

  beforeEach(function() {
    person = new Person({distance: 2222, gender: 'male', age: 21});
    person.calculate_VO2_max();
  });

  it("should have a distance of 2222", function() {
    expect(person.distance).toEqual(2222);
  });

  it("should have 'male' as a gender", function() {
    expect(person.gender).toEqual('male');
  });

  it("should have an age of 21", function() {
    expect(person.age).toEqual(21);
  });
});
