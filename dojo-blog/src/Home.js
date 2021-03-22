// import { useState, useEffect } from 'react';
import BlogList from './BlogList';
import useFetch from './useFetch';

const Home = () => {

    const { data: blogs, isPending, error} = useFetch('http://localhost:8000/blogs');

    return ( 
        <div className="home">
            {error && <div>{ error }</div>}
            { isPending && <div>Loading...</div> }
            {blogs && <BlogList blogs={blogs} title="All the blogs!"/>}
        </div>
    );
}

export default Home;






// const Home = () => {

//     const { data: blogs, isPending, error} = useFetch('http://localhost:8000/blogs');

//     // const [blogs, setBlogs] = useState(null);
//     // const [isPending, setIsPending] = useState(true);
//     // const [error, setError] = useState(null);

//     //const [name, setName] = useState('mario');

//     // const handleDelete = (id) => {
//     //     const newBlogs = blogs.filter(blog => blog.id !== id);
//     //     setBlogs(newBlogs);
//     // }

//     // useEffect(() => {
//     //     // console.log('use effect ran');
//     //     setTimeout( () => {
//     //         fetch('http://localhost:8000/blogs')
//     //             .then(res => {
//     //                 if(!res.ok) {
//     //                     throw Error('Could not fetch the data for that resource');
//     //                 }
//     //                 return res.json();
//     //             }).then(data => {
//     //                 console.log(data);
//     //                 setBlogs(data);
//     //                 setIsPending(false);
//     //                 setError(null)
//     //             }).catch(err => {
//     //                 console.log(err.message);
//     //                 setError(err.message);
//     //                 setIsPending(false);
//     //             })
//     //     },1000);
//     // },[])

//     // if(!blogs) {
//     //     return (<h1>Loading</h1>);
//     // }

//     return ( 
//         <div className="home">
//             {error && <div>{ error }</div>}
//             { isPending && <div>Loading...</div> }
//             {blogs && <BlogList blogs={blogs} title="All the blogs!"/>}
//             {/* {blogs && <BlogList blogs={blogs} title="All the blogs!" handleDelete={handleDelete}/>} */}
//             {/* <BlogList blogs={blogs.filter((blog) => blog.author === 'mario')} title="Marios blogs!" handleDelete={handleDelete}/> */}
//             {/* <button onClick={()=>setName('Diego')}>Change name</button> */}
//             {/* <p>{ name }</p> */}
//         </div>
//     );
// }

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
