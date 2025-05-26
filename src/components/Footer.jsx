// Footer.jsx
import { Box, Typography } from "@mui/material";

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: "#1976d2",
        color: "#fff",
        p: 2,
        textAlign: "center",
        marginTop: "auto", // Pushes footer to bottom
      }}
    >
      <Typography variant="body2">
        © {new Date().getFullYear()} Homes Capital. All rights reserved.
      </Typography>
    </Box>
  );
};

export default Footer;
