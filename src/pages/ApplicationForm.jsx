// // // // // // import { useState } from "react";
// // // // // // import axios from "../api";
// // // // // // import { useNavigate } from "react-router-dom";

// // // // // // export default function ApplicationForm({ editData }) {
// // // // // //   const [form, setForm] = useState({
// // // // // //     applicant_name: editData?.applicant_name || "",
// // // // // //     email_id: editData?.email_id || "",
// // // // // //     pan_number: editData?.pan_number || "",
// // // // // //     applicant_address: editData?.applicant_address || "",
// // // // // //     bank: editData?.bank || "",
// // // // // //     status: editData?.status || "",
// // // // // //     product_type: editData?.product_type || "",
// // // // // //   });

// // // // // //   const navigate = useNavigate();

// // // // // //   const handleChange = (e) => {
// // // // // //     setForm({ ...form, [e.target.name]: e.target.value });
// // // // // //   };

// // // // // //   const handleSubmit = async (e) => {
// // // // // //     e.preventDefault();
// // // // // //     try {
// // // // // //       if (editData) {
// // // // // //         await axios.put(`/applications/${editData.id}/`, form);
// // // // // //       } else {
// // // // // //         await axios.post("/applications/", form);
// // // // // //       }
// // // // // //       navigate("/applications");
// // // // // //     } catch (err) {
// // // // // //       console.error(err);
// // // // // //     }
// // // // // //   };

// // // // // //   return (
// // // // // //     <form onSubmit={handleSubmit} className="space-y-4 max-w-xl mx-auto">
// // // // // //       {Object.entries(form).map(([key, value]) => (
// // // // // //         <div key={key}>
// // // // // //           <label className="block capitalize">{key}</label>
// // // // // //           <input
// // // // // //             name={key}
// // // // // //             value={value}
// // // // // //             onChange={handleChange}
// // // // // //             className="w-full p-2 border rounded"
// // // // // //             required
// // // // // //           />
// // // // // //         </div>
// // // // // //       ))}
// // // // // //       <button
// // // // // //         type="submit"
// // // // // //         className="bg-blue-600 text-white px-4 py-2 rounded"
// // // // // //       >
// // // // // //         {editData ? "Update" : "Create"}
// // // // // //       </button>
// // // // // //     </form>
// // // // // //   );
// // // // // // }

// //axios API call
// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import { useNavigate, useParams } from "react-router-dom";
// import { Box, Button, TextField, Typography, MenuItem } from "@mui/material";

// function ApplicationForm() {
//   const navigate = useNavigate();
//   const { id } = useParams();
//   const isEditMode = Boolean(id);

//   const [formData, setFormData] = useState({
//     rlms_no: "",
//     applicant_name: "",
//     contact_no: "",
//     email_id: "",
//     pan_number: "",
//     aadhar_card_number: "",
//     bank: "",
//     loan_account_number: "",
//     loan_amount: "",
//     applicant_address: "",
//     property_address: "",
//     status: "",
//     product_type: "",
//     login_date: "",
//     month: "",
//     remark: "",
//   });

//   const bankOptions = [
//     "LIC HFL",
//     "ICICI",
//     "SBI",
//     "HDFC",
//     "AXIS",
//     "LIC",
//     "ADITYA BIRLA",
//     "ICICI HFC",
//     "BOM",
//     "UNION",
//     "SHRIRAM FIA.",
//     "OTHER",
//   ];

//   const statusOptions = [
//     "Login",
//     "Doc_initiated",
//     "Doc_completed",
//     "Sent_to_Sanction",
//     "Sanctioned",
//     "Sent_to_Disb",
//     "Disbursed",
//     "Reject",
//   ];

//   const productTypeOptions = [
//     "New Home loan",
//     "Top up loan",
//     "Loan Against property",
//     "Personal loan",
//   ];

//   useEffect(() => {
//     if (isEditMode) {
//       axios
//         .get(`http://127.0.0.1:8000/api/applications/${id}/`)
//         .then((res) => {
//           setFormData(res.data.data);
//         })
//         .catch((err) => {
//           console.error("Error fetching application:", err);
//         });
//     }
//   }, [id, isEditMode]);

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       if (isEditMode) {
//         await axios.put(
//           `http://127.0.0.1:8000/api/applications/${id}/`,
//           formData
//         );
//         alert("Application updated successfully!");
//       } else {
//         await axios.post("http://127.0.0.1:8000/api/applications/", formData);
//         alert("Application created successfully!");
//       }
//       navigate("/applications");
//     } catch (err) {
//       console.error("Error saving application:", err);
//       alert("Error saving application.");
//     }
//   };

//   return (
//     <Box sx={{ p: 4 }}>
//       <Typography variant="h5" sx={{ mb: 2, fontWeight: "bold" }}>
//         {isEditMode ? "Edit Application" : "Create Application"}
//       </Typography>
//       <form onSubmit={handleSubmit} style={{ maxWidth: 600 }}>
//         <TextField
//           name="rlms_no"
//           label="RLMS No"
//           value={formData.rlms_no}
//           onChange={handleChange}
//           fullWidth
//           sx={{ mb: 2 }}
//         />
//         <TextField
//           name="applicant_name"
//           label="Applicant Name"
//           value={formData.applicant_name}
//           onChange={handleChange}
//           required
//           fullWidth
//           sx={{ mb: 2 }}
//         />
//         <TextField
//           name="contact_no"
//           label="Contact No"
//           value={formData.contact_no}
//           onChange={handleChange}
//           fullWidth
//           sx={{ mb: 2 }}
//         />
//         <TextField
//           name="email_id"
//           label="Email ID"
//           value={formData.email_id}
//           onChange={handleChange}
//           required
//           fullWidth
//           sx={{ mb: 2 }}
//         />
//         <TextField
//           name="pan_number"
//           label="PAN Number"
//           value={formData.pan_number}
//           onChange={handleChange}
//           required
//           fullWidth
//           sx={{ mb: 2 }}
//         />
//         <TextField
//           name="aadhar_card_number"
//           label="Aadhar Card Number"
//           value={formData.aadhar_card_number}
//           onChange={handleChange}
//           fullWidth
//           sx={{ mb: 2 }}
//         />
//         <TextField
//           name="bank"
//           label="Bank"
//           select
//           value={formData.bank}
//           onChange={handleChange}
//           required
//           fullWidth
//           sx={{ mb: 2 }}
//         >
//           {bankOptions.map((option) => (
//             <MenuItem key={option} value={option}>
//               {option}
//             </MenuItem>
//           ))}
//         </TextField>
//         <TextField
//           name="loan_account_number"
//           label="Loan Account Number"
//           value={formData.loan_account_number}
//           onChange={handleChange}
//           fullWidth
//           sx={{ mb: 2 }}
//         />
//         <TextField
//           name="loan_amount"
//           label="Loan Amount"
//           type="number"
//           value={formData.loan_amount}
//           onChange={handleChange}
//           fullWidth
//           sx={{ mb: 2 }}
//         />
//         <TextField
//           name="applicant_address"
//           label="Applicant Address"
//           value={formData.applicant_address}
//           onChange={handleChange}
//           required
//           fullWidth
//           multiline
//           rows={2}
//           sx={{ mb: 2 }}
//         />
//         <TextField
//           name="property_address"
//           label="Property Address"
//           value={formData.property_address}
//           onChange={handleChange}
//           fullWidth
//           multiline
//           rows={2}
//           sx={{ mb: 2 }}
//         />
//         <TextField
//           name="status"
//           label="Status"
//           select
//           value={formData.status}
//           onChange={handleChange}
//           required
//           fullWidth
//           sx={{ mb: 2 }}
//         >
//           {statusOptions.map((option) => (
//             <MenuItem key={option} value={option}>
//               {option}
//             </MenuItem>
//           ))}
//         </TextField>
//         <TextField
//           name="product_type"
//           label="Product Type"
//           select
//           value={formData.product_type}
//           onChange={handleChange}
//           required
//           fullWidth
//           sx={{ mb: 2 }}
//         >
//           {productTypeOptions.map((option) => (
//             <MenuItem key={option} value={option}>
//               {option}
//             </MenuItem>
//           ))}
//         </TextField>
//         <TextField
//           name="login_date"
//           label="Login Date"
//           type="date"
//           value={formData.login_date}
//           onChange={handleChange}
//           fullWidth
//           sx={{ mb: 2 }}
//           InputLabelProps={{ shrink: true }}
//         />
//         <TextField
//           name="month"
//           label="Month (YYYY-MM)"
//           value={formData.month}
//           onChange={handleChange}
//           fullWidth
//           sx={{ mb: 2 }}
//         />
//         <TextField
//           name="remark"
//           label="Remark"
//           value={formData.remark}
//           onChange={handleChange}
//           fullWidth
//           multiline
//           rows={2}
//           sx={{ mb: 2 }}
//         />
//         <Box sx={{ display: "flex", justifyContent: "space-between", mt: 2 }}>
//           <Button type="submit" variant="contained" color="primary">
//             {isEditMode ? "Update" : "Create"}
//           </Button>

//           <Button
//             variant="contained"
//             color="secondary"
//             onClick={() => navigate("/applications")}
//           >
//             Cancel
//           </Button>
//         </Box>
//       </form>
//     </Box>
//   );
// }

// export default ApplicationForm;

// // // // import React, { useState, useEffect } from "react";
// // // // import { Box, Button, TextField, MenuItem, Typography } from "@mui/material";

// // // // function ApplicationForm() {
// // // //   const [formData, setFormData] = useState({
// // // //     rlms_no: "",
// // // //     applicant_name: "",
// // // //     contact_no: "",
// // // //     email_id: "",
// // // //     pan_number: "",
// // // //     aadhar_card_number: "",
// // // //     bank: "",
// // // //     loan_account_number: "",
// // // //     loan_amount: "",
// // // //     applicant_address: "",
// // // //     property_address: "",
// // // //     status: "",
// // // //     product_type: "",
// // // //     login_date: "",
// // // //     month: "",
// // // //     remark: "",
// // // //   });

// // // //   const bankOptions = [
// // // //     "LIC HFL",
// // // //     "ICICI",
// // // //     "SBI",
// // // //     "HDFC",
// // // //     "AXIS",
// // // //     "LIC",
// // // //     "ADITYA BIRLA",
// // // //     "ICICI HFC",
// // // //     "BOM",
// // // //     "UNION",
// // // //     "SHRIRAM FIA.",
// // // //     "OTHER",
// // // //   ];

// // // //   const statusOptions = [
// // // //     "Login",
// // // //     "Doc_initiated",
// // // //     "Doc_completed",
// // // //     "Sent_to_Sanction",
// // // //     "Sanctioned",
// // // //     "Sent_to_Disb",
// // // //     "Disbursed",
// // // //     "Reject",
// // // //   ];

// // // //   const productTypeOptions = [
// // // //     "New Home loan",
// // // //     "Top up loan",
// // // //     "Loan Against property",
// // // //     "Personal loan",
// // // //   ];

// // // //   const handleChange = (e) => {
// // // //     setFormData({ ...formData, [e.target.name]: e.target.value });
// // // //   };

// // // //   const handleSubmit = (e) => {
// // // //     e.preventDefault();
// // // //     // submit logic here
// // // //     alert("Form submitted!");
// // // //   };

// // // //   return (
// // // //     <Box
// // // //       sx={{
// // // //         maxWidth: 800,
// // // //         margin: "auto",
// // // //         p: 4,
// // // //         bgcolor: "#fafafa",
// // // //         borderRadius: 2,
// // // //         boxShadow: 3,
// // // //       }}
// // // //     >
// // // //       <Typography variant="h5" mb={3} fontWeight="bold" textAlign="center">
// // // //         Application Form
// // // //       </Typography>

// // // //       <form onSubmit={handleSubmit}>
// // // //         {/** All fields have fullWidth and margin bottom for spacing **/}
// // // //         <TextField
// // // //           label="RLMS No"
// // // //           name="rlms_no"
// // // //           value={formData.rlms_no}
// // // //           onChange={handleChange}
// // // //           fullWidth
// // // //           sx={{ mb: 2 }}
// // // //         />

// // // //         <TextField
// // // //           label="Applicant Name"
// // // //           name="applicant_name"
// // // //           value={formData.applicant_name}
// // // //           onChange={handleChange}
// // // //           required
// // // //           fullWidth
// // // //           sx={{ mb: 2 }}
// // // //         />

// // // //         <TextField
// // // //           label="Contact No"
// // // //           name="contact_no"
// // // //           value={formData.contact_no}
// // // //           onChange={handleChange}
// // // //           fullWidth
// // // //           sx={{ mb: 2 }}
// // // //         />

// // // //         <TextField
// // // //           label="Email ID"
// // // //           name="email_id"
// // // //           value={formData.email_id}
// // // //           onChange={handleChange}
// // // //           type="email"
// // // //           required
// // // //           fullWidth
// // // //           sx={{ mb: 2 }}
// // // //         />

// // // //         <TextField
// // // //           label="PAN Number"
// // // //           name="pan_number"
// // // //           value={formData.pan_number}
// // // //           onChange={handleChange}
// // // //           required
// // // //           fullWidth
// // // //           sx={{ mb: 2 }}
// // // //         />

// // // //         <TextField
// // // //           label="Aadhar Card Number"
// // // //           name="aadhar_card_number"
// // // //           value={formData.aadhar_card_number}
// // // //           onChange={handleChange}
// // // //           fullWidth
// // // //           sx={{ mb: 2 }}
// // // //         />

// // // //         <TextField
// // // //           label="Bank"
// // // //           name="bank"
// // // //           value={formData.bank}
// // // //           onChange={handleChange}
// // // //           select
// // // //           required
// // // //           fullWidth
// // // //           sx={{ mb: 2 }}
// // // //         >
// // // //           {bankOptions.map((option) => (
// // // //             <MenuItem key={option} value={option}>
// // // //               {option}
// // // //             </MenuItem>
// // // //           ))}
// // // //         </TextField>

// // // //         <TextField
// // // //           label="Loan Account Number"
// // // //           name="loan_account_number"
// // // //           value={formData.loan_account_number}
// // // //           onChange={handleChange}
// // // //           fullWidth
// // // //           sx={{ mb: 2 }}
// // // //         />

// // // //         <TextField
// // // //           label="Loan Amount"
// // // //           name="loan_amount"
// // // //           value={formData.loan_amount}
// // // //           onChange={handleChange}
// // // //           type="number"
// // // //           fullWidth
// // // //           sx={{ mb: 2 }}
// // // //         />

// // // //         <TextField
// // // //           label="Applicant Address"
// // // //           name="applicant_address"
// // // //           value={formData.applicant_address}
// // // //           onChange={handleChange}
// // // //           multiline
// // // //           rows={2}
// // // //           required
// // // //           fullWidth
// // // //           sx={{ mb: 2 }}
// // // //         />

// // // //         <TextField
// // // //           label="Property Address"
// // // //           name="property_address"
// // // //           value={formData.property_address}
// // // //           onChange={handleChange}
// // // //           multiline
// // // //           rows={2}
// // // //           fullWidth
// // // //           sx={{ mb: 2 }}
// // // //         />

// // // //         <TextField
// // // //           label="Status"
// // // //           name="status"
// // // //           value={formData.status}
// // // //           onChange={handleChange}
// // // //           select
// // // //           required
// // // //           fullWidth
// // // //           sx={{ mb: 2 }}
// // // //         >
// // // //           {statusOptions.map((option) => (
// // // //             <MenuItem key={option} value={option}>
// // // //               {option.replace(/_/g, " ")}
// // // //             </MenuItem>
// // // //           ))}
// // // //         </TextField>

// // // //         <TextField
// // // //           label="Product Type"
// // // //           name="product_type"
// // // //           value={formData.product_type}
// // // //           onChange={handleChange}
// // // //           select
// // // //           required
// // // //           fullWidth
// // // //           sx={{ mb: 2 }}
// // // //         >
// // // //           {productTypeOptions.map((option) => (
// // // //             <MenuItem key={option} value={option}>
// // // //               {option}
// // // //             </MenuItem>
// // // //           ))}
// // // //         </TextField>

// // // //         <TextField
// // // //           label="Login Date"
// // // //           name="login_date"
// // // //           value={formData.login_date}
// // // //           onChange={handleChange}
// // // //           type="date"
// // // //           InputLabelProps={{ shrink: true }}
// // // //           fullWidth
// // // //           sx={{ mb: 2 }}
// // // //         />

// // // //         {/* <TextField
// // // //           label="Month (YYYY-MM)"
// // // //           name="month"
// // // //           value={formData.month}
// // // //           onChange={handleChange}
// // // //           fullWidth
// // // //           sx={{ mb: 2 }}
// // // //           placeholder="YYYY-MM"
// // // //         /> */}
// // // //         <TextField
// // // //           label="Month"
// // // //           name="month"
// // // //           value={formData.month}
// // // //           onChange={handleChange}
// // // //           type="month" // Use "month" type here
// // // //           fullWidth
// // // //           sx={{ mb: 2 }}
// // // //           InputLabelProps={{ shrink: true }} // Keep label visible on selection
// // // //         />

// // // //         <TextField
// // // //           label="Remark"
// // // //           name="remark"
// // // //           value={formData.remark}
// // // //           onChange={handleChange}
// // // //           multiline
// // // //           rows={2}
// // // //           fullWidth
// // // //           sx={{ mb: 3 }}
// // // //         />

// // // //         <Box sx={{ display: "flex", justifyContent: "space-between" }}>
// // // //           <Button variant="contained" color="primary" type="submit">
// // // //             Submit
// // // //           </Button>

// // // //           <Button
// // // //             variant="contained"
// // // //             color="secondary"
// // // //             type="button"
// // // //             onClick={() => alert("Cancel clicked")}
// // // //           >
// // // //             Cancel
// // // //           </Button>
// // // //         </Box>
// // // //       </form>
// // // //     </Box>
// // // //   );
// // // // }

// // // // export default ApplicationForm;

// // // import React, { useState } from "react";
// // // import { Box, Button, TextField, MenuItem, Typography } from "@mui/material";

// // // function ApplicationForm() {
// // //   const [formData, setFormData] = useState({
// // //     rlms_no: "",
// // //     applicant_name: "",
// // //     contact_no: "",
// // //     email_id: "",
// // //     pan_number: "",
// // //     aadhar_card_number: "",
// // //     bank: "",
// // //     loan_account_number: "",
// // //     loan_amount: "",
// // //     applicant_address: "",
// // //     property_address: "",
// // //     status: "",
// // //     product_type: "",
// // //     login_date: "",
// // //     month: "",
// // //     remark: "",
// // //   });

// // //   const bankOptions = [
// // //     "LIC HFL",
// // //     "ICICI",
// // //     "SBI",
// // //     "HDFC",
// // //     "AXIS",
// // //     "LIC",
// // //     "ADITYA BIRLA",
// // //     "ICICI HFC",
// // //     "BOM",
// // //     "UNION",
// // //     "SHRIRAM FIA.",
// // //     "OTHER",
// // //   ];

// // //   const statusOptions = [
// // //     "Login",
// // //     "Doc_initiated",
// // //     "Doc_completed",
// // //     "Sent_to_Sanction",
// // //     "Sanctioned",
// // //     "Sent_to_Disb",
// // //     "Disbursed",
// // //     "Reject",
// // //   ];

// // //   const productTypeOptions = [
// // //     "New Home loan",
// // //     "Top up loan",
// // //     "Loan Against property",
// // //     "Personal loan",
// // //   ];

// // //   const handleChange = (e) => {
// // //     setFormData({ ...formData, [e.target.name]: e.target.value });
// // //   };

// // //   const handleSubmit = (e) => {
// // //     e.preventDefault();
// // //     alert("Form submitted!");
// // //   };

// // //   return (
// // //     <Box
// // //       sx={{
// // //         minHeight: "100vh",
// // //         bgcolor: "linear-gradient(135deg, #f6f9fc 0%, #e4ecf7 100%)",
// // //         background: "linear-gradient(135deg, #74ebd5 0%, #ACB6E5 100%)",
// // //         display: "flex",
// // //         alignItems: "center",
// // //         justifyContent: "center",
// // //         p: 4,
// // //       }}
// // //     >
// // //       <Box
// // //         sx={{
// // //           maxWidth: 800,
// // //           width: "100%",
// // //           bgcolor: "#ffffffcc", // translucent white
// // //           backdropFilter: "blur(10px)", // blur effect
// // //           borderRadius: "16px",
// // //           boxShadow: "0 12px 24px rgba(0, 0, 0, 0.15)",
// // //           p: 4,
// // //           border: "1px solid rgba(255, 255, 255, 0.2)",
// // //           transition: "transform 0.3s ease, box-shadow 0.3s ease",
// // //           "&:hover": {
// // //             transform: "scale(1.01)",
// // //             boxShadow: "0 16px 32px rgba(0, 0, 0, 0.25)",
// // //           },
// // //         }}
// // //       >
// // //         <Typography
// // //           variant="h4"
// // //           mb={3}
// // //           fontWeight="bold"
// // //           textAlign="center"
// // //           color="primary"
// // //         >
// // //           Application Form
// // //         </Typography>

// // //         <form onSubmit={handleSubmit}>
// // //           <TextField
// // //             label="RLMS No"
// // //             name="rlms_no"
// // //             value={formData.rlms_no}
// // //             onChange={handleChange}
// // //             fullWidth
// // //             sx={{ mb: 2 }}
// // //           />

// // //           {/* <TextField
// // //             label="Applicant Name"
// // //             name="applicant_name"
// // //             value={formData.applicant_name}
// // //             onChange={handleChange}
// // //             required
// // //             fullWidth
// // //             sx={{ mb: 2 }}
// // //           /> */}

// // //           <TextField
// // //             label={
// // //               <span>
// // //                 Applicant Name <span style={{ color: "red" }}>**</span>
// // //               </span>
// // //             }
// // //             name="applicant_name"
// // //             value={formData.applicant_name}
// // //             onChange={handleChange}
// // //             required
// // //             fullWidth
// // //             sx={{ mb: 2 }}
// // //           />

// // //           <TextField
// // //             label="Contact No"
// // //             name="contact_no"
// // //             value={formData.contact_no}
// // //             onChange={handleChange}
// // //             fullWidth
// // //             sx={{ mb: 2 }}
// // //           />

// // //           <TextField
// // //             label="Email ID"
// // //             name="email_id"
// // //             value={formData.email_id}
// // //             onChange={handleChange}
// // //             type="email"
// // //             fullWidth
// // //             sx={{ mb: 2 }}
// // //           />

// // //           {/* <TextField
// // //             label="PAN Number"
// // //             name="pan_number"
// // //             value={formData.pan_number}
// // //             onChange={handleChange}
// // //             required
// // //             fullWidth
// // //             sx={{ mb: 2 }}
// // //           /> */}

// // //           <TextField
// // //             label={
// // //               <span>
// // //                 PAN Number <span style={{ color: "red" }}>*</span>
// // //               </span>
// // //             }
// // //             name="pan_number"
// // //             value={formData.pan_number}
// // //             onChange={handleChange}
// // //             required
// // //             fullWidth
// // //             sx={{ mb: 2 }}
// // //           />

// // //           <TextField
// // //             label="Aadhar Card Number"
// // //             name="aadhar_card_number"
// // //             value={formData.aadhar_card_number}
// // //             onChange={handleChange}
// // //             fullWidth
// // //             sx={{ mb: 2 }}
// // //           />

// // //           <TextField
// // //             label="Bank"
// // //             name="bank"
// // //             value={formData.bank}
// // //             onChange={handleChange}
// // //             select
// // //             required
// // //             fullWidth
// // //             sx={{ mb: 2 }}
// // //           >
// // //             {bankOptions.map((option) => (
// // //               <MenuItem key={option} value={option}>
// // //                 {option}
// // //               </MenuItem>
// // //             ))}
// // //           </TextField>

// // //           <TextField
// // //             label="Loan Account Number"
// // //             name="loan_account_number"
// // //             value={formData.loan_account_number}
// // //             onChange={handleChange}
// // //             fullWidth
// // //             sx={{ mb: 2 }}
// // //           />

// // //           <TextField
// // //             label="Loan Amount"
// // //             name="loan_amount"
// // //             value={formData.loan_amount}
// // //             onChange={handleChange}
// // //             type="number"
// // //             fullWidth
// // //             sx={{ mb: 2 }}
// // //           />

// // //           <TextField
// // //             label="Applicant Address"
// // //             name="applicant_address"
// // //             value={formData.applicant_address}
// // //             onChange={handleChange}
// // //             multiline
// // //             rows={2}
// // //             required
// // //             fullWidth
// // //             sx={{ mb: 2 }}
// // //           />

// // //           <TextField
// // //             label="Property Address"
// // //             name="property_address"
// // //             value={formData.property_address}
// // //             onChange={handleChange}
// // //             multiline
// // //             rows={2}
// // //             fullWidth
// // //             sx={{ mb: 2 }}
// // //           />

// // //           <TextField
// // //             label="Status"
// // //             name="status"
// // //             value={formData.status}
// // //             onChange={handleChange}
// // //             select
// // //             required
// // //             fullWidth
// // //             sx={{ mb: 2 }}
// // //           >
// // //             {statusOptions.map((option) => (
// // //               <MenuItem key={option} value={option}>
// // //                 {option.replace(/_/g, " ")}
// // //               </MenuItem>
// // //             ))}
// // //           </TextField>

// // //           <TextField
// // //             label="Product Type"
// // //             name="product_type"
// // //             value={formData.product_type}
// // //             onChange={handleChange}
// // //             select
// // //             required
// // //             fullWidth
// // //             sx={{ mb: 2 }}
// // //           >
// // //             {productTypeOptions.map((option) => (
// // //               <MenuItem key={option} value={option}>
// // //                 {option}
// // //               </MenuItem>
// // //             ))}
// // //           </TextField>

// // //           <TextField
// // //             label="Login Date"
// // //             name="login_date"
// // //             value={formData.login_date}
// // //             onChange={handleChange}
// // //             type="date"
// // //             fullWidth
// // //             sx={{ mb: 2 }}
// // //             InputLabelProps={{ shrink: true }}
// // //           />

// // //           <TextField
// // //             label="Month"
// // //             name="month"
// // //             value={formData.month}
// // //             onChange={handleChange}
// // //             type="month"
// // //             fullWidth
// // //             sx={{ mb: 2 }}
// // //             InputLabelProps={{ shrink: true }}
// // //           />

// // //           <TextField
// // //             label="Remark"
// // //             name="remark"
// // //             value={formData.remark}
// // //             onChange={handleChange}
// // //             multiline
// // //             rows={2}
// // //             fullWidth
// // //             sx={{ mb: 3 }}
// // //           />

// // //           <Box sx={{ display: "flex", justifyContent: "space-between" }}>
// // //             <Button
// // //               variant="contained"
// // //               color="primary"
// // //               type="submit"
// // //               sx={{
// // //                 px: 4,
// // //                 "&:hover": {
// // //                   backgroundColor: "#1565c0",
// // //                 },
// // //               }}
// // //             >
// // //               Submit
// // //             </Button>

// // //             <Button
// // //               variant="contained"
// // //               color="secondary"
// // //               type="button"
// // //               onClick={() => alert("Cancel clicked")}
// // //               sx={{
// // //                 px: 4,
// // //                 "&:hover": {
// // //                   backgroundColor: "#c62828",
// // //                 },
// // //               }}
// // //             >
// // //               Cancel
// // //             </Button>
// // //           </Box>
// // //         </form>
// // //       </Box>
// // //     </Box>
// // //   );
// // // }

// // // export default ApplicationForm;

// // import React, { useState } from "react";
// // import { Box, Button, TextField, MenuItem, Typography } from "@mui/material";

// // function ApplicationForm() {
// //   const [formData, setFormData] = useState({
// //     rlms_no: "",
// //     applicant_name: "",
// //     contact_no: "",
// //     email_id: "",
// //     pan_number: "",
// //     aadhar_card_number: "",
// //     bank: "",
// //     loan_account_number: "",
// //     loan_amount: "",
// //     applicant_address: "",
// //     property_address: "",
// //     status: "",
// //     product_type: "",
// //     login_date: "",
// //     month: "",
// //     remark: "",
// //   });

// //   const bankOptions = [
// //     "LIC HFL",
// //     "ICICI",
// //     "SBI",
// //     "HDFC",
// //     "AXIS",
// //     "LIC",
// //     "ADITYA BIRLA",
// //     "ICICI HFC",
// //     "BOM",
// //     "UNION",
// //     "SHRIRAM FIA.",
// //     "OTHER",
// //   ];

// //   const statusOptions = [
// //     "Login",
// //     "Doc_initiated",
// //     "Doc_completed",
// //     "Sent_to_Sanction",
// //     "Sanctioned",
// //     "Sent_to_Disb",
// //     "Disbursed",
// //     "Reject",
// //   ];

// //   const productTypeOptions = [
// //     "New Home loan",
// //     "Top up loan",
// //     "Loan Against property",
// //     "Personal loan",
// //   ];

// //   const handleChange = (e) => {
// //     setFormData({ ...formData, [e.target.name]: e.target.value });
// //   };

// //   const handleSubmit = (e) => {
// //     e.preventDefault();
// //     alert("Form submitted!");
// //   };

// //   return (
// //     <Box
// //       sx={{
// //         minHeight: "100vh",
// //         bgcolor: "linear-gradient(135deg, #f6f9fc 0%, #e4ecf7 100%)",
// //         background: "linear-gradient(135deg, #74ebd5 0%, #ACB6E5 100%)",
// //         display: "flex",
// //         alignItems: "center",
// //         justifyContent: "center",
// //         p: 4,
// //       }}
// //     >
// //       <Box
// //         sx={{
// //           maxWidth: 800,
// //           width: "100%",
// //           bgcolor: "#ffffffcc", // translucent white
// //           backdropFilter: "blur(10px)", // blur effect
// //           borderRadius: "16px",
// //           boxShadow: "0 12px 24px rgba(0, 0, 0, 0.15)",
// //           p: 4,
// //           border: "1px solid rgba(255, 255, 255, 0.2)",
// //           transition: "transform 0.3s ease, box-shadow 0.3s ease",
// //           "&:hover": {
// //             transform: "scale(1.01)",
// //             boxShadow: "0 16px 32px rgba(0, 0, 0, 0.25)",
// //           },
// //         }}
// //       >
// //         <Typography
// //           variant="h4"
// //           mb={3}
// //           fontWeight="bold"
// //           textAlign="center"
// //           color="primary"
// //         >
// //           Application Form
// //         </Typography>

// //         <form onSubmit={handleSubmit}>
// //           <TextField
// //             label="RLMS No"
// //             name="rlms_no"
// //             value={formData.rlms_no}
// //             onChange={handleChange}
// //             fullWidth
// //             sx={{ mb: 2 }}
// //           />

// //           <TextField
// //             label={
// //               <span>
// //                 Applicant Name <span style={{ color: "red" }}>*</span>
// //               </span>
// //             }
// //             name="applicant_name"
// //             value={formData.applicant_name}
// //             onChange={handleChange}
// //             required
// //             fullWidth
// //             sx={{ mb: 2 }}
// //           />

// //           <TextField
// //             label="Contact No"
// //             name="contact_no"
// //             value={formData.contact_no}
// //             onChange={handleChange}
// //             placeholder="Enter Applicant's Contact Number"
// //             fullWidth
// //             sx={{ mb: 2 }}
// //           />

// //           <TextField
// //             label="Email ID"
// //             name="email_id"
// //             value={formData.email_id}
// //             onChange={handleChange}
// //             type="email"
// //             placeholder="Enter Applicant's email address"
// //             fullWidth
// //             sx={{ mb: 2 }}
// //           />

// //           <TextField
// //             label={
// //               <span>
// //                 PAN Number <span style={{ color: "red" }}>*</span>
// //               </span>
// //             }
// //             name="pan_number"
// //             value={formData.pan_number}
// //             onChange={handleChange}
// //             required
// //             fullWidth
// //             sx={{ mb: 2 }}
// //           />

// //           <TextField
// //             label="Aadhar Card Number"
// //             name="aadhar_card_number"
// //             value={formData.aadhar_card_number}
// //             onChange={handleChange}
// //             fullWidth
// //             sx={{ mb: 2 }}
// //           />

// //           <TextField
// //             label={
// //               <span>
// //                 Bank <span style={{ color: "red" }}>*</span>
// //               </span>
// //             }
// //             name="bank"
// //             value={formData.bank}
// //             onChange={handleChange}
// //             select
// //             required
// //             fullWidth
// //             sx={{ mb: 2 }}
// //           >
// //             {bankOptions.map((option) => (
// //               <MenuItem key={option} value={option}>
// //                 {option}
// //               </MenuItem>
// //             ))}
// //           </TextField>

// //           <TextField
// //             label="Loan Account Number"
// //             name="loan_account_number"
// //             value={formData.loan_account_number}
// //             onChange={handleChange}
// //             fullWidth
// //             sx={{ mb: 2 }}
// //           />

// //           <TextField
// //             label="Loan Amount"
// //             name="loan_amount"
// //             value={formData.loan_amount}
// //             onChange={handleChange}
// //             type="number"
// //             fullWidth
// //             sx={{ mb: 2 }}
// //           />

// //           <TextField
// //             label={
// //               <span>
// //                 Applicant Address <span style={{ color: "red" }}>*</span>
// //               </span>
// //             }
// //             name="applicant_address"
// //             value={formData.applicant_address}
// //             onChange={handleChange}
// //             multiline
// //             rows={2}
// //             required
// //             fullWidth
// //             sx={{ mb: 2 }}
// //           />

// //           <TextField
// //             label="Property Address"
// //             name="property_address"
// //             value={formData.property_address}
// //             onChange={handleChange}
// //             multiline
// //             rows={2}
// //             fullWidth
// //             sx={{ mb: 2 }}
// //           />

// //           <TextField
// //             label={
// //               <span>
// //                 Status <span style={{ color: "red" }}>*</span>
// //               </span>
// //             }
// //             name="status"
// //             value={formData.status}
// //             onChange={handleChange}
// //             select
// //             required
// //             fullWidth
// //             sx={{ mb: 2 }}
// //           >
// //             {statusOptions.map((option) => (
// //               <MenuItem key={option} value={option}>
// //                 {option.replace(/_/g, " ")}
// //               </MenuItem>
// //             ))}
// //           </TextField>

// //           <TextField
// //             label={
// //               <span>
// //                 Product Type <span style={{ color: "red" }}>*</span>
// //               </span>
// //             }
// //             name="product_type"
// //             value={formData.product_type}
// //             onChange={handleChange}
// //             select
// //             required
// //             fullWidth
// //             sx={{ mb: 2 }}
// //           >
// //             {productTypeOptions.map((option) => (
// //               <MenuItem key={option} value={option}>
// //                 {option}
// //               </MenuItem>
// //             ))}
// //           </TextField>

// //           <TextField
// //             label="Login Date"
// //             name="login_date"
// //             value={formData.login_date}
// //             onChange={handleChange}
// //             type="date"
// //             fullWidth
// //             sx={{ mb: 2 }}
// //             InputLabelProps={{ shrink: true }}
// //           />

// //           <TextField
// //             label="Month"
// //             name="month"
// //             value={formData.month}
// //             onChange={handleChange}
// //             type="month"
// //             fullWidth
// //             sx={{ mb: 2 }}
// //             InputLabelProps={{ shrink: true }}
// //           />

// //           <TextField
// //             label="Remark"
// //             name="remark"
// //             value={formData.remark}
// //             onChange={handleChange}
// //             multiline
// //             rows={2}
// //             fullWidth
// //             sx={{ mb: 3 }}
// //           />

// //           <Box sx={{ display: "flex", justifyContent: "space-between" }}>
// //             <Button
// //               variant="contained"
// //               color="primary"
// //               type="submit"
// //               sx={{
// //                 px: 4,
// //                 "&:hover": {
// //                   backgroundColor: "#1565c0",
// //                 },
// //               }}
// //             >
// //               Submit
// //             </Button>

// //             <Button
// //               variant="contained"
// //               color="secondary"
// //               type="button"
// //               onClick={() => alert("Cancel clicked")}
// //               sx={{
// //                 px: 4,
// //                 "&:hover": {
// //                   backgroundColor: "#c62828",
// //                 },
// //               }}
// //             >
// //               Cancel
// //             </Button>
// //           </Box>
// //         </form>
// //       </Box>
// //     </Box>
// //   );
// // }

// // export default ApplicationForm;

// // import React, { useState } from "react";
// // import { Box, Button, TextField, MenuItem, Typography } from "@mui/material";
// // import { useNavigate } from "react-router-dom";

// // function ApplicationForm() {
// //   const navigate = useNavigate();
// //   const [formData, setFormData] = useState({
// //     rlms_no: "",
// //     applicant_name: "",
// //     contact_no: "",
// //     email_id: "",
// //     pan_number: "",
// //     aadhar_card_number: "",
// //     bank: "",
// //     loan_account_number: "",
// //     loan_amount: "",
// //     applicant_address: "",
// //     property_address: "",
// //     status: "",
// //     product_type: "",
// //     login_date: "",
// //     month: "",
// //     remark: "",
// //   });

// //   const bankOptions = [
// //     "LIC HFL",
// //     "ICICI",
// //     "SBI",
// //     "HDFC",
// //     "AXIS",
// //     "LIC",
// //     "ADITYA BIRLA",
// //     "ICICI HFC",
// //     "BOM",
// //     "UNION",
// //     "SHRIRAM FIA.",
// //     "OTHER",
// //   ];

// //   const statusOptions = [
// //     "Login",
// //     "Doc_initiated",
// //     "Doc_completed",
// //     "Sent_to_Sanction",
// //     "Sanctioned",
// //     "Sent_to_Disb",
// //     "Disbursed",
// //     "Reject",
// //   ];

// //   const productTypeOptions = [
// //     "New Home loan",
// //     "Top up loan",
// //     "Loan Against property",
// //     "Personal loan",
// //   ];

// //   const handleChange = (e) => {
// //     setFormData({ ...formData, [e.target.name]: e.target.value });
// //   };

// //   const handleSubmit = (e) => {
// //     e.preventDefault();
// //     alert("Form submitted!");
// //     // Navigate back to application list after alert is closed
// //     navigate("/application-list"); // Change this path to your actual route
// //   };

// //   // Helper component for red asterisk for required fields
// //   const RequiredAsterisk = () => (
// //     <Typography component="span" sx={{ color: "red", ml: 0.3 }}>
// //       *
// //     </Typography>
// //   );

// //   return (
// //     <Box
// //       sx={{
// //         minHeight: "100vh",
// //         background: "linear-gradient(135deg, #74ebd5 0%, #ACB6E5 100%)",
// //         display: "flex",
// //         alignItems: "center",
// //         justifyContent: "center",
// //         p: 4,
// //       }}
// //     >
// //       <Box
// //         sx={{
// //           maxWidth: 800,
// //           width: "100%",
// //           bgcolor: "#ffffffcc", // translucent white
// //           backdropFilter: "blur(10px)", // blur effect
// //           borderRadius: "16px",
// //           boxShadow: "0 12px 24px rgba(0, 0, 0, 0.15)",
// //           p: 4,
// //           border: "1px solid rgba(255, 255, 255, 0.2)",
// //           transition: "transform 0.3s ease, box-shadow 0.3s ease",
// //           "&:hover": {
// //             transform: "scale(1.01)",
// //             boxShadow: "0 16px 32px rgba(0, 0, 0, 0.25)",
// //           },
// //         }}
// //       >
// //         <Typography
// //           variant="h4"
// //           mb={3}
// //           fontWeight="bold"
// //           textAlign="center"
// //           color="primary"
// //         >
// //           Application Form
// //         </Typography>

// //         <form onSubmit={handleSubmit}>
// //           <TextField
// //             label={<>RLMS No</>}
// //             name="rlms_no"
// //             value={formData.rlms_no}
// //             onChange={handleChange}
// //             placeholder="Enter RLMS number"
// //             fullWidth
// //             sx={{ mb: 2 }}
// //           />

// //           <TextField
// //             label={
// //               <>
// //                 Applicant Name
// //                 <RequiredAsterisk />
// //               </>
// //             }
// //             name="applicant_name"
// //             value={formData.applicant_name}
// //             onChange={handleChange}
// //             placeholder="Enter applicant's full name"
// //             required
// //             fullWidth
// //             sx={{ mb: 2 }}
// //           />

// //           <TextField
// //             label="Contact No"
// //             name="contact_no"
// //             value={formData.contact_no}
// //             onChange={handleChange}
// //             placeholder="Enter contact number"
// //             fullWidth
// //             sx={{ mb: 2 }}
// //           />

// //           <TextField
// //             label="Email ID"
// //             name="email_id"
// //             value={formData.email_id}
// //             onChange={handleChange}
// //             type="email"
// //             placeholder="Enter email address (optional)"
// //             fullWidth
// //             sx={{ mb: 2 }}
// //           />

// //           <TextField
// //             label={
// //               <>
// //                 PAN Number
// //                 <RequiredAsterisk />
// //               </>
// //             }
// //             name="pan_number"
// //             value={formData.pan_number}
// //             onChange={handleChange}
// //             placeholder="Enter PAN number"
// //             required
// //             fullWidth
// //             sx={{ mb: 2 }}
// //           />

// //           <TextField
// //             label="Aadhar Card Number"
// //             name="aadhar_card_number"
// //             value={formData.aadhar_card_number}
// //             onChange={handleChange}
// //             placeholder="Enter Aadhar card number"
// //             fullWidth
// //             sx={{ mb: 2 }}
// //           />

// //           <TextField
// //             label={
// //               <>
// //                 Bank
// //                 <RequiredAsterisk />
// //               </>
// //             }
// //             name="bank"
// //             value={formData.bank}
// //             onChange={handleChange}
// //             select
// //             required
// //             fullWidth
// //             sx={{ mb: 2 }}
// //             placeholder="Select bank"
// //           >
// //             {bankOptions.map((option) => (
// //               <MenuItem key={option} value={option}>
// //                 {option}
// //               </MenuItem>
// //             ))}
// //           </TextField>

// //           <TextField
// //             label="Loan Account Number"
// //             name="loan_account_number"
// //             value={formData.loan_account_number}
// //             onChange={handleChange}
// //             placeholder="Enter loan account number"
// //             fullWidth
// //             sx={{ mb: 2 }}
// //           />

// //           <TextField
// //             label="Loan Amount"
// //             name="loan_amount"
// //             value={formData.loan_amount}
// //             onChange={handleChange}
// //             type="number"
// //             placeholder="Enter loan amount"
// //             fullWidth
// //             sx={{ mb: 2 }}
// //           />

// //           <TextField
// //             label={
// //               <>
// //                 Applicant Address
// //                 <RequiredAsterisk />
// //               </>
// //             }
// //             name="applicant_address"
// //             value={formData.applicant_address}
// //             onChange={handleChange}
// //             multiline
// //             rows={2}
// //             placeholder="Enter applicant address"
// //             required
// //             fullWidth
// //             sx={{ mb: 2 }}
// //           />

// //           <TextField
// //             label="Property Address"
// //             name="property_address"
// //             value={formData.property_address}
// //             onChange={handleChange}
// //             multiline
// //             rows={2}
// //             placeholder="Enter property address"
// //             fullWidth
// //             sx={{ mb: 2 }}
// //           />

// //           <TextField
// //             label={
// //               <>
// //                 Status
// //                 <RequiredAsterisk />
// //               </>
// //             }
// //             name="status"
// //             value={formData.status}
// //             onChange={handleChange}
// //             select
// //             required
// //             fullWidth
// //             sx={{ mb: 2 }}
// //             placeholder="Select status"
// //           >
// //             {statusOptions.map((option) => (
// //               <MenuItem key={option} value={option}>
// //                 {option.replace(/_/g, " ")}
// //               </MenuItem>
// //             ))}
// //           </TextField>

// //           <TextField
// //             label={
// //               <>
// //                 Product Type
// //                 <RequiredAsterisk />
// //               </>
// //             }
// //             name="product_type"
// //             value={formData.product_type}
// //             onChange={handleChange}
// //             select
// //             required
// //             fullWidth
// //             sx={{ mb: 2 }}
// //             placeholder="Select product type"
// //           >
// //             {productTypeOptions.map((option) => (
// //               <MenuItem key={option} value={option}>
// //                 {option}
// //               </MenuItem>
// //             ))}
// //           </TextField>

// //           <TextField
// //             label="Login Date"
// //             name="login_date"
// //             value={formData.login_date}
// //             onChange={handleChange}
// //             type="date"
// //             fullWidth
// //             sx={{ mb: 2 }}
// //             InputLabelProps={{ shrink: true }}
// //           />

// //           <TextField
// //             label="Month"
// //             name="month"
// //             value={formData.month}
// //             onChange={handleChange}
// //             type="month"
// //             fullWidth
// //             sx={{ mb: 2 }}
// //             InputLabelProps={{ shrink: true }}
// //           />

// //           <TextField
// //             label="Remark"
// //             name="remark"
// //             value={formData.remark}
// //             onChange={handleChange}
// //             multiline
// //             rows={2}
// //             placeholder="Add any remarks"
// //             fullWidth
// //             sx={{ mb: 3 }}
// //           />

// //           <Box sx={{ display: "flex", justifyContent: "space-between" }}>
// //             <Button
// //               variant="contained"
// //               color="primary"
// //               type="submit"
// //               sx={{
// //                 px: 4,
// //                 "&:hover": {
// //                   backgroundColor: "#1565c0",
// //                 },
// //               }}
// //             >
// //               Submit
// //             </Button>

// //             <Button
// //               variant="contained"
// //               color="secondary"
// //               type="button"
// //               onClick={() => alert("Cancel clicked")}
// //               sx={{
// //                 px: 4,
// //                 "&:hover": {
// //                   backgroundColor: "#c62828",
// //                 },
// //               }}
// //             >
// //               Cancel
// //             </Button>
// //           </Box>
// //         </form>
// //       </Box>
// //     </Box>
// //   );
// // }

// // export default ApplicationForm;

import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { Box, Button, TextField, MenuItem, Typography } from "@mui/material";

function ApplicationForm() {
  const navigate = useNavigate();
  const { id } = useParams();
  const isEditMode = Boolean(id);

  const [formData, setFormData] = useState({
    rlms_no: "",
    applicant_name: "",
    contact_no: "",
    email_id: "",
    pan_number: "",
    aadhar_card_number: "",
    bank: "",
    loan_account_number: "",
    loan_amount: "",
    applicant_address: "",
    property_address: "",
    status: "",
    product_type: "",
    login_date: "",
    month: "",
    remark: "",
  });

  const bankOptions = [
    "LIC HFL",
    "ICICI",
    "SBI",
    "HDFC",
    "AXIS",
    "LIC",
    "ADITYA BIRLA",
    "ICICI HFC",
    "BOM",
    "UNION",
    "SHRIRAM FIA.",
    "OTHER",
  ];

  const statusOptions = [
    "Login",
    "Doc_initiated",
    "Doc_completed",
    "Sent_to_Sanction",
    "Sanctioned",
    "Sent_to_Disb",
    "Disbursed",
    "Reject",
  ];

  const productTypeOptions = [
    "New Home loan",
    "Top up loan",
    "Loan Against property",
    "Personal loan",
  ];

  useEffect(() => {
    if (isEditMode) {
      axios
        .get(`http://127.0.0.1:8000/api/applications/${id}/`)
        .then((res) => {
          setFormData(res.data.data);
        })
        .catch((err) => {
          console.error("Error fetching application:", err);
        });
    }
  }, [id, isEditMode]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (isEditMode) {
        await axios.put(
          `http://127.0.0.1:8000/api/applications/${id}/`,
          formData
        );
        alert("Application updated successfully!");
      } else {
        await axios.post("http://127.0.0.1:8000/api/applications/", formData);
        alert("Application created successfully!");
      }
      navigate("/applications");
    } catch (err) {
      console.error("Error saving application:", err);
      alert("Error saving application.");
    }
  };

  // Helper component for red asterisk
  const RequiredAsterisk = () => (
    <Typography component="span" sx={{ color: "red", ml: 0.3 }}>
      *
    </Typography>
  );

  return (
    <Box
      sx={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #74ebd5 0%, #ACB6E5 100%)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        p: 4,
      }}
    >
      <Box
        sx={{
          maxWidth: 800,
          width: "100%",
          bgcolor: "#ffffffcc", // translucent white
          backdropFilter: "blur(10px)", // blur effect
          borderRadius: "16px",
          boxShadow: "0 12px 24px rgba(0, 0, 0, 0.15)",
          p: 4,
          border: "1px solid rgba(255, 255, 255, 0.2)",
          transition: "transform 0.3s ease, box-shadow 0.3s ease",
          "&:hover": {
            transform: "scale(1.01)",
            boxShadow: "0 16px 32px rgba(0, 0, 0, 0.25)",
          },
        }}
      >
        <Typography
          variant="h4"
          mb={3}
          fontWeight="bold"
          textAlign="center"
          color="primary"
        >
          {isEditMode ? "Edit Application" : "Create Application"}
        </Typography>

        <form onSubmit={handleSubmit}>
          <TextField
            label="RLMS No"
            name="rlms_no"
            value={formData.rlms_no}
            onChange={handleChange}
            placeholder="Enter RLMS number"
            fullWidth
            sx={{ mb: 2 }}
          />

          <TextField
            label={
              <>
                Applicant Name
                <RequiredAsterisk />
              </>
            }
            name="applicant_name"
            value={formData.applicant_name}
            onChange={handleChange}
            required
            fullWidth
            sx={{ mb: 2 }}
          />

          <TextField
            label="Contact No"
            name="contact_no"
            value={formData.contact_no}
            onChange={handleChange}
            fullWidth
            sx={{ mb: 2 }}
          />

          <TextField
            label="Email ID"
            name="email_id"
            value={formData.email_id}
            onChange={handleChange}
            type="email"
            fullWidth
            sx={{ mb: 2 }}
          />

          <TextField
            label={
              <>
                PAN Number
                <RequiredAsterisk />
              </>
            }
            name="pan_number"
            value={formData.pan_number}
            onChange={handleChange}
            required
            fullWidth
            sx={{ mb: 2 }}
          />

          <TextField
            label="Aadhar Card Number"
            name="aadhar_card_number"
            value={formData.aadhar_card_number}
            onChange={handleChange}
            fullWidth
            sx={{ mb: 2 }}
          />

          <TextField
            label={
              <>
                Bank
                <RequiredAsterisk />
              </>
            }
            name="bank"
            value={formData.bank}
            onChange={handleChange}
            select
            required
            fullWidth
            sx={{ mb: 2 }}
          >
            {bankOptions.map((option) => (
              <MenuItem key={option} value={option}>
                {option}
              </MenuItem>
            ))}
          </TextField>

          <TextField
            label="Loan Account Number"
            name="loan_account_number"
            value={formData.loan_account_number}
            onChange={handleChange}
            fullWidth
            sx={{ mb: 2 }}
          />

          <TextField
            label="Loan Amount"
            name="loan_amount"
            value={formData.loan_amount}
            onChange={handleChange}
            type="number"
            fullWidth
            sx={{ mb: 2 }}
          />

          <TextField
            label={
              <>
                Applicant Address
                <RequiredAsterisk />
              </>
            }
            name="applicant_address"
            value={formData.applicant_address}
            onChange={handleChange}
            multiline
            rows={2}
            required
            fullWidth
            sx={{ mb: 2 }}
          />

          <TextField
            label="Property Address"
            name="property_address"
            value={formData.property_address}
            onChange={handleChange}
            multiline
            rows={2}
            fullWidth
            sx={{ mb: 2 }}
          />

          <TextField
            label={
              <>
                Status
                <RequiredAsterisk />
              </>
            }
            name="status"
            value={formData.status}
            onChange={handleChange}
            select
            required
            fullWidth
            sx={{ mb: 2 }}
          >
            {statusOptions.map((option) => (
              <MenuItem key={option} value={option}>
                {option.replace(/_/g, " ")}
              </MenuItem>
            ))}
          </TextField>

          <TextField
            label={
              <>
                Product Type
                <RequiredAsterisk />
              </>
            }
            name="product_type"
            value={formData.product_type}
            onChange={handleChange}
            select
            required
            fullWidth
            sx={{ mb: 2 }}
          >
            {productTypeOptions.map((option) => (
              <MenuItem key={option} value={option}>
                {option}
              </MenuItem>
            ))}
          </TextField>

          <TextField
            label="Login Date"
            name="login_date"
            value={formData.login_date}
            onChange={handleChange}
            type="date"
            fullWidth
            sx={{ mb: 2 }}
            InputLabelProps={{ shrink: true }}
          />

          <TextField
            label="Month"
            name="month"
            value={formData.month}
            onChange={handleChange}
            type="month"
            fullWidth
            sx={{ mb: 2 }}
            InputLabelProps={{ shrink: true }}
          />

          <TextField
            label="Remark"
            name="remark"
            value={formData.remark}
            onChange={handleChange}
            multiline
            rows={2}
            fullWidth
            sx={{ mb: 3 }}
          />

          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <Button
              variant="contained"
              color="primary"
              type="submit"
              sx={{
                px: 4,
                "&:hover": {
                  backgroundColor: "#1565c0",
                },
              }}
            >
              {isEditMode ? "Update" : "Create"}
            </Button>

            <Button
              variant="contained"
              color="secondary"
              type="button"
              onClick={() => navigate("/applications")}
              sx={{
                px: 4,
                "&:hover": {
                  backgroundColor: "#c62828",
                },
              }}
            >
              Cancel
            </Button>
          </Box>
        </form>
      </Box>
    </Box>
  );
}

export default ApplicationForm;
