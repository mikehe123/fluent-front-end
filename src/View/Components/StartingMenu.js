import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useRecoilState, useRecoilValue } from "recoil";
import {
  LoadingState,
  CurrentStoryState,
  StoryHistoryState,
} from "../../Model/Story.ts";
import { Loading } from "./Loading";
import InitPrompt from "../../Controllers/InitPrompt";
import { useState } from "react";

export const StartingMenu = () => {
  const loading = useRecoilValue(LoadingState);

  if (loading) {
    return <Loading />;
  }

  return (
    <Container>
      <StartHeader>Write a story about...</StartHeader>
      <StartForm />
      {/* <Level experience={"Beginner"} />
      <Level experience={"Intermmediate"} />
      <Level experience={"Hard"} /> */}
    </Container>
  );
};

const StartForm = ({ experience }) => {
  const navigate = useNavigate();
  const [loading, setLoading] = useRecoilState(LoadingState);
  const [currentInputValue, setCurrentInputValue] = useState(null);
  const [currentStory, setCurrentStory] = useRecoilState(CurrentStoryState);
  const [historyStory, setHistoryStory] = useRecoilState(StoryHistoryState);

  const setInputValue = (event) => {
    const userValue = event.target.value;
    setCurrentInputValue(userValue);
  };

  const handleClick = async () => {
    setLoading(true);
    if (currentInputValue === null) {
      return;
    }
    const initalResponse = await InitPrompt(currentInputValue);
    if (initalResponse) {
      setCurrentStory(initalResponse);

      setLoading(false);
      // console.log(initalResponse);
      navigate("story");
      // console.log("startingpage init success", initalResponse);
    }
  };

  // console.log("new history", currentStory);

  return (
    <StartInputContainer>
      <StartInput
        onChange={setInputValue}
        placeholder="A giraffe going on an adventure"
      />
      <StartButton onClick={() => handleClick()}>Start the Journey</StartButton>
    </StartInputContainer>
  );
};

const Container = styled.div``;

const StartHeader = styled.div`
  color: #6f6f6f;
  font-family: "Plus Jakarta Sans";
  font-style: normal;
  font-weight: 700;
  font-size: 35px;
`;

const StartButton = styled.button`
  background: #fec807;
  box-shadow: 0px 4px 0px #d9a900;
  border-radius: 10px;
  width: 200px;
  height: 50px;
  margin-left: 20px;
  border: 0px;
  color: white;
  font-weight: 700;
  font-size: 15px;
  &:hover {
    box-shadow: none !important;
  }
`;

const StartInput = styled.input`
  border: 2px solid #bbbbbb;
  border-radius: 10px;
  font-family: "Public Sans";
  font-style: normal;
  font-weight: 500;
  width: 500px;
  height: 50px;
  font-size: 20px;
  padding-left: 10px;
  color: #6f6f6f;
  &:focus {
    outline: none !important;
    border: 2px solid #d9a900;
  }
  &::placeholder {
    color: #d2d2d2;
  }
`;

const LevelContainer = styled.div`
  margin: 40px 0 40px 0;
  width: 100%;
  padding: 30px 40px 30px 40px;
  height: 47.69px;

  border-radius: 999px;

  background: #fedd67;
  box-shadow: 0px 4px 0px #d9a900;
  display: flex;
  align-items: center;
  justify-content: center;

  font-family: "Plus Jakarta Sans";
  font-style: normal;
  font-size: 30px;
`;

const StartInputContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 25px;
`;
