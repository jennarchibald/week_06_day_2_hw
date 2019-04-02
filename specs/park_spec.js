const assert = require('assert');
const Park = require('../models/park.js');
const Dinosaur = require('../models/dinosaur.js');

describe('Park', function() {

  let park;
  let dino1;
  let dino2;
  let dino3;

  beforeEach(function () {

    park = new Park("Jurassic Park", 20)
    dino1 = new Dinosaur('t-rex', 'carnivore', 50);
    dino2 = new Dinosaur('brontosaurus', 'herbivore', 5);
    dino3 = new Dinosaur('pteradactyl', 'carnivore', 10);

  })

  it('should have a name', function(){

    const actual = park.name

    assert.strictEqual(actual, "Jurassic Park")
  });

  it('should have a ticket price', function(){

    const actual = park.ticketPrice

    assert.strictEqual(actual, 20)
  });

  it('should have a collection of dinosaurs', function(){

    const actual = park.dinosaurs

    assert.deepStrictEqual(actual, [])
  });

  it('should be able to add a dinosaur to its collection', function(){

    park.addDinosaur(dino1)
    park.addDinosaur(dino2)
    const actual = park.dinosaurs

    assert.deepStrictEqual(actual, [dino1, dino2])
  });

  it('should be able to remove a dinosaur from its collection', function(){


    park.addDinosaur(dino1)
    park.addDinosaur(dino2)
    park.addDinosaur(dino3)

    park.removeDinosaur(dino2)
    const actual = park.dinosaurs

    assert.deepStrictEqual(actual, [dino1, dino3])

  });

  it('should be able to find the dinosaur that attracts the most visitors', function(){


    park.addDinosaur(dino1)
    park.addDinosaur(dino2)
    park.addDinosaur(dino3)

    const actual = park.mostPopularDinosaur()

    assert.deepStrictEqual(actual, dino1)
  });

  it('should be able to find all dinosaurs of a particular species', function(){


    park.addDinosaur(dino1)
    park.addDinosaur(dino2)
    park.addDinosaur(dino3)

    const actual = park.dinosaursOfSpecies('pteradactyl')

    assert.deepStrictEqual(actual, [dino3])
  });

  it('should be able to remove all dinosaurs of a particular species', function(){

    park.addDinosaur(dino1)
    park.addDinosaur(dino2)
    park.addDinosaur(dino3)

    park.removeDinosaursOfSpecies('t-rex')

    const actual = park.dinosaurs

    assert .deepStrictEqual(actual, [dino2, dino3])

  });

  it('should be able to calculate the total number of visitors per day', function(){

    park.addDinosaur(dino1)
    park.addDinosaur(dino2)
    park.addDinosaur(dino3)

    const actual = park.totalDailyVisitors()

    assert.strictEqual(actual, 65)

  });

  it('should be able to calculate the total number of visitors per year - open 365 days', function(){
    park.addDinosaur(dino1)
    park.addDinosaur(dino2)
    park.addDinosaur(dino3)

    const actual = park.totalYearlyVisitors()

    assert.strictEqual(actual, 23725)
  });


  it('should be able to calculate the total revenue from ticket sales for one year', function(){

    park.addDinosaur(dino1)
    park.addDinosaur(dino2)
    park.addDinosaur(dino3)

    const actual = park.totalYearlyTicketSales()

    assert.strictEqual(actual, 474500)


  });

  it('should be able to provide an object containing each of the diet types and the number of dinosaurs in the park of that diet type', function(){

    park.addDinosaur(dino1)
    park.addDinosaur(dino2)
    park.addDinosaur(dino3)

    const actual = park.dietTypes()

    assert.deepStrictEqual(actual, {'carnivore': 2, 'herbivore': 1})
  });

});
