import React from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, useForm } from "@inertiajs/inertia-react";

const Create = (props) => {
    const { posts, videos } = props;
    const { data, setData, post } = useForm({
        body: "",
        commentable_id: "1",
        commentable_type: "App\\Models\\Post",
    });

    const handleSendPost = (e) => {
        e.preventDefault();
        post(route("comments.store"));
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
                            onChange={(e) => setData("body", e.target.value)}
                        />
                    </div>
                    <div className="flex gap-10 my-4">
                        <div>
                            <div>POST</div>
                            <select
                                onChange={(e) =>
                                    setData("commentable_id", e.target.value)
                                }
                            >
                                <option>N/A</option>
                                {posts.map((post) => (
                                    <option key={post.id} value={post.id}>
                                        {post.id}
                                    </option>
                                ))}
                            </select>
                        </div>
                        <div>
                            <div>VIDEO</div>
                            <select
                                onChange={(e) =>
                                    setData("commentable_id", e.target.value)
                                }
                            >
                                <option>N/A</option>
                                {videos.map((video) => (
                                    <option key={video.id}>{video.id}</option>
                                ))}
                            </select>
                        </div>
                    </div>
                    <div>
                        <select
                            onChange={(e) =>
                                setData("commentable_type", e.target.value)
                            }
                        >
                            <option value="App\\Models\\Post">POST</option>
                            <option value="App\\Models\\Video">VIDEO</option>
                        </select>
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
