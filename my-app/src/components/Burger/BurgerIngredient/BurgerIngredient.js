import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classes from './BurgerIngredient.css';

class BurgerIngredient extends Component {
    render () {
        let ingredient = null;

        switch(this.props.type){
            case ('bread-bottom'):
                console.log('Test1');
                ingredient = <div className={classes.BreadBottom}></div>
                break;
            case ('bread-top'):
                console.log('Test2');
                ingredient = (
                    <div className={classes.BreadTop}>
                        <div className={classes.Seeds1}></div>
                        <div className={classes.Seeds2}></div>
                    </div>
                );
                break;   
            case ('meat'):
                console.log('Test3');
                ingredient = <div className={classes.Meat}></div>
                break;
            case ('cheese'):
                console.log('Test4');
                ingredient = <div className={classes.Cheese}></div>
                break;
            case ('salad'):
                ingredient = <div className={classes.Salad}></div>
                break;
            case ('bacon'):
                ingredient = <div className={classes.Bacon}></div>
                break;
            default:
                ingredient = null;
        }

        return ingredient; 
    }
}

BurgerIngredient.PropTypes = {
    type: PropTypes.string.isRequired
};

export default BurgerIngredient;