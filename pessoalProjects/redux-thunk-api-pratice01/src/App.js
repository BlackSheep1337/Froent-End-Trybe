import React from 'react';
import { fetchUsers } from './redux/actions';
import { useSelector, useDispatch } from 'react-redux';

export default function App() {
  const dispatch = useDispatch();
  const users = useSelector(state => state.productReducer.products);

  React.useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  return (
    <div style={{ textAlign: 'center'}}>
      <h1>List of Users</h1>
      {users && users.map((user) => (<p key={ user.id }>{ user.name }</p>))}
    </div>
  )
}
