import React, { useCallback } from "react";
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import appwriteService from "../../appwrite/config";
import { data, useNavigate } from "react-router-dom";
import Input from "../../components/Common/Input";
import Button from "../../components/Common/Button";
import RTE from "../../components/Common/RTE";
import Select from "../../components/Common/Select";

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
  const navigate = useNavigate();
  const UserData = useSelector((state) => state.user.UserData);
  const submit = async (data) => {
    if (post) {
      const file = data.image[0]
        ? appwriteService.uploadFile(data.image[0])
        : null;
      if (file) {
        appwriteService.deleteFile(post.featuredImage);
      }
      const dbPost = await appwriteService.uploadPost(post.$id, {
        ...data,
        featuredImage: file ? file.$id : undefined,
      });
      if (dbPost) {
        navigate(`/post/${dbPost.$id}`);
      } else {
        const file = await appwriteService.uploadFile(data.image[0]);

        if (file) {
          const file = file.$id;
          data.featuredImage = fileId;
          const dbPost = await appwriteService.createPost({
            ...data,
            userId: UserData.$id,
          });

          if (dbPost) {
            navigate(`/post/${dbPost.$id}`);
          }
        }
      }
    }
  };

  const slugTransform = useCallback((value) => {
    if (value && typeof value === "string") {
      return value
        .trim()
        .toLowerCase()
        .replace(/^[a-zA-Z\d\s]+/g, "-");
    }
    return "";
  }, []);

  React.useEffect(() => {
    const subscription = watch((value, { name }) => {
      if (name === "title") {
        setValue(
          "slug",
          slugTransform(value.title, {
            shouldValidata: true,
          })
        );
      }
    });
    return () => {
      subscription.unsubscribe();
    };
  }, [watch, slugTransform, setValue]);

  return (
    <>
      <form onSubmit={handleSubmit(submit)}>
        <Input
          label="Title : "
          placeholder="Title"
          className="border border-gray-300 rounded px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
          {...register("title", {
            required: true,
          })}
        />
        <Input
          label="Slug: "
          placeholder="Slug"
          className="border border-gray-300 rounded px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
          {...register("slug", {
            required: true,
          })}
          onInput={(e) => {
            setValue("slug", slugTransform(e.currentTarget.value), {
              shouldValidate: true,
            });
          }}
        />

        <RTE
          label="Featured Image : "
          type="file"
          className=""
          accept="img/png"
          {...register("image", {
            required: !post,
          })}
        />
        {post && (
          <div className="my-4 p-2 border rounded w-32 h-32">
            <img
              src="assets/logo.png"
              alt={post.title}
              className="w-full h-full object-cover rounded"
            />
          </div>
        )}
        <Select
          option={["active", "inactibve"]}
          label="Status"
          className=""
          {...register("status", {
            required: true,
          })}
        />
        <Button type="submit" bgColor={post ? "blue" : "green"} className="">
          {post ? "update" : "Submit"}
        </Button>
      </form>
    </>
  );
}

export default PostForm;
