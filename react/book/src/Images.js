export const Image = (/*props*/ {Images, Title, Author}) => 
{
  // const {Images, Title, Author} = props.book;
  // const {Images, Title, Author} = props; //object destructuring

  const clickEvents = () => {
    alert('hello');
  }

  return ( 
    <article className='books'>
    <img src={Images} alt="" srcset="" />
    <h2 onClick={() => console.log(Title)}> {Title}</h2>
    <h4>{Author}</h4>
    {/* <h3>{children}</h3> */}
    <button type='button' onClick={clickEvents}>Example</button>
    </article>
  );
}

export default Image;