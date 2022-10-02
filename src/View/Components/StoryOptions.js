import { useState } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import styled from "styled-components";
import {
  NextActionState,
  OPTIONPAGE,
  STORYPAGE,
  LoadingState,
} from "../../Model/Story.ts";
import { CurrentStoryState } from "../../Model/Story.ts";
import { Loading } from "./Loading";

export const StoryOptionForm = () => {
  const story = useRecoilValue(CurrentStoryState);
  const storyId = story.story_id;
  const [loading, setLoading] = useRecoilState(LoadingState);
  const [selected, setSelected] = useState(null);

  const [previousAction, setNextAction] = useRecoilState(NextActionState);

  const registerNextAction = (selectedOption) => () => {
    setNextAction({ PageType: STORYPAGE, selectedOption, storyId });
    setSelected(selectedOption);
    // console.log(selected, " show me selected");
  };

  if (loading) {
    return <Loading />;
  }

  return (
    <Container>
      <StoryOptionQuestion>What should happen next?</StoryOptionQuestion>
      <StoryOption
        onClick={registerNextAction(0)}
        selected={selected === 0}
        optionText={story.next_options[0]}
      />
      <StoryOption
        onClick={registerNextAction(1)}
        selected={selected === 1}
        optionText={story.next_options[1]}
      />
    </Container>
  );
};

export const StoryOption = (props) => {
  const { optionText, selected } = props;
  return (
    <OptionContainer {...props} selected={selected}>
      <OptionSelectBox />
      <OptionText>{optionText}</OptionText>
    </OptionContainer>
  );
};
const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const OptionContainer = styled.div`
  margin-top: 28px;
  width: 419px;
  height: 80px;

  background-color: ${(props) => (props.selected ? "#606060" : "#ffffff")};
  border: 3px solid #eaeaea;
  box-shadow: 0px 4px 0px #eaeaea;
  border-radius: 10px;

  display: flex;
  align-items: center;
`;

const OptionSelectBox = styled.div`
  width: 40px;
  height: 40px;
  border: 3px solid #eaeaea;
  border-radius: 5px;
  margin: 16px;
`;

const OptionText = styled.div`
  font-family: "Public Sans";
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
  color: #606060;
`;

const StoryOptionQuestion = styled.div`
  font-family: "Plus Jakarta Sans";
  font-style: normal;
  font-weight: 700;
  font-size: 30px;
  line-height: 38px;

  color: #6f6f6f;

  margin: 20px 0 20px 0;
`;

const OptionOne = styled.div`
  max-width: 419px;
  max-height: 419px;
  border-radius: 20.5px 20.5px 0px 0px;
  border-bottom: 3px solid #d9d9d9;
`;

const OptionTwo = styled.div`
  max-width: 419px;
  padding: 30px;

  font-family: "Public Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 16px;
  text-align: center;

  color: #606060;
`;
