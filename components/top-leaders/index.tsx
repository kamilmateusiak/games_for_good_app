import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { getLeaders } from "../../services/api";
import { Avatar, Bar, ColumnCell, Columns, Tab, Tabs, UserData } from "./styles";

type TabType = "today" | "week" | "month";

const TABS: { id: TabType; label: string }[] = [
  { id: "today", label: "Today" },
  { id: "week", label: "Week" },
  { id: "month", label: "Month" },
];

export default function TopLeaders() {
  const query = useQuery({ queryKey: ["leaders"], queryFn: getLeaders });
  const [selectedTab, setSelectedTab] = useState<TabType>("week");

  if (query.isLoading) {
    return <div>loading</div>;
  }

  if (!query.data) {
    return null;
  }

  const usersData = query.data[selectedTab].slice(0, 3);
  const users = [usersData[1], usersData[0], usersData[2]];

  return (
    <div>
      <Tabs>
        {TABS.map((tab) => (
          <Tab
            key={tab.id}
            isSelected={selectedTab === tab.id}
            onClick={() => setSelectedTab(tab.id)}
          >
            {tab.label}
          </Tab>
        ))}
      </Tabs>
      <Columns>
        {users.map((user, index) => (
          <ColumnCell key={user.userId}>
              <Avatar isTop={index === 1} src={user.avatarUrl} />
          </ColumnCell>
        ))}
        </Columns>
      <Columns>
        {users.map((user, index) => (
          <ColumnCell key={user.userId}>
              <Bar primary={index=== 1} secondary={index === 0} tertiary={index === 2}>
                {index === 1 ? "1" : index === 0 ? "2" : "3"}
              </Bar>
              <UserData>{user.username}</UserData>
              <UserData>{user.userId}</UserData>
              <div>{user.points} pt</div>
          </ColumnCell>
        ))}
      </Columns>
    </div>
  );
}
