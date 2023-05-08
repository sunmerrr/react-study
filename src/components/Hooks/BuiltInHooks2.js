import { useState } from 'react';

const BuiltInHooks2 = () => {
  const [name, setName] = useState('');
  const [nickname, setNickname] = useState('');

  const handleChangeName = (e) => {
    setName(e.target.value);
  };

  const handleChangeNickname = (e) => {
    setNickname(e.target.value);
  };

  return (
    <div>
      <input onChange={handleChangeName} type="text" placeholder="name" value={name} name="name" />
      <input onChange={handleChangeNickname} type="text" placeholder="nickname" value={nickname} name="nickname" />
      <p>
        이름: <b>{name}</b>
      </p>
      <p>
        닉네임: <b>{nickname}</b>
      </p>
    </div>
  );
};

export default BuiltInHooks2;
