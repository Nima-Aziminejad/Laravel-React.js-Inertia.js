import React  from "react";
import { Head, useForm } from '@inertiajs/react';
import GuestLayout from "../../Layout/GuestLayout.jsx";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AnimatedToast from '../../Components/AnimatedToast.jsx';


const Login = (props)=>{
    const handleShowToast = (value) => {
        toast(<AnimatedToast message={value} />, {
            position: toast.POSITION.TOP_RIGHT,
            autoClose: 8000,
        });
    };
    const {  data, setData,post, reset } = useForm({
        email: '',
        password: '',
        remember: false,
    });

    const submit = (e) => {
        e.preventDefault();

        post(route('login'),{
            preserveScroll: true,
            onError: (err)=>{
                Object.keys(err).forEach(key=>{
                    handleShowToast(err[key]);
                })
            }
        });

    };
    return (
        <GuestLayout>
            <Head title="Welcome" />
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-6 col-sm-12 mt-5">
                        <div className="card" style={{backgroundColor: "lightgrey"}}>
                            <div className="card-body">
                                <div className="mb-3">
                                    <label htmlFor="email" className="form-label">Email address</label>
                                    <input type="email" className="form-control" id="email" name="email"
                                           value={data.email}
                                           autoComplete="username"
                                           onChange={(e) => setData('email', e.target.value)}
                                    />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="password" className="form-label">Password</label>
                                    <input type="password" className="form-control" id="password" name="password"
                                           value={data.password}
                                           autoComplete="current-password"
                                           onChange={(e) => setData('password', e.target.value)}
                                    />
                                </div>
                                <div className="mb-3 form-check">
                                    <input type="checkbox" className="form-check-input" id="exampleCheck1"
                                           name="remember"
                                           checked={data.remember}
                                           onChange={(e) => setData('remember', e.target.checked)}
                                    />
                                    <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
                                </div>
                                <div className="text-center">
                                    <button type="submit" className="btn btn-primary" onClick={submit}>Submit</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <ToastContainer />
        </GuestLayout>
    )
}
export default Login;
