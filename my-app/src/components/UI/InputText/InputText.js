import React, {Component} from 'react';
import Aux from '../../../hoc/react-aux/react-aux';
import classes from './InputText.css';

class InputText extends Component {

    constructor(props){
        super(props);
        this.state = {
            txtVal: ''
        }

        this.setTextValue = this.setTextValue.bind(this);

        console.log('NadiaTest0 ' + this.props.name);
    }

    setTextValue(event) {
      this.setState({
            txtVal: event.target.name
      });

       console.log('NadiaTest ' + event.target.value );
   }

   render() {
        return(
            <Aux>
                <div>
                    <input 
                        type="text"
                        className={[classes.InputText]} 
                        onChange={this.setTextValue}/>
                </div>
            </Aux>
        );
   }
}

export default InputText;