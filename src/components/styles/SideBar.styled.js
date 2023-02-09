import styled from "styled-components";

export const SideBarS = styled.div`
  background: #30353a;
  height: 100%;
  width: 100px;
  position: fixed;
  z-index: 4;
  left: 0;
  top: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 10px 0px 33px;
  gap: 20px;
  &:hover {
    cursor: pointer;
  }

  @media (max-width: 600px) {
    display: none;
  }
  @media (min-width: 601px) and (max-width: 1024px) {
  }
  @media (min-width: 1025px);
`;
export const Div = styled.div`
  &:hover {
    background: #191919;
    transition: background 500ms;
    border-left: 2px solid #276fb4;
  }
  // &a:active {
  //   background: yellow;
  // }
`;

// export const iconDiv = styled.div`
//   width: 100%;
//   display: flex;
//   justify-content: center;
//   margin-bottom: 30px;
//   //background: yellow;
// `;
