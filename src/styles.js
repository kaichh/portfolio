import styled from "styled-components";

//Styled Components
export const About = styled.div`
  width: 100%;
  height: 60%;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 5rem 10rem;

  @media screen and (max-width: 1400px) {
    padding: 5rem 7rem;
  }
  @media screen and (max-width: 1110px) {
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    gap: 5rem;
  }
  @media screen and (max-width: 768px) {
    padding: 1.5rem 2rem;
  }
`;

export const Description = styled.div`
  width: 40%;
  #link {
    display: flex;
    gap: 1.5rem;
  }

  @media screen and (max-width: 1110px) {
    width: 100%;
  }
  @media screen and (max-width: 414px) {
    h2 {
      font-size: 2rem;
    }
    p {
      font-size: 1rem;
      padding: 1.7rem 0rem;
    }
  }
`;

export const Image = styled.div`
  width: 60%;
  img {
    width: 100%;
  }

  @media screen and (max-width: 1110px) {
    width: 100%;
  }
`;
