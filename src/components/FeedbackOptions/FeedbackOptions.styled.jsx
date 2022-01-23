import styled from 'styled-components';

export const FeedbackOptionsWrapper = styled.div`
  text-align: center;
`;

export const FeedbackOptionsButton = styled.button`
  background-color: #008cba;
  color: white;
  padding: 5px 15px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  border-radius: 10px;
  transition: all 400ms linear;

  :hover {
    background-color: white;
    color: #008cba;
  }

  :not(:last-child) {
    margin-right: 15px;
  }
`;
