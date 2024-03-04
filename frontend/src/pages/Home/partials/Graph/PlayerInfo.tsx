import { Stack } from "@mui/material"
import { InfoBox } from "~/components"
import Avatar from '~/assets/avatar.svg'
import Medal from '~/assets/medal.svg'
import Clock from '~/assets/clock.svg'


const PlayerInfo = () => {
  return (
    <Stack width={1}sx={{flexWrap : {sm : 'nowrap' , xs : 'wrap'}}} direction="row">
        {/* @ts-ignore */}
        <InfoBox title={'1000'} icon={<Medal height={28} width={28} />} />
        {/* @ts-ignore */}
        <InfoBox title={'Seif'} icon={<Avatar height={28} width={28} />} />
        {/* @ts-ignore */}
        <InfoBox title={'21:30'} icon={<Clock height={28} width={28} />} />
    </Stack>
  )
}

export default PlayerInfo