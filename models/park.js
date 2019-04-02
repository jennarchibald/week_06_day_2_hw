const Park = function(name, price){
  this.name = name;
  this.ticketPrice = price;
  this.dinosaurs = [];
};

Park.prototype.addDinosaur = function(dino){
  this.dinosaurs.push(dino)
};

Park.prototype.removeDinosaur = function(dino){
  this.dinosaurs.splice(this.dinosaurs.indexOf(dino), 1)
};

module.exports = Park;
