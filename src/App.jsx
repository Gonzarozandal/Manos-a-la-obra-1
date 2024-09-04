import "./App.css"

function App() {
  return (
    <>
    <div class="nueva-tarea">
        <h1 class="titulo">LISTA DE TAREAS DE GONZA</h1>
        <div class="input-contenedor">
            <input type="text" placeholder="Nueva tarea..."></input>
            <button type="button">ADD</button>
        </div>
    </div>
    <br/>
    <div class="contenedor">
        <div class="tarea">
            <input type="checkbox"></input>
            <span>Task N</span>
            <button type="button">&#128465;</button>
        </div>

        <div class="tarea">
            <input type="checkbox"></input>
            <span>Task N-1</span>
            <button type="button">&#128465;</button>
        </div>
        
        <div class="tarea">
            <input type="checkbox"></input>
            <span><s>Completed task N-2</s></span>
            <button type="button">&#128465;</button>
        </div>
        
        <div class="tarea">
            <input type="checkbox"></input>
            <span>Task K</span>
            <button type="button">&#128465;</button>
        </div>
        
        <div class="tarea">
            <input type="checkbox"></input>
            <span>Task N</span>
            <button type="button">&#128465;</button>
        </div>
        
        <div class="tarea">
            <input type="checkbox"></input>
            <span><s>Completed Task 1</s></span>
            <button type="button">&#128465;</button>
        </div>
    </div>
  
    </> 
    )
  }


export default App;
