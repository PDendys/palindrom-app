import React  from 'react';

const Loader: React.FC = () => {
    return (
        <div className="loader--wrapper">
            <div className="lds-ripple">
                <div />
                <div />
            </div>
        </div>
    );
}

export default Loader;
