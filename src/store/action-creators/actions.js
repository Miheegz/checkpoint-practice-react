const SET_MAMMAL = 'SET_MAMMAL';
const SET_BIRD = 'SET_BIRD';
const SET_FISH = 'SET_FISH';

export function setMammal(mammal) {
  return {
type: SET_MAMMAL,
animal : mammal
  }
}

export function setBird(bird) {
  return {
type: SET_BIRD,
animal : bird
  }
}

export function setFish(fish) {
  return {
type: SET_FISH,
animal : fish
  }
}
