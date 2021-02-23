import React, { Component } from 'react';
import Aux from '../../../hoc/react-aux/react-aux';
import Button from '../../UI/Button/Button';

class OrderSummary extends Component {
    componentWillUpdate(){
        console.log('[OrderSummary] WillUpdate');
    }

    render () {
        const ingredientSummary = Object.keys(this.props.ingredients)
        .map(igKey => {
            return (
                <li key={igKey}>
                    <span style={{textTransfrom: 'capitalize'}}>{igKey}
                    </span>: {this.props.ingredients[igKey]}
                </li>)
        });
        return (
            <Aux>
                <h3>Your Order</h3>
                <p>A delicious burger with the following ingredients:</p>
                <ul>
                    {ingredientSummary}
                </ul>
                <p><strong>Total Price:{this.props.price.toFixed(2)}</strong></p>
                <p> Continue to Checkout?</p>
                <Button btntype="Danger" clicked={this.props.purchaseCancelled} >CANCEL</Button>
                <Button btntype="Success" clicked={this.props.purchaseContinued} >CONTINUE</Button>
                {/* <Button btntype="Success" clicked={this.props.addingDetailsContinue} >CONTINUE</Button> */}
            </Aux>
        );
    }
}

export default OrderSummary;
