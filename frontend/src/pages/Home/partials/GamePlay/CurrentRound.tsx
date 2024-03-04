import { Table, TitledBox } from "~/components";
import  Trophy from '~/assets/trophy.svg'

const CurrentRound = () => {
  return (
   // @ts-ignore
   <TitledBox title="Current Round" icon={ <Trophy height={20} width={20} />}>
   <Table 
     columns={['Name' , 'Points', 'Multiplier']}
     rows={[
        {Name: 'John Doe', Points: 100, Multiplier: 1},
        {Name: 'Jane Doe', Points: 90, Multiplier: 1},
        {Name: 'John Doe', Points: 80, Multiplier: 1},
        {Name: 'Jane Doe', Points: 70, Multiplier: 1},
     ]}        
   />
 </TitledBox>
  )
}

export default CurrentRound


