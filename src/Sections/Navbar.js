import axios from 'axios';
import { useState } from 'react';
import '../Styles/Navbar.css';
import {Home} from './Home'

const API_KEY=process.env.REACT_APP_API_KEY
let Text;

const Navbar = () => {
    const [books,setBooks]=useState([]);

    function onSubmit(Text,startIndex=0)
    {
        let a;
        axios.get('https://www.googleapis.com/books/v1/volumes?q='+Text+'&key='+API_KEY+'&startIndex='+startIndex+'&maxResults=40')
        .then(data=>{
            a=data.data.items;
            setBooks(a);
            console.log(a)
        });
    }
    
    function handleSumbit(event)
    {
        event.preventDefault();
        Text=event.target.children[0].value.replace(/ +/g,' ');
        
        if(Text!=="" && Text!==" " && Text!=="\n")
        {
            console.log(Text);
            onSubmit(Text);
        }
    }

    return ( 
        <>
            <div id="head" className='navbar navbar-light'>
                <h1>📚MoffKaiser Books :)</h1>
                <form id="search" onSubmit={handleSumbit}>
                    <input placeholder='Search For Books..'/>
                    <button type="submit">🔍</button>    
                </form>
            </div>
            {
                books.length!==0?<Home booksDetail={books} handle={onSubmit}/>:<h2>Hola, please Enter Book Name in Search Bar</h2>
            }
        </>
    );
}
export {Navbar,Text}