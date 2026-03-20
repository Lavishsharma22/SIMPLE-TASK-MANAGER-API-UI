# 🚀 Task Manager Web App

A full-stack Task Manager application that allows users to create, update, delete, and mark tasks as completed. The project is built using Django REST Framework for the backend and HTML, CSS, and JavaScript for the frontend.

---

## ✨ Features

- ➕ Create new tasks
- 📋 View all tasks
- ✏️ Update existing tasks
- 🗑 Delete tasks
- ✅ Toggle task completion status
- 🎨 Modern animated dark UI

---

## 🛠 Tech Stack

- **Backend:** Django, Django REST Framework  
- **Frontend:** HTML, CSS, JavaScript  
- **Database:** SQLite  

---

## 🔗 API Endpoints

- `GET /api/tasks/` → Get all tasks  
- `POST /api/tasks/create/` → Create a task  
- `PUT /api/tasks/update/<id>/` → Update task  
- `DELETE /api/tasks/delete/<id>/` → Delete task  
- `PATCH /api/tasks/toggle/<id>/` → Toggle task status  

---

## ✅ Validation

- Task title cannot be empty (handled in backend and frontend)

---

## 🎨 UI Highlights

- Dark mode design  
- Glassmorphism effects  
- Smooth animations  
- Responsive layout  

---

## 📦 Setup Instructions

1. Clone the repository:
```bash
git clone <your-repo-link>
cd backend
