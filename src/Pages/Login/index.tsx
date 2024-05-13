import {ContainerLogin} from "./style"
import a2 from "../../Assets/a3.png"
import Input from "../../Components/Input"

export const Login = () =>{
    return(
        <ContainerLogin>
            <h1>CW3</h1>
            <div className="ContainerBlocks">
                    <main className="LoginBox">
                        <h2>Login</h2>
                        <form action="">
                            <label htmlFor="">Email</label>
                            <Input></Input>
                            <label htmlFor="">Senha</label>
                            <Input></Input>
                        </form>
                        
                    </main> 
                    <main className="LoginImage">
                        <img className="MoneyImage" src={a2} alt="money"/>
                    </main>
            </div>
           
            
      </ContainerLogin>
    )
}
