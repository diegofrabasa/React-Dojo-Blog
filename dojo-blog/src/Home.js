import { useState } from 'react';

const Home = () => {

    const [blogs, setBlogs] = useState([
        { title: 'My new website', body: 'lorem ipsum...', author: 'mario', id: 1 },
        { title: 'Welcome party!', body: 'lorem ipsum...', author: 'yoshi', id: 2 },
        { title: 'Web dev top tips', body: 'lorem ipsum...', author: 'mario', id: 3 }
    ]);

    return ( 
        <div className="home">
            {blogs.map((blog) => (
                <div className="blog-preview" key={blog.id}>
                    <h2>{ blog.title }</h2>
                    <p>written by { blog.author }</p>
                </div>
            ))}
        </div>
    );
}

export default Home;

// const Home = () => {

//     const [name, setName] = useState('mario');

//     const handleClick = (e) => {
//         console.log('hello ninjas',e.target, e);
//         setName('Diego')
//     }

//     const handleClickAgain = (name, e) => {
//         console.log('hello ' + name, e.target, e);
//     }

//     return ( 
//         <div className="home">
//             <h2>HomePage</h2>
//             <p> { name } </p>
//             <button onClick={handleClick}>Click me</button>
//             <button onClick={(e) => handleClickAgain('mario',e)}>Click Me Again</button>
//         </div>
//     );
// }