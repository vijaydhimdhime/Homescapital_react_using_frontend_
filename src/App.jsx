// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Sidebar from "./components/Sidebar";
// import Dashboard from "./pages/Dashboard";
// //import Application from "./pages/Application";
// import CoApplicant from "./pages/CoApplicant";
// import Loan from "./pages/Loan";
// import Payment from "./pages/Payment";
// import Subsequent from "./pages/Subsequent";
// import Vendor from "./pages/Vendor";
// import ApplicationList from './pages/ApplicationList';

// function App() {
//   return (
//     <Router>
//       <div className="flex">
//         <Sidebar />
//         <div className="p-6 w-full">
//           <Routes>
//             <Route path="/" element={<Dashboard />} />
//             {/* <Route path="/applications/new" element={<Application />} /> */}
//             <Route path="/applications" element={<ApplicationList />} />
//             <Route path="/co-applicants" element={<CoApplicant />} />
//             <Route path="/loans" element={<Loan />} />
//             <Route path="/payments" element={<Payment />} />
//             <Route path="/subsequents" element={<Subsequent />} />
//             <Route path="/vendors" element={<Vendor />} />
//           </Routes>
//         </div>
//       </div>
//     </Router>
//   );
// }

// export default App;

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Dashboard from "./pages/Dashboard";
import Application from "./pages/Application";
import CoApplicant from "./pages/CoApplicant";
import Loan from "./pages/Loan";
import Payment from "./pages/Payment";
import Subsequent from "./pages/Subsequent";
import Vendor from "./pages/Vendor";
import ApplicationList from "./pages/ApplicationList";
import ApplicationForm from "./pages/ApplicationForm";
import ApplicationDetails from "./pages/ApplicationDetails";

function App() {
  return (
    <Router>
      <div className="flex h-screen overflow-hidden">
        {/* Sidebar fixed on the left */}
        <div className="w-64 bg-gray-800 text-white fixed h-full z-10">
          <Sidebar />
        </div>

        {/* Main content offset to the right of sidebar */}
        <div className="flex-1 ml-64 overflow-auto p-6">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/applications" element={<ApplicationList />} />
            <Route path="/applications/new" element={<ApplicationForm />} />
            <Route
              path="/applications/:id/edit"
              element={<ApplicationForm />}
            />
            <Route path="/applications/:id" element={<ApplicationDetails />} />
            <Route path="/co-applicants" element={<CoApplicant />} />
            <Route path="/loans" element={<Loan />} />
            <Route path="/payments" element={<Payment />} />
            <Route path="/subsequents" element={<Subsequent />} />
            <Route path="/vendors" element={<Vendor />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
