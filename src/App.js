import "./App.css";
import { Header } from "./components/Header/Header";
import { Result } from "./components/Result/Result";
import { SearchInput } from "./components/Search/SearchInput";
function App() {
  return (
    <div className="App">
      <Header />
      <SearchInput />
      <Result />
    </div>
  );
}

export default App;
