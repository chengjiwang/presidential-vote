import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import HomePage from './pages/Home.jsx';
import VotePage from './pages/Vote.jsx';

// import './App.css'
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

const router = createBrowserRouter([
  { path: '/', element: <HomePage /> },
  { path: '/vote/:voteId', element: <VotePage /> },
]);

function App() {
  return <RouterProvider router={router} />
}

export default App
