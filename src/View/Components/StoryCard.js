import { useRecoilValue } from "recoil";
import styled from "styled-components";
import { CurrentStoryState } from "../../Model/Story.ts";

export const StoryCard = () => {
  const story = useRecoilValue(CurrentStoryState);
  return (
    <Container>
      <Image src={story.image_url[0]} />
      <Text>{"    " + story.text}</Text>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;

  border: 3px solid #d9d9d9;
  border-radius: 23px;
`;

const Image = styled.img`
  max-width: 420px;
  max-height: 420px;
  border-radius: 20.5px 20.5px 0px 0px;
  border-bottom: 3px solid #d9d9d9;
`;

const Text = styled.div`
  max-width: 420px;
  padding: 30px;
  text-align: left;
  font-family: "Public Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 26px;

  color: #606060;
`;
