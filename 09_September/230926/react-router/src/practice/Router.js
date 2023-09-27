import {
  BrowserRouter,
  Routes,
  Route,
  createBrowserRouter,
} from "react-router-dom";
import App from "../App";
import NavBar from "./NavBar";
import Student from "./Student";

// ver 1.
export default function Router() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<NavBar />} />
          <Route path="/student/:name" element={<Student />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

// ver 2.
// const Router = createBrowserRouter([
//   {
//     path: "/",
//     element: <App />,
//     children: [
//       {
//         path: "",
//         element: <NavBar />,
//       },
//       {
//         path: "student",
//         element: <NavBar />,
//         children: [
//           {
//             path: "/kdt",
//             element: <Student />,
//           },
//           {
//             path: "/codingon",
//             element: <CodingOn />,
//           },
//           {
//             path: "/new",
//             element: <SearchParams />,
//           },
//         ],
//       },
//     ],
//   },
// ]);

// export default Router;
