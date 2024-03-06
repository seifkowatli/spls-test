import { Table, TitledBox } from "~/components";
import  RankingIcon from '~/assets/ranking.svg'
import { RoundData, useAppState } from "~/providers";

const Ranking = () => {
  const { appState} = useAppState();

  const orderByPoints = (data: RoundData[]): any[] => {
    let newData  = data.slice().sort((a, b) => b.points - a.points);
    return newData.map((item, index) => ({
      No : index + 1,
      Name : item.name,
      Score : (item.points * item.multiplier).toFixed(2)
    }))
  }
  return (
    // @ts-ignore
    <TitledBox  title="Ranking" icon={<RankingIcon height={20} width={20} />}>
      <Table
        columns={["No.", "Name", "Score"]}
        rows={
          appState.game?.lastRoundData
            ? orderByPoints(appState.game?.lastRoundData)
            : []
        }
      />
    </TitledBox>
  );
};

export default Ranking;
