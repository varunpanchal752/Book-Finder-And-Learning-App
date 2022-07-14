import '../Styles/HomeBookCard.css'
const HomeBookCard = ({volumeInfo,saleInfo}) => {
    return ( 
        <div className="card" style={{"width": "13rem"}} id="cardBody">
            <img  className="card-img-top" src={volumeInfo.imageLinks!==undefined?volumeInfo.imageLinks.thumbnail:
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeRrfc6BqcA7xXBoVoRjpUEnkv9qrfMa9MCQ&usqp=CAU"} alt="Card image cap"/>
            <div className="card-body" id="cardDetails">
                <h5 className="card-title"><b>{volumeInfo.title}</b></h5>
                <p className="card-text"><b>Authors: </b>{volumeInfo.authors?volumeInfo.authors.map((data,index)=><span style={{"display":"block"}} key={index}>{data}</span>):""}</p>
                <p className="card-text"><b>Language: </b>{volumeInfo.language}</p>
                <p className="card-text"><b>Published Date: </b>{volumeInfo.publishedDate}</p>
                <div id="stars">
                    <span className="card-text"><b style={{"fontSize":"smaller"}}>Rating: </b></span>
                    {
                        volumeInfo.averageRating>0?
                        Array.from({ length: volumeInfo.averageRating }, (_, i) => <span key={i}  className="card-text">⭐</span>):
                        <span style={{"fontSize":"smaller","paddingTop":"3px"}}>No Rating</span>
                    }
                </div>
                <p><b>Price: </b>{saleInfo.listPrice?saleInfo.listPrice.amount:""}</p>
                <a href={volumeInfo.previewLink} target="_blank" className="btn btn-primary">Details &#x21AC;</a>
            </div>
        </div>
     );
}
 
export default HomeBookCard;