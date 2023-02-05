import styled from "styled-components";

export const AccFormS = styled.div`
  height: 60%;
  width: 60%;
  background-color: #fff;
  padding: 30px;
  margin-left: 50px;
  display: flex;
  flex-direction: column;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.2);
  border-radius: 4px;

  @media (max-width: 600px) {
    width: 100%;
    margin: 30px auto;
    margin-right: 50px;
    flex: 1;
  }
  @media (min-width: 601px) and (max-width: 1091px) {
    margin: 50px auto;
  }
  @media (min-width: 1091px) {
  }
`;

export const H3 = styled.h4`
  padding-bottom: 20px;
  font-family: "Oswald";
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 24px;
`;
export const InputContainer = styled.div`
  display: flex;
  overflow-y: auto;
`;
export const RightInput = styled.div`
  // display: flex;
  // flex-direction: column;
  // //background-color: pink;
  // justify-content: center;
  // align-items: center;
  width: 45%;
  background-color: lightblue;
`;
export const LeftInput = styled.div`
  // display: flex;
  // flex-direction: column;
  // //background-color: pink;
  // justify-content: center;
  // align-items: center;
  width: 45%;
  // margin-right: 7%;
  background-color: aqua;
`;
export const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  height: 70px;
  width: 100%;
  background: "pink";
`;

/*
  Auto layout 
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  gap: 60px;
  
  position: absolute;
  width: 996px;
  height: 876px;
  left: 423px;
  top: 170px;
    */
