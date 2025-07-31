import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import useRole from "../hooks/useRole"; // আপনার রোল চেক হুক
import Swal from "sweetalert2";

const ContentManagementPage = () => {
  const [blogs, setBlogs] = useState([]);
  const [statusFilter, setStatusFilter] = useState("all");
  const { role } = useRole();
  const navigate = useNavigate();

  // Load all blogs on mount and when filter changes
  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/blogs", {
          params: {
            status: statusFilter,
          },
        });
        setBlogs(res.data);
      } catch (error) {
        console.error("Failed to fetch blogs:", error);
      }
    };

    fetchBlogs();
  }, [statusFilter]);

  // Delete blog
  const handleDelete = async (id) => {
    const result = await Swal.fire({
      title: "Are you sure to delete this blog?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes",
      cancelButtonText: "No",
      position: "bottom",
      showClass: {
        popup: "animate__animated animate__fadeInUp",
      },
      hideClass: {
        popup: "animate__animated animate__fadeOutDown",
      },
    });

    if (!result.isConfirmed) return;

    try {
      await axios.delete(`http://localhost:5000/api/blogs/${id}`);
      setBlogs(blogs.filter((b) => b._id !== id));
    } catch (err) {
      Swal.fire("Error!", "Failed to delete blog", "error");
      console.error(err);
    }
  };


  // Toggle publish status (draft ↔ published)
  const handlePublishToggle = async (id) => {
    try {
      const blog = blogs.find((b) => b._id === id);
      const newStatus = blog.status === "published" ? "draft" : "published";
      await axios.patch(`http://localhost:5000/api/blogs/${id}/status`, { status: newStatus });
      setBlogs(blogs.map((b) => (b._id === id ? { ...b, status: newStatus } : b)));
    } catch (err) {
      Swal.fire("Success!", "Failed to update status", "success");
      console.error(err);
    }
  };

  // Navigate to Add/Edit blog page
  const handleEdit = (id) => {
    navigate(`/dashboard/content-management/add-blog${id ? `?id=${id}` : ""}`);
  };

  return (
    <div className="p-4 md:p-8 space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-red-600">📝 Manage Blog Content</h2>
        <button
          className="btn btn-primary"
          onClick={() => navigate("/dashboard/content-management/add-blog")}
        >
          ➕ Add New Blog
        </button>
      </div>

      {/* Filter */}
      <div className="form-control w-48">
        <label className="label">
          <span className="label-text font-semibold">Filter by Status</span>
        </label>
        <select
          value={statusFilter}
          onChange={(e) => setStatusFilter(e.target.value)}
          className="select select-bordered"
        >
          <option value="all">All</option>
          <option value="draft">Draft</option>
          <option value="published">Published</option>
        </select>
      </div>

      {/* Blog Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {blogs.length > 0 ? (
          blogs.map((blog) => (
            <div
              key={blog._id}
              className="card bg-white shadow-md border border-gray-200 rounded-lg"
            >
              <figure>
                {blog.image ? (
                  <img
                    src={blog.image}
                    alt={blog.title}
                    className="w-full h-48 object-cover rounded-t-lg"
                  />
                ) : (
                  <div className="w-full h-48 bg-gray-200 flex items-center justify-center rounded-t-lg text-gray-500 italic">
                    No image available
                  </div>
                )}
              </figure>

              <div className="card-body space-y-2">
                <h2 className="card-title text-lg font-semibold">{blog.title}</h2>
                <p className="text-gray-600 line-clamp-3">
                  {blog.summary || (blog.content && blog.content.substring(0, 100) + "...")}
                </p>
                <p className="text-sm text-gray-500">
                  Status:{" "}
                  <span
                    className={`font-semibold ${blog.status === "published" ? "text-green-600" : "text-yellow-600"
                      }`}
                  >
                    {blog.status}
                  </span>
                </p>

                <div className="flex gap-2 mt-3 flex-wrap">
                  <button onClick={() => handleEdit(blog._id)} className="btn btn-outline btn-sm">
                    ✏️ Edit
                  </button>

                  {role === "admin" && (
                    <>
                      <button
                        onClick={() => handlePublishToggle(blog._id)}
                        className={`btn btn-sm ${blog.status === "draft" ? "btn-success" : "btn-warning"
                          }`}
                      >
                        {blog.status === "draft" ? "Publish" : "Unpublish"}
                      </button>
                      <button
                        onClick={() => handleDelete(blog._id)}
                        className="btn btn-error btn-sm"
                      >
                        Delete
                      </button>
                    </>
                  )}
                </div>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-500 col-span-full">No blog posts found.</p>
        )}
      </div>
    </div>
  );
};

export default ContentManagementPage;
