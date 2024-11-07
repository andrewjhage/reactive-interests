const Header = ({backgroundPic, fontFamily}) => {
    console.log(backgroundPic);
    return (
        <header
        className="header text-center py-8 bg-cover bg-center text-white"
        style={{backgroundImage: `url(./images/${backgroundPic})`}}
        >
        <h1
        className="text-6xl font-bolder"
        style={{fontFamily: `${fontFamily}`}}
        >
            Andrew Hage Personal Training
        </h1>
        <p className="text-lg">
            All about Andrew Hage's workouts, personal training, and more!
        </p>
        </header>
    );
}

export default Header;