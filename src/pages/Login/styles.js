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

  @media (max-width: 320px) {
    width: 95%;
  }
`;

export const Form = styled.form`
  width: 65%;
  max-width: 450px;
  height: 75%;
  max-height: 500px;
  background-color: whitesmoke;
  box-shadow: 2px 2px 8px 2px rgba(0, 0, 0, 0.2);
  border-radius: 3px;
  animation: fadeInForm 2s linear;
  overflow: hidden;
  border-top: 15px solid ${(props) => props.theme.contrastLight};
  border-top-right-radius: 80px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @keyframes fadeInForm {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  .logoIcon {
    margin-bottom: 18px;
    font-size: 64px;
    opacity: 0.8;
    color: ${(props) => props.theme.contrast};
    animation: fadeInLogo 1.5s ease-in;

    @keyframes fadeInLogo {
      from {
        transform: translateY(-150%);
        opacity: 0;
      }
      to {
        transform: translateY(0);
        opacity: 1;
      }
    }
  }

  div:nth-child(2) {
    animation: fadeInInputFromRight 2s ease;
  }

  div:nth-child(3) {
    animation: fadeInInputFromLeft 2s ease;
  }

  @keyframes fadeInInputFromLeft {
    from {
      transform: translateX(-150%);
      opacity: 0;
    }
    to {
      transform: translateX(0);
      opacity: 1;
    }
  }

  @keyframes fadeInInputFromRight {
    from {
      transform: translateX(150%);
      opacity: 0;
    }
    to {
      transform: translateX(0);
      opacity: 1;
    }
  }

  @media (max-width: 1024px) {
    max-width: 700px;
    width: 75%;
    height: 85%;
  }

  @media (max-width: 768px) {
    width: 95%;
  }

  @media (max-width: 425px) {
    max-width: 1200px;
    width: 100%;
  }

  @media (max-width: 375px) {
    height: 90%;
  }
`;

export const Input = styled.input`
  margin: 10px 0 10px 0;
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
    box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.3);
    width: 100%;
  }

  &:focus + .inputIcon {
    opacity: 0.7;
  }
`;

export const Button = styled.button`
  width: 80%;
  color: white;
  text-transform: uppercase;
  margin: 15px 0;
  padding: 10px;
  border: none;
  cursor: pointer;
  background: linear-gradient(
    ${(props) => props.theme.contrastLight},
    ${(props) => props.theme.contrastDark}
  );
  opacity: 0.9;
  font-size: 14px;
  transition: opacity 0.2s;
  outline: none;
  font-weight: bold;
  border-radius: 3px;
  animation: fadeInButton 2s ease;
  letter-spacing: 1px;

  @keyframes fadeInButton {
    from {
      opacity: 0;
    }
    to {
      transform: rotate(360deg);
      opacity: 1;
    }
  }

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
`;

export const Subtitle = styled.p`
  margin: 10px 0 15px 0;
  font-style: italic;
  font-size: 14px;
`;

export const SocialMedia = styled.div`
  display: flex;
  justify-content: space-around;
  width: 80%;
  height: 2.3em;

  div {
    background: none !important;
    height: 2.6em;
  }

  @media (max-width: 425px) {
    width: 85%;
  }

  @media (max-width: 375px) {
    height: 4em;
    flex-direction: column;
    margin: 0.5em 0;
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
  flex-direction: column;
  justify-content: center;
  position: relative;

  .inputIcon {
    font-size: 15px;
    position: absolute;
    color: ${(props) => props.theme.contrast};
    top: 20px;
    left: 12px;
    opacity: 0.4;
    transition: 1s;
  }

  .showPasswordIcon {
    font-size: 15px;
    position: absolute;
    top: 20px;
    right: 12px;
    opacity: 0.5;
    cursor: pointer;

    &:hover {
      opacity: 1;
    }
  }

  @media (max-width: 425px) {
    width: 85%;
  }

  @media (max-width: 375px) {
    width: 90%;
  }
`;
