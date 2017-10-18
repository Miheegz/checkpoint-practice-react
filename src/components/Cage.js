import React from 'react';

const animalBackground = (animal) => ({ backgroundImage: `url(./src/img/${animal}.gif`, height: '200px' });

// exporting the constructor function (dumb component)
	// using destructuring to name individual variables from the first parameter object (props)
	// {selectedAnimal} is equivalent tofunction Cage(props) { const selectedAnimal = props.selectedAnimal; }
export default function Cage ({ selectedAnimal }) {
			return (
				<div style={{backgroundImage: `url(./src/img/${selectedAnimal}.gif`}}></div>
			);
		}

		/*
		So the animalBackground function that is written on line 3 actually does most all of the work for
		you on this component. I see that you copied part of the body of that function into the <div>
		that you are returning from this component. Rather than taking that logic out of the body,
		you could have just used the whole function instead. The reason none of the images are rendering
		to the screen when you run the code is that you forgot to copy over the height property, so the
		image has no screen height when it gets rendered and won't show up.

		Instead you can just call the animalBackground function within your div:

		return (<div style={animalBackground(selectedAnimal)}></div>);
		*/
