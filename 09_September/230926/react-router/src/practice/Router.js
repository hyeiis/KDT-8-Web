import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./NavBar";
import Student from "./Student";
import CodingOn from "./Codingon";
import SearchParams from "./SearchParams";

// ver 1.
export default function Router() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<NavBar />} />
          <Route path="/student/kdt" element={<Student />} />
          <Route path="/student/codingon" element={<CodingOn />} />
          <Route path="/student/new" element={<SearchParams />} />
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
//         element: <Home />,
//         errorElement: <Error />,
//       },
//       {
//         path: "about",
//         element: <About />,
//       },
//       {
//         path: "redirect",
//         element: <Redirect />,
//       },
//     ],
//     errorElement: <NotFound />,
//   },
//   {
//     path: "/user",
//     element: <App />,
//     children: [
//       {
//         path: "",
//         element: <User />,
//       },
//       {
//         path: ":userId",
//         element: <UserDetail />,
//         children: [
//           {
//             path: "comment",
//             element: <Comment />,
//           },
//         ],
//       },
//       {
//         path: "redirect",
//         element: <Redirect />,
//       },
//     ],
//   },
// ]);

// export default Router;
