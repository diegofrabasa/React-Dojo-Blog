import { useState, useEffect } from 'react';

const useFetch = (url) => {

    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const abortCont = new AbortController();


        // console.log('use effect ran');
        setTimeout( () => { // setTimeOut justo to emulate server loading time
            fetch(url, { signal: abortCont.signal })
                .then(res => {
                    if(!res.ok) {
                        throw Error('Could not fetch the data for that resource');
                    }
                    return res.json();
                }).then(dataJson => {
                    setData(dataJson);
                    setIsPending(false);
                    setError(null)
                }).catch(err => {
                    console.log(err.message);
                    if (err.name === 'AbortError') {
                        console.log('Fetch Aborted');
                    } else {
                        setError(err.message);
                        setIsPending(false);
                    }
                })
        },100);

        return () => abortCont.abort();

    },[url])

    return {data, isPending, error}
}

export default useFetch;