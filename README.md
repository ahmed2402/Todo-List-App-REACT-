# Listify

**Listify** is a simple and intuitive task management app designed to help you organize your tasks, stay productive, and simplify your life. Built with React and Tailwind CSS, it features a clean UI, functionality to manage your todos, and local storage support to persist tasks.

## Features

- **Add New Tasks**: Quickly create tasks and stay organized.
- **Edit Tasks**: Update task descriptions to reflect changes.
- **Delete Tasks**: Remove tasks when they're no longer needed.
- **Mark Tasks as Complete**: Keep track of what you've accomplished with the checkbox feature.
- **Show/Hide Completed Tasks**: Toggle between viewing all tasks or only incomplete ones.
- **Local Storage**: Automatically saves tasks in your browser for persistence.
- **Responsive Design**: Designed for both mobile and desktop devices.

## Technologies Used

- **React**: For building the UI and handling state.
- **Tailwind CSS**: For styling the application.
- **React Icons**: For adding intuitive icons (Edit and Delete).
- **UUID**: For generating unique IDs for each task.
- **Local Storage**: For saving and persisting tasks across sessions.

## Installation and Setup

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd listify
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open the app in your browser:
   ```
   http://localhost:5173
   ```

## Live Demo

The application is deployed on **Vercel**. You can access the live version [here](https://todo-list-app-react-6rel.vercel.app/).

## Usage

1. Add a new task by typing in the input box and clicking the **Save** button.
2. Mark tasks as complete by checking the box next to them.
3. Edit a task by clicking the **Edit** button (pencil icon).
4. Delete a task by clicking the **Delete** button (trash icon).
5. Use the **Show Finished** checkbox to toggle the visibility of completed tasks.

## Folder Structure

```
├── public
│   └── vite.svg
├── src
│   ├── assets
│   │   └── react.svg
│   ├── components
│   │   └── Navbar.jsx
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── .gitignore
├── package.json
├── tailwind.config.js
└── vite.config.js
```

## Contributing

Contributions are welcome! Feel free to fork this repository and submit pull requests. For major changes, please open an issue first to discuss what you would like to change.

## Acknowledgements

- [React](https://reactjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [React Icons](https://react-icons.github.io/react-icons/)
- [UUID](https://www.npmjs.com/package/uuid)
- [Vercel](https://vercel.com/) for deployment
