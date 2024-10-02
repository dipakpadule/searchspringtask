import { Card, CardMedia, Typography, Button, Box } from "@mui/material";
import { useDispatch } from "react-redux";
import { addToCart } from "../app/cartSlice";

// eslint-disable-next-line react/prop-types
const ProductCard = ({ id, image, name, price, msrp }) => {
  const dispatch = useDispatch();
  return (
    <Card
      sx={{
        width: 300,
        height: "100%",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <CardMedia
        component="img"
        sx={{ width: "100%" }}
        image={image}
        alt={name}
      />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 1,
          flexGrow: 1,
        }}
      >
        <Typography
          variant="h6"
          component="div"
          sx={{
            fontSize: "1rem",
            fontFamily: "Arial, sans-serif",
            fontWeight: "normal",
            color: "text.primary",
            lineHeight: 1.2,
            textAlign: "left",
          }}
        >
          {name}
        </Typography>
        <br />
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          {msrp && msrp < price ? (
            <Typography
              variant="body2"
              color="text.secondary"
              sx={{ marginRight: 1 }}
            >
              ${price}
            </Typography>
          ) : (
            <Box sx={{ display: "flex", gap: "1em" }}>
              <s>${msrp}</s>
              <Typography
                variant="body2"
                color="text.secondary"
                sx={{ marginRight: 1, fontSize: "1rem", color: "#26A541" }}
              >
                ${price}
              </Typography>
            </Box>
          )}
          <Button
            size="small"
            variant="contained"
            sx={{ backgroundColor: "#0B192C" }}
            onClick={() => dispatch(addToCart({ id: id, quantity: 1 }))}
          >
            Buy
          </Button>
        </Box>
      </Box>
    </Card>
  );
};

export default ProductCard;
