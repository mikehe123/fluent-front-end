import styled from "styled-components";

export const StoryCard = () => {
  return (
    <Container>
      <Image src={require("../../Assets/iex1.png")} />
      <Text>
        Once upon a time, a lion went to the city. He was very excited to see
        all the sights and sounds. He walked around for a while, taking
        everything in. Eventually, he got tired and decided to go home.
      </Text>
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
  max-width: 419px;
  max-height: 419px;
  border-radius: 20.5px 20.5px 0px 0px;
  border-bottom: 3px solid #d9d9d9;
`;

const Text = styled.div`
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
