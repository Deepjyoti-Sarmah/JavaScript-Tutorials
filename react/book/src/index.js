import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {BookList} from './BookList'
import Bookks from './Images';


function Books()
{
  return(
    <section className='booksList'>
      {
        BookList.map( (book) => {
            const {Images , Title, Author} = book;
            // return (
            //   <Image key={book.id} book={book}></Image>
            // )
            return (
              <Bookks key={book.id} {...book}></Bookks>
            )
        })
      }
    </section>
  );
}

ReactDOM.render(<Books/>, document.getElementById("root"));
