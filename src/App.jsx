import { Form } from "./components/form/form"

function App() {
  
  const mostrarData = ( data ) => {
    console.table( data )
  };

  return (
    <div className="App">
      <Form titulo={'Formulario v2!'} onSubmit={mostrarData}/>
    </div>
  )
}

export default App
