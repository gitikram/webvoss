import React from 'react';
import { Link } from 'react-router-dom';

const Button = ({ children, className = "", to, ...props }) => {
    const classes = `shiny-cta-red ${className}`;

    if (to) {
        return (
            <Link to={to} className={classes} {...props}>
                {children}
            </Link>
        );
    }

    return (
        <button className={classes} {...props}>
            {children}
        </button>
    );
};

export default Button;
