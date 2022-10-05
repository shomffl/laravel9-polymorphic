import React from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/inertia-react";
import { Inertia } from "@inertiajs/inertia";

const Index = (props) => {
    const { posts, videos } = props;
    console.log(posts);
    return (
        <AuthenticatedLayout
            auth={props.auth}
            errors={props.errors}
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Index
                </h2>
            }
        >
            <Head title="Dashboard" />

            <div className="py-12 px-10">
                <div className="flex gap-4">
                    <button
                        className="px-2 py-1 bg-indigo-600 text-white rounded "
                        onClick={(e) => Inertia.get(route("posts.create"))}
                    >
                        POST CREATE
                    </button>
                    <button
                        className="px-2 py-1 bg-red-600 text-white rounded "
                        onClick={(e) => Inertia.get(route("videos.create"))}
                    >
                        VIDEO CREATE
                    </button>
                    <button
                        className="px-2 py-1 bg-blue-600 text-white rounded "
                        onClick={(e) => Inertia.get(route("comments.create"))}
                    >
                        COMMENT CREATE
                    </button>
                </div>

                {posts.map((post) => (
                    <div key={post.id} className="flex">
                        <div className="bg-white w-max px-10 py-5 m-4 rounded-lg shadow-lg">
                            <div className="text-red-500">post</div>
                            <div>{post.title}</div>
                            <div>{post.body}</div>
                        </div>

                        {post.comments.map((comment) => (
                            <div
                                className="bg-white w-max px-10 py-5 m-4 rounded-lg shadow-lg"
                                id={comment.id}
                            >
                                {comment.body}
                            </div>
                        ))}
                    </div>
                ))}

                {videos.map((video) => (
                    <div key={video.id} className="flex">
                        <div className="bg-white w-max px-10 py-5 m-4 rounded-lg shadow-lg">
                            <div className="text-red-500">video</div>
                            <div>{video.title}</div>
                            <div>{video.body}</div>
                        </div>
                        {video.comments.map((comment) => (
                            <div
                                className="bg-white w-max px-10 py-5 m-4 rounded-lg shadow-lg"
                                id={comment.id}
                            >
                                {comment.body}
                            </div>
                        ))}
                    </div>
                ))}
            </div>
        </AuthenticatedLayout>
    );
};

export default Index;
