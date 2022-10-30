import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

  const BookList1 = {
    Images : "https://m.media-amazon.com/images/I/41xsqjWS4FL._SX328_BO1,204,203,200_.jpg",
    Title : "Blockchain Basics: A Non-Technical Introduction in 25 Steps",
    Author : "Daniel Drescher"
  }

  const BookList2 = {
    Images : "https://m.media-amazon.com/images/I/51Y2i1M+a3L._SX598_BO1,204,203,200_.jpg",
    Title : "The Potentialist I: Your Future in the New Reality",
    Author : "Daniel Drescher"
  }

  const BookList3 = {
    Images : "https://m.media-amazon.com/images/I/51pWybDxARL._SY291_BO1,204,203,200_QL40_FMwebp_.jpg",
    Title : "Blockchain Investing; Bitcoin, Cryptocurrency, NFT, DeFi, Metaverse, Smart Contracts,",
    Author : "Daniel Drescher"
  }

  const BookList4 = {
    Images : "https://m.media-amazon.com/images/I/41efo6NJwEL._SX218_BO1,204,203,200_QL40_FMwebp_.jpg",
    Title : "Mastering Blockchain: A deep dive into distributed ledgers",
    Author : " Imran Bashir"
  }

  

function Books()
{
  return(
    <section className='booksList'>
      
      <Image 
        img = {BookList1.Images}
        title = {BookList1.Title}
        author = {BookList1.Author}>
          <p>Deepjyoti is Ful Stack Blockchain Developer</p>
      </Image>

      <Image 
        img = {BookList2.Images}
        title = {BookList2.Title}
        author = {BookList3.Author}>
      </Image>

      <Image 
        img = {BookList3.Images}
        title = {BookList3.Title}
        author = {BookList3.Author}>
      </Image>

      <Image 
        img = {BookList4.Images}
        title = {BookList4.Title}
        author = {BookList4.Author}>
      </Image>

    </section>
  );
}

const Image = (/*props*/ {img, title, author, children}) => 
{
  // const {img, title, author} = props; //object destructuring
  return ( 
    <article className='books'>
    <img src={img} alt="" srcset="" />
    <h2> {title}</h2>
    <h4>{author}</h4>
    <h3>{children}</h3>
    </article>
  );
}

ReactDOM.render(<Books/>, document.getElementById("root"));
