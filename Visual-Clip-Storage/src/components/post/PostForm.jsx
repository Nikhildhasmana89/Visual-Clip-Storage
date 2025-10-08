import React from "react";
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import appwriteService from "../../appwrite/config"
import { data, useNavigate } from "react-router-dom";

function PostForm(Post) {
  const { register, handleSubmit, watch, setValue, control, getValue } =
    useForm({
      defaultValues: {
        title: Post?.title || "",
        slug: post?.slug || "",
        content: post?.content || "",
        status: post?.status || "active",
      },
    });
    const navigate = useNavigate()
    const UserData = useSelector(state => state.user.UserData)
    const submit = async(data) => {
        if (post) {
           const file = data.image[0] ? appwriteService.uploadFile(data.image[0]) : null
           if (file) {
                appwriteService.deleteFile(post.featuredImage)
           }
        }
    }
  return <div></div>;
}

export default PostForm;
