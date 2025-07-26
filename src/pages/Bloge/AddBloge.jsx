import axios from "axios";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";

export default function AddBloge() {
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = async (data) => {
    try {
      const res = await axios.post("http://localhost:5000/api/blogs", data);
      console.log(res.data);

      // SweetAlert success
      Swal.fire({
        icon: "success",
        title: "Blog submitted!",
        text: "Your blog has been successfully posted.",
        confirmButtonColor: "#3085d6",
      });

      reset();
    } catch (error) {
      console.error(error);

      // SweetAlert error
      Swal.fire({
        icon: "error",
        title: "Oops!",
        text: "Failed to submit blog. Please try again.",
        confirmButtonColor: "#d33",
      });
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="max-w-xl mx-auto space-y-4 p-4 border rounded">
      <input {...register("title")} placeholder="Title" className="w-full p-2 border rounded" />
      <input {...register("author")} placeholder="Author" className="w-full p-2 border rounded" />
      <input {...register("image")} placeholder="Image URL" className="w-full p-2 border rounded" />
      <textarea {...register("content")} placeholder="Blog content" className="w-full p-2 border rounded h-40" />
      <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">Submit Blog</button>
    </form>
  );
}
