import React from "react";

function Footer() {
    const yearly = new Date()
    return (
        <footer>
            CopyRight {yearly.getFullYear()}
        </footer>
    )
}

export default Footer;