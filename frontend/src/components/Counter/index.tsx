import { PlayArrow } from '@mui/icons-material';
import { ButtonBase, Input, InputBase, Stack, Typography } from "@mui/material";
import { ChangeEvent, FC, useState } from "react";
import { styles } from "./styles";

export interface CounterProps { 
    initialValue : number;
    minValue : number;
    maxValue : number;
    step : number;
    title : string;
    onValueChange : (value : number) => void;
}


const Counter : FC<CounterProps> = ({title , initialValue, minValue , maxValue , onValueChange  , step}) => {
  const [value, setValue] = useState<number>(initialValue)

  //TODO notify if the action is not possible
  const handleIncrement = () => {
    if (value + step <= maxValue) {
      setValue(value + step)
      onValueChange(value + step)
    }
  }
  //TODO notify if the action is not possible
  const handleDecrement = () => {
    if (value - step >= minValue) {
      setValue(value - step)
      onValueChange(value - step)
    }
  }

  const handleValueChange = (e : ChangeEvent<HTMLInputElement>) => {
    let userValue = parseFloat(e.target.value)
    if (userValue >= minValue && userValue <= maxValue) {
      setValue(userValue)
      onValueChange(userValue)
    }
  }
  
  return (
    <Stack sx={styles.root}>
    <Typography sx={styles.title} variant="caption">{title}</Typography>
    <Stack sx={styles.counter} direction="row">
      <ButtonBase sx={styles.button} onClick={handleDecrement}>
        <PlayArrow sx={styles.increaseIcon} />
      </ButtonBase>
      <InputBase 
        type='number'
        value={value}
        size="small"        
        sx={styles.value}
        onChange={handleValueChange}
      />
     
      <ButtonBase sx={styles.button}  onClick={handleIncrement}>
        <PlayArrow sx={styles.decreaseIcon} />
      </ButtonBase>
    </Stack>
    </Stack>
  );
}

export default Counter