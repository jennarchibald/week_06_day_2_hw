const Park = function(name, price){
  this.name = name;
  this.ticketPrice = price;
  this.dinosaurs = [];
};

Park.prototype.addDinosaur = function(dino){
  this.dinosaurs.push(dino);
};

Park.prototype.removeDinosaur = function(dino){
  this.dinosaurs.splice(this.dinosaurs.indexOf(dino), 1);
};


Park.prototype.mostPopularDinosaur = function(){
  const sorted = this.dinosaurs.sort((a, b) => {
    return b.guestsAttractedPerDay - a.guestsAttractedPerDay
  });
  return sorted[0];
};

Park.prototype.dinosaursOfSpecies = function(species){
  const dinos = []

  for (const dino of this.dinosaurs){
    if (dino.species === species){
      dinos.push(dino)
    }
  };

  return dinos;
};

Park.prototype.removeDinosaursOfSpecies = function(species){
  const dinos = []
  for (const dino of this.dinosaurs) {
    if (dino.species !== species) {
      dinos.push(dino)
    };
  };
  this.dinosaurs = dinos
};

Park.prototype.totalDailyVisitors = function(){
  let total = 0;
  for (const dino of this.dinosaurs){
    total += dino.guestsAttractedPerDay
  }
  return total;
};

Park.prototype.totalYearlyVisitors = function(){
  return this.totalDailyVisitors() * 365;
};

Park.prototype.totalYearlyTicketSales = function(){
  return this.totalYearlyVisitors() * this.ticketPrice;
};

Park.prototype.dietTypes = function(){
  const types = {}
  for (const dino of this.dinosaurs){
    if (types[dino.diet]){
      types[dino.diet]+= 1;
    } else {
      types[dino.diet] = 1;
    };
  };
  return types;
};


module.exports = Park;
