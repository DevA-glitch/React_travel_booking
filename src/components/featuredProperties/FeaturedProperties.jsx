import "./featuredProperties.css";

const FeaturedProperties = () => {
  return (
    <div className="fplist">
        <div className="fpItem">
             <img src="https://cf.bstatic.com/xdata/images/hotel/square600/245003751.webp?k=826fbf4b4b8ae9d3373e536be44191a267d1ef20b08f276aef0d0707e1b00eb4&o=&s=1" alt="" className="fpImg" />      
        <span className="fpName">Villa Domina</span>        
        <span className="fpCity">Split</span>
        <span className="fpPricing">Starting from $120</span>   
        <span className="fpRating">
        <button>9.4</button>
        <span>Wonderful</span>   
                </span>
            </div>
        <div className="fpItem">
             <img src="https://cf.bstatic.com/xdata/images/hotel/square600/239135131.jpg?k=b416e142e94dd5101eafcce452697548738a5753ff610dd3a999f03a20e8bc1c&o=" alt="" className="fpImg" />      
        <span className="fpName">Leonardo Royal London</span>        
        <span className="fpCity">London</span>
        <span className="fpPricing">Starting from $180</span>   
        <span className="fpRating">
        <button>8.6</button> 
        <span>Excellent</span>   
                </span>
                 </div><div className="fpItem">
             <img src="https://cf.bstatic.com/xdata/images/hotel/square600/148593233.webp?k=d6ecf59d3e70bba88c4067e4defd6e98b98d4cd7cdfdf0edba409be16f746755&o=&s=1" alt="" className="fpImg" />      
        <span className="fpName">Keizersgracht Suite</span>        
        <span className="fpCity">Amasterdam</span>
        <span className="fpPricing">Starting from $800</span>   
        <span className="fpRating">
        <button>9.4</button> 
        <span>Impressive</span>   
                </span>
                 </div>

                 <div className="fpItem">
             <img src="https://cf.bstatic.com/xdata/images/hotel/square600/54453581.webp?k=6ef0ee5c93d3230304c5dda9e43a2c43132f9ef8d4058daf0b06e4e2ed8d7bbb&o=&s=1
             " alt="" className="fpImg" />      
        <span className="fpName">Ziza Ville</span>        
        <span className="fpCity">Lagos</span>
        <span className="fpPricing">Starting from $200</span>   
        <span className="fpRating">
        <button>9.2</button> 
        <span>Awesome</span>   
                </span>
                 </div>

            </div>

  )
}

export default FeaturedProperties;