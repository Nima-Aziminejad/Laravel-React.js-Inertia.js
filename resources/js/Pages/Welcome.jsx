import React from "react";
import { Head } from '@inertiajs/react';
import GuestLayout from "../Layout/GuestLayout.jsx";

export default function Welcome(props){
    return(
        <GuestLayout>
            <Head title="Welcome" />
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <h1 className="text-center">Parisa is lucky</h1>
                    </div>
                </div>
            </div>
        </GuestLayout>

    )
}
