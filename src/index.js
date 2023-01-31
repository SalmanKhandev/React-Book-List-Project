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
      <Book job={firstBook.title} image={firstBook.image} author={firstBook.author} >
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facilis distinctio fugiat, cupiditate aliquam blanditiis molestiae minima, sunt commodi voluptatum illo numquam maxime quam, neque quia vitae omnis laboriosam iure quas?</p>
        </Book>
    </section>
  );
}

const Book = (props)=>{
  console.log(props);
  const {image,author,job, children} = props;
  return (
    <article className='book'>
      <img src={image} />
      <h4>{author.toUpperCase()}</h4>
      <h1>{job}</h1>
      {children}
    </article>
  );
}



const container = document.getElementById('root');
const root = createRoot(container);
root.render(<BookList></BookList>);