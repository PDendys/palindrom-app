import React  from 'react';
import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';

import { authenticateUser } from 'slices/AuthSlice';

// HOW TO IMPROVE?:
//  - Aplikacja opiera się jedynie na podstawowej frontendowej autentykacji, która nie jest w żadnym stopniu wystarczająco
//    bezpieczna aby wykorzystywać ją w wersji produkcyjnej systemu.
// - Powinna zostać zaimplementowana autentykacja backendowa.
// - W przypadku architektury client - server backend powinien zwracać odpowiedni token (np. JWT), który będzie dołączany
//   do każdego zapytania w celu potwierdzenia odpowiednich uprawnień użytkownika.
// - W przypadku klasycznej architektury MVC (gdzie react odpowiada za warstwę widoku, a całość jest serwowana z tej samej domeny)
//   aplikacja backendowa powinna zwracać ciasteczko sesji (najlepiej http only), które będzie dołączane przez przeglądarkę automatycznie do każdego zapytania.
// - Powinna zostać zimplementowana funkcjonalność ograniczonej żywotności zarówno tokena JWT jak i ciasteczka sesji oraz sposób ich odzyskiwania.
// - Aplikacja powinna być hostowana poprzez protokół https aby uzyskać szyfrowanie danych przesyłanych do backendu.
// - W wypadku wrażliwych danych powinna zostać zaimplementowana funkcjonalność 2 stopniowej autentykacji.
// - Jako że mamy do czynienia ze SPA powinna również zostać zaimplementowana funkcjonalność przechowywania
//   stanu zalogowania użytkownika w pamięci podręcznej (np. cookies) w celu oddzyskania "zalogowania" po refreshu strony.

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
