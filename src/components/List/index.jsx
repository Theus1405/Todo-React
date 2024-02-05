import { useState } from "react";
import { Tarefa } from "../Tarefa";
import { StyleForm, StyleList } from "./style";

export function List() {

    //State / estado
    //nome do estado, função atualizadora
    const [ listaTarefas,setListaTarefas] =

     useState(localStorage.getItem('tarefas') != null ? JSON.parse(localStorage.getItem('tarefas')) : []);
            // se localStorage != de vazio "? = então" JSON.parse... ": = senão" comece com "[] = vazio"

    const [novaTarefa, setNovaTarefa] = useState('');


    //session_storage() -> Guarda em sessão (enquanto o browser está aberto)
    //local_storage()

    /*const listaTarefas = [
        {titulo: 'Fazer compras', id: 1 },
        {titulo: 'Estudar React', id: 2 },
        {titulo: 'Pagar Contas', id: 3 },
        {titulo: 'Pegar um Café', id: 4 },




    ]*/

    function addTarefa(){
        // coloca dados sem mudar o estado da pagina
        // listaTarefas.push({titulo: 'Nova Tarefa',id: 5})
        // console.log(listaTarefas);

        //...listaTarefas -> Faz uma cópia da lista e em seguida adiciona
        setListaTarefas([...listaTarefas,{titulo:novaTarefa, id: new Date().getTime()}]);
        //para limpar o campo depois de incluir a tarefa


        setNovaTarefa(''); //PERGUNTAR AO PROFESSOR, ESTÁ CAUSANDO ERRO NO CODIGO, COMO CITADO NA AULA.

    }

    function removerTarefa(id){
        //console.log('tarefa removida' + id)

        setListaTarefas(

            listaTarefas.filter(tarefa => (tarefa.id != id))
            // se eu colocar == ao inves de diferente , posso usar isso para consulta mediante ao nome ou id

            )
    }


    return (

        <>

        {
            //Guardando o valor do estado em um storage do navegador
            localStorage.setItem('tarefas', JSON.stringify(listaTarefas))
            //COMANDO JSON.STRINGIFY é para traduzir o array em informações texto
        }

            <StyleForm>
                <input type="text"
                 placeholder=" Criar Nova Tarefa"
                 value={novaTarefa}

                 // 'e' pode ser qualquer coisa, como RESPOSTA, EVENTO E ETC
                 onChange={(e)=>setNovaTarefa(e.target.value)}
                 // cria o evento 'e' e é passado para o SetNovaTarefa atraves da função 'addTarefa' o valor do atributo value 
                 //que é inserido quando é feito o click no button.

                 onKeyUp={(e)=> e.key == 'Enter'? addTarefa() : ''}
                 
                 />

                <button onClick={addTarefa}>Criar</button>
            </StyleForm>

            <StyleList>

                <h2>Lista de Tarefas 📕</h2>

                {
                    //map para fazer o loop
                    //onRemove = {removeTarefa} -> passando uma função para o componente tarefa
                    listaTarefas.map(tarefa => (
                      <Tarefa 

                       titulo = {tarefa.titulo}
                       key = {tarefa.id}
                       id = {tarefa.id}
                       onRemove ={removerTarefa}
                       
                       />  
                    ))


                } 
          
            </StyleList>

        </>

    )
}