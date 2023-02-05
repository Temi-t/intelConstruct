import styled from "styled-components";

export const AccDetailsS = styled.div`
  height: 100%;
  width: 19rem;
  //   width: 40%;
  //   padding: 3%;
  padding-top: 0;
  @media (max-width: 600px) {
  }
  @media (min-width: 601px) and (max-width: 1091px) {
    margin: 20px auto;
    padding-right: 50px;
  }
  @media (min-width: 1091px) {
  }
`;

export const CompanyDetailsStyle = styled.div`
  height: 55px;
  width: 100%;
  padding: 2%;
  color: #276fb4;
  font-family: "Poppins";
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 20px;
  display: flex;
  justify-content: space-evenly;
`;

// export const Accordion = styled.div`
//   position: relative;
//   top: 0;
//   z-index: 3;
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   align-items: center;
//   width: 100%;
//   padding-left: 18%;
//   //background: pink;
// `;
export const ProgressBar = styled.progress`
  width: 100%;
  height: 20px;
  //color: orange;
`;
export const Label = styled.label`
  padding-top: 19px;
  //   width: 107px;
  //   height: 20px;

  /* App/body bold */
  font-family: "Poppins";
  font-style: normal;
  font-weight: 600;
  font-size: 13px;
  line-height: 20px;
  /* identical to box height, or 154% */
  letter-spacing: 0.3px;
  /* Pry/Primary */
`;
export const CheckedLabel = styled.label`
  padding-top: 19px;
  //   width: 107px;
  //   height: 20px;

  /* App/body bold */

  font-family: "Poppins";
  font-style: normal;

  font-size: 13px;
  line-height: 20px;
  /* identical to box height, or 154% */
  letter-spacing: 0.3px;
  /* Pry/Primary */
`;

export const CompanyCheckbox = styled.input`
  top: 1.2rem;
  scale: 1.7;
  margin-right: 0.8rem;
`;
export const Check = styled.input`
  top: 1.2rem;
  scale: 1.7;
  margin-right: 0.8rem;
`;
