import { useEffect, useState } from "react";
import "./TaskDashboard.css";

const API_URL = import.meta.env.VITE_API_URL;

function TaskDashboard({ setShowDashboard }) {
  const [tasks, setTasks] = useState([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [loading, setLoading] = useState(true);

  // GET ALL TASKS
  const fetchTasks = async () => {
    try {
      const response = await fetch(API_URL);
      const data = await response.json();

      setTasks(data);
    } catch (error) {
      console.error("Error fetching tasks:", error);
    } finally {
      setLoading(false);
    }
  };

  // Load tasks when dashboard opens
  useEffect(() => {
    fetchTasks();
  }, []);

  // CREATE TASK
  const addTask = async (e) => {
    e.preventDefault();

    if (!title.trim()) {
      return;
    }

    try {
      const response = await fetch(API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title,
          description,
        }),
      });

      const newTask = await response.json();

      setTasks([newTask, ...tasks]);

      setTitle("");
      setDescription("");

    } catch (error) {
      console.error("Error creating task:", error);
    }
  };

  // UPDATE TASK STATUS
  const toggleTask = async (task) => {
    try {
      const response = await fetch(
        `${API_URL}/${task._id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            completed: !task.completed,
          }),
        }
      );

      const updatedTask = await response.json();

      setTasks(
        tasks.map((taskItem) =>
          taskItem._id === updatedTask._id
            ? updatedTask
            : taskItem
        )
      );

    } catch (error) {
      console.error("Error updating task:", error);
    }
  };

  // DELETE TASK
  const deleteTask = async (id) => {
    try {
      await fetch(`${API_URL}/${id}`, {
        method: "DELETE",
      });

      setTasks(
        tasks.filter((task) => task._id !== id)
      );

    } catch (error) {
      console.error("Error deleting task:", error);
    }
  };

  return (
    <div className="dashboard">

      <header className="dashboard-header">
        <div>
          <h1>My Tasks</h1>
          <p>Stay organized and get things done.</p>
        </div>

        <button
          className="back-button"
          onClick={() => setShowDashboard(false)}
        >
          ← Home
        </button>
      </header>


      <div className="dashboard-container">

        {/* ADD TASK FORM */}

        <div className="task-form-container">

          <h2>Add New Task</h2>

          <form onSubmit={addTask}>

            <input
              type="text"
              placeholder="Task title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />

            <textarea
              placeholder="Task description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />

            <button type="submit">
              + Add Task
            </button>

          </form>

        </div>


        {/* TASK LIST */}

        <div className="task-list">

          <h2>Your Tasks</h2>

          {loading ? (

            <p className="empty-message">
              Loading tasks...
            </p>

          ) : tasks.length === 0 ? (

            <p className="empty-message">
              No tasks yet. Add your first task!
            </p>

          ) : (

            tasks.map((task) => (

              <div
                className={`task-card ${
                  task.completed ? "completed" : ""
                }`}
                key={task._id}
              >

                <div className="task-content">

                  <input
                    type="checkbox"
                    checked={task.completed}
                    onChange={() => toggleTask(task)}
                  />

                  <div>

                    <h3>{task.title}</h3>

                    <p>{task.description}</p>

                  </div>

                </div>

                <button
                  className="delete-button"
                  onClick={() => deleteTask(task._id)}
                >
                  Delete
                </button>

              </div>

            ))

          )}

        </div>

      </div>

    </div>
  );
}

export default TaskDashboard;