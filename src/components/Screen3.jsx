import "../styles/screen3.css"

//Chapters array contains chapter related image, heading
const chapters = [
    {
        image: require("../images/room3.png"),
        heading:"Chapter I"
    },
    {
        image: require("../images/room4.png"),
        heading:"Chapter II"
    },
    {
        image: require("../images/room5.png"),
        heading:"Chapter III"
    },
    {
        image: require("../images/room6.png"),
        heading:"Chapter IV"
    }
    
  ];
 
// Screen3 component contains About Us section of the page
  
const Screen3 = () => {
  return (
    <section className="screen3" id="about-us">
        {/* screen3 heading 1 */}
    <h1 className="screen2__heading1">About Us</h1>
    {/* screen3 headin 2 */}
    <p className="screen2__heading2">Always tell a short story... </p>
    <div className="screen3__rooms">
        {/* Mapping over chapters array to produce the chapter cards dynamically */}
        {chapters.map(chapter=>{
            return(  <div className="screen3__room">
            <img src={chapter.image} alt="" />
            <div className="screen3__room-info blur-box">
              <p className="screen3__heading2">{chapter.heading}</p>
              <p className="screen3__heading3">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididun</p>
            </div>
          </div>
            )
        })}
    </div>
  </section>
  )
}

export default Screen3