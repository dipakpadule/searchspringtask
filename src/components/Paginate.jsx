/* eslint-disable react/prop-types */
import { Box, Button } from "@mui/material";
import { styled } from "@mui/material/styles";

// Styled button component using regular HTML button
const PageButton = styled("button")(({ isCurrent }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  margin: "0 0.5em",
  borderRadius: "50%",
  width: "25px",
  height: "25px",

  backgroundColor: isCurrent ? "#000" : "transparent",
  color: isCurrent ? "#fff" : "#",
  border: "1px solid #000",
  cursor: "pointer",
  "&:hover": {
    backgroundColor: isCurrent ? "#000" : "#e0e0e0",
  },
}));

const Pagination = ({ pagination, handlePageChange }) => {
  const { currentPage, totalPages } = pagination;

  const maxPagesToShow = 7;
  const startPage = Math.max(1, currentPage - Math.floor(maxPagesToShow / 2));
  const endPage = Math.min(totalPages, startPage + maxPagesToShow - 1);

  const pageNumbers = [];
  for (let i = startPage; i <= endPage; i++) {
    pageNumbers.push(i);
  }

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        margin: "0.5em 0",
      }}
    >
      <Button
        onClick={() => handlePageChange(currentPage - 1)}
        disabled={currentPage === 1}
        sx={{ color: "#0B192C" }}
      >
        &lt; prev
      </Button>

      {pageNumbers.map((page) => (
        <PageButton
          key={page}
          onClick={() => handlePageChange(page)}
          isCurrent={page === currentPage}
        >
          {page}
        </PageButton>
      ))}

      <Button
        onClick={() => handlePageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        sx={{ color: "#0B192C" }}
      >
        next &gt;
      </Button>
    </Box>
  );
};

export default Pagination;
