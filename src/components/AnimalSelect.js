import React, {Component} from 'react';


// exporting the constructor function (dumb component).
// what is the parameter coming in here?
export default class AnimalSelect extends Component {

/*
So this component doesn't really need to be a class because it doesn't
need to hold local state. It can just be a function that returns JSX to
render. Look at your constructor and your handleChange function. Your
constructor isn't even declaring state and your handleChange isn't doing
anything in particular other than calling the submitAnimal function that
is passed in props anyway. You could write this as a function that just
returns your <form> html below and totally eliminate the constructor and
the handleChange function.

Other than that, your actual <form> component looks good.

It can be a little confusing when you start using react when to use pure
functions that return JSX and when to use a class. But its easy to decide
when you just ask yourself that question...does this component need
to handle local state? If not, make it a function. If it does, make
it a class. Makes it easier to remember.
*/

    constructor(props) {
        super(props);


        this.handleChange = this.handleChange.bind(this);
    }



    handleChange(e) {
        this.props.submitAnimal(e.target.value);
    }

    render () {
      return (
        <form>
        <label>Select an Animal: </label>
          <select className="select"
          onChange = {this.handleChange}>
          {
            this.props.animals.map( animal => {
                return (
                <option key={animal}
                 value={animal}>{animal}</option>
                )
            })

          }
          </select>
        </form>
      )
    }
};

