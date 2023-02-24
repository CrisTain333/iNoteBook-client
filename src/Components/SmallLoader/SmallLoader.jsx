import React from 'react';
import { ThreeDots } from 'react-loader-spinner';

const SmallLoader = () => {
    return (
        <div>
            <ThreeDots
                height="20"
                width="40"
                radius="9"
                color="#FFFFFF"
                ariaLabel="three-dots-loading"
                wrapperStyle={{}}
                wrapperClassName=""
                visible={true}
            />
        </div>
    );
};

export default SmallLoader;