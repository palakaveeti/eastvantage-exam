import styled from 'styled-components';

export const CardContainer = styled.div`
  height: 200px;
  border-radius: 46px;
  background: linear-gradient(145deg, #ffffff, #e6e6e6);
  box-shadow: 35px 35px 69px #7a7a7a, -35px -35px 69px #ffffff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
`;

export const NewUserButton = styled.button`
  border: 1px solid;
  border-radius: 5px;
  background: #2b939c;
  color: white;
  padding: 8px;
  text-align: center;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
`;
