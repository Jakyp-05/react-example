import React from "react";
import { Pagination } from "@mui/material";

function Index() {
  return (
    <div>
      <Pagination
        count={20}
        variant="outlined"
        shape="rounded"
        sx={{
          "& .MuiPaginationItem-root": {
            border: "1px solid #44ACE9",
            borderRadius: "3px",
            margin: "0 2px",
            color: "#333",
            "&.Mui-selected": {
              backgroundColor: "#007bff",
              color: "#fff",
            },
          },
          "& .MuiPaginationItem-ellipsis": {
            border: "1px solid #44ACE9",
            width: '30px',
            height: '32px',
            fontSize: '20px',
            borderRadius: "3px",
            margin: "0 2px",
            color: "#333",
          },
        }}
      />
    </div>
  );
}

export default Index;
