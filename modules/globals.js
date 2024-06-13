const globals = {
  cars: [],
  pics: [],
  
  getCarById(uid){
    return globals.cars.find((car) => car.vehicleID === uid);
  },
  
  getCarByLocation(location){
    return globals.cars.filter((car) => car.city === location);
  },
  
  getPicsForCar(uid){
    return globals.pics.filter((pic) => pic.vehicleID === uid);
  }
};