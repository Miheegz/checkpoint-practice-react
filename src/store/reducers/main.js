
import {setMammal, setBird, setFish} from '../action-creators/actions'

const initialState = {
	selectedMammal : "Tiger",
	selectedBird : "Eagle",
	selectedFish : "Seahorse",
	mammals: ['Tiger', 'Panda', 'Pig'],
	birds: ['Eagle', 'Flamingo', 'Penguin'],
	fish: [ 'Seahorse', 'Octopus', 'Stingray'],
};

// make sure you understand the parameters here!
	// with any reducer we expect 2 arguments
	// we are able to give a default value to a parameter in the way seen below
export default (state = initialState, action) => {
	switch (action.type) {
		case 'SET_MAMMAL': {
			return {
				selectedMammal: action.animal,
				selectedBird: initialState.selectedBird,
				selectedFish: initialState.selectedFish,
				mammals: initialState.mammals,
				birds: initialState.birds,
				fish: initialState.fish
			}
		}
		case 'SET_BIRD': {
			return {
				selectedMammal: initialState.selectedMammal,
				selectedBird: action.animal,
				selectedFish: initialState.selectedFish,
				mammals: initialState.mammals,
				birds: initialState.birds,
				fish: initialState.fish
			}
		}
		case 'SET_FISH': {
			return {
				selectedMammal: initialState.selectedMammal,
				selectedBird: initialState.selectedBird,
				selectedFish: action.animal,
				mammals: initialState.mammals,
				birds: initialState.birds,
				fish: initialState.fish
			}
		}
		default:
			return initialState;
	}

	/*
	So this reducer is actually not written correctly in the 'redux pattern' of immutable state.
	The initialState object at the very top of this file is supposed to hold the initial state
	that will be on your store. That is correct. But in the reducer below that, each switch
	statement is only supposed to be responsible for a single line of state. SET_MAMMAL, for
	example, is only responsible for selectedMammal. SET_BIRD is only responsible for selectedBird
	and so on...But in each swtich statement you are returning a whole new copy of the state object
	with the relevant field (mammal, bird, or fish) overwritten with the new animal.

	On a high level, the reducer is basically supposed to respect immutability of state. That means
	it doesn't directly mutate what is on state. It returns a new object for the updated state when it
	changes. How do we do this? Normally, with Object.assign(). Object.assign will build a new object
	with the contents of another object COPIED in (so that we aren't mutating original).

	Another broad comment I have is just simply about writing DRY code (meaning don't repeat yourself).
	If you find yourself writing those same lines over and over, you are probably writing it wrong.

	I would try to look into a better way to write this reducer and then come back to me tomorrow for
	learning team lunch with the correct reducer pattern. It's an important part to understand for the
	senior checkpoint, so I wanna make sure you understand it. Let me know if you have any questions.
	I just think this is easier to work through in person, rather than through code comments.
	*/

};
