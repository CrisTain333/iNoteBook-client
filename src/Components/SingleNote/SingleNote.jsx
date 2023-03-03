import React from 'react';
import { useLoaderData } from 'react-router-dom';

const SingleNote = () => {
    const loader = useLoaderData()
    console.log(loader)
    return (
        <div>
            <p>Single Note</p>
        </div>
    );
};

export default SingleNote;