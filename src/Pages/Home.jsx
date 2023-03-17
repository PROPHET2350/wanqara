import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Grid,
  MenuItem,
  TextField,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import FlashMessage from "../Components/FlashMessage";
import ProductsDataGrid from "../Components/ProductsDataGrid";
import { addProduct } from "../Services/addProductService";
import { fetchProductsData } from "../Services/getProductsService";

function Home() {
  const [ProductsData, setProductsData] = useState([]);
  const [open, setOpen] = useState(false);
  const [fetch, setFetch] = useState(false);
  const [formData, setFormData] = useState({
    price: "",
    name: "",
    observation: "",
    size: "",
  });

  const [AlertData, setAlertData] = useState({
    open: false,
    message: "",
    AlertType: "warning",
  });

  const handleCloseAlert = () => {
    setAlertData({
      ...AlertData,
      open: false,
    });
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmitProduct = async (e) => {
    e.preventDefault();
    const result = await addProduct(formData);
    if (result == 201) {
      setAlertData({
        open: true,
        message: "Product added successfully",
        AlertType: "success",
      });
      setFetch(!fetch);
    } else {
      setAlertData({
        open: true,
        message: "Somthing failed to add product",
        AlertType: "error",
      });
    }
    setOpen(false);
  };

  useEffect(() => {
    async function fetchData() {
      const data = await fetchProductsData();
      setProductsData(data);
    }
    fetchData();
  }, [fetch]);

  return (
    <div className="datagrid-container">
      <Button
        variant="contained"
        className="btn-modal"
        onClick={handleClickOpen}
      >
        add
      </Button>
      <ProductsDataGrid datas={ProductsData} />

      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
        fullWidth
      >
        <DialogTitle id="alert-dialog-title">{"Add Product"}</DialogTitle>
        <DialogContent>
          <Grid container direction={"column"}>
            <form onSubmit={handleSubmitProduct}>
              <DialogContent>
                <Grid container spacing={2} direction={"column"}>
                  <Grid item lg={12}>
                    <TextField
                      id="outlined-multiline-flexible"
                      label="Price"
                      fullWidth
                      type={"number"}
                      required
                      name="price"
                      onChange={(e) =>
                        setFormData({ ...formData, price: e.target.value })
                      }
                    />
                  </Grid>
                  <Grid item lg={12}>
                    <TextField
                      id="outlined-multiline-flexible"
                      label="Name"
                      fullWidth
                      autoComplete={"off"}
                      type={"text"}
                      required
                      name="name"
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                    />
                  </Grid>
                  <Grid item lg={12}>
                    <TextField
                      id="outlined-multiline-flexible"
                      label="Observation"
                      fullWidth
                      type={"text"}
                      autoComplete={"off"}
                      required
                      name="observation"
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          observation: e.target.value,
                        })
                      }
                    />
                  </Grid>
                  <Grid item lg={12}>
                    <TextField
                      id="outlined-multiline-flexible"
                      label="Size"
                      fullWidth
                      select
                      autoComplete={"off"}
                      required
                      name="size"
                      onChange={(e) =>
                        setFormData({ ...formData, size: e.target.value })
                      }
                    >
                      <MenuItem value={"l"}>L</MenuItem>
                      <MenuItem value={"s"}>S</MenuItem>
                    </TextField>
                  </Grid>
                </Grid>
              </DialogContent>
              <DialogActions>
                <Button
                  onClick={handleClose}
                  color="secondary"
                  variant="outlined"
                >
                  Cancel
                </Button>
                <Button type="submit" color="primary" variant="outlined">
                  Submit
                </Button>
              </DialogActions>
            </form>
          </Grid>
        </DialogContent>
      </Dialog>

      <FlashMessage
        open={AlertData.open}
        message={AlertData.message}
        onClose={handleCloseAlert}
        AlertType={AlertData.AlertType}
      />
    </div>
  );
}

export default Home;
