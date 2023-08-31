import React  from "react";
import { Head, useForm } from '@inertiajs/react';
import GuestLayout from "../../Layout/GuestLayout.jsx";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AnimatedToast from '../../Components/AnimatedToast.jsx';
const Register = (props)=>{
    const handleShowToast = (value) => {
        toast(<AnimatedToast message={value} />, {
            position: toast.POSITION.TOP_RIGHT,
            autoClose: 8000,
        });
    };
    const {  data, setData,post, reset } = useForm({
        name: '',
        email: '',
        password: '',
        password_confirmation: '',
    });
    const submit = (e) => {
        e.preventDefault();

        post(route('register'),{
            preserveScroll: true,
            onError: (err)=>{
                reset('password', 'password_confirmation')
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
                                    <label htmlFor="name" className="form-label">Name</label>
                                    <input type="text" className="form-control" id="name" name="name"
                                           value={data.name}
                                           autoComplete="name"
                                           onChange={(e) => setData('name', e.target.value)}
                                    />
                                </div>
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
                                           autoComplete="new-password"
                                           onChange={(e) => setData('password', e.target.value)}
                                    />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="password_confirmation" className="form-label">password confirmation</label>
                                    <input type="password" className="form-control" id="password_confirmation" name="password"
                                           value={data.password_confirmation}
                                           autoComplete="new-password"
                                           onChange={(e) => setData('password_confirmation', e.target.value)}
                                    />
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
export default Register;
