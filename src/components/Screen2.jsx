import "../styles/screen2.css";

//Rooms array contains room related image, heading, price and space

const rooms = [
  {
    image: require("../images/room1.png"),
    heading: "Room with one king-size bed",
    price: "35$",
    size: "28м²",
  },
  {
    image: require("../images/room2.png"),
    heading: "Penthouse for 8 person",
    price: "2039$",
    size: "438м²",
  },
];

// Screen2 component contains Explore section of the page

const Screen2 = () => {
  return (
    <section className="screen2" id="explore">
      {/* Screen2 heading 1 */}
      <h1 className="screen2__heading1">EXPLORE</h1>
      {/* Screen2 heading 2 */}
      <p className="screen2__heading2">
        From one-guest rooms to penthouses with pools and gardens{" "}
      </p>
      {/* Screen2 rooms  */}
      <div className="screen2__rooms">
        {/* Mapping over rooms array to produce the rooms card dynamically */}
        {rooms.map((room) => {
          return (
            <div className="screen2__room">
              <img src={room.image} alt="" />
              <div className="screen2__room-info blur-box">
                <div className="screen2__room-info-left">
                  <p className="screen2__heading2"> {room.heading}</p>
                  <button>{room.price}</button>
                  <button>{room.size}</button>
                </div>
                <div className="screen2__room-info-right">
                  <button>Book!</button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Screen2;
