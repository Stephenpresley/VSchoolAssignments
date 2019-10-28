import React from 'react';

import Contact from './Contact'
const Footer = () => {
    return (
        <footer>
            <Contact />
            <details id="subFooter">
                <summary>Copyright 2012-2099.</summary>
                <p> - by Weyland Corp. All Rights Reserved.</p>
                <p>All content and graphics on this web site are the property of the company Weyland Corp.</p>
            </details>
        </footer>
    )
}

export default Footer;