import styled from "styled-components";

export const StoryImage = () => {
  return (
    <Container>
      <Image src={require("../../Assets/iex1.png")} />
    </Container>
  );
};

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 30px 0 30px;
`;
export const Image = styled.img`
  width: 420px;
  height: 420;
`;