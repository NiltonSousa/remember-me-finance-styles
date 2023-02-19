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

export const Th = styled.th`
  border-bottom: 1px solid black;
  color: white;
`;

export const Td = styled.td`
  text-align: center;
`;

export const Table = styled.table`
  border: 2px solid #202027;
  width: 800px;
  height: 200px;
`;
