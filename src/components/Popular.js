// Popular Section

import one from "../assets/images/c1.jpg"
import Two from "../assets/images/c2.jpg"
import Three from "../assets/images/c3.jpg"
import Four from "../assets/images/c4.jpg"
import Five from "../assets/images/c1.jpg"
import Six from "../assets/images/c2.jpg"
import Seven from "../assets/images/c3.jpg"
import Eight from "../assets/images/c4.jpg"

function Popular(){
    return (
      <div className="popular">
  
          <h1 className="popular__title">Most Popular</h1>
          <p className="popular__subtitle">Pick the best course</p>
          <div className="popular__container">
  
              <div className="course-card">
                  <img src={one} alt="pop-one"></img>
                  <p>2024 Python Data Visualisation Masterclass</p>
                  <p>Col Steele</p>
                  <p>4.9 ⭐⭐⭐⭐⭐</p>
                  <p>499 <del>1999</del></p>
              </div>
  
              <div className="course-card">
                  <img src={Two} alt="pop-two"></img>
                  <p>Web Development Bootcamp 2023</p>
                  <p>Col Steele</p>
                  <p>3.9 ⭐⭐⭐⭐</p>
                  <p>499 <del>1999</del></p>
              </div>
  
              <div className="course-card">
                  <img src={Three} alt="pop-three"></img>
                  <p>Master UI/UX Designing with Figma</p>
                  <p>Col Steele</p>
                  <p>4.9 ⭐⭐⭐⭐⭐</p>
                  <p>499 <del>1999</del></p>
              </div>
  
              <div className="course-card">
                  <img src={Four} alt="pop-four"></img>
                  <p>Basic to advance programming with EMC</p>
                  <p>Col Steele</p>
                  <p>2.9 ⭐⭐⭐</p>
                  <p>499 <del>1999</del></p>
              </div>
  
  
              <div className="course-card">
                  <img src={Five} alt="pop-five"></img>
                  <p>2024 Python Data Visualisation Masterclass</p>
                  <p>Col Steele</p>
                  <p>4.9 ⭐⭐⭐⭐⭐</p>
                  <p>499 <del>1999</del></p>
              </div>
  
              <div className="course-card">
                  <img src={Six} alt="pop-six"></img>
                  <p>Web Development Bootcamp 2023</p>
                  <p>Col Steele</p>
                  <p>3.9 ⭐⭐⭐⭐</p>
                  <p>499 <del>1999</del></p>
              </div>
  
              <div className="course-card">
                  <img src={Seven} alt="pop-seven"></img>
                  <p>Master UI/UX Designing with Figma</p>
                  <p>Col Steele</p>
                  <p>4.9 ⭐⭐⭐⭐⭐</p>
                  <p>499 <del>1999</del></p>
              </div>
  
              <div className="course-card">
                  <img src={Eight} alt="pop-eight"></img>
                  <p>Basic to advance programming with EMC</p>
                  <p>Col Steele</p>
                  <p>2.9 ⭐⭐⭐</p>
                  <p>499 <del>1999</del></p>
              </div>
  
          </div>
      </div>
    )
  }

export default Popular