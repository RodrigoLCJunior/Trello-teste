// src/App.jsx
import './App.scss'
import Kanban from './components/kanban/Kanban'

function App() {
    return (
        <div style={{ padding: '50px' }}>
            <h1 style={{ marginBottom: '20px' }}>
                Kanban UI
            </h1>
            <Kanban />
        </div>
    )
}

export default App;
