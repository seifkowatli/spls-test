import { Box, Button, ButtonBase, InputBase, Paper, Stack, TextField, Typography } from "@mui/material"
import { styles } from "./styles"
import { useEffect, useState } from "react"

const Login = () => {
    const [userName, setUserName] = useState<string>('')
    const [loginDisabled, setLoginDisabled] = useState<boolean>(true)

    useEffect(() => {
      if(userName.length > 4) setLoginDisabled(false)
        else setLoginDisabled(true)
    }, [userName])
    
  return (
    <Paper sx={styles.root} >
        <Stack textAlign="center" py={9} height={1}>
            <Typography sx={{opacity : .9}} mb={10} variant="h5">Welcome</Typography>
            <Stack textAlign="center" gap={1} p={1} px={3}>
                <Typography sx={{opacity : .6}} variant="caption">please insert your email</Typography>
                <InputBase sx={styles.loginInput} value={userName} onChange={(e) => setUserName(e.target.value)} />
                <Button sx={styles.loginButton} variant="contained" disabled={loginDisabled}>Accept</Button>
            </Stack>
        </Stack>
    </Paper>
  )
}

export default Login