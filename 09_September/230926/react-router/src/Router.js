import {
  BrowserRouter,
  Routes,
  Route,
  createBrowserRouter,
} from "react-router-dom";
import Header from "./router/Header";
import Home from "./router/Home";
import About from "./router/About";
import User from "./router/User";
import NotFound from "./router/NotFound";
import Redirect from "./router/Redirect";
import UserDetail from "./router/UserDetail";
import Error from "./router/Error";
import App from "./App";
import Comment from "./router/Comment";

// ver 1.
// export default function Router() {
//   return (
//     <>
//       <BrowserRouter>
//         <Header />
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/about" element={<About />} />
//           <Route path="/user" element={<User />} />
//           <Route path="/user/:userId" element={<UserDetail />} />
//           <Route path="/redirect" element={<Redirect />} />
//           <Route path="*" element={<NotFound />} />
//         </Routes>
//       </BrowserRouter>
//     </>
//   );
// }

// ver 2.
const Router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <Home />,
        errorElement: <Error />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "redirect",
        element: <Redirect />,
      },
    ],
    errorElement: <NotFound />,
  },
  {
    path: "/user",
    element: <App />,
    children: [
      {
        path: "",
        element: <User />,
      },
      {
        path: ":userId",
        element: <UserDetail />,
        children: [
          {
            path: "comment",
            element: <Comment />,
          },
        ],
      },
      {
        path: "redirect",
        element: <Redirect />,
      },
    ],
  },
]);

export default Router;
