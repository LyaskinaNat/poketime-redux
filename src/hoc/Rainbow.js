//we will create a customised High Order Component
//it will randomise the text colour inside another component
import React from 'react';
//this component takes one parameter - wrapped component which it will apply iuts properfties to
//e.g. it could be Navbar
const Rainbow = (WrappedComponent) => {

    const colours = ['red', 'pink', 'orange', 'blue', 'green', 'yellow' ];
    const randomColour = colours[Math.floor(Math.random() * 5)];
    const className = randomColour + '-text';
//we have to return the wrapoed component
//we return a function which takes in a props which will be passed to wrapped component
//this function needs to return some JSX
    return (props) => {
        return (
            <div className={className}>
                <WrappedComponent { ...props } />
            </div>
        )
    }
}

export default Rainbow