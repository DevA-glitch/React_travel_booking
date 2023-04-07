import "./featured.css";

const Featured = () => {
    return(
        <div className="featured">
            <div className="featuredItem">
                    <img src="https://images.unsplash.com/photo-1617688319108-cb3bdc88f587?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2835&q=80"
                    alt="Featured" 
                    className="featuredImg"/>
                <div className="featuredTitles">
                    <h1>New York</h1>
                    <h2>520 Properties</h2>
                </div>
            </div>
            <div className="featuredItem">
                    <img src="https://images.unsplash.com/photo-1542243337-8a2c60753f6e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"
                    alt="Featured" 
                    className="featuredImg"/>
                <div className="featuredTitles">
                    <h1>Zew Zealand</h1>
                    <h2>340 Properties</h2>
                </div>
            </div>
            <div className="featuredItem">
                    <img src="https://images.unsplash.com/photo-1631781102346-05abd0b2ba98?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"
                    alt="Featured" 
                    className="featuredImg"/>
                <div className="featuredTitles">
                    <h1>India</h1>
                    <h2>130 Properties</h2>
                </div>
            </div>
        </div>
    )
}
export default Featured;