import React, { Fragment, useEffect } from 'react';
import { getComments, deleteComment } from '../store/actions/commentsActions';
import { useSelector, useDispatch } from 'react-redux';
import Comment from '../components/layout/Comment';

function IndexPage() {
  
  const comments = useSelector(state => state.comments.data);
  const isLoading = useSelector(state => state.comments.isLoading);
  const isLoaded = useSelector(state => state.comments.isLoaded);
  const dispatch = useDispatch();

  useEffect(() => {
      if(!isLoaded){
          dispatch(getComments());
      }
  },[isLoaded, dispatch]);

  const handleDelete = (id) => {
    dispatch(deleteComment(id));
  }

  return (
    <Fragment>
        {isLoading && 
          <Fragment>
            <div className="fixed top-0 bottom-0 right-0 left-0 bg-gray-500 opacity-75">
            </div>
            <div className="z-20 fixed right-0 left-0" 
                style={{top: 100}}>
              <div className="border border-gray-600 px-4 py-2 bg-white  text-center w-6/12 mx-auto">
                Loading...
              </div>
            </div>
          </Fragment>
        }
        {isLoaded && comments.length === 0 && 
            <p>No Comments Listed</p>
        }
        {isLoaded && comments.length > 0 && 
          comments.map(cmt => <Comment key={cmt.id} data={cmt} onDeleteClick={handleDelete}/>)
        }
    </Fragment>
  );
}

export default IndexPage;
