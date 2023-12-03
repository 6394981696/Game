function Vehicle(brand, model, speed, fuelType) {
    this.brand = brand;
    this.model = model;
    this.speed = speed;
    this.fuelType = fuelType;
  }
  
  Vehicle.prototype.accelerate = function() {
    this.speed += 10;
    console.log("your vehicle speed is", this.speed)
  };
  
  Vehicle.prototype.brake = function() {
    this.speed -=5;
  };
  
  Vehicle.prototype.refuel = function() {
    console.log("Refueling the vehicle.");
  };
  
  function Car(brand, model, speed, fuelType, numberOfWheels) {
    Vehicle.call(this, brand, model, speed, fuelType);
    this.numberOfWheels = numberOfWheels;
  }
  
  Car.prototype = Object.create(Vehicle.prototype);
  Car.prototype.constructor = Car;
  
  Car.prototype.honk = function() {
    console.log("Honk! Honk!");
  };
  
  function Airplane(brand, model, speed, fuelType, numberOfEngines, hasLandingGear ) {
    Vehicle.call(this, brand, model, speed, fuelType);
    this.numberOfEngines = numberOfEngines;
    this.hasLandingGear = hasLandingGear;
  }
  
  Airplane.prototype = Object.create(Vehicle.prototype);
  Airplane.prototype.constructor = Airplane;
  
  Airplane.prototype.takeOff = function() {
    console.log("The airplane is taking off.");
  };
  
  Car = new Car("Toyota", "Camry", 0, "gasoline", 4);
  Airplane = new Airplane("Boeing", "747", 0, "jet fuel", 4, true);
  
  Car.accelerate();
  Car.brake();
  Car.refuel();
  Car.honk();
  
  Airplane.accelerate();
  Airplane.brake();
  Airplane.refuel();
  Airplane.takeOff();