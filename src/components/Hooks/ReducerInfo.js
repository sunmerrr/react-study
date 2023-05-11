import { useReducer } from 'react';

function reducer(state, action) {
  return {
    ...state,
    [action.name]: action.value,
  };
}

function ReducerInfo() {
  const [state, dispatch] = useReducer(reducer, { name: '', nickname: '' });

  const { name, nickname } = state;
  const handleChange = (e) => {
    dispatch(e.target);
  };

  return (
    <div>
      <div>
        <input name="name" type="text" placeholder="name" value={name} onChange={handleChange} />
        <input name="nickname" type="text" placeholder="nickname" value={nickname} onChange={handleChange} />
      </div>
      <div>
        <p>이름: {name}</p>
      </div>
      <div>
        <p>닉네임: {nickname}</p>
      </div>
    </div>
  );
}

export default ReducerInfo;
