import React from 'react';
const Contact = (props) => {
  //this is how we programmatically re-direct user to a certain page:  
  //  setTimeout(() => {
  //      props.history.push('/about')
  //  }, 2000);
    return (
        <div className="container">
            <h4 className="center">Contact</h4>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, nemo temporibus ipsa odio reprehenderit fugiat odit fugit iusto atque numquam necessitatibus inventore iure, nostrum consequuntur tempora? Quis similique rerum sequi?</p>
        </div>

    )
}

export default Contact