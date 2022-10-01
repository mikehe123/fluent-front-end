import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useRecoilValue } from "recoil";
import {
  NextActionState,
  OPTIONPAGE,
  QUIZPAGE,
  STORYPAGE,
} from "../../Model/Story.ts";
export const PageFlippers = () => {
  return (
    <Container>
      <BackPageButton />
      <NextPageButton />
    </Container>
  );
};

export const NextPageButton = () => {
  const nextAction = useRecoilValue(NextActionState);

  const navigate = useNavigate();

  const handleClick = () => {
    switch (nextAction.PageType) {
      case STORYPAGE:
        navigate("../story");
        break;
      case QUIZPAGE:
        navigate("../quiz");
        break;
      case OPTIONPAGE:
        navigate("../option");
        break;
      default:
        navigate("");
      // code block
    }
  };

  return (
    <ContainerButton onClick={handleClick}>
      <svg
        width="20"
        height="18"
        viewBox="0 0 20 18"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0.400024 9.13635H17.6M17.6 9.13635L12.1534 1.70908M17.6 9.13635L12.1534 16.5636"
          stroke="white"
          stroke-width="3"
        />
      </svg>
    </ContainerButton>
  );
};

export const BackPageButton = () => {
  return (
    <ContainerButton>
      <svg
        width="20"
        height="18"
        viewBox="0 0 20 18"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M19.9454 9.13636L2.74543 9.13636M2.74543 9.13636L8.1921 16.5636M2.74543 9.13636L8.1921 1.70908"
          stroke="white"
          stroke-width="3"
        />
      </svg>
    </ContainerButton>
  );
};

const Container = styled.div`
  position: absolute;
  right: 60px;
  bottom: 40px;
  display: flex;
  width: 160px;
  height: 77px;
  border: 2px solid #e0e0e0;
  border-radius: 100px;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
`;

const ContainerButton = styled.div`
  width: 47.69px;
  height: 47.69px;
  left: 1070.33px;
  top: 726.29px;
  border-radius: 999px;

  background: #fedd67;
  box-shadow: 0px 4px 0px #d9a900;
  display: flex;
  align-items: center;
  justify-content: center;
`;
