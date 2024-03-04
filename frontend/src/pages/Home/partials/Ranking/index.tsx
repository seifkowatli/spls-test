import { Table, TitledBox } from "~/components";
import  RankingIcon from '~/assets/ranking.svg'

const Ranking = () => {
  return (
    // @ts-ignore
    <TitledBox title="Ranking" icon={ <RankingIcon height={20} width={20} />}>
      <Table 
        columns={['No.' , 'Name', 'Score']}
        rows={[
          {No: 1, Name: 'John Doe', Score: 100},
          {No: 2, Name: 'Jane Doe', Score: 90},
          {No: 3, Name: 'John Doe', Score: 80},
          {No: 4, Name: 'Jane Doe', Score: 70},
        ]}        
      />
    </TitledBox>
  );
};

export default Ranking;
