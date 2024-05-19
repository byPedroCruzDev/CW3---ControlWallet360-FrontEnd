import {ContainerLogin} from "./style"
import Button from "../../Components/Button"
import Input from "../../Components/Input"
import HeaderMenu from "../../Components/Header"

export const Login = () =>{
    return(
        <ContainerLogin>
            <HeaderMenu/>
            
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
