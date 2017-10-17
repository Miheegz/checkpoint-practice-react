import React, {Component} from 'react';
import AnimalSelect from './AnimalSelect';
import Cage from './Cage';


export default class Exhibit extends Component {

  constructor(props) {
    super(props);

    this.state = {
       selectedAnimal: this.props.selectedAnimal,
    }
    this.setAnimal = this.setAnimal.bind(this);
  }



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
