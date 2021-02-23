import React, {Component} from 'react';
import Aux from '../../../hoc/react-aux/react-aux';
import InputText from '../../UI/InputText/InputText';
import Button from '../../UI/Button/Button';

class CustomerDetails extends Component {

    //for the customer details
    state = {
        name: 'test75675756',
        street: '',
        zipCode: '',
        country: '',
        contactNumber: '',
        emailAddress: ''
    }

    nameHandler(value) {
        this.setState({
            name: value.target.value
        })
    }

    render() {
        return(
            <Aux>
                <p><strong>Delivery Details</strong></p>
                Name: <InputText 
                            name={this.props.name}></InputText>
                            {this.props.txtVal}
                <p><strong>Address: </strong></p>
                Street: <InputText>{this.props.street}</InputText>
                ZipCode: <InputText>{this.props.zipCode}</InputText>
                Country: <InputText>{this.props.country}</InputText>
                Email address: <InputText>{this.props.emailAddress}</InputText>
                Contact number: <InputText>{this.props.contactNumber}</InputText>
                <Button btntype="Danger" clicked={this.props.purchaseCancelled} >CANCEL</Button>
                <Button btntype="Success" clicked={this.props.purchaseContinued} >SAVE TO CONTINUE</Button>
            </Aux>
            
        );
    }
}

export default CustomerDetails;