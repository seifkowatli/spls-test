import { Paper, Stack, Typography } from "@mui/material";
import { FC, ReactNode } from "react";

interface InfoBoxProps {
  icon: ReactNode;
  title: string;
  children: ReactNode;
}

const InfoBox: FC<InfoBoxProps> = ({ title, icon, children }) => {
  return (
    <Stack>
      <Stack direction="row" gap={1}>
        {icon}
        <Typography variant="subtitle1">{title}</Typography>
      </Stack>
      <Paper>{children}</Paper>
    </Stack>
  );
};

export default InfoBox;
