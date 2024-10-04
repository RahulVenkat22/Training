import { createBrowserRouter, RouterProvider } from "react-router-dom";
import TableUser from "./pages/Tables/TableUser";

const router = createBrowserRouter([
  {
    path: "/",
    element: <p>Hello</p>,
  },
  {
    path : '/user',
    element : <TableUser />
  }
]);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
