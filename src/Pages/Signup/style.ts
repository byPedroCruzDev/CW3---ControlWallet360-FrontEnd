
import styled from "styled-components"
export const ContainerSignup = styled.div`
  width: 100vw;
  height: 100vh; 
  display: flex;
  margin:  0 auto;
  flex-direction: column;
  text-align: center;
  align-items: center;

  h2 {
    color: var(--grey10);
    margin-top: 40px ;
  }
  .ContainerBlocks{
    width: 60%;
    height: 80%;
    display: flex;
    margin: 50px auto;
    justify-content: center;
    align-items: center;
  }
  .LoginImage{
    width: 50%;
    height: 95%;
    border-radius: 8px;
    background-size: cover;
    background-position: center;
    
  }
  img{
    width: 100%;
    height: 100%;
    border-radius: 8px;
  }
  .LoginBox{
    width: 50%;
    height:  95%;
    border-radius: 8px;
    background-color: var(--brand2);
    align-items: center;
  }
  form {
    width: 60%;
    height: 80%;
    display: flex;
    padding-top: 20px;
    flex-direction: column;
    margin: 20px auto;
    color: white;
    gap: 10px;
    justify-content: center;


    div {
      text-align: center;
    }
    h1 {
      margin: 40px 0;
    }

    label {
      font-size: var(--text-size3);
      padding: 5px 0;
      text-align: start;
    }
    input{
      width: 100%;
    }
    button {
      margin-top: 40px;
    }
    section {
      width: 100%;
      height: 40px;

      text-align: center;
      font-size: var(--text-size4);

      .toRegister {
        align-items: center;
        font-size: var(--text-size4);
        color: green;
        text-decoration: none;
        font-family: var(--font);

        &:hover {
          text-decoration: underline;
        }
      }
    }
  }
  @media (max-width: 768px) {
    main {
      align-items: center;
    }
    form {
      width: 70%;
      max-width: 380px;
      height: 100%;
    }
    .container {
      display: none;
    }
    nav {
      width: 60%;
    }
  }
`;