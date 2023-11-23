import React, { ReactElement } from "react";

type HeaderProps = {
    text: string,
    backgroundColor?: string,
    textColor: string
};

function Header({text, backgroundColor, textColor}: HeaderProps): ReactElement {
    return ( 
        <header style={{backgroundColor: backgroundColor, color: textColor}}>
            <div className="container">
                <h2>{text}</h2>
            </div>
       </header>
    )
};

Header.defaultProps = {
    text: 'Default',
    backgroundColor: `rgba(0,0,0,0.4)`,
    textColor: `#ff6a95`
}

export default Header;