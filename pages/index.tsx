import { useUser } from '@auth0/nextjs-auth0';
import DailyChalange from "../components/DailyChalange";
import HomeHeader from "../components/HomeHeader";
import Welcome from '../components/welcome';

export default function Home() {
  const { user, error, isLoading } = useUser();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;

  if (!user) {
    return <Welcome />
  }

  return (
    <div>
      <HomeHeader />
      <DailyChalange />
    </div>
  )
}
