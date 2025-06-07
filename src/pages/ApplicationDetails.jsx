// // src/pages/ApplicationDetails.jsx
// import React, { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";

// function ApplicationDetails() {
//   const { id } = useParams(); // get the record ID from URL
//   const [application, setApplication] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     fetch(`/api/applications/${id}/`) // your API endpoint to get single record
//       .then((res) => {
//         if (!res.ok) throw new Error("Failed to fetch");
//         return res.json();
//       })
//       .then((data) => {
//         setApplication(data);
//         setLoading(false);
//       })
//       .catch((err) => {
//         setError(err.message);
//         setLoading(false);
//       });
//   }, [id]);

//   if (loading) return <p>Loading...</p>;
//   if (error) return <p>Error: {error}</p>;
//   if (!application) return <p>No application found</p>;

//   return (
//     <div>
//       <h2>Application Details for ID: {application.id}</h2>
//       <p>
//         <strong>Name:</strong> {application.name}
//       </p>
//       <p>
//         <strong>Bank:</strong> {application.bank}
//       </p>
//       <p>
//         <strong>Loan Amount:</strong> {application.loan_amount}
//       </p>
//       {/* Render other fields as needed */}
//     </div>
//   );
// }

// export default ApplicationDetails;

// src/components/ApplicationDetails.jsx

import React, { useState, useEffect } from "react";
import axios from "axios";
import { Tooltip, CircularProgress, Typography, Box } from "@mui/material";

function ApplicationDetails({ appId, displayText }) {
  const [details, setDetails] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchDetails = async () => {
    if (details || loading) return; // Avoid duplicate calls
    setLoading(true);
    try {
      const res = await axios.get(
        `http://127.0.0.1:8000/api/applications/${appId}/`
      );
      setDetails(res.data.data);
    } catch (err) {
      console.error("Error fetching application details:", err);
    } finally {
      setLoading(false);
    }
  };

  const renderDetails = () => {
    if (loading) {
      return (
        <Box sx={{ display: "flex", alignItems: "center", p: 1 }}>
          <CircularProgress size={20} sx={{ mr: 1 }} /> Loading...
        </Box>
      );
    }

    if (!details) {
      return <Typography sx={{ p: 1 }}>Hover to load details</Typography>;
    }

    return (
      <Box sx={{ p: 1, maxWidth: 300 }}>
        <Typography variant="subtitle2" gutterBottom>
          Application #{details.id}
        </Typography>
        <Typography variant="body2">
          <strong>Applicant:</strong> {details.applicant_name}
        </Typography>
        <Typography variant="body2">
          <strong>Contact No:</strong> {details.contact_no}
        </Typography>
        <Typography variant="body2">
          <strong>Email:</strong> {details.email_id}
        </Typography>
        <Typography variant="body2">
          <strong>Bank:</strong> {details.bank}
        </Typography>
        <Typography variant="body2">
          <strong>Status:</strong> {details.status}
        </Typography>
        <Typography variant="body2">
          <strong>Loan Amount:</strong> {details.loan_amount}
        </Typography>
        <Typography variant="body2">
          <strong>Remark:</strong> {details.remark}
        </Typography>
      </Box>
    );
  };

  return (
    <Tooltip
      title={renderDetails()}
      arrow
      placement="right"
      onOpen={fetchDetails}
    >
      <Typography
        sx={{
          color: "primary.main",
          textDecoration: "underline",
          cursor: "pointer",
          display: "inline-block",
        }}
      >
        {displayText}
      </Typography>
    </Tooltip>
  );
}

export default ApplicationDetails;
