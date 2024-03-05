import { Table, TitledBox } from "~/components";
import  Trophy from '~/assets/trophy.svg'
import { useAppState } from "~/providers";

const CurrentRound = () => {
  const { appState} = useAppState();

  return (
   // @ts-ignore
   <TitledBox title="Current Round" icon={ <Trophy height={20} width={20} />}>
   <Table 
     columns={['Name' , 'Points', 'Multiplier']}
     rows={ appState.game?.lastRoundData || []}        
   />
 </TitledBox>
  )
}

export default CurrentRound


