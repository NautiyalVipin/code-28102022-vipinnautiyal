import "../styles/mainScreen.css";


// Mainscreen components contains navbar, header and room options item

const MainScreen = () => {
  return (
    <section className="main__screen" id="home">
      {/* Header Navbar */}
      <ul className="nav">
        {/* Website Logo */}
        <li className="nav__logo">
          <a href="#home">iStay</a>
        </li>
        {/*  Mobile Menu Button*/}
        <li className="nav__menu">
          <i className="fa-solid fa-bars"></i>
        </li>
        {/* Desktop Navbar Options */}
        <li className="nav__link">
          <a href="#explore">Explore</a>
        </li>
        <li className="nav__link">
          <a href="#about-us">About Us</a>
        </li>
        <li className="nav__link">
          Cities <i className="fa-solid fa-chevron-down"></i>
        </li>
        <li className="nav__link">
          <button>Call</button>
        </li>
      </ul>
      {/* Number of cities drop down for cities option */}
      <div className="cities">
        <ul className="cities__list">
          <li>Delhi NCR</li>
          <li>Bangalore</li>
          <li>Mumbai</li>
          <li>Pune</li>
          <li>Hyderabad</li>
        </ul>
      </div>
      {/* Header 1 for main screen */}
      <div className="main__header1 heading">
        Rethink your living & renting
      </div>
      {/* Header 2 for main screen */}
      <div className="main__header2 heading">
        Make your stay painless with us
      </div>
      {/* Options items: city,date and number of guests  */}
      <div className="main__options">
        <div className="main__option">
          <p>City</p>
          <input type="text" placeholder="Select your city" />
        </div>
        <div className="main__option">
          <p>Date</p>
          <input type="text" placeholder="Select your dates" />
        </div>
        <div className="main__option">
          <p>Guests</p>
          <input type="text" placeholder="Add guests" />
        </div>
        {/* Search Button  */}
        <button className="main__option search-btn">
          <i className="fa-solid fa-magnifying-glass"></i> <span>Search</span>{" "}
        </button>
      </div>
      <div>
        <i className="fa-solid fa-chevron-down"></i>
      </div>
    </section>
  );
};

export default MainScreen;
