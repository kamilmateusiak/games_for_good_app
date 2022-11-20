import { withPageAuthRequired } from '@auth0/nextjs-auth0';
import { useState } from 'react';
import LeadersTable from '../components/leaders-table';
import PageTitle from '../components/page-title';
import TopLeaders, { TabType } from "../components/top-leaders";

export default function Ranking() {
  const [selectedTab, setSelectedTab] = useState<TabType>("week");

  return (
    <>
      <PageTitle>Leaderboard</PageTitle>
      <TopLeaders selectedTab={selectedTab} setSelectedTab={setSelectedTab}></TopLeaders>
      <LeadersTable selectedTab={selectedTab}></LeadersTable>
    </>
  );
}

export const getServerSideProps = withPageAuthRequired();
