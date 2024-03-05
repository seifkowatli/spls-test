import { Button, InputBase, Paper, Stack, Typography } from "@mui/material"
import { useEffect, useState } from "react"
import { styles } from "./styles"
import { useAuth } from "~/hooks/resource/useAuth"
import Cookies from 'js-cookie';
import { GatewayKeys, StorageKeys } from "~/configs";
import { useAppState } from "~/providers";
import useWebSocket from "~/hooks/utils/useWebSocket";


const Login = () => {
    const [userName, setUserName] = useState<string>('')
    const [loginDisabled, setLoginDisabled] = useState<boolean>(true)
    const {setAppState , appState} = useAppState()
    const { login}  = useAuth()
    const {mutate , isLoading} = login()
    const {sendMessage} = useWebSocket()

    useEffect(() => {
      if(userName.length > 4) setLoginDisabled(false)
        else setLoginDisabled(true)
    }, [userName])
    
    const loginAction = () => {
      let data = { 
        username : userName,
        password : 'abcd',
      }
        mutate(data, {
          onSuccess: data => {
            let { token, user } = data;
            Cookies.set(StorageKeys.token, token, { expires: 1 });
            setAppState(prevState => ({
              ...prevState,
              isAuthenticated: true,
              user,
            }));

            sendMessage({player : user._id} , GatewayKeys.game.createGame)
          },
        });
    
    }
    
  return (
    <Paper sx={styles.root} >
        <Stack textAlign="center" py={9} height={1}>
            <Typography sx={{opacity : .9}} mb={10} variant="h5">Welcome</Typography>
            <Stack textAlign="center" gap={1} p={1} px={3}>
                <Typography sx={{opacity : .6}} variant="caption">please insert your email</Typography>
                <InputBase sx={styles.loginInput} value={userName} onChange={(e) => setUserName(e.target.value)} />
                <Button onClick={loginAction} sx={styles.loginButton} variant="contained" disabled={loginDisabled}>Accept</Button>
            </Stack>
        </Stack>
    </Paper>
  )
}

export default Login