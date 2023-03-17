import { DataGrid, useGridApiRef } from "@mui/x-data-grid";
import React, { useCallback, useState } from "react";
import { updateProduct } from "../Services/updatePriceProduct";

function ProductsDataGrid({ datas }) {
  const [paginationModel, setPaginationModel] = useState({
    pageSize: 5,
    page: 0,
  });
  const processRowUpdate = useCallback(
    async (newRow) => {
      // Make the HTTP request to save in the backend
      const result = await updateProduct(newRow);
      return result;
    },
    [updateProduct]
  );

  return (
    <div style={{ height: 380, width: "70%", margin: "20px" }}>
      <DataGrid
        rows={datas}
        columns={columns}
        getRowId={(data) => data.id}
        paginationModel={paginationModel}
        onPaginationModelChange={setPaginationModel}
        pageSizeOptions={[5, 10, 20]}
        sx={{
          boxShadow: 2,
          border: 2,
          borderColor: "primary.light",
          "& .MuiDataGrid-cell:hover": {
            color: "primary.main",
          },
        }}
        processRowUpdate={processRowUpdate}
        onProcessRowUpdateError={(error) => console.error(error)}
      />
    </div>
  );
}

const columns = [
  { field: "name", headerName: "Name", width: 100 },
  { field: "photo", headerName: "Photo" },
  {
    field: "price",
    headerName: "Price",
    type: "number",
    width: 150,
    editable: true,
  },
  {
    field: "observation",
    headerName: "Observation",
    width: 220,
  },
  {
    field: "size",
    headerName: "Size",
    width: 20,
  },
  {
    field: "created_at",
    headerName: "Date Created",
    width: 220,
  },
  {
    field: "updated_at",
    headerName: "Date Updated",
    width: 220,
  },
];

export default ProductsDataGrid;
