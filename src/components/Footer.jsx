const Footer = () => {
    return (
        <div className="bg-black text-white text-center py-10 px-5">
            {/* Logo and Heading */}
            <div className="mb-1">
                <img src="https://www.nbnw.org/_next/static/media/nbnw2.1195da4c.png" alt="Logo of a tree with the text 'NBNW'" className="mx-auto mb-2 w-16" />
                <h1 className="text-2xl font-bold">NBNW</h1>
            </div>

            <p className="text-xl mb-10">Explore the real news.</p>

            {/* Social Media Links */}
            <div className="social-icons mb-10 flex justify-center space-x-4">
                <a href="https://www.facebook.com/nbnw_org" target="_blank" rel="noopener noreferrer" className="text-lg">
                    Facebook
                </a>
                <a href="https://www.instagram.com/nbnw_org/" target="_blank" rel="noopener noreferrer" className="text-lg">
                    Instagram
                </a>
                <a href="https://www.linkedin.com/company/nbnw-org/" target="_blank" rel="noopener noreferrer" className="text-lg">
                    LinkedIn
                </a>
                <a href="https://twitter.com/nbnw_org" target="_blank" rel="noopener noreferrer" className="text-lg">
                    Twitter
                </a>
            </div>

            {/* Footer Links - Horizontal Layout */}
            <div className="footer-section flex justify-center space-x-20 text-left">
                <div>
                    <h2 className="text-lg font-bold mb-2">Solutions</h2>
                    <p>Consulting</p>
                    <p>Advertising</p>
                </div>
                <div>
                    <h2 className="text-lg font-bold mb-2">Support</h2>
                    <p>Contact</p>
                </div>
                <div>
                    <h2 className="text-lg font-bold mb-2">Company</h2>
                    <p>About</p>
                    <p>Jobs</p>
                </div>
                <div>
                    <h2 className="text-lg font-bold mb-2">Privacy & Data</h2>
                    <p>Privacy</p>
                </div>
            </div>

            <p className="mt-10">&copy; 2024 NBNW, Inc. All rights reserved.</p>
        </div>
    );
};

export default Footer;
