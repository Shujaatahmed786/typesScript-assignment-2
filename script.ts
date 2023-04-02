abstract class Vehicle {
    protected  make: string;
    protected model: string;
    protected year: number;
    protected rented: boolean;
  
    constructor(make: string, model: string, year: number, rented: boolean = false) {
      this.make = make;
      this.model = model;
      this.year = year;
      this.rented = rented;
    }
  
    getMake(): string {
      return this.make;
    }
  
    getModel(): string {
      return this.model;
    }
  
    getYear(): number {
      return this.year;
    }
  
    isRented(): boolean {
      return this.rented;
    }
  
    setRented(rented: boolean): void {
      this.rented = rented;
    }
  
    abstract rentalRate(): number;
  
    rent(): void {
      if (this.isRented()) {
        console.log(`This ${this.make} ${this.model} is already rented.`);
      } else {
        this.setRented(true);
        console.log(`You have rented this ${this.make} ${this.model}.`);
      }
    }
  
    return(): void {
      if (this.isRented()) {
        this.setRented(false);
        console.log(`You have returned this ${this.make} ${this.model}.`);
      } else {
        console.log(`This ${this.make} ${this.model} was not rented.`);
      }
    }
  }
  
  class Car extends Vehicle {
    private numDoors: number;
  
    constructor(make: string, model: string, year: number, numDoors: number, rented: boolean = false) {
      super(make, model, year, rented);
      this.numDoors = numDoors;
    }
  
    rentalRate(): number {
      return 50;
    }
  
    getNumDoors(): number {
      return this.numDoors;
    }
  }
  
  class Truck extends Vehicle {
    private cargoCapacity: number;
  
    constructor(make: string, model: string, year: number, cargoCapacity: number, rented: boolean = false) {
      super(make, model, year, rented);
      this.cargoCapacity = cargoCapacity;
    }
  
    rentalRate(): number {
      return 100;
    }
  
    getCargoCapacity(): number {
      return this.cargoCapacity;
    }
  }
  
  class Motorcycle extends Vehicle {
    private engineDisplacement: number;
  
    constructor(make: string, model: string, year: number, engineDisplacement: number, rented: boolean = false) {
      super(make, model, year, rented);
      this.engineDisplacement = engineDisplacement;
    }
  
    rentalRate(): number {
      return 25;
    }
     getMake() : string{
      return this.make ;
    }
  
    getEngineDisplacement(): number {
      return this.engineDisplacement;
    }
    
  }
  
  // Testing the system
 
  const car = new Car('Honda', 'Civic', 2022, 4);
  const truck = new Truck('Ford', 'F150', 2021, 8000);
  const motorcycle = new Motorcycle('Harley-Davidson', 'Street 750', 2020, 750);
  
  car.rent();
  truck.rent();
  car.rent();
  car.return();
  truck.return();
  motorcycle.rent();
  console.log(`The rental rate for a car is $${car.rentalRate()} per day.`);
  console.log(`The rental rate for a truck is $${truck.rentalRate()} per day.`);
  console.log(`The rental rate for a motorcycle is $${motorcycle.rentalRate()} per day.`);

 