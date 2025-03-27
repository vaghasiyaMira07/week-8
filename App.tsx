import ProfileCard from "./components/ProfileCard";
import "./App.css";

const App = () => {
  return (
    <div className="app">
      <ProfileCard
        name="Mirali Vaghasiya"
        photo="https://randomuser.me/api/portraits/women/44.jpg"
        bio="A passionate web developer who loves React!"
      />
    </div>
  );
};

export default App;
