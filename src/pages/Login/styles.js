import styled from 'styled-components';

export const Container = styled.div`
  width: 50%;
  height: 100vh;
  margin: 0 auto;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (max-width: 425px) {
    width: 85%;
  }

  @media (max-width: 375px) {
    width: 90%;
  }
`;

export const Form = styled.form`
  width: 55%;
  max-height: 400px;
  max-width: 375px;
  height: 70%;
  background-color: ${(props) => props.theme.background};
  box-shadow: 2px 2px 8px 2px rgba(0, 0, 0, 0.2);
  border-radius: 3px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media (max-width: 1024px) {
    max-width: 600px;
    width: 73%;
  }

  @media (max-width: 768px) {
    width: 95%;
  }
  @media (max-width: 425px) {
    max-width: 1200px;
    width: 100%;
  }

  @media (max-width: 375px) {
    height: 75%;
  }
`;

export const Title = styled.h3`
  font-size: 32px;
  color: ${(props) => props.theme.text};
  font-weight: bold;
  font-style: oblique;
  padding-bottom: 14px;
`;

export const Input = styled.input`
  margin: 10px 0;
  font-size: 14px;
  width: 99%;
  outline: none;
  background-color: whitesmoke;
  padding: 10px 36px;
  border-radius: 3px;
  box-shadow: 0px 2px rgba(0, 0, 0, 0.2);
  border: none;
  transition: 0.7s;

  &:focus {
    box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.3);
    width: 100%;
  }
`;

export const Button = styled.button`
  width: 80%;
  color: white;
  text-transform: uppercase;
  margin: 10px 0;
  padding: 10px;
  border: none;
  cursor: pointer;
  background: linear-gradient(
    ${(props) => props.theme.contrastLight},
    ${(props) => props.theme.contrastDark}
  );
  opacity: 0.8;
  font-size: 14px;
  transition: opacity 0.2s;
  outline: none;

  &:hover {
    opacity: 1;
  }

  @media (max-width: 425px) {
    width: 85%;
  }

  @media (max-width: 375px) {
    width: 90%;
  }
`;

export const ErrorMessage = styled.span`
  font-size: 12px;
  width: 80%;
  color: ${(props) => props.theme.secondary};

  & span {
    font-style: italic;
    font-weight: bold;
  }
`;

export const Subtitle = styled.p`
  margin: 10px 0;
  font-style: italic;
  font-size: 14px;
`;

export const SocialMedia = styled.div`
  display: flex;
  justify-content: space-around;
  width: 80%;
  height: 2.3em;

  @media (max-width: 425px) {
    width: 85%;
  }

  @media (max-width: 375px) {
    height: 4em;
    flex-direction: column;
    margin: 0.5em 0;
  }

  div {
    background: none !important;
    height: 2.6em;
  }

  @media (max-width: 375px) {
    div {
      margin-left: 20px;
    }
  }
`;

export const InputWithIcons = styled.div`
  width: 80%;

  display: flex;
  justify-content: center;
  position: relative;

  @media (max-width: 425px) {
    width: 85%;
  }

  @media (max-width: 375px) {
    width: 90%;
  }

  .inputIcon {
    font-size: 15px;
    position: absolute;
    top: 20px;
    left: 12px;
  }

  .showPasswordIcon {
    font-size: 15px;
    position: absolute;
    top: 20px;
    right: 12px;
    cursor: pointer;
  }
`;
