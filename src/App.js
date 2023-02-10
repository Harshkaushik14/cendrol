import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import UserCard from './components/UserCard';
import { fetchUsersData } from './redux/slice/users';

function App() {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);


  console.log("state", state.user?.data?.results);

  useEffect(() => {
    dispatch(fetchUsersData());
  },[])

  if (state.user.isLoading) {
    return <h1>Loading....</h1>
  }

  return (
    <div className="App">
      <h1>Users</h1>
{state.user?.data?.results.map((item,index) =><UserCard item={item} index={index}/> )}
    </div>
  );
}

export default App;
