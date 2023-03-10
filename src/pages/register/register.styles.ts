import styled from "styled-components";

export const RegisterContainer = styled.div`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #2f303a;
`;

export const RegisterHeadline = styled.p`
  font-weight: 600;
  font-size: 1.3rem;
  margin-bottom: 20px;
  color: #bc3a80;
  padding-bottom: 20px;
  border-bottom: 1px solid #6c757d;
  width: 100%;
  text-align: center;
`;

export const RegisterContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 450px;

  @media (max-width: 768px) {
    width: 90%;
  }
`;

export const RegisterInputContainer = styled.div`
  width: 100%;
  margin-bottom: 20px;
  color: white;

  p:nth-child(1) {
    font-weight: 600;
    margin-bottom: 5px;
  }
`;
