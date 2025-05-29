import './App.css'

function App() {
  const handleClick = () => {
    alert('Hello! This is a Bootstrap button in React.');
  };


  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col">
          <div className="d-flex justify-content-center align-items-center vh-100 ">
            <button className="btn btn-outline-primary" onClick={handleClick}>
              Click Me
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
