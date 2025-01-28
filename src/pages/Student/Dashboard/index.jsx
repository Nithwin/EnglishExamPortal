import Card from "../../../components/Card";
import { ListeningCard, ReadingCard, ScoreCard, SolvedCards, SpeakingCard, TopScoreCard, WelcomeCard, WritingCard } from "../../../components/Cards";

const Dashboard = () => {
  return (
    <div
    className="w-full gap-[1rem] sm:px-[1rem] bg-secondary flex flex-col  lg:grid lg:grid-cols-3 lg:grid-rows-4 lg:py-[2rem] lg:px-[2rem] lg:gap-[2rem] lg:w-full"
    style={{
      gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", // Flexible columns
      gridTemplateRows: "repeat(4, minmax(0, 1fr))",
    }}
    >
       <WelcomeCard  />
        <SolvedCards />
        <WritingCard />
        <TopScoreCard className={"hidden lg:block"} />
        <ReadingCard />
        <SpeakingCard />
        <ListeningCard />
        <TopScoreCard className="lg:hidden" />
        <ScoreCard />
    </div>
  );
};

export default Dashboard;







// // `









// `
