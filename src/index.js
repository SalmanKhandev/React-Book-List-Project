import {createRoot} from 'react-dom/client';
import './index.css';

const firstBook = {
  title: "Become Master Mern Stack Developer",
  author: "Salman Khan",
  image:"http://media.geeksforgeeks.org/wp-content/cdn-uploads/20220117153727/React-Desktop-Tutorial.png"
}

const BookList = ()=>{
  return (
    <section className='booklist' >
      <Book job={firstBook.title} image={firstBook.image} author={firstBook.author} />
    </section>
  );
}

const author = 'Salman Khan';
const Book = (props)=>{
  const title = "Learn ReactJS Library";
  return (
    <article className='book'>
      <img src={props.image} />
      <h4>{props.author.toUpperCase()}</h4>
      <h1>{props.job}</h1>
    </article>
  );
}



const container = document.getElementById('root');
const root = createRoot(container);
root.render(<BookList></BookList>);