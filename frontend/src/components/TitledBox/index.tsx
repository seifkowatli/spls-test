import { Paper, Stack, Typography } from "@mui/material";
import { FC, ReactNode } from "react";
import { styles } from "./styles";

interface InfoBoxProps {
  icon: ReactNode;
  title: string;
  children: ReactNode;
}

const InfoBox: FC<InfoBoxProps> = ({ title, icon, children }) => {
  return (
    <Stack sx={styles.root}>
      <Stack my={1} direction="row" gap={1} alignItems="center">
        {icon}
        <Typography variant="subtitle1">{title}</Typography>
      </Stack>
      <Paper>{children}</Paper>
    </Stack>
  );
};

export default InfoBox;
