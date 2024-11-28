import React, { useState } from "react";

function AdminPage({ courses = [], setCourses }) {
  const [newCourseName, setNewCourseName] = useState("");
  const [newCourseDescription, setNewCourseDescription] = useState("");

  const handleAddCourse = () => {
    if (newCourseName && newCourseDescription) {
      const newCourse = {
        id: courses.length + 1,
        name: newCourseName,
        description: newCourseDescription,
      };
      setCourses([...courses, newCourse]);
      setNewCourseName("");
      setNewCourseDescription("");
    }
  };

  const handleDeleteCourse = (id) => {
    setCourses(courses.filter((course) => course.id !== id));
  };

  return (
    <div className="admin-container">
      <h2 className="text-3xl font-bold text-center mb-8">Admin Page</h2>
      <div className="mb-4">
        <input
          type="text"
          value={newCourseName}
          onChange={(e) => setNewCourseName(e.target.value)}
          placeholder="New Course Name"
          className="p-2 border rounded"
        />
        <input
          type="text"
          value={newCourseDescription}
          onChange={(e) => setNewCourseDescription(e.target.value)}
          placeholder="New Course Description"
          className="p-2 border rounded"
        />
        <button
          onClick={handleAddCourse}
          className="ml-2 bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600"
        >
          Add Course
        </button>
      </div>

      <div className="course-list">
        {courses.map((course) => (
          <div key={course.id} className="bg-white p-4 mb-2 rounded shadow">
            <h3 className="text-lg font-bold">{course.name}</h3>
            <p>{course.description}</p>
            <button
              onClick={() => handleDeleteCourse(course.id)}
              className="mt-2 bg-red-500 text-white py-1 px-2 rounded hover:bg-red-600"
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AdminPage;
