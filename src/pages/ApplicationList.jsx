// // // // // // // // import React, { useEffect, useState } from 'react';
// // // // // // // // import axios from 'axios';
// // // // // // // // import { useTable, useSortBy, usePagination, useGlobalFilter } from 'react-table';

// // // // // // // // function ApplicationList() {
// // // // // // // //   const [data, setData] = useState([]);
// // // // // // // //   const [columns, setColumns] = useState([]);

// // // // // // // //   useEffect(() => {
// // // // // // // //     axios.get('http://127.0.0.1:8000/api/applications/')
// // // // // // // //       .then(res => {
// // // // // // // //         const applications = res.data.data.results;

// // // // // // // //         // Set data
// // // // // // // //         setData(applications);

// // // // // // // //         // Generate columns dynamically
// // // // // // // //         if (applications.length > 0) {
// // // // // // // //           const dynamicColumns = Object.keys(applications[0]).map(key => ({
// // // // // // // //             Header: key.replace(/_/g, ' ').replace(/\b\w/g, char => char.toUpperCase()),
// // // // // // // //             accessor: key
// // // // // // // //           }));
// // // // // // // //           setColumns(dynamicColumns);
// // // // // // // //         }
// // // // // // // //       })
// // // // // // // //       .catch(err => console.error("Error fetching data:", err));
// // // // // // // //   }, []);

// // // // // // // //   const {
// // // // // // // //     getTableProps,
// // // // // // // //     getTableBodyProps,
// // // // // // // //     headerGroups,
// // // // // // // //     page,
// // // // // // // //     prepareRow,
// // // // // // // //     nextPage,
// // // // // // // //     previousPage,
// // // // // // // //     canNextPage,
// // // // // // // //     canPreviousPage,
// // // // // // // //     pageOptions,
// // // // // // // //     state: { pageIndex },
// // // // // // // //   } = useTable({ columns, data, initialState: { pageSize: 10 } }, useGlobalFilter, useSortBy, usePagination);

// // // // // // // //   return (
// // // // // // // //     <div className="p-4">
// // // // // // // //       <h2 className="text-xl font-semibold mb-4">Applications</h2>
// // // // // // // //       <table {...getTableProps()} className="min-w-full bg-white border">
// // // // // // // //         <thead>
// // // // // // // //           {headerGroups.map(headerGroup => (
// // // // // // // //             <tr {...headerGroup.getHeaderGroupProps()} className="bg-gray-200">
// // // // // // // //               {headerGroup.headers.map(column => (
// // // // // // // //                 <th {...column.getHeaderProps(column.getSortByToggleProps())} className="p-2 border text-left">
// // // // // // // //                   {column.render('Header')}
// // // // // // // //                   <span>{column.isSorted ? (column.isSortedDesc ? ' 🔽' : ' 🔼') : ''}</span>
// // // // // // // //                 </th>
// // // // // // // //               ))}
// // // // // // // //             </tr>
// // // // // // // //           ))}
// // // // // // // //         </thead>
// // // // // // // //         <tbody {...getTableBodyProps()}>
// // // // // // // //           {page.map(row => {
// // // // // // // //             prepareRow(row);
// // // // // // // //             return (
// // // // // // // //               <tr {...row.getRowProps()} className="border-b">
// // // // // // // //                 {row.cells.map(cell => (
// // // // // // // //                   <td {...cell.getCellProps()} className="p-2 border">
// // // // // // // //                     {cell.render('Cell')}
// // // // // // // //                   </td>
// // // // // // // //                 ))}
// // // // // // // //               </tr>
// // // // // // // //             );
// // // // // // // //           })}
// // // // // // // //         </tbody>
// // // // // // // //       </table>

// // // // // // // //       {/* Pagination */}
// // // // // // // //       <div className="flex items-center justify-between mt-4">
// // // // // // // //         <button onClick={() => previousPage()} disabled={!canPreviousPage} className="px-4 py-2 bg-gray-300 rounded">
// // // // // // // //           Previous
// // // // // // // //         </button>
// // // // // // // //         <span>Page {pageIndex + 1} of {pageOptions.length}</span>
// // // // // // // //         <button onClick={() => nextPage()} disabled={!canNextPage} className="px-4 py-2 bg-gray-300 rounded">
// // // // // // // //           Next
// // // // // // // //         </button>
// // // // // // // //       </div>
// // // // // // // //     </div>
// // // // // // // //   );
// // // // // // // // }

// // // // // // // // export default ApplicationList;

// // // // // // // import React, { useEffect, useState } from "react";
// // // // // // // import axios from "axios";
// // // // // // // import {
// // // // // // //   Table,
// // // // // // //   TableBody,
// // // // // // //   TableCell,
// // // // // // //   TableContainer,
// // // // // // //   TableHead,
// // // // // // //   TableRow,
// // // // // // //   Paper,
// // // // // // //   TableSortLabel,
// // // // // // //   TablePagination,
// // // // // // // } from "@mui/material";

// // // // // // // function ApplicationList() {
// // // // // // //   const [data, setData] = useState([]);
// // // // // // //   const [columns, setColumns] = useState([]);
// // // // // // //   const [order, setOrder] = useState("asc");
// // // // // // //   const [orderBy, setOrderBy] = useState("");
// // // // // // //   const [page, setPage] = useState(0);
// // // // // // //   const [rowsPerPage, setRowsPerPage] = useState(10);

// // // // // // //   // Fetch data once
// // // // // // //   useEffect(() => {
// // // // // // //     axios
// // // // // // //       .get("http://127.0.0.1:8000/api/applications/")
// // // // // // //       .then((res) => {
// // // // // // //         const applications = res.data.data.results;
// // // // // // //         setData(applications);
// // // // // // //         if (applications.length > 0) {
// // // // // // //           const dynamicColumns = Object.keys(applications[0]).map((key) => ({
// // // // // // //             id: key,
// // // // // // //             label: key.replace(/_/g, " ").replace(/\b\w/g, (char) => char.toUpperCase()),
// // // // // // //           }));
// // // // // // //           setColumns(dynamicColumns);
// // // // // // //           setOrderBy(dynamicColumns[0].id);
// // // // // // //         }
// // // // // // //       })
// // // // // // //       .catch((err) => console.error("Error fetching data:", err));
// // // // // // //   }, []);

// // // // // // //   // Sorting handler
// // // // // // //   const handleRequestSort = (property) => {
// // // // // // //     const isAsc = orderBy === property && order === "asc";
// // // // // // //     setOrder(isAsc ? "desc" : "asc");
// // // // // // //     setOrderBy(property);
// // // // // // //   };

// // // // // // //   // Pagination handlers
// // // // // // //   const handleChangePage = (event, newPage) => {
// // // // // // //     setPage(newPage);
// // // // // // //   };
// // // // // // //   const handleChangeRowsPerPage = (event) => {
// // // // // // //     setRowsPerPage(parseInt(event.target.value, 10));
// // // // // // //     setPage(0);
// // // // // // //   };

// // // // // // //   // Sort data function
// // // // // // //   const stableSort = (array, comparator) => {
// // // // // // //     const stabilizedThis = array.map((el, index) => [el, index]);
// // // // // // //     stabilizedThis.sort((a, b) => {
// // // // // // //       const order = comparator(a[0], b[0]);
// // // // // // //       if (order !== 0) return order;
// // // // // // //       return a[1] - b[1];
// // // // // // //     });
// // // // // // //     return stabilizedThis.map((el) => el[0]);
// // // // // // //   };

// // // // // // //   // Comparator generator
// // // // // // //   const getComparator = (order, orderBy) => {
// // // // // // //     return order === "desc"
// // // // // // //       ? (a, b) => descendingComparator(a, b, orderBy)
// // // // // // //       : (a, b) => -descendingComparator(a, b, orderBy);
// // // // // // //   };

// // // // // // //   const descendingComparator = (a, b, orderBy) => {
// // // // // // //     if (b[orderBy] < a[orderBy]) {
// // // // // // //       return -1;
// // // // // // //     }
// // // // // // //     if (b[orderBy] > a[orderBy]) {
// // // // // // //       return 1;
// // // // // // //     }
// // // // // // //     return 0;
// // // // // // //   };

// // // // // // //   // Paginated and sorted data
// // // // // // //   const sortedData = stableSort(data, getComparator(order, orderBy));
// // // // // // //   const paginatedData = sortedData.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage);

// // // // // // //   return (
// // // // // // //     <div className="p-4">
// // // // // // //       <h2 className="text-xl font-semibold mb-4">Applications</h2>

// // // // // // //       <TableContainer component={Paper} sx={{ maxHeight: 600 }}>
// // // // // // //         <Table stickyHeader aria-label="applications table">
// // // // // // //           <TableHead>
// // // // // // //             <TableRow>
// // // // // // //               {columns.map((column) => (
// // // // // // //                 <TableCell
// // // // // // //                   key={column.id}
// // // // // // //                   sortDirection={orderBy === column.id ? order : false}
// // // // // // //                   sx={{ fontWeight: "bold" }}
// // // // // // //                 >
// // // // // // //                   <TableSortLabel
// // // // // // //                     active={orderBy === column.id}
// // // // // // //                     direction={orderBy === column.id ? order : "asc"}
// // // // // // //                     onClick={() => handleRequestSort(column.id)}
// // // // // // //                   >
// // // // // // //                     {column.label}
// // // // // // //                   </TableSortLabel>
// // // // // // //                 </TableCell>
// // // // // // //               ))}
// // // // // // //             </TableRow>
// // // // // // //           </TableHead>

// // // // // // //           <TableBody>
// // // // // // //             {paginatedData.map((row, idx) => (
// // // // // // //               <TableRow
// // // // // // //                 key={idx}
// // // // // // //                 sx={{
// // // // // // //                   background: "#f5f5f5",
// // // // // // //                   borderRadius: "12px",
// // // // // // //                   boxShadow:
// // // // // // //                     "0 4px 8px rgba(0, 0, 0, 0.2), 0 6px 20px rgba(0, 0, 0, 0.19)",
// // // // // // //                   transition: "transform 0.3s ease",
// // // // // // //                   "&:hover": {
// // // // // // //                     transform: "translateZ(10px) scale(1.03)",
// // // // // // //                     boxShadow:
// // // // // // //                       "0 10px 20px rgba(0, 0, 0, 0.3), 0 12px 40px rgba(0, 0, 0, 0.25)",
// // // // // // //                     background: "white",
// // // // // // //                   },
// // // // // // //                 }}
// // // // // // //               >
// // // // // // //                 {columns.map((column) => (
// // // // // // //                   <TableCell key={column.id}>
// // // // // // //                     {typeof row[column.id] === "boolean"
// // // // // // //                       ? row[column.id].toString()
// // // // // // //                       : row[column.id]}
// // // // // // //                   </TableCell>
// // // // // // //                 ))}
// // // // // // //               </TableRow>
// // // // // // //             ))}
// // // // // // //           </TableBody>
// // // // // // //         </Table>
// // // // // // //       </TableContainer>

// // // // // // //       <TablePagination
// // // // // // //         component="div"
// // // // // // //         count={data.length}
// // // // // // //         page={page}
// // // // // // //         onPageChange={handleChangePage}
// // // // // // //         rowsPerPage={rowsPerPage}
// // // // // // //         onRowsPerPageChange={handleChangeRowsPerPage}
// // // // // // //         rowsPerPageOptions={[5, 10, 25]}
// // // // // // //       />
// // // // // // //     </div>
// // // // // // //   );
// // // // // // // }

// // // // // // // export default ApplicationList;

// // // // // import React, { useEffect, useState } from "react";
// // // // // import axios from "axios";
// // // // // import {
// // // // //   Table,
// // // // //   TableBody,
// // // // //   TableCell,
// // // // //   TableContainer,
// // // // //   TableHead,
// // // // //   TableRow,
// // // // //   Paper,
// // // // //   TableSortLabel,
// // // // //   TablePagination,
// // // // //   Typography,
// // // // //   Box,
// // // // // } from "@mui/material";

// // // // // function ApplicationList() {
// // // // //   const [data, setData] = useState([]);
// // // // //   const [columns, setColumns] = useState([]);
// // // // //   const [order, setOrder] = useState("asc");
// // // // //   const [orderBy, setOrderBy] = useState("");
// // // // //   const [page, setPage] = useState(0);
// // // // //   const [rowsPerPage, setRowsPerPage] = useState(10);

// // // // //   useEffect(() => {
// // // // //     axios
// // // // //       .get("http://127.0.0.1:8000/api/applications/")
// // // // //       .then((res) => {
// // // // //         const applications = res.data.data.results;
// // // // //         setData(applications);
// // // // //         if (applications.length > 0) {
// // // // //           const dynamicColumns = Object.keys(applications[0]).map((key) => ({
// // // // //             id: key,
// // // // //             label: key
// // // // //               .replace(/_/g, " ")
// // // // //               .replace(/\b\w/g, (char) => char.toUpperCase()),
// // // // //           }));
// // // // //           setColumns(dynamicColumns);
// // // // //           setOrderBy(dynamicColumns[0].id);
// // // // //         }
// // // // //       })
// // // // //       .catch((err) => console.error("Error fetching data:", err));
// // // // //   }, []);

// // // // //   const handleRequestSort = (property) => {
// // // // //     const isAsc = orderBy === property && order === "asc";
// // // // //     setOrder(isAsc ? "desc" : "asc");
// // // // //     setOrderBy(property);
// // // // //   };

// // // // //   const handleChangePage = (event, newPage) => {
// // // // //     setPage(newPage);
// // // // //   };

// // // // //   const handleChangeRowsPerPage = (event) => {
// // // // //     setRowsPerPage(parseInt(event.target.value, 10));
// // // // //     setPage(0);
// // // // //   };

// // // // //   const stableSort = (array, comparator) => {
// // // // //     const stabilizedThis = array.map((el, index) => [el, index]);
// // // // //     stabilizedThis.sort((a, b) => {
// // // // //       const order = comparator(a[0], b[0]);
// // // // //       if (order !== 0) return order;
// // // // //       return a[1] - b[1];
// // // // //     });
// // // // //     return stabilizedThis.map((el) => el[0]);
// // // // //   };

// // // // //   const getComparator = (order, orderBy) => {
// // // // //     return order === "desc"
// // // // //       ? (a, b) => descendingComparator(a, b, orderBy)
// // // // //       : (a, b) => -descendingComparator(a, b, orderBy);
// // // // //   };

// // // // //   const descendingComparator = (a, b, orderBy) => {
// // // // //     if (b[orderBy] < a[orderBy]) return -1;
// // // // //     if (b[orderBy] > a[orderBy]) return 1;
// // // // //     return 0;
// // // // //   };

// // // // //   const sortedData = stableSort(data, getComparator(order, orderBy));
// // // // //   const paginatedData = sortedData.slice(
// // // // //     page * rowsPerPage,
// // // // //     page * rowsPerPage + rowsPerPage
// // // // //   );

// // // // //   return (
// // // // //     <Box sx={{ p: 4, background: "#f0f2f5", minHeight: "100vh" }}>
// // // // //       <Typography
// // // // //         variant="h4"
// // // // //         sx={{ mb: 4, fontWeight: "bold", color: "#1976d2" }}
// // // // //       >
// // // // //         Application List
// // // // //       </Typography>

// // // // //       <Paper elevation={5} sx={{ borderRadius: 3 }}>
// // // // //         {/* <TableContainer sx={{ maxHeight: 600 }}> */}
// // // // //         {/* <TableContainer
// // // // //           component={Paper}
// // // // //           sx={{
// // // // //             maxHeight: 600,
// // // // //             borderRadius: 3, // <-- This line makes the table container have rounded/curved corners
// // // // //             boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
// // // // //             border: "1px solid #ddd",
// // // // //           }}
// // // // //         > */}
// // // // //         <TableContainer
// // // // //           component={Paper}
// // // // //           elevation={3}
// // // // //           sx={{
// // // // //             borderTopLeftRadius: "16px",
// // // // //             borderTopRightRadius: "16px",
// // // // //             borderBottomLeftRadius: "16px",
// // // // //             borderBottomRightRadius: "16px",
// // // // //             borderRadius: "16px", // ✅ Fully curved
// // // // //             overflow: "hidden", // ✅ Clip child elements to container's curve
// // // // //             boxShadow: "0 8px 24px rgba(0,0,0,0.1)",
// // // // //             border: "1px solid #e2e8f0",
// // // // //           }}
// // // // //         >
// // // // //           <Table stickyHeader>
// // // // //             <TableHead>
// // // // //               <TableRow>
// // // // //                 {columns.map((column) => (
// // // // //                   <TableCell
// // // // //                     key={column.id}
// // // // //                     sortDirection={orderBy === column.id ? order : false}
// // // // //                     sx={{
// // // // //                       fontWeight: "bold",
// // // // //                       whiteSpace: "nowrap",
// // // // //                       overflow: "hidden",
// // // // //                       textOverflow: "ellipsis",
// // // // //                     }}
// // // // //                   >
// // // // //                     <TableSortLabel
// // // // //                       active={orderBy === column.id}
// // // // //                       direction={orderBy === column.id ? order : "asc"}
// // // // //                       onClick={() => handleRequestSort(column.id)}
// // // // //                     >
// // // // //                       {column.label}
// // // // //                     </TableSortLabel>
// // // // //                   </TableCell>
// // // // //                 ))}
// // // // //               </TableRow>
// // // // //             </TableHead>

// // // // //             <TableBody>
// // // // //               {paginatedData.map((row, idx) => (
// // // // //                 <TableRow
// // // // //                   key={idx}
// // // // //                   sx={{
// // // // //                     backgroundColor: idx % 2 === 0 ? "#e3f2fd" : "#ffffff",
// // // // //                     transition: "transform 0.2s ease",
// // // // //                     "&:hover": {
// // // // //                       backgroundColor: "#bbdefb",
// // // // //                       transform: "scale(1.01)",
// // // // //                     },
// // // // //                   }}
// // // // //                 >
// // // // //                   {columns.map((column) => (
// // // // //                     <TableCell key={column.id}>
// // // // //                       {typeof row[column.id] === "boolean"
// // // // //                         ? row[column.id].toString()
// // // // //                         : row[column.id]}
// // // // //                     </TableCell>
// // // // //                   ))}
// // // // //                 </TableRow>
// // // // //               ))}
// // // // //             </TableBody>
// // // // //           </Table>
// // // // //         </TableContainer>

// // // // //         <TablePagination
// // // // //           component="div"
// // // // //           count={data.length}
// // // // //           page={page}
// // // // //           onPageChange={handleChangePage}
// // // // //           rowsPerPage={rowsPerPage}
// // // // //           onRowsPerPageChange={handleChangeRowsPerPage}
// // // // //           rowsPerPageOptions={[5, 10, 25]}
// // // // //           sx={{
// // // // //             backgroundColor: "#fafafa",
// // // // //             borderTop: "1px solid #e0e0e0",
// // // // //           }}
// // // // //         />
// // // // //       </Paper>
// // // // //     </Box>
// // // // //   );
// // // // // }

// // // // // export default ApplicationList;

// // // // // // import React, { useEffect, useState } from "react";
// // // // // // import axios from "axios";
// // // // // // import {
// // // // // //   Table,
// // // // // //   TableBody,
// // // // // //   TableCell,
// // // // // //   TableContainer,
// // // // // //   TableHead,
// // // // // //   TableRow,
// // // // // //   Paper,
// // // // // //   TableSortLabel,
// // // // // //   TablePagination,
// // // // // //   Tooltip,
// // // // // //   Typography,
// // // // // //   Box,
// // // // // // } from "@mui/material";

// // // // // // function ApplicationList() {
// // // // // //   const [data, setData] = useState([]);
// // // // // //   const [columns, setColumns] = useState([]);
// // // // // //   const [order, setOrder] = useState("asc");
// // // // // //   const [orderBy, setOrderBy] = useState("");
// // // // // //   const [page, setPage] = useState(0);
// // // // // //   const [rowsPerPage, setRowsPerPage] = useState(10);

// // // // // //   useEffect(() => {
// // // // // //     axios
// // // // // //       .get("http://127.0.0.1:8000/api/applications/")
// // // // // //       .then((res) => {
// // // // // //         const applications = res.data.data.results;
// // // // // //         setData(applications);
// // // // // //         if (applications.length > 0) {
// // // // // //           const dynamicColumns = Object.keys(applications[0]).map((key) => ({
// // // // // //             id: key,
// // // // // //             label: key.replace(/_/g, " ").replace(/\b\w/g, (char) => char.toUpperCase()),
// // // // // //           }));
// // // // // //           setColumns(dynamicColumns);
// // // // // //           setOrderBy(dynamicColumns[0].id);
// // // // // //         }
// // // // // //       })
// // // // // //       .catch((err) => console.error("Error fetching data:", err));
// // // // // //   }, []);

// // // // // //   const handleRequestSort = (property) => {
// // // // // //     const isAsc = orderBy === property && order === "asc";
// // // // // //     setOrder(isAsc ? "desc" : "asc");
// // // // // //     setOrderBy(property);
// // // // // //   };

// // // // // //   const handleChangePage = (event, newPage) => setPage(newPage);
// // // // // //   const handleChangeRowsPerPage = (event) => {
// // // // // //     setRowsPerPage(parseInt(event.target.value, 10));
// // // // // //     setPage(0);
// // // // // //   };

// // // // // //   const stableSort = (array, comparator) => {
// // // // // //     const stabilizedThis = array.map((el, index) => [el, index]);
// // // // // //     stabilizedThis.sort((a, b) => {
// // // // // //       const order = comparator(a[0], b[0]);
// // // // // //       if (order !== 0) return order;
// // // // // //       return a[1] - b[1];
// // // // // //     });
// // // // // //     return stabilizedThis.map((el) => el[0]);
// // // // // //   };

// // // // // //   const getComparator = (order, orderBy) => {
// // // // // //     return order === "desc"
// // // // // //       ? (a, b) => descendingComparator(a, b, orderBy)
// // // // // //       : (a, b) => -descendingComparator(a, b, orderBy);
// // // // // //   };

// // // // // //   const descendingComparator = (a, b, orderBy) => {
// // // // // //     if (b[orderBy] < a[orderBy]) return -1;
// // // // // //     if (b[orderBy] > a[orderBy]) return 1;
// // // // // //     return 0;
// // // // // //   };

// // // // // //   const sortedData = stableSort(data, getComparator(order, orderBy));
// // // // // //   const paginatedData = sortedData.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage);

// // // // // //   return (
// // // // // //     <Box sx={{ padding: 4 }}>
// // // // // //       <Typography variant="h5" fontWeight="bold" gutterBottom color="primary.dark">
// // // // // //         Applications
// // // // // //       </Typography>

// // // // // //       <TableContainer
// // // // // //         component={Paper}
// // // // // //         sx={{
// // // // // //           maxHeight: 600,
// // // // // //           borderRadius: 3,
// // // // // //           boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
// // // // // //           border: "1px solid #ddd",
// // // // // //         }}
// // // // // //       >
// // // // // //         <Table stickyHeader aria-label="applications table">
// // // // // //           <TableHead>
// // // // // //             <TableRow>
// // // // // //               {columns.map((column) => (
// // // // // //                 <TableCell
// // // // // //                   key={column.id}
// // // // // //                   sortDirection={orderBy === column.id ? order : false}
// // // // // //                   sx={{
// // // // // //                     fontWeight: "bold",
// // // // // //                     backgroundColor: "#f1f5f9",
// // // // // //                     whiteSpace: "nowrap",
// // // // // //                     overflow: "hidden",
// // // // // //                     textOverflow: "ellipsis",
// // // // // //                     color: "#1e293b",
// // // // // //                   }}
// // // // // //                 >
// // // // // //                   <Tooltip title={column.label} arrow>
// // // // // //                     <TableSortLabel
// // // // // //                       active={orderBy === column.id}
// // // // // //                       direction={orderBy === column.id ? order : "asc"}
// // // // // //                       onClick={() => handleRequestSort(column.id)}
// // // // // //                     >
// // // // // //                       {column.label}
// // // // // //                     </TableSortLabel>
// // // // // //                   </Tooltip>
// // // // // //                 </TableCell>
// // // // // //               ))}
// // // // // //             </TableRow>
// // // // // //           </TableHead>

// // // // // //           <TableBody>
// // // // // //             {paginatedData.map((row, idx) => (
// // // // // //               <TableRow
// // // // // //                 key={idx}
// // // // // //                 hover
// // // // // //                 sx={{
// // // // // //                   background: idx % 2 === 0 ? "#ffffff" : "#f9fafb",
// // // // // //                   transition: "all 0.3s ease",
// // // // // //                   "&:hover": {
// // // // // //                     backgroundColor: "#e2e8f0",
// // // // // //                     transform: "scale(1.01)",
// // // // // //                     cursor: "pointer",
// // // // // //                   },
// // // // // //                 }}
// // // // // //               >
// // // // // //                 {columns.map((column) => (
// // // // // //                   <TableCell key={column.id}>
// // // // // //                     {typeof row[column.id] === "boolean"
// // // // // //                       ? row[column.id].toString()
// // // // // //                       : row[column.id]}
// // // // // //                   </TableCell>
// // // // // //                 ))}
// // // // // //               </TableRow>
// // // // // //             ))}
// // // // // //           </TableBody>
// // // // // //         </Table>
// // // // // //       </TableContainer>

// // // // // //       <TablePagination
// // // // // //         component="div"
// // // // // //         count={data.length}
// // // // // //         page={page}
// // // // // //         onPageChange={handleChangePage}
// // // // // //         rowsPerPage={rowsPerPage}
// // // // // //         onRowsPerPageChange={handleChangeRowsPerPage}
// // // // // //         rowsPerPageOptions={[5, 10, 25]}
// // // // // //         sx={{ mt: 2 }}
// // // // // //       />
// // // // // //     </Box>
// // // // // //   );
// // // // // // }

// // // // // // export default ApplicationList;

// // // // import React, { useEffect, useState } from "react";
// // // // import axios from "axios";
// // // // import {
// // // //   Table,
// // // //   TableBody,
// // // //   TableCell,
// // // //   TableContainer,
// // // //   TableHead,
// // // //   TableRow,
// // // //   Paper,
// // // //   TableSortLabel,
// // // //   TablePagination,
// // // //   Box,
// // // //   Typography,
// // // // } from "@mui/material";

// // // // function ApplicationList() {
// // // //   const [data, setData] = useState([]);
// // // //   const [columns, setColumns] = useState([]);
// // // //   const [order, setOrder] = useState("asc");
// // // //   const [orderBy, setOrderBy] = useState("");
// // // //   const [page, setPage] = useState(0);
// // // //   const [rowsPerPage, setRowsPerPage] = useState(10);

// // // //   useEffect(() => {
// // // //     axios
// // // //       .get("http://127.0.0.1:8000/api/applications/")
// // // //       .then((res) => {
// // // //         const applications = res.data.data.results;
// // // //         setData(applications);
// // // //         if (applications.length > 0) {
// // // //           const dynamicColumns = Object.keys(applications[0]).map((key) => ({
// // // //             id: key,
// // // //             label: key
// // // //               .replace(/_/g, " ")
// // // //               .replace(/\b\w/g, (char) => char.toUpperCase()),
// // // //           }));
// // // //           setColumns(dynamicColumns);
// // // //           setOrderBy(dynamicColumns[0].id);
// // // //         }
// // // //       })
// // // //       .catch((err) => console.error("Error fetching data:", err));
// // // //   }, []);

// // // //   const handleRequestSort = (property) => {
// // // //     const isAsc = orderBy === property && order === "asc";
// // // //     setOrder(isAsc ? "desc" : "asc");
// // // //     setOrderBy(property);
// // // //   };

// // // //   const handleChangePage = (event, newPage) => setPage(newPage);
// // // //   const handleChangeRowsPerPage = (event) => {
// // // //     setRowsPerPage(parseInt(event.target.value, 10));
// // // //     setPage(0);
// // // //   };

// // // //   const stableSort = (array, comparator) => {
// // // //     const stabilized = array.map((el, idx) => [el, idx]);
// // // //     stabilized.sort((a, b) => {
// // // //       const order = comparator(a[0], b[0]);
// // // //       if (order !== 0) return order;
// // // //       return a[1] - b[1];
// // // //     });
// // // //     return stabilized.map((el) => el[0]);
// // // //   };

// // // //   const getComparator = (order, orderBy) =>
// // // //     order === "desc"
// // // //       ? (a, b) => descendingComparator(a, b, orderBy)
// // // //       : (a, b) => -descendingComparator(a, b, orderBy);

// // // //   const descendingComparator = (a, b, orderBy) => {
// // // //     if (b[orderBy] < a[orderBy]) return -1;
// // // //     if (b[orderBy] > a[orderBy]) return 1;
// // // //     return 0;
// // // //   };

// // // //   const sortedData = stableSort(data, getComparator(order, orderBy));
// // // //   const paginatedData = sortedData.slice(
// // // //     page * rowsPerPage,
// // // //     page * rowsPerPage + rowsPerPage
// // // //   );

// // // //   return (
// // // //     <Box
// // // //       sx={{
// // // //         borderRadius: "16px",
// // // //         boxShadow: "0 8px 24px rgba(0, 0, 0, 0.1)",
// // // //         border: "1px solid #e2e8f0",
// // // //         overflow: "hidden",
// // // //         backgroundColor: "#fefefe",
// // // //         p: 2,
// // // //         m: 2,
// // // //       }}
// // // //     >
// // // //       <Typography variant="h5" fontWeight="bold" mb={2}>
// // // //         Applications
// // // //       </Typography>

// // // //       <TableContainer component={Paper} elevation={0}>
// // // //         <Table stickyHeader aria-label="applications table">
// // // //           <TableHead>
// // // //             <TableRow>
// // // //               {columns.map((column) => (
// // // //                 <TableCell
// // // //                   key={column.id}
// // // //                   sortDirection={orderBy === column.id ? order : false}
// // // //                   sx={{ fontWeight: "bold", backgroundColor: "#f0f4f8" }}
// // // //                 >
// // // //                   <TableSortLabel
// // // //                     active={orderBy === column.id}
// // // //                     direction={orderBy === column.id ? order : "asc"}
// // // //                     onClick={() => handleRequestSort(column.id)}
// // // //                   >
// // // //                     {column.label}
// // // //                   </TableSortLabel>
// // // //                 </TableCell>
// // // //               ))}
// // // //             </TableRow>
// // // //           </TableHead>

// // // //           <TableBody>
// // // //             {paginatedData.map((row, idx) => (
// // // //               <TableRow
// // // //                 key={idx}
// // // //                 sx={{
// // // //                   transition: "all 0.3s",
// // // //                   "&:hover": {
// // // //                     backgroundColor: "#e0f7fa",
// // // //                     transform: "scale(1.01)",
// // // //                   },
// // // //                 }}
// // // //               >
// // // //                 {columns.map((column) => (
// // // //                   <TableCell key={column.id}>
// // // //                     {typeof row[column.id] === "boolean"
// // // //                       ? row[column.id].toString()
// // // //                       : row[column.id]}
// // // //                   </TableCell>
// // // //                 ))}
// // // //               </TableRow>
// // // //             ))}
// // // //           </TableBody>
// // // //         </Table>
// // // //       </TableContainer>

// // // //       <TablePagination
// // // //         component="div"
// // // //         count={data.length}
// // // //         page={page}
// // // //         onPageChange={handleChangePage}
// // // //         rowsPerPage={rowsPerPage}
// // // //         onRowsPerPageChange={handleChangeRowsPerPage}
// // // //         rowsPerPageOptions={[5, 10, 25]}
// // // //       />
// // // //     </Box>
// // // //   );
// // // // }

// // // // export default ApplicationList;
// // // import React, { useEffect, useState } from "react";
// // // import axios from "axios";
// // // import {
// // //   Table,
// // //   TableBody,
// // //   TableCell,
// // //   TableContainer,
// // //   TableHead,
// // //   TableRow,
// // //   Paper,
// // //   TableSortLabel,
// // //   TablePagination,
// // //   Typography,
// // //   Box,
// // //   Divider,
// // // } from "@mui/material";

// // // function ApplicationList() {
// // //   const [data, setData] = useState([]);
// // //   const [columns, setColumns] = useState([]);
// // //   const [order, setOrder] = useState("asc");
// // //   const [orderBy, setOrderBy] = useState("");
// // //   const [page, setPage] = useState(0);
// // //   const [rowsPerPage, setRowsPerPage] = useState(10);

// // //   useEffect(() => {
// // //     axios
// // //       .get("http://127.0.0.1:8000/api/applications/")
// // //       .then((res) => {
// // //         const applications = res.data.data.results;
// // //         setData(applications);
// // //         if (applications.length > 0) {
// // //           const dynamicColumns = Object.keys(applications[0]).map((key) => ({
// // //             id: key,
// // //             label: key
// // //               .replace(/_/g, " ")
// // //               .replace(/\b\w/g, (char) => char.toUpperCase()),
// // //           }));
// // //           setColumns(dynamicColumns);
// // //           setOrderBy(dynamicColumns[0].id);
// // //         }
// // //       })
// // //       .catch((err) => console.error("Error fetching data:", err));
// // //   }, []);

// // //   const handleRequestSort = (property) => {
// // //     const isAsc = orderBy === property && order === "asc";
// // //     setOrder(isAsc ? "desc" : "asc");
// // //     setOrderBy(property);
// // //   };

// // //   const handleChangePage = (event, newPage) => {
// // //     setPage(newPage);
// // //   };

// // //   const handleChangeRowsPerPage = (event) => {
// // //     setRowsPerPage(parseInt(event.target.value, 10));
// // //     setPage(0);
// // //   };

// // //   const stableSort = (array, comparator) => {
// // //     const stabilizedThis = array.map((el, index) => [el, index]);
// // //     stabilizedThis.sort((a, b) => {
// // //       const order = comparator(a[0], b[0]);
// // //       if (order !== 0) return order;
// // //       return a[1] - b[1];
// // //     });
// // //     return stabilizedThis.map((el) => el[0]);
// // //   };

// // //   const getComparator = (order, orderBy) => {
// // //     return order === "desc"
// // //       ? (a, b) => descendingComparator(a, b, orderBy)
// // //       : (a, b) => -descendingComparator(a, b, orderBy);
// // //   };

// // //   const descendingComparator = (a, b, orderBy) => {
// // //     if (b[orderBy] < a[orderBy]) return -1;
// // //     if (b[orderBy] > a[orderBy]) return 1;
// // //     return 0;
// // //   };

// // //   const sortedData = stableSort(data, getComparator(order, orderBy));
// // //   const paginatedData = sortedData.slice(
// // //     page * rowsPerPage,
// // //     page * rowsPerPage + rowsPerPage
// // //   );

// // //   return (
// // //     <Box sx={{ p: 4, background: "#f0f2f5", minHeight: "100vh" }}>
// // //       <Paper
// // //         elevation={6}
// // //         sx={{
// // //           borderRadius: 4,
// // //           boxShadow: "0px 8px 24px rgba(0, 0, 0, 0.1)",
// // //           overflow: "hidden",
// // //         }}
// // //       >
// // //         {/* Title Box */}
// // //         <Box
// // //           sx={{
// // //             backgroundColor: "#1976d2",
// // //             color: "#fff",
// // //             px: 3,
// // //             py: 2,
// // //             display: "flex",
// // //             alignItems: "center",
// // //             justifyContent: "space-between",
// // //             borderTopLeftRadius: 16,
// // //             borderTopRightRadius: 16,
// // //           }}
// // //         >
// // //           <Typography variant="h5" sx={{ fontWeight: "bold" }}>
// // //             Application List
// // //           </Typography>
// // //         </Box>

// // //         <Divider />

// // //         {/* Table */}
// // //         <TableContainer
// // //           sx={{
// // //             maxHeight: 600,
// // //             borderRadius: "0 0 16px 16px",
// // //             backgroundColor: "#ffffff",
// // //           }}
// // //         >
// // //           <Table stickyHeader>
// // //             <TableHead>
// // //               <TableRow>
// // //                 {columns.map((column) => (
// // //                   <TableCell
// // //                     key={column.id}
// // //                     sortDirection={orderBy === column.id ? order : false}
// // //                     sx={{
// // //                       fontWeight: "bold",
// // //                       whiteSpace: "nowrap",
// // //                       overflow: "hidden",
// // //                       textOverflow: "ellipsis",
// // //                       backgroundColor: "#f5f5f5",
// // //                     }}
// // //                   >
// // //                     <TableSortLabel
// // //                       active={orderBy === column.id}
// // //                       direction={orderBy === column.id ? order : "asc"}
// // //                       onClick={() => handleRequestSort(column.id)}
// // //                     >
// // //                       {column.label}
// // //                     </TableSortLabel>
// // //                   </TableCell>
// // //                 ))}
// // //               </TableRow>
// // //             </TableHead>

// // //             <TableBody>
// // //               {paginatedData.map((row, idx) => (
// // //                 <TableRow
// // //                   key={idx}
// // //                   sx={{
// // //                     backgroundColor: idx % 2 === 0 ? "#f9f9f9" : "#ffffff",
// // //                     transition: "transform 0.2s ease",
// // //                     "&:hover": {
// // //                       backgroundColor: "#e3f2fd",
// // //                       transform: "scale(1.005)",
// // //                     },
// // //                   }}
// // //                 >
// // //                   {columns.map((column) => (
// // //                     <TableCell key={column.id}>
// // //                       {typeof row[column.id] === "boolean"
// // //                         ? row[column.id].toString()
// // //                         : row[column.id]}
// // //                     </TableCell>
// // //                   ))}
// // //                 </TableRow>
// // //               ))}
// // //             </TableBody>
// // //           </Table>
// // //         </TableContainer>

// // //         {/* Pagination */}
// // //         <TablePagination
// // //           component="div"
// // //           count={data.length}
// // //           page={page}
// // //           onPageChange={handleChangePage}
// // //           rowsPerPage={rowsPerPage}
// // //           onRowsPerPageChange={handleChangeRowsPerPage}
// // //           rowsPerPageOptions={[5, 10, 25]}
// // //           sx={{
// // //             backgroundColor: "#fafafa",
// // //             borderTop: "1px solid #e0e0e0",
// // //           }}
// // //         />
// // //       </Paper>
// // //     </Box>
// // //   );
// // // }

// // // export default ApplicationList;

// // import React, { useEffect, useState } from "react";
// // import axios from "axios";
// // import {
// //   Table,
// //   TableBody,
// //   TableCell,
// //   TableContainer,
// //   TableHead,
// //   TableRow,
// //   Paper,
// //   TableSortLabel,
// //   TablePagination,
// //   Typography,
// //   Box,
// //   Divider,
// // } from "@mui/material";

// // function ApplicationList() {
// //   const [data, setData] = useState([]);
// //   const [columns, setColumns] = useState([]);
// //   const [order, setOrder] = useState("asc");
// //   const [orderBy, setOrderBy] = useState("");
// //   const [page, setPage] = useState(0);
// //   const [rowsPerPage, setRowsPerPage] = useState(10);
// //   const [totalCount, setTotalCount] = useState(0);
// //   const [loading, setLoading] = useState(false);

// //   useEffect(() => {
// //     const fetchData = async () => {
// //       try {
// //         setLoading(true);
// //         const response = await axios.get(
// //           `http://127.0.0.1:8000/api/applications/?page=${
// //             page + 1
// //           }&page_size=${rowsPerPage}`
// //         );

// //         const applications = response.data.data.results;
// //         setData(applications);
// //         setTotalCount(response.data.data.count); // Make sure your API returns total count

// //         if (applications.length > 0 && columns.length === 0) {
// //           const dynamicColumns = Object.keys(applications[0]).map((key) => ({
// //             id: key,
// //             label: key
// //               .replace(/_/g, " ")
// //               .replace(/\b\w/g, (char) => char.toUpperCase()),
// //           }));
// //           setColumns(dynamicColumns);
// //           setOrderBy(dynamicColumns[0].id);
// //         }
// //       } catch (err) {
// //         console.error("Error fetching data:", err);
// //       } finally {
// //         setLoading(false);
// //       }
// //     };

// //     fetchData();
// //   }, [page, rowsPerPage]); // Re-fetch when page or rowsPerPage changes

// //   const handleRequestSort = (property) => {
// //     const isAsc = orderBy === property && order === "asc";
// //     setOrder(isAsc ? "desc" : "asc");
// //     setOrderBy(property);
// //   };

// //   const handleChangePage = (event, newPage) => {
// //     setPage(newPage);
// //   };

// //   const handleChangeRowsPerPage = (event) => {
// //     setRowsPerPage(parseInt(event.target.value, 10));
// //     setPage(0); // Reset to first page when changing page size
// //   };

// //   const stableSort = (array, comparator) => {
// //     const stabilizedThis = array.map((el, index) => [el, index]);
// //     stabilizedThis.sort((a, b) => {
// //       const order = comparator(a[0], b[0]);
// //       if (order !== 0) return order;
// //       return a[1] - b[1];
// //     });
// //     return stabilizedThis.map((el) => el[0]);
// //   };

// //   const getComparator = (order, orderBy) => {
// //     return order === "desc"
// //       ? (a, b) => descendingComparator(a, b, orderBy)
// //       : (a, b) => -descendingComparator(a, b, orderBy);
// //   };

// //   const descendingComparator = (a, b, orderBy) => {
// //     if (b[orderBy] < a[orderBy]) return -1;
// //     if (b[orderBy] > a[orderBy]) return 1;
// //     return 0;
// //   };

// //   const sortedData = stableSort(data, getComparator(order, orderBy));

// //   return (
// //     <Box sx={{ p: 4, background: "#d0e7ff", minHeight: "100vh" }}>
// //       <Paper
// //         elevation={6}
// //         sx={{
// //           borderRadius: 4,
// //           boxShadow: "0px 8px 24px rgba(0, 0, 0, 0.1)",
// //           overflow: "hidden",
// //         }}
// //       >
// //         {/* Title Box (unchanged) */}
// //         <Box
// //           sx={{
// //             backgroundColor: "#1976d2",
// //             color: "#fff",
// //             px: 3,
// //             py: 2,
// //             display: "flex",
// //             alignItems: "center",
// //             justifyContent: "space-between",
// //             borderTopLeftRadius: 16,
// //             borderTopRightRadius: 16,
// //           }}
// //         >
// //           <Typography variant="h5" sx={{ fontWeight: "bold" }}>
// //             Application List
// //           </Typography>
// //         </Box>

// //         <Divider />

// //         {/* Table with compact row sizing */}
// //         <TableContainer
// //           sx={{
// //             maxHeight: 600,
// //             borderRadius: "0 0 16px 16px",
// //             backgroundColor: "#ffffff",
// //           }}
// //         >
// //           <Table
// //             stickyHeader
// //             size="small" // This makes rows more compact
// //             sx={{
// //               "& .MuiTableCell-root": {
// //                 padding: "8px 16px", // Reduced padding
// //                 fontSize: "0.875rem", // Slightly smaller font
// //               },
// //               "& .MuiTableRow-root": {
// //                 height: "48px", // Fixed row height
// //               },
// //             }}
// //           >
// //             <TableHead>
// //               <TableRow>
// //                 {columns.map((column) => (
// //                   <TableCell
// //                     key={column.id}
// //                     sortDirection={orderBy === column.id ? order : false}
// //                     sx={{
// //                       backgroundColor: "#1976d2",
// //                       color: "#ffffff",
// //                       fontWeight: "bold",
// //                       whiteSpace: "nowrap",
// //                       overflow: "hidden",
// //                       textOverflow: "ellipsis",
// //                       py: 1, // Reduced vertical padding
// //                     }}
// //                   >
// //                     <TableSortLabel
// //                       active={orderBy === column.id}
// //                       direction={orderBy === column.id ? order : "asc"}
// //                       onClick={() => handleRequestSort(column.id)}
// //                       sx={{
// //                         color: "#ffffff",
// //                         "&.Mui-active": {
// //                           color: "#ffffff",
// //                         },
// //                         "& .MuiTableSortLabel-icon": {
// //                           color: "#ffffff !important",
// //                         },
// //                       }}
// //                     >
// //                       {column.label}
// //                     </TableSortLabel>
// //                   </TableCell>
// //                 ))}
// //               </TableRow>
// //             </TableHead>

// //             <TableBody>
// //               {loading ? (
// //                 <TableRow>
// //                   <TableCell
// //                     colSpan={columns.length}
// //                     align="center"
// //                     sx={{ py: 2 }}
// //                   >
// //                     Loading...
// //                   </TableCell>
// //                 </TableRow>
// //               ) : sortedData.length === 0 ? (
// //                 <TableRow>
// //                   <TableCell
// //                     colSpan={columns.length}
// //                     align="center"
// //                     sx={{ py: 2 }}
// //                   >
// //                     No records found
// //                   </TableCell>
// //                 </TableRow>
// //               ) : (
// //                 sortedData.map((row, idx) => (
// //                   <TableRow
// //                     key={idx}
// //                     sx={{
// //                       backgroundColor: idx % 2 === 0 ? "#f9f9f9" : "#ffffff",
// //                       transition: "transform 0.2s ease",
// //                       height: "48px", // Fixed row height
// //                       "&:hover": {
// //                         backgroundColor: "#e3f2fd",
// //                         transform: "scale(1.005)",
// //                       },
// //                     }}
// //                   >
// //                     {columns.map((column) => (
// //                       <TableCell
// //                         key={column.id}
// //                         sx={{
// //                           py: 1, // Reduced vertical padding
// //                           maxWidth: "200px", // Limit cell width
// //                           overflow: "hidden",
// //                           textOverflow: "ellipsis",
// //                           whiteSpace: "nowrap",
// //                         }}
// //                       >
// //                         {typeof row[column.id] === "boolean"
// //                           ? row[column.id].toString()
// //                           : row[column.id]}
// //                       </TableCell>
// //                     ))}
// //                   </TableRow>
// //                 ))
// //               )}
// //             </TableBody>
// //           </Table>
// //         </TableContainer>

// //         {/* Pagination (unchanged) */}
// //         <TablePagination
// //           component="div"
// //           count={totalCount}
// //           page={page}
// //           onPageChange={handleChangePage}
// //           rowsPerPage={rowsPerPage}
// //           onRowsPerPageChange={handleChangeRowsPerPage}
// //           rowsPerPageOptions={[5, 10, 25]}
// //           sx={{
// //             backgroundColor: "#fafafa",
// //             borderTop: "1px solid #e0e0e0",
// //           }}
// //         />
// //       </Paper>
// //     </Box>
// //   );
// // }

// // export default ApplicationList;
// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import {
//   Table,
//   TableBody,
//   TableCell,
//   TableContainer,
//   TableHead,
//   TableRow,
//   Paper,
//   TableSortLabel,
//   TablePagination,
//   Typography,
//   Box,
//   Divider,
//   CircularProgress,
// } from "@mui/material";

// function ApplicationList() {
//   const [data, setData] = useState([]);
//   const [columns, setColumns] = useState([]);
//   const [order, setOrder] = useState("asc");
//   const [orderBy, setOrderBy] = useState("");
//   const [page, setPage] = useState(0);
//   const [rowsPerPage, setRowsPerPage] = useState(10);
//   const [totalCount, setTotalCount] = useState(0);
//   const [loading, setLoading] = useState(false);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         setLoading(true);
//         const response = await axios.get(
//           `http://127.0.0.1:8000/api/applications/?page=${
//             page + 1
//           }&page_size=${rowsPerPage}`
//         );

//         const applications = response.data.data.results;
//         setData(applications);
//         setTotalCount(response.data.data.count);

//         if (applications.length > 0 && columns.length === 0) {
//           const dynamicColumns = Object.keys(applications[0]).map((key) => ({
//             id: key,
//             label: key
//               .replace(/_/g, " ")
//               .replace(/\b\w/g, (char) => char.toUpperCase()),
//           }));
//           setColumns(dynamicColumns);
//           setOrderBy(dynamicColumns[0].id);
//         }
//       } catch (err) {
//         console.error("Error fetching data:", err);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchData();
//   }, [page, rowsPerPage]);

//   const handleRequestSort = (property) => {
//     const isAsc = orderBy === property && order === "asc";
//     setOrder(isAsc ? "desc" : "asc");
//     setOrderBy(property);
//   };

//   const handleChangePage = (event, newPage) => {
//     setPage(newPage);
//   };

//   const handleChangeRowsPerPage = (event) => {
//     setRowsPerPage(parseInt(event.target.value, 10));
//     setPage(0);
//   };

//   const stableSort = (array, comparator) => {
//     const stabilizedThis = array.map((el, index) => [el, index]);
//     stabilizedThis.sort((a, b) => {
//       const order = comparator(a[0], b[0]);
//       if (order !== 0) return order;
//       return a[1] - b[1];
//     });
//     return stabilizedThis.map((el) => el[0]);
//   };

//   const getComparator = (order, orderBy) => {
//     return order === "desc"
//       ? (a, b) => descendingComparator(a, b, orderBy)
//       : (a, b) => -descendingComparator(a, b, orderBy);
//   };

//   const descendingComparator = (a, b, orderBy) => {
//     if (b[orderBy] < a[orderBy]) return -1;
//     if (b[orderBy] > a[orderBy]) return 1;
//     return 0;
//   };

//   const sortedData = stableSort(data, getComparator(order, orderBy));

//   return (
//     <Box sx={{ p: 4, background: "linear-gradient(120deg, #e0f7fa, #fff)" }}>
//       <Paper
//         elevation={10}
//         sx={{
//           borderRadius: 5,
//           overflow: "hidden",
//           boxShadow: "0 12px 28px rgba(0,0,0,0.1)",
//         }}
//       >
//         <Box
//           sx={{
//             background: "linear-gradient(to right, #1976d2, #42a5f5)",
//             color: "#fff",
//             px: 3,
//             py: 2,
//             display: "flex",
//             justifyContent: "space-between",
//             alignItems: "center",
//             borderTopLeftRadius: 20,
//             borderTopRightRadius: 20,
//           }}
//         >
//           <Typography variant="h5" fontWeight="bold">
//             Application List
//           </Typography>
//         </Box>

//         <Divider />

//         <TableContainer
//           sx={{
//             maxHeight: 600,
//             backgroundColor: "#fdfdfd",
//           }}
//         >
//           <Table stickyHeader size="small">
//             <TableHead>
//               <TableRow>
//                 {columns.map((column) => (
//                   <TableCell
//                     key={column.id}
//                     sortDirection={orderBy === column.id ? order : false}
//                     sx={{
//                       backgroundColor: "#1976d2",
//                       color: "#ffffff",
//                       fontWeight: "bold",
//                       whiteSpace: "nowrap",
//                     }}
//                   >
//                     <TableSortLabel
//                       active={orderBy === column.id}
//                       direction={orderBy === column.id ? order : "asc"}
//                       onClick={() => handleRequestSort(column.id)}
//                       sx={{
//                         color: "#fff",
//                         "& .MuiTableSortLabel-icon": {
//                           color: "white !important",
//                         },
//                       }}
//                     >
//                       {column.label}
//                     </TableSortLabel>
//                   </TableCell>
//                 ))}
//               </TableRow>
//             </TableHead>

//             <TableBody>
//               {loading ? (
//                 <TableRow>
//                   <TableCell colSpan={columns.length} align="center">
//                     <CircularProgress size={24} />
//                   </TableCell>
//                 </TableRow>
//               ) : sortedData.length === 0 ? (
//                 <TableRow>
//                   <TableCell colSpan={columns.length} align="center">
//                     No records found
//                   </TableCell>
//                 </TableRow>
//               ) : (
//                 sortedData.map((row, index) => (
//                   <TableRow
//                     key={index}
//                     sx={{
//                       backgroundColor: index % 2 === 0 ? "#f5faff" : "#ffffff",
//                       transition: "transform 0.3s ease, box-shadow 0.3s ease",
//                       "&:hover": {
//                         transform: "scale(1.02)",
//                         boxShadow: "0 8px 24px rgba(0, 0, 0, 0.12)",
//                         background: "#e3f2fd",
//                       },
//                     }}
//                   >
//                     {columns.map((column) => (
//                       <TableCell
//                         key={column.id}
//                         sx={{
//                           whiteSpace: "nowrap",
//                           textOverflow: "ellipsis",
//                           overflow: "hidden",
//                           maxWidth: 200,
//                           py: 1,
//                         }}
//                       >
//                         {typeof row[column.id] === "boolean"
//                           ? row[column.id].toString()
//                           : row[column.id]}
//                       </TableCell>
//                     ))}
//                   </TableRow>
//                 ))
//               )}
//             </TableBody>
//           </Table>
//         </TableContainer>

//         <TablePagination
//           component="div"
//           count={totalCount}
//           page={page}
//           onPageChange={handleChangePage}
//           rowsPerPage={rowsPerPage}
//           onRowsPerPageChange={handleChangeRowsPerPage}
//           rowsPerPageOptions={[5, 10, 25, 50]}
//           sx={{
//             backgroundColor: "#f1f8ff",
//             borderTop: "1px solid #e0e0e0",
//             px: 2,
//           }}
//         />
//       </Paper>
//     </Box>
//   );
// }

// export default ApplicationList;
import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  TableSortLabel,
  TablePagination,
  Typography,
  Box,
  Divider,
  CircularProgress,
} from "@mui/material";

function ApplicationList() {
  const [data, setData] = useState([]);
  const [columns, setColumns] = useState([]);
  const [order, setOrder] = useState("asc");
  const [orderBy, setOrderBy] = useState("");
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [totalCount, setTotalCount] = useState(0);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await axios.get(
          `http://127.0.0.1:8000/api/applications/?page=${
            page + 1
          }&page_size=${rowsPerPage}`
        );

        const applications = response.data.data.results;
        setData(applications);
        setTotalCount(response.data.data.count);

        if (applications.length > 0 && columns.length === 0) {
          const dynamicColumns = Object.keys(applications[0]).map((key) => ({
            id: key,
            label: key
              .replace(/_/g, " ")
              .replace(/\b\w/g, (char) => char.toUpperCase()),
          }));
          setColumns(dynamicColumns);
          setOrderBy(dynamicColumns[0].id);
        }
      } catch (err) {
        console.error("Error fetching data:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [page, rowsPerPage]);

  const handleRequestSort = (property) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const stableSort = (array, comparator) => {
    const stabilizedThis = array.map((el, index) => [el, index]);
    stabilizedThis.sort((a, b) => {
      const order = comparator(a[0], b[0]);
      if (order !== 0) return order;
      return a[1] - b[1];
    });
    return stabilizedThis.map((el) => el[0]);
  };

  const getComparator = (order, orderBy) => {
    return order === "desc"
      ? (a, b) => descendingComparator(a, b, orderBy)
      : (a, b) => -descendingComparator(a, b, orderBy);
  };

  const descendingComparator = (a, b, orderBy) => {
    if (b[orderBy] < a[orderBy]) return -1;
    if (b[orderBy] > a[orderBy]) return 1;
    return 0;
  };

  const sortedData = stableSort(data, getComparator(order, orderBy));

  return (
    <Box sx={{ p: 4, background: "#e3f2fd", minHeight: "100vh" }}>
      <Paper
        elevation={10}
        sx={{
          borderRadius: 4,
          boxShadow: "0px 12px 30px rgba(0, 0, 0, 0.15)",
          overflow: "hidden",
        }}
      >
        {/* Title Box */}
        <Box
          sx={{
            backgroundColor: "#1565c0",
            color: "#fff",
            px: 4,
            py: 3,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            borderTopLeftRadius: 16,
            borderTopRightRadius: 16,
            mb: 1,
          }}
        >
          <Typography variant="h5" sx={{ fontWeight: "bold" }}>
            Application List
          </Typography>
        </Box>

        <Divider />

        {/* Table */}
        <TableContainer
          sx={{
            maxHeight: 600,
            borderRadius: "0 0 16px 16px",
            backgroundColor: "#ffffff",
            p: 2,
          }}
        >
          {/* <Table
            stickyHeader
            size="xl"
            sx={{
              "& .MuiTableCell-root": {
                padding: "8px 16px",
                fontSize: "0.875rem",
              },
              "& .MuiTableRow-root": {
                height: "48px",
              },
            }}
          > */}
          <Table
            stickyHeader
            size="medium" // ✅ Correct value
            sx={{
              fontFamily: "'Roboto Slab', serif", // ✅ Font applied to entire table
              "& .MuiTableCell-root": {
                padding: "8px 16px",
                fontSize: "0.875rem",
                fontFamily: "'Roboto Slab', serif", // ✅ Font applied to table cells
              },
              "& .MuiTableRow-root": {
                height: "48px",
              },
            }}
          >
            <TableHead>
              <TableRow>
                {columns.map((column) => (
                  <TableCell
                    key={column.id}
                    sortDirection={orderBy === column.id ? order : false}
                    sx={{
                      backgroundColor: "#1976d2",
                      color: "#ffffff",
                      fontWeight: "bold",
                      whiteSpace: "nowrap",
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                      py: 1,
                    }}
                  >
                    <TableSortLabel
                      active={orderBy === column.id}
                      direction={orderBy === column.id ? order : "asc"}
                      onClick={() => handleRequestSort(column.id)}
                      sx={{
                        color: "#ffffff",
                        "&.Mui-active": {
                          color: "#ffffff",
                        },
                        "& .MuiTableSortLabel-icon": {
                          color: "#ffffff !important",
                        },
                      }}
                    >
                      {column.label}
                    </TableSortLabel>
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>

            <TableBody>
              {loading ? (
                <TableRow>
                  <TableCell
                    colSpan={columns.length}
                    align="center"
                    sx={{ py: 2 }}
                  >
                    <CircularProgress size={24} />
                  </TableCell>
                </TableRow>
              ) : sortedData.length === 0 ? (
                <TableRow>
                  <TableCell
                    colSpan={columns.length}
                    align="center"
                    sx={{ py: 2 }}
                  >
                    No records found
                  </TableCell>
                </TableRow>
              ) : (
                sortedData.map((row, idx) => (
                  // <TableRow
                  //   key={idx}
                  //   sx={{
                  //     backgroundColor: idx % 2 === 0 ? "#f0f9ff" : "#ffffff",
                  //     transition: "all 0.25s ease-in-out",
                  //     height: "48px",
                  //     "&:hover": {
                  //       backgroundColor: "#bbdefb",
                  //       transform: "scale(1.01)",
                  //       boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.2)",
                  //       zIndex: 1,
                  //     },
                  //   }}
                  // >
                  //   {columns.map((column) => (
                  //     <TableCell
                  //       key={column.id}
                  //       sx={{
                  //         py: 1,
                  //         maxWidth: "200px",
                  //         overflow: "hidden",
                  //         textOverflow: "ellipsis",
                  //         whiteSpace: "nowrap",
                  //       }}
                  //     >
                  //       {typeof row[column.id] === "boolean"
                  //         ? row[column.id].toString()
                  //         : row[column.id]}
                  //     </TableCell>
                  //   ))}
                  // </TableRow>
                  // <TableRow
                  //   key={idx}
                  //   sx={{
                  //     backgroundColor: idx % 2 === 0 ? "#f0f9ff" : "#ffffff",
                  //     transition: "all 0.3s ease-in-out",
                  //     height: "48px",
                  //     borderRadius: 2,
                  //     "&:hover": {
                  //       backgroundColor: "#fffde7", // soft yellow
                  //       borderRadius: "12px",
                  //       boxShadow: "0 4px 20px rgba(255, 235, 59, 0.6)",
                  //       transform: "scale(1.01)",
                  //       cursor: "pointer",
                  //       zIndex: 1,
                  //     },
                  //   }}
                  // >
                  //   {columns.map((column) => (
                  //     <TableCell key={column.id}>
                  //       {typeof row[column.id] === "boolean"
                  //         ? row[column.id].toString()
                  //         : row[column.id]}
                  //     </TableCell>
                  //   ))}
                  // </TableRow>
                  <TableRow
                    key={idx}
                    sx={{
                      backgroundColor: idx % 2 === 0 ? "#f0f9ff" : "#ffffff",
                      transition: "all 0.3s ease-in-out",
                      height: "48px",
                      borderRadius: 2,
                      "&:hover": {
                        backgroundColor: "#fff176", // Darker yellow shade
                        borderRadius: "16px",
                        boxShadow: "0 8px 24px rgba(255, 202, 40, 0.8)", // Deeper shadow
                        transform: "scale(1.015)",
                        cursor: "pointer",
                        zIndex: 2,
                      },
                    }}
                  >
                    {columns.map((column) => (
                      <TableCell
                        key={column.id}
                        sx={{
                          py: 1,
                          maxWidth: "200px",
                          overflow: "hidden",
                          textOverflow: "ellipsis",
                          whiteSpace: "nowrap",
                        }}
                      >
                        {typeof row[column.id] === "boolean"
                          ? row[column.id].toString()
                          : row[column.id]}
                      </TableCell>
                    ))}
                  </TableRow>
                ))
              )}
            </TableBody>
          </Table>
        </TableContainer>

        {/* Pagination */}
        <TablePagination
          component="div"
          count={totalCount}
          page={page}
          onPageChange={handleChangePage}
          rowsPerPage={rowsPerPage}
          onRowsPerPageChange={handleChangeRowsPerPage}
          rowsPerPageOptions={[5, 10, 25]}
          sx={{
            backgroundColor: "#fafafa",
            borderTop: "1px solid #e0e0e0",
            px: 2,
          }}
        />
      </Paper>
    </Box>
  );
}

export default ApplicationList;
