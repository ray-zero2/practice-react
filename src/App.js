import { BrowserRouter } from "react-router-dom";
import { PrimaryButton } from "./components/atoms/button/PrimaryButton";
import { SecondaryButton } from "./components/atoms/button/SecondaryButton";
import { SearchInput } from "./components/molecules/SearchInput";
import { UserCard } from "./components/organisms/user/UserCard";
import { HeaderOnly } from "./components/templates/HeaderOnly";
import "./styles.css";

const user = {
  name: "testtest",
  image: "",
  image: "https://source.unsplash.com/NE0XGVKTmcA",
  email: "1235@example.com",
  phone: "090-0000-9989",
  company: {
    name: "テスト株式会社"
  },
  website: "https://test.com"
};

export default function App() {
  return (
    <BrowserRouter>
      <HeaderOnly>
        <div className="App">
          <PrimaryButton>test</PrimaryButton>
          <SecondaryButton>test</SecondaryButton>
          <br />
          <SearchInput />
          <UserCard user={user} />
        </div>
      </HeaderOnly>
    </BrowserRouter>
  );
}
