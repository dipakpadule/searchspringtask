import { Box, CircularProgress, Typography } from "@mui/material";

const FallBackUI = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "90vh",
        backgroundColor: "transparent",
        color: "#000",
        textAlign: "center",
      }}
    >
      <CircularProgress sx={{ marginBottom: "1em" }} />
      <Typography variant="h6">Fetching the latest deals for you...</Typography>
    </Box>
  );
};

export default FallBackUI;
