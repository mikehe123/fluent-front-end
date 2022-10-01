import styled from "styled-components";

export const StoryOptionForm = () => {
  return (
    <Container>
      <StoryOptionQuestion>What should happen next?</StoryOptionQuestion>
      {/* <OptionOne>The lion went home and slept for a while</OptionOne>
      <OptionTwo> The lion went home and slept for a while </OptionTwo> */}
      <StoryOption />
      <StoryOption />
    </Container>
  );
};

export const StoryOption = () => {
  return (
    <OptionContainer>
      <OptionSelectBox />
      <OptionText>The lion went home and slept for a while</OptionText>
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

  background: #ffffff;
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
