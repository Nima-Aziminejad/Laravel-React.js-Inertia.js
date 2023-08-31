import React from "react";
import { Head } from '@inertiajs/react';
import AuthenticatedLayout from "../../Layout/AuthenticatedLayout.jsx";
export default function Dashboard(props){
    return(
        <AuthenticatedLayout auth={props.auth}>
            <Head title="Welcome" />
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <h1 className="text-center">Parisa is lucky</h1>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    )
}
