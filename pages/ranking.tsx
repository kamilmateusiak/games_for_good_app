import { withPageAuthRequired } from '@auth0/nextjs-auth0';
import PageTitle from '../components/page-title';
import TopLeaders from "../components/top-leaders";

export default function Ranking() {
  return <><PageTitle>Leaderboard</PageTitle><TopLeaders></TopLeaders></>;
}

export const getServerSideProps = withPageAuthRequired();
