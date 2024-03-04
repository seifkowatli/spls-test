import { Box, Paper, Stack, Typography } from "@mui/material";
import { FC, ReactNode } from "react";
import { styles } from "./styles";

interface InfoBoxProps {
  icon: ReactNode;
  title: string;
}

const InfoBox: FC<InfoBoxProps> = ({ title, icon }) => {
  return (
      <Stack sx={styles.root} direction="row">
        <Box sx={styles.iconContainer}> {icon}</Box>
        <Typography fontSize={17} variant="h6">{title}</Typography>
        <Typography sx={{ml : 'auto'}}></Typography>
      </Stack>
  );
};

export default InfoBox;
