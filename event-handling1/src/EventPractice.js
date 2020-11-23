import React, { useState } from 'react';

const EventPractice = () => {
  const [form, setForm] = useState({
    message: '',
    username: ''
  });

  const { username, message } = form;

  const onChange = e => {
    const nextForm = {
      ...form,
      [e.target.name]: e.target.value
    };
    setForm(nextForm);
  };

  const onClick = () => {
    alert(username + ' ' + message);
    setForm({
      message: '',
      username: ''
    });
  };

  const onKeyPress = e => {
    if (e.key === 'Enter') {
      onClick();
    }
  };

  return (
    <div>
      <h1>이벤트 연습</h1>
      <input
        type="text"
        name="username"
        placeholder="사용자명"
        value={username}
        onChange={onChange}
      />
      <input
        type="text"
        name="message"
        placeholder="입력하세요"
        value={message}
        onChange={onChange}
        onKeyPress={onKeyPress}
      />
      <h1>
        {username} {message}
      </h1>
      <button onClick={onClick}>clear</button>
    </div>
  );
};

export default EventPractice;