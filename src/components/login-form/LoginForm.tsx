import React  from 'react';
import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';

import { authenticateUser } from 'slices/AuthSlice';

const LoginForm: React.FC = () => {
    const { register, handleSubmit, errors } = useForm();
    const dispatch = useDispatch();

    const onSubmit = (): void => {
        dispatch(authenticateUser());
    };

    return (
        <form onSubmit={handleSubmit((onSubmit))}>
            <div className="row">
                <div className="col-12 text-left mb-2">
                    <label htmlFor="exampleInputEmail1">Email address</label>
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Login"
                        id="login"
                        name="login"
                        ref={register({ required: true })}
                    />
                    {errors.login && <small className="text-danger">This field is required</small>}
                </div>
                <div className="col-12 text-left mb-2">
                    <label htmlFor="exampleInputEmail1">Hasło</label>
                    <input
                        type="password"
                        className="form-control"
                        placeholder="Password"
                        id="password"
                        name="password"
                        ref={register({ required: true })}
                    />
                    {errors.password && <small className="text-danger">This field is required</small>}
                </div>
                <div className="col-12 mt-2 text-right">
                    <button className="btn btn-primary btn-md px-4" type="submit">Login</button>
                </div>
            </div>
        </form>
    );
}

export default LoginForm;
