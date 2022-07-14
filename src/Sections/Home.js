import HomeBookCard from "./HomeBookCard";
import '../Styles/Home.css'
import {Text} from "./Navbar";

let a=0;
const Home = ({booksDetail,handle}) => {
    return (
        <div id="bookContainer">
            {
                booksDetail.map(data=>
                    <HomeBookCard volumeInfo={data.volumeInfo} saleInfo={data.saleInfo} key={a=a+1}/>
                )
            }
            <div id="pages">◄○
                <button onClick={()=>{window.scrollTo(0, 0);handle(Text,1);}}>1</button>
                <button onClick={()=>{window.scrollTo(0, 0);handle(Text,2)}}>2</button>
                <button onClick={()=>{window.scrollTo(0, 0);handle(Text,3)}}>3</button> 
                <button onClick={()=>{window.scrollTo(0, 0);handle(Text,4)}}>4</button> 
                <button onClick={()=>{window.scrollTo(0, 0);handle(Text,5)}}>5</button> 
                ○►
            </div>
        </div>
    );
}
 
export {Home};