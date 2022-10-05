import React from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, useForm } from "@inertiajs/inertia-react";

const Create = (props) => {
    const { data, setData, post } = useForm({
        title: "",
        body: "",
    });

    const handleSendPost = (e) => {
        e.preventDefault();
        post(route("posts.store"));
    };

    return (
        <AuthenticatedLayout
            auth={props.auth}
            errors={props.errors}
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Create
                </h2>
            }
        >
            <Head title="Dashboard" />

            <div className="py-12 px-10">
                <form onSubmit={handleSendPost}>
                    <div className="flex flex-col gap-4 w-7/12">
                        <input
                            onChange={(e) => setData("title", e.target.value)}
                        />
                        <input
                            onChange={(e) => setData("body", e.target.value)}
                        />
                    </div>
                    <button className="px-3 py-1 bg-blue-500 rounded text-white my-3 focus:scale-95">
                        send
                    </button>
                </form>
            </div>
        </AuthenticatedLayout>
    );
};

export default Create;
