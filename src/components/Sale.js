// sale image

import sale from "../assets/images/sale.jpeg"

function SaleImage() {
    return (
      <div className="sale-image">
        <img src={sale} alt="Sale"></img>
        <div className="sale-image__offer">
          <h2>Udemy flash sale! 24 hours to save.</h2> <br></br>
          <p>Get the top courses for just 499. Just one day to save but a lifetime to learn</p>
        </div>
      </div>
    )
}

export default SaleImage