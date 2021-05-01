import styled from 'styled-components';
import { SearchInput } from '../molecules/SearchInput';
import { UserCard } from '../organisms/user/UserCard'

const users = [...Array(10).keys()].map((val) => {
  return {
    id: val,
    name: `testtest-${val}`,
    image: "",
    image: "https://source.unsplash.com/NE0XGVKTmcA",
    email: "1235@example.com",
    phone: "090-0000-9989",
    company: {
      name: "テスト株式会社"
    },
    website: "https://test.com"
  }
});


export const Users = () => {

  return (
    <SContainer>
      <h2>Users</h2>
      <SearchInput />
      <SUserArea>
        {users.map((user) => {
          return (
            <UserCard
              key={user.id}
              user={user}
            ></UserCard>
          );
        })}
      </SUserArea>
    </SContainer>
  )
}


const SContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 24px;

`;

const SUserArea = styled.div`
  padding-top: 40px;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-gap: 20px;
`;
