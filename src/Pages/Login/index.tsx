import {ContainerLogin} from "./style"
import { Header } from "../../Components/Header/style"
import Button from "../../Components/Button"
import a2 from "../../Assets/a34.png"
import Input from "../../Components/Input"

export const Login = () =>{
    return(
        <ContainerLogin>
            <Header/>
            <div className="ContainerBlocks">
                    <main className="LoginBox">
                        <h2>Login</h2>
                        <form action="">
                            <label htmlFor="">Email</label>
                            <Input></Input>
                            <label htmlFor="">Senha</label>
                            <Input></Input>
                            <Button buttonSize="big" >Entrar</Button>
                        </form>
                        
                    </main> 
                    
            </div>
           
            
      </ContainerLogin>
    )
}
