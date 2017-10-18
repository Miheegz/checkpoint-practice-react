import React, {Component} from 'react';
import AnimalSelect from './AnimalSelect';
import Cage from './Cage';


export default class Exhibit extends Component {

  constructor(props) {
    super(props);

    this.state = {
       selectedAnimal: this.props.selectedAnimal,
    }
    /*
    Since your state object above is within your constructor body, you don't need to say
    this.props.selectedAnimal. You have direct access to the props from within the constructor
    body, so you could just say props.selectedAnimal here.
    */
    this.setAnimal = this.setAnimal.bind(this);
  }


  /*
  You shouldn't need this componentDidMount method below if you are setting your state with
  the props.selectedAnimal directly in your constructor.
  */
  componentDidMount() {
    this.setState( {
      selectedAnimal: AnimalSelect.selectedAnimal
    });
  }

  setAnimal (animal) {
    this.setState( {
      selectedAnimal: animal,
    })

  }

  render () {
  	return (
      <div className="exhibit">
      <AnimalSelect animals={this.props.animals}  submitAnimal={this.setAnimal} />
      <Cage selectedAnimal={this.props.selectedAnimal}/>
	    </div>
  		)
  }
};
