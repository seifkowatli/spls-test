import { Table, TitledBox } from "~/components";
import  RankingIcon from '~/assets/ranking.svg'
import { RoundData, useAppState } from "~/providers";

const Ranking = () => {
  const { appState} = useAppState();

  const orderByPoints = (data: RoundData[]): RoundData[] => {
    return data.slice().sort((a, b) => b.points - a.points);
  }
  return (
    // @ts-ignore
    <TitledBox title="Ranking" icon={<RankingIcon height={20} width={20} />}>
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
