import Button from "../../Components/Button"
import Input from "../../Components/Input"
import { ContainerSignup } from "./style"
export const Signup = () =>{
    return (
        <ContainerSignup>
            <h1>CW3</h1>
            <div className="ContainerBlocks">
                    <main className="LoginBox">
                        <h2>Registro</h2>
                        <form action="">
                            <label htmlFor="">Nome</label>
                            <Input placeholder="Nome"></Input>
                            <label htmlFor="">E-mail</label>
                            <Input placeholder="@email.com"></Input>
                            <label htmlFor="">Profissão</label>
                            <Input placeholder="Ex:fotografo, disgner"></Input>
                            <label htmlFor="">Senha</label>
                            <Input placeholder="******"></Input>
                            <Button buttonSize="big" >Registras-se</Button>
                        </form>
                        
                    </main> 
                    
            </div> 
      </ContainerSignup>
    )
}