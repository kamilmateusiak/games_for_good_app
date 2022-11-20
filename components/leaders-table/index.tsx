import { useQuery } from "@tanstack/react-query";
import { getLeaders } from "../../services/api"
import { TabType } from "../top-leaders";
import { Avatar, List, ListItem, Points } from "./styles";

interface Props {
  selectedTab: TabType;
}

export default function LeadersTable({ selectedTab }: Props) {
  const query = useQuery({ queryKey: ["leaders"], queryFn: getLeaders });

  if (query.isLoading) {
    return <div>loading</div>;
  }

  if (!query.data) {
    return null;
  }

  const usersData = query.data[selectedTab].slice(3, 10);

  return (
    <List>
      {usersData.map((user, index) => (
        <ListItem key={user.userId}>
          <span>{index + 4}</span>
          <Avatar src={user.avatarUrl}></Avatar>
          <span>{user.username}</span>
          <Points>{user.points}</Points>
        </ListItem>
      ))}
    </List>
  );
}
