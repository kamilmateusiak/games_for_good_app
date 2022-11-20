import Image from "next/image";
import { ChallengeCategory, ChallengeImage, Wrapper } from "./style";

export default function DailyChalange() {
  return (
    <Wrapper>
      <h2>Daily chalange</h2>
      <ChallengeImage height='261' width='316' src={"/assets/daily_challange_image.png"} alt={"daily challange"} />
      <ChallengeCategory>
        <h3>Plant</h3>
      </ChallengeCategory>
    </Wrapper>
  )
};