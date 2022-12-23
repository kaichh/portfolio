import styled from "styled-components";

//Styled Components
export const About = styled.div`
  min-height: 90vh;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  padding: 5rem 10rem;
  color: white;
`;

export const Description = styled.div`
  flex: none;
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
  }
`;

export const Image = styled.div`
  flex: auto;
  overflow: hidden;
  img {
    width: 100%;
    height: 60vh;
    object-fit: cover;
  }
`;

export const Hide = styled.div`
  overflow: hidden;
`;
