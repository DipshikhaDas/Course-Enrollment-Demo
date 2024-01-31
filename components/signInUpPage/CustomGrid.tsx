import React, { ReactNode } from "react";
import { Grid, GridProps } from "@mui/material";

interface CustomGridProps extends GridProps {
  children?: ReactNode;
}

const CustomGrid: React.FC<CustomGridProps> = ({ children, ...rest }) => {
  return <Grid {...rest}>{children}</Grid>;
};

export default CustomGrid;
