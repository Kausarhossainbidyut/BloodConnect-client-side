import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import useRole from "../hooks/useRole";

const ContentManagementPage = () => {
  const [blogs, setBlogs] = useState([]);
  const [statusFilter, setStatusFilter] = useState("all");
  const { role } = useRole();
  const navigate = useNavigate();

  // Fetch all blogs from backend
  useEffect(() => {
    axios
      .get("http://localhost:5000/api/blogs")
      .then((res) => {
        setBlogs(res.data);
      })
      .catch(console.error);
  }, []);

  // Filter blogs by status: all, draft, or published
  const filteredBlogs = blogs.filter((blog) =>
    statusFilter === "all" ? true : blog.status === statusFilter
  );

  // Delete a blog by ID
  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this blog?")) return;
    try {
      await axios.delete(`http://localhost:5000/api/blogs/${id}`);
      setBlogs(blogs.filter((b) => b._id !== id));
    } catch (error) {
      alert("Failed to delete blog");
    }
  };

  // Toggle blog publish/unpublish
  const handlePublishToggle = async (id, currentStatus) => {
    const newStatus = currentStatus === "published" ? "draft" : "published";
    try {
      await axios.patch(`http://localhost:5000/api/blogs/${id}/status`, {
        status: newStatus,
      });
      setBlogs((prevBlogs) =>
        prevBlogs.map((b) =>
          b._id === id ? { ...b, status: newStatus } : b
        )
      );
    } catch (error) {
      alert("Failed to update blog status");
    }
  };

  // Navigate to Edit blog
  const handleEdit = (id) => {
    navigate(`/dashboard/content-management/add-blog?id=${id}`);
  };

  return (
    <div className="p-4 md:p-8 space-y-6">
      <div className="flex flex-col md:flex-row justify-between items-center gap-4">
        <h2 className="text-2xl font-bold text-red-600">
          📝 Manage Blog Content
        </h2>
        <button
          onClick={() => navigate("/dashboard/content-management/add-blog")}
          className="btn btn-primary btn-sm md:btn-md"
        >
          ➕ Add New Blog
        </button>
      </div>

      <div className="form-control w-full max-w-xs">
        <label className="label">
          <span className="label-text font-semibold">Filter by status</span>
        </label>
        <select
          className="select select-bordered"
          value={statusFilter}
          onChange={(e) => setStatusFilter(e.target.value)}
        >
          <option value="all">All</option>
          <option value="draft">Draft</option>
          <option value="published">Published</option>
        </select>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {filteredBlogs.length === 0 ? (
          <p className="col-span-full text-center text-gray-500">
            😕 No blog posts found for this filter.
          </p>
        ) : (
          filteredBlogs.map((blog) => (
            <div
              key={blog._id}
              className="card bg-white shadow-md border border-gray-200 rounded-lg"
            >
              <figure>
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-48 object-cover rounded-t-lg"
                />
              </figure>
              <div className="card-body space-y-2 p-4">
                <h2 className="card-title text-lg">{blog.title}</h2>
                <p className="text-gray-600">
                  {blog.summary?.slice(0, 100)}...
                </p>
                <p className="text-sm text-gray-500">
                  Status:{" "}
                  <span
                    className={`font-semibold ${
                      blog.status === "published"
                        ? "text-green-600"
                        : "text-yellow-600"
                    }`}
                  >
                    {blog.status}
                  </span>
                </p>

                <div className="flex flex-wrap gap-2 mt-3">
                  <button
                    onClick={() => handleEdit(blog._id)}
                    className="btn btn-outline btn-sm"
                  >
                    ✏️ Edit
                  </button>

                  {role === "admin" && (
                    <>
                      <button
                        onClick={() =>
                          handlePublishToggle(blog._id, blog.status)
                        }
                        className={`btn btn-sm ${
                          blog.status === "draft"
                            ? "btn-success"
                            : "btn-warning"
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
        )}
      </div>
    </div>
  );
};

export default ContentManagementPage;