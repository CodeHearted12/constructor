//###################################################################
//        __
//   ____/ /___  ____ ______
//  / __  / __ \/ __ `/ ___/
// / /_/ / /_/ / /_/ (__  )
// \__,_/\____/\__, /____/
//            /____/

// Dog Constructor & Prototype
function Dog (status, color, hungry, owner) {
  this.status = status;
  this.color = color;
  this.hungry = hungry;
  this.owner = owner;
}

// Instances of Dog
// Needed: sadie, moonshine, atticus

let sadie = new Dog('normal', 'brown', false)
let moonshine = new Dog('normal', 'brown', true)
let atticus = new Dog('normal', 'grey', true)


//     __
//    / /_  __  ______ ___  ____ _____  _____
//   / __ \/ / / / __ `__ \/ __ `/ __ \/ ___/
//  / / / / /_/ / / / / / / /_/ / / / (__  )
// /_/ /_/\__,_/_/ /_/ /_/\__,_/_/ /_/____/

// Human Constructor & Prototype
function Human (cool) {
  this.cool = cool;

}
Human.prototype.feed = function (dog) {
  return dog.status = 'false';
}

Human.prototype.pet = function (dog) {
  return dog.status = 'happy';
}
// Instances of Human
// Needed: mason, julia

let julia = new Human(true)

let mason = new Human(false)
