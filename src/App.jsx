import "./App.css";
import { Content } from "./components/Content";
import { Header } from "./components/Header";
import { Sidebar } from "./components/Sidebar";
import { AppProvider } from "./context/AppContext";

function App() {
  // const [isOpen, setIsOpen] = useState(false);

  // const [userData, setUserData] = useState({});
  // useEffect(() => {
  //   fetch("https://reqres.in/api/users/2")
  //     .then((res) => res.json())
  //     .then((res) => setUserData(res.data));
  // }, []);

  return (
    <div className="app" style={{ padding: "20px" }}>
      <AppProvider>
        <Header />
        <Content />
        <Sidebar />
      </AppProvider>
    </div>
  );
}

export default App;
