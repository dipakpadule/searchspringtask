import { Box, Link, Typography } from "@mui/material";

const Footer = () => {
  const currentYear = new Date().getFullYear(); // Get the current year

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        paddingInline: "0.7em",
        paddingBlock: "0.7em",
        marginBlock: "1em",
        backgroundColor: "#1E3E62",
        color: "#fff",
        borderRadius: "8px",
      }}
    >
      <Box sx={{ display: "flex", gap: "1em", alignItems: "center" }}>
        <Typography variant="body2">
          &copy; {currentYear}{" "}
          <Link
            href="https://www.searchspring.com"
            color="inherit"
            underline="hover"
            target="_blank"
            rel="noopener noreferrer"
          >
            SearchSpring
          </Link>
          . All rights reserved.
        </Typography>
      </Box>
    </Box>
  );
};

export default Footer;
