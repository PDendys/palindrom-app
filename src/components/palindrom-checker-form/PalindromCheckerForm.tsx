import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';

import { addItem } from 'slices/PalindromeSlice';

import { checkIsPalindrome } from 'helpers';

const PalindromCheckerForm: React.FC = () => {
    const [sentence, setSentence] = useState<string>('');
    const dispatch = useDispatch();
    const { register, handleSubmit, errors } = useForm();

    const onSubmit = (): void => {
        const isPalindrome: boolean = checkIsPalindrome(sentence);
        dispatch(
            addItem({ sentence, isPalindrome })
        );
        setSentence('');
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="row">
                <div className="col-12 mb-3 text-left">
                    <label htmlFor="exampleInputEmail1">Your sentence</label>
                    <input
                        value={sentence}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSentence(e.target.value)}
                        type="text"
                        className="form-control"
                        id="sentence"
                        name="sentence"
                        ref={register({ required: true })}
                    />
                    {errors.sentence && <small className="text-danger">This field is required</small>}
                </div>
                <div className="col-12 text-right">
                    <button className="btn btn-primary btn-md px-4" type="submit">Check</button>
                </div>
            </div>
        </form>
    );
}

export default PalindromCheckerForm;
