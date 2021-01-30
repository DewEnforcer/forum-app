import {useEffect, useState} from "react";
import postservice from "./../services/postservice";
import postService from './../services/postservice';

export function usePost (id, isPreview = false) {
    const [post, setPost] = useState();

    const fetchPost = async () => {
        const {data} = isPreview ? await postService.getPostPreviewById(id) : await postservice.getPostById(id);
        setPost(data);
    }

    useEffect(() => {
        fetchPost();
    }, [])

    return [post, setPost];
}