import styled from 'styled-components';

export const Container = styled.div`
  width: 50%;
  height: 100vh;
  margin: 0 auto;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Form = styled.form`
  width: 55%;
  height: 65%;
  background-color: rgba(0, 0, 0, 0.1);
  box-shadow: 2px 2px 80px 2px rgba(0, 0, 0, 0.4);
  border-radius: 3px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.h3`
  font-size: 32px;
  color: #333;
  font-weight: bold;
  font-style: oblique;
  padding-bottom: 14px;
`;

export const Input = styled.input`
  margin: 10px 0;
  font-size: 14px;
  width: 80%;
  outline: none;
  background-color: whitesmoke;
  padding: 10px 15px;
  border-radius: 3px;
  box-shadow: 0px 2px rgba(0, 0, 0, 0.2);
  border: none;
  transition: 0.7s;

  &:focus {
    box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.6);
  }
`;

export const Button = styled.input`
  width: 80%;
  color: white;
  margin: 10px 0;
  padding: 10px;
  border: none;
  cursor: pointer;
  background: linear-gradient(#0ec200, #0a6707);
  opacity: 0.75;
  font-size: 14px;
  transition: opacity 0.2s;

  &:hover {
    opacity: 1;
  }
`;

export const ErrorMessage = styled.span`
  font-size: 14px;
  width: 80%;
  color: red;

  & span {
    font-style: italic;
    font-weight: bold;
  }
`;

export const Message = styled.p`
  margin: 10px 0;
  font-style: italic;
  font-size: 14px;
`;

export const SocialMedia = styled.div`
  display: flex;
  justify-content: space-around;
  width: 80%;
`;
