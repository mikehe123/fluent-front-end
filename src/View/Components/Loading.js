import styled from "styled-components";

export const Loading = () => {
  return (
    <Container>
      <Image src={require("../../Assets/loading.png")} />
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  width: 419px;
  height: 530px;
  background: #f9f9f9;
  border: 2px solid #c8c8c8;
  border-radius: 19px;
  align-items: center;
  justify-content: center;
`;

const Image = styled.img`
  width: 104px;
  height: 104px;
  left: 588px;
  top: 342px;
`;
