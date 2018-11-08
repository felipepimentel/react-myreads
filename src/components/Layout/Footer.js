import React from 'react'

const Footer = () => {
    const year = new Date().getFullYear()
    return (
        <footer className="footer-container">
            <span>&copy; {year} - Felipe Pimentel</span>
        </footer>
    );
}
export default Footer
