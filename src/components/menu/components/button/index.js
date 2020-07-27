import React from 'react';


const ButtonLink = (props) => {

    return(
        <a href={props.href} className={props.className}>
            {props.name}
        </a>
    );
}

export default ButtonLink;