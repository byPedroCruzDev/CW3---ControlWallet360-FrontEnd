import {ContainerLogin, Button} from "./style"
import a1 from "../../Assets/a1.jpg"
import Input from "../../Components/Input"

export const Login = () =>{
    return(
        <ContainerLogin>
            <h1>CW3</h1>
            <div className="ContainerBlocks">
                    <main className="LoginBox">
                        <h1>Login</h1>
                        <form action="">
                            <label htmlFor="">Email</label>
                            <Input></Input>
                            <label htmlFor="">Senha</label>
                            <Input></Input>
                        </form>
                        
                    </main> 
                    <main className="LoginImage">
                        <img className="MoneyImage" src={""} alt="money"/>
                    </main>
            </div>
           
            
      </ContainerLogin>
    )
}
