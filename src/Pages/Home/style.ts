import styled from "styled-components";

export const ContainerHome = styled.div`
  width: 100vw;
  height: 100vh; 
  display: flex;
  margin:  0 auto;
  flex-direction: column;
  text-align: center;
  align-items: center;
  background-color: var(--brand1);
  

  .ContainerBox{
    width: 80%;
    height: 90%;
    display: flex;
    margin: 50px auto;
    justify-content: space-around;
    align-items: center;
  }
  h1{
    color: var(--white-fixed);
    font-size: var(--text-size-4);
    font-weight: 400;
  }
  .inBox{
    width: 30%;
    height:  95%;
    border-radius: 8px;
    background-color: var(--brand2);
    align-items: center;
  }
  .outBox{
    width: 50%;
    height:  95%;
    border-radius: 8px;
    background-color: var(--brand2);
    align-items: center;
  }
`