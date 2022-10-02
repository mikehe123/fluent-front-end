import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useRecoilState, useRecoilValue } from "recoil";
import { LoadingState } from "../../Model/Story.ts";
import { Loading } from "./Loading";
import InitPrompt from "../../Controllers/InitPrompt";

export const StartingMenu = () => {
  const loading = useRecoilValue(LoadingState);

  if (loading) {
    return <Loading />;
  }

  return (
    <Container>
      <Level experience={"Beginner"} />
      <Level experience={"Intermmediate"} />
      <Level experience={"Hard"} />
    </Container>
  );
};

const Level = ({ experience }) => {
  const navigate = useNavigate();
  const [loading, setLoading] = useRecoilState(LoadingState);

  const handleClick = () => {
    setLoading(true);

    console.log("2 grade", InitPrompt("2nd grade"));

    switch (experience) {
      case "Beginner":
        navigate("../story");
        break;
      case "Intermmediate":
        InitPrompt("3nd grade");
        navigate("../quiz");
        break;
      case "Hard":
        InitPrompt("4nd grade");
        navigate("../option");
        break;
      default:
        console.log("Switch error at menu");
        navigate("");
    }
  };

  return <LevelContainer onClick={handleClick}>{experience}</LevelContainer>;
};

const Container = styled.div``;

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
