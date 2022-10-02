import styled from "styled-components";

export const PageHeader = () => {
  return (
    <Container>
      <BrandName>fluent</BrandName>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  align-items: center;
  padding: 28px 0 28px 88px;
  border-bottom: 3px solid #e1e1e1;
  z-index: 1000;
`;

const BrandName = styled.div`
  font-family: "Righteous";
  font-style: normal;
  font-weight: 400;
  font-size: 30px;
  line-height: 37px;

  color: #ffd027;
`;
