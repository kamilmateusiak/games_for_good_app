
import ky from 'ky';

const baseUrl = "/";

const api = ky.extend({
  prefixUrl: baseUrl,
});

export const getRandomUsers = () => {
  return ky.get('https://randomuser.me/api/?results=20').json<{ "results": {email: string, "name": {
    "title": "Miss",
    "first": "Jennie",
    "last": "Nichols"
  }, picture: { medium: string }}[] }>();
}

type RankingEntry = { userId: string, username: string, avatarUrl: string, points: number };
type LeadersResponse = { today: RankingEntry[], week: RankingEntry[], month: RankingEntry[] };

export const getLeaders = (): Promise<LeadersResponse> => {
  return new Promise(async (res) => {
    const users = await getRandomUsers();
    console.log(users)
    setTimeout(() => {
      res({
        today: [
          { userId: users.results[0].email, username: users.results[0].name.first + users.results[0].name.last, avatarUrl: users.results[0].picture.medium, points: 40 },
          { userId: users.results[1].email, username: users.results[1].name.first + users.results[1].name.last, avatarUrl: users.results[1].picture.medium, points: 30 },
          { userId: users.results[2].email, username: users.results[2].name.first + users.results[2].name.last, avatarUrl: users.results[2].picture.medium, points: 25 },
          { userId: users.results[3].email, username: users.results[0].name.first + users.results[0].name.last, avatarUrl: users.results[0].picture.medium, points: 40 },
          { userId: users.results[4].email, username: users.results[1].name.first + users.results[1].name.last, avatarUrl: users.results[1].picture.medium, points: 30 },
          { userId: users.results[5].email, username: users.results[2].name.first + users.results[2].name.last, avatarUrl: users.results[2].picture.medium, points: 25 },
          { userId: users.results[6].email, username: users.results[0].name.first + users.results[0].name.last, avatarUrl: users.results[0].picture.medium, points: 40 },
          { userId: users.results[7].email, username: users.results[1].name.first + users.results[1].name.last, avatarUrl: users.results[1].picture.medium, points: 30 },
          { userId: users.results[8].email, username: users.results[2].name.first + users.results[2].name.last, avatarUrl: users.results[2].picture.medium, points: 25 },
        ],
        week: [
          { userId: users.results[3].email, username: users.results[3].name.first + users.results[3].name.last, avatarUrl: users.results[3].picture.medium, points: 400 },
          { userId: users.results[4].email, username: users.results[4].name.first + users.results[4].name.last, avatarUrl: users.results[4].picture.medium, points: 300 },
          { userId: users.results[5].email, username: users.results[5].name.first + users.results[5].name.last, avatarUrl: users.results[5].picture.medium, points: 250 },
          { userId: users.results[0].email, username: users.results[0].name.first + users.results[0].name.last, avatarUrl: users.results[0].picture.medium, points: 40 },
          { userId: users.results[1].email, username: users.results[1].name.first + users.results[1].name.last, avatarUrl: users.results[1].picture.medium, points: 30 },
          { userId: users.results[2].email, username: users.results[2].name.first + users.results[2].name.last, avatarUrl: users.results[2].picture.medium, points: 25 },
          { userId: users.results[0].email, username: users.results[0].name.first + users.results[0].name.last, avatarUrl: users.results[0].picture.medium, points: 40 },
          { userId: users.results[1].email, username: users.results[1].name.first + users.results[1].name.last, avatarUrl: users.results[1].picture.medium, points: 30 },
          { userId: users.results[2].email, username: users.results[2].name.first + users.results[2].name.last, avatarUrl: users.results[2].picture.medium, points: 25 },
          { userId: users.results[0].email, username: users.results[0].name.first + users.results[0].name.last, avatarUrl: users.results[0].picture.medium, points: 40 },
          { userId: users.results[1].email, username: users.results[1].name.first + users.results[1].name.last, avatarUrl: users.results[1].picture.medium, points: 30 },
          { userId: users.results[2].email, username: users.results[2].name.first + users.results[2].name.last, avatarUrl: users.results[2].picture.medium, points: 25 },
        ],
        month: [
          { userId: users.results[0].email, username: users.results[0].name.first + users.results[0].name.last, avatarUrl: users.results[0].picture.medium, points: 4000 },
          { userId: users.results[1].email, username: users.results[1].name.first + users.results[1].name.last, avatarUrl: users.results[1].picture.medium, points: 3000 },
          { userId: users.results[2].email, username: users.results[2].name.first + users.results[2].name.last, avatarUrl: users.results[2].picture.medium, points: 2500 }
        ],
      })
    }, 1000)
  })
}