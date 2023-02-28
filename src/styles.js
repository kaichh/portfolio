import styled from "styled-components";

//Styled Components
export const About = styled.div`
  width: 100%;
  height: 60%;
  //min-height: 90vh;
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

  /* min-height: 90vh;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  
  color: white;

  @media screen and (max-width: 1400px) {
    padding: 5rem 7rem;
  }
  @media screen and (max-width: 768px) {
    padding: 1.5rem 2rem;
  }
  @media screen and (max-width: 414px) {
    height: auto;
  } */
`;

export const Description = styled.div`
  //background-color: #85b4ee;
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
  /* flex: none;
  width: 35%;
  letter-spacing: 3px;
  padding-right: 5rem;

  h2 {
    font-weight: lighter;
  }
  #link {
    display: flex;
    a {
      margin-right: 1.5rem;
    }
  } */
`;

export const Image = styled.div`
  width: 60%;
  img {
    width: 100%;
  }

  @media screen and (max-width: 1110px) {
    width: 100%;
  }
  /* flex: auto;
  overflow: hidden;
  img {
    width: 100%;
    height: 60vh;
    object-fit: cover;
  } */
`;

export const Hide = styled.div`
  //overflow: hidden;
`;
