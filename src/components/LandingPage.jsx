import { Box, Button, Grid2, IconButton, TextField } from "@mui/material";
import Cart from "./Cart";
import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import StoreIcon from "@mui/icons-material/Store";
import Footer from "./Footer";
import Pagination from "./Paginate";
import FallBackUI from "./FallBackUI";
import SearchIcon from "@mui/icons-material/Search";

const url =
  "https://api.searchspring.net/api/search/search.json?siteId=scmq7n&q";

const LandingPage = () => {
  const [page, setPage] = useState(1);
  const [query, setQuery] = useState("");
  const [products, setProducts] = useState([]);
  const [pagination, setPagination] = useState({});

  const getProducts = () => {
    fetch(`${url}=${query}&resultsFormat=native&page=${page}`)
      .then((response) => response.json())
      .then((response) => {
        setProducts(response);
        setPagination(response.pagination);
      })
      .catch((err) => console.error(err));
  };

  const handleSearchQuery = (e) => {
    const value = e.target.value;
    if (value.length >= 3) {
      setQuery(value);
    }
  };
  const handleKeyDown = (e) => {
    if (e.key === "Enter" && query.length >= 3) {
      getProducts();
    }
  };
  const handleSearchBtn = () => {
    if (query.length >= 3) {
      getProducts();
    }
  };

  const handlePageChange = (page) => {
    setPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    getProducts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query, page]);

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
      }}
    >
      {/* simple navbar with search box, search btn, logo and cart with badge  */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          paddingInline: "0.7em",
          paddingBlock: "0.7em",
          marginTop: "5px",
          backgroundColor: "#1E3E62",
          color: "#fff",
          borderRadius: "8px",
        }}
      >
        <StoreIcon
          sx={{ color: "#fff", marginRight: "0.5em" }}
          fontSize="large"
        />
        <Box sx={{ display: "flex", gap: "5px", alignItems: "center" }}>
          <TextField
            size="small"
            placeholder="Search on Spring"
            onChange={handleSearchQuery}
            onKeyDown={handleKeyDown}
            sx={{
              backgroundColor: "#fff",
              borderRadius: "4px",
            }}
          />

          <IconButton
            onClick={handleSearchBtn}
            sx={{
              backgroundColor: "#FF6500",
              color: "#0B192C",
              "&:hover": {
                backgroundColor: "#e0e0e0",
              },
            }}
          >
            <SearchIcon />
          </IconButton>
          <Cart />
        </Box>
      </Box>

      {/* main product display */}
      <Box
        sx={{
          paddingInline: "1em",
          display: "flex",
          flexGrow: 1,
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Pagination
          pagination={pagination}
          handlePageChange={handlePageChange}
        />

        <Grid2 container spacing={2} justifyContent="center">
          {products && products.results ? (
            products.results.map((item) => (
              <Grid2 item="true" xs={12} sm={6} md={4} lg={3} key={item.id}>
                <ProductCard
                  id={item.id}
                  image={item.thumbnailImageUrl}
                  name={item.title[0]}
                  price={item.price}
                  msrp={item.msrp}
                />
              </Grid2>
            ))
          ) : (
            <Grid2 item="true" xs={12}>
              <FallBackUI />
            </Grid2>
          )}
        </Grid2>
        <Pagination
          pagination={pagination}
          handlePageChange={handlePageChange}
        />
      </Box>
      <Footer />
    </Box>
  );
};

export default LandingPage;
