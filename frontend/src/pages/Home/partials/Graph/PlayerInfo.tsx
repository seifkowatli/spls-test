import { Stack } from "@mui/material"
import { InfoBox } from "~/components"
import Avatar from '~/assets/avatar.svg'
import Medal from '~/assets/medal.svg'
import Clock from '~/assets/clock.svg'
import { useAppState } from "~/providers"
import { useEffect, useState } from "react"


const PlayerInfo = () => {
  const {appState} = useAppState()
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000); // Update every second

    return () => clearInterval(intervalId); // Cleanup on component unmount
  }, []);
  const formattedTime = currentTime.toLocaleTimeString();

  return (
    <Stack width={1}sx={{flexWrap : {sm : 'nowrap' , xs : 'wrap'}}} direction="row">
        {/* @ts-ignore */}
        <InfoBox title={appState.user?.points || ''} icon={<Medal height={28} width={28} />} />
        {/* @ts-ignore */}
        <InfoBox title={appState.user?.name || ''} icon={<Avatar height={28} width={28} />} />
        {/* @ts-ignore */}
        <InfoBox title={!appState.isAuthenticated ||  formattedTime} icon={<Clock height={28} width={28} />} />
    </Stack>
  )
}

export default PlayerInfo