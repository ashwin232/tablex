import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import DataViewTable from "./DataViewTable";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <DataViewTable />
  </StrictMode>
);