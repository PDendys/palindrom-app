import React from 'react';

import PalindromCheckerForm from 'components/palindrom-checker-form/PalindromCheckerForm';
import PalindromList from 'components/palindrom-list/PalindromList';

const PalindromCheckerPage: React.FC = () => {
    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col-12 mb-4 text-center">
                    <h1>Check your palindrom!</h1>
                </div>
                <div className="col-12 col-md-6">
                    <PalindromCheckerForm />
                </div>
                <div className="col-12 col-md-6">
                    <PalindromList />
                </div>
            </div>
        </div>
    );
}

export default PalindromCheckerPage;
