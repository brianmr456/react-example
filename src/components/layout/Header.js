import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { userLogoff } from '../../store/actions/userActions';

function Header() {

  const dispatch = useDispatch();
  const isLoggedIn = useSelector(state => state.user.isLoggedIn);

  return (
    <header className="p-3 bg-gray-200 shadow">
        <nav className="flex flex-row justify-between px-12">
            <div>
                <h1 className="text-4xl">React Example</h1>
            </div>
            <div>
            {isLoggedIn &&
                <button className="px-3 py-2 hover:bg-gray-300 rounded" onClick={() => dispatch(userLogoff())}>
                  Log Off
                </button>
              }
            </div>
        </nav>
    </header>
  );
}

export default Header;
