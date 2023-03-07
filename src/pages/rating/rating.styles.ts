import styled from 'styled-components'

export const CustomButtomRating = styled.div`
    width: 309px;
  background-color: transparent;
  border: none;
  outline: none;
  cursor: pointer;
  color: #ccc;

  &:active {
    color: #000;
  }
  `;

export const RatingContainer = styled.div`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #2f303a;
`;

export const RatingHeadline = styled.p`
  font-weight: 600;
  font-size: 1.3rem;
  margin-bottom: 20px;
  color: #bc3a80;
  padding-bottom: 20px;
  border-bottom: 1px solid #6c757d;
  width: 100%;
  text-align: center;
`;

export const RatingSubHeadline = styled.p`
  font-weight: 600;
  font-size: 1.3rem;
  margin-bottom: 20px;
  color: white
`

export const RatingContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 450px;

  @media (max-width: 768px) {
    width: 90%;
  }
`;

