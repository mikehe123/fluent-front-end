import styled from "styled-components";

export const StoryTexts = () => {
  return (
    <Container>
      <Text>
        Once upon a time, a lion went to the city. He was very excited to see
        all the sights and sounds. He walked around for a while, taking
        everything in. Eventually, he got tired and decided to go home.
      </Text>
    </Container>
  );
};

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 30px 0 30px;
  width: 1000px;
`;
export const Text = styled.div`
  font-family: "Public Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 24px;
  color: #606060;
`;
