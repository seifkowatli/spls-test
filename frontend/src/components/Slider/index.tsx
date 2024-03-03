import { Slider as MuiSlider } from "@mui/material"
import { FC } from "react"
import { styles } from "./styles"



const marks =[ 
    {value  : 1  , label : '1x'},
    {value  : 2  , label : '2x'},
    {value  : 3  , label : '3x'},
    {value  : 4  , label : '4x'},
    {value  : 5  , label : '5x'}
]

export interface SliderProps {
    onChangeAction : (value : number) => void
}


const Slider : FC<SliderProps> = ({onChangeAction}) => {
  return (
    <MuiSlider
        onChange={(e, value) => onChangeAction(value as number)}
        sx={styles.root}
        step={1}
        marks={marks}
        defaultValue={1}
        min={1}
        max={5}
        color="secondary"
    />
  )
}

export default Slider