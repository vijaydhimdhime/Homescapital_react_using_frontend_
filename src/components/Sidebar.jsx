// // import { Link } from "react-router-dom";

// // const Sidebar = () => {
// //   return (
// //     <div className="w-64 h-screen bg-gray-800 text-white flex flex-col">
// //       <h2 className="text-xl font-bold p-4 border-b border-gray-700">Homes Capital</h2>
// //       <nav className="flex flex-col p-4 space-y-2">
// //         <Link to="/" className="hover:bg-gray-700 p-2 rounded">Dashboard</Link>
// //         <Link to="/applications" className="hover:bg-gray-700 p-2 rounded">Applications</Link>
// //         <Link to="/co-applicants" className="hover:bg-gray-700 p-2 rounded">Co-Applicants</Link>
// //         <Link to="/loans" className="hover:bg-gray-700 p-2 rounded">Loans</Link>
// //         <Link to="/payments" className="hover:bg-gray-700 p-2 rounded">Payments</Link>
// //         <Link to="/subsequents" className="hover:bg-gray-700 p-2 rounded">Subsequents</Link>
// //         <Link to="/vendors" className="hover:bg-gray-700 p-2 rounded">Vendors</Link>
// //       </nav>
// //     </div>
// //   );
// // };

// // export default Sidebar;

// import { Link } from "react-router-dom";
// import { FaTachometerAlt, FaFileAlt, FaUsers, FaMoneyCheckAlt, FaCreditCard, FaRedoAlt, FaStore } from "react-icons/fa";

// const Sidebar = () => {
//   return (
//     <div className="w-64 h-screen bg-indigo-700 text-white flex flex-col shadow-lg">
//       {/* Logo / Title */}
//       <div className="p-6 border-b border-indigo-600">
//         <h2 className="text-2xl font-bold text-center tracking-wide">Homes Capital</h2>
//       </div>

//       {/* Navigation Links */}
//       <nav className="flex flex-col p-4 space-y-2 flex-grow">
//         <Link to="/" className="flex items-center space-x-2 p-2 rounded hover:bg-gray-700">
//           <FaTachometerAlt />
//           <span>Dashboard</span>
//         </Link>
//         <Link to="/applications" className="flex items-center space-x-2 p-2 rounded hover:bg-gray-700">
//           <FaFileAlt />
//           <span>Applications</span>
//         </Link>
//         <Link to="/co-applicants" className="flex items-center space-x-2 p-2 rounded hover:bg-gray-700">
//           <FaUsers />
//           <span>Co-Applicants</span>
//         </Link>
//         <Link to="/loans" className="flex items-center space-x-2 p-2 rounded hover:bg-gray-700">
//           <FaMoneyCheckAlt />
//           <span>Loans</span>
//         </Link>
//         <Link to="/payments" className="flex items-center space-x-2 p-2 rounded hover:bg-gray-700">
//           <FaCreditCard />
//           <span>Payments</span>
//         </Link>
//         <Link to="/subsequents" className="flex items-center space-x-2 p-2 rounded hover:bg-gray-700">
//           <FaRedoAlt />
//           <span>Subsequents</span>
//         </Link>
//         <Link to="/vendors" className="flex items-center space-x-2 p-2 rounded hover:bg-gray-700">
//           <FaStore />
//           <span>Vendors</span>
//         </Link>
//       </nav>
//     </div>
//   );
// };

// export default Sidebar;


import { Link, useNavigate } from "react-router-dom";
import {
  FaTachometerAlt,
  FaFileAlt,
  FaUsers,
  FaMoneyCheckAlt,
  FaCreditCard,
  FaRedoAlt,
  FaStore,
  FaChartBar
} from "react-icons/fa";

const Sidebar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Implement your logout logic here
    console.log("Logging out...");
    navigate("/login");
  };

  return (
    <div className="w-64 h-screen bg-blue-900 text-white flex flex-col">
      {/* Header */}
      <h2 className="text-xl font-bold p-4 border-b border-gray-900">
        Homes Capital
      </h2>

      {/* Navigation */}
      <nav className="flex flex-col p-4 space-y-2 flex-grow">
        <Link to="/" className="flex items-center space-x-4 p-2 rounded hover:bg-red-700">
          <FaTachometerAlt />
          <span>Dashboard</span>
        </Link>
        <Link to="/applications" className="flex items-center space-x-4 p-2 rounded hover:bg-red-700">
          <FaFileAlt />
          <span>Applications</span>
        </Link>
        <Link to="/co-applicants" className="flex items-center space-x-4 p-2 rounded hover:bg-red-700">
          <FaUsers />
          <span>Co-Applicants</span>
        </Link>
        <Link to="/loans" className="flex items-center space-x-4 p-2 rounded hover:bg-red-700">
          <FaMoneyCheckAlt />
          <span>Loans</span>
        </Link>
        <Link to="/payments" className="flex items-center space-x-4 p-2 rounded hover:bg-red-700">
          <FaCreditCard />
          <span>Payments</span>
        </Link>
        <Link to="/subsequents" className="flex items-center space-x-4 p-2 rounded hover:bg-red-700">
          <FaRedoAlt />
          <span>Subsequents</span>
        </Link>
        <Link to="/vendors" className="flex items-center space-x-4 p-2 rounded hover:bg-red-700">
          <FaStore />
          <span>Vendors</span>
        </Link>
        <Link to="/reports" className="flex items-center space-x-4 p-2 rounded hover:bg-red-700">
          <FaChartBar />
          <span>Reports</span>
        </Link>
      </nav>

    </div>
  );
};

export default Sidebar;
