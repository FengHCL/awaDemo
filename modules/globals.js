const globals = {
  cars: [],
  pics: [],
  
  getCarById(uid){
    return globals.cars.find((car) => car.vehicleID === uid);
  },
  
  getPicsForCar(uid){
    return globals.pics.filter((pic) => pic.vehicleID === uid);
  }
};