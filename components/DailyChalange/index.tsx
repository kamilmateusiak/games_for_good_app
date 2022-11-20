import Image from "next/image";
import Link from "next/link";
import { Label } from "../../style";
import { AdvanceBar, ChallageContainer, ChallengeAdvance, ChallengeAdvanceContainer, ChallengeCategory, ChallengeImage, TitleHeader, Wrapper } from "./style";

export default function DailyChalange() {
  return (
    <>
      <Wrapper>
        <h2>Daily chalange</h2>
        <ChallengeImage height='261' width='316' src={"/assets/daily_challange_image.png"} alt={"daily challange"} />
        <ChallengeCategory>
          <h4>Plant</h4>
        </ChallengeCategory>
      </Wrapper>
      <TitleHeader>
        <h3>You have to do</h3>
        <Link href={""}>
          <Label>view all</Label>
        </Link>
      </TitleHeader>
      <ChallageContainer>
        <h4>Plant exercise</h4>
        <p>Plant exercise<br />
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita tempora possimus nostrum nesciunt aliquid distinctio hic quasi ab assumenda incidunt, tempore fugit in amet consequatur qui unde velit quo similique?</p>
        <ChallengeAdvanceContainer>
          <ChallengeAdvance>
            <AdvanceBar />
          </ChallengeAdvance>
          <p>95%</p>
        </ChallengeAdvanceContainer>
      </ChallageContainer>
    </>
  )
};