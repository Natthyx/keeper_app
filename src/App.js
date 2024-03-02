import "./App.css";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Note from "./Components/Note";
import notes from "./notes";


function App() {
    return (
    <div className="App">
        <Header />
        {notes.map(note =>
            <Note 
                key = {note.id}
                title = {note.title}
                content = {note.content}
            />)}
        <Footer />
        </div>
    );
}

export default App;