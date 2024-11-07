const Footer = ({ footerText, link1Text, link1Url, link2Text, link2Url }) => {
    return (
        <footer className="bg-gray-800 text-white text-center py-4">
            <p>{footerText}</p>
            <p>
                Follow Andrew Hage on{" "}
                <a href={link1Url} className="text-blue-400">
                    {link1Text}
                </a>{" "}
                and{" "}
                <a href={link2Url} className="text-pink-400">
                    {link2Text}
                </a>
            </p>
        </footer>
    );
};

export default Footer;
