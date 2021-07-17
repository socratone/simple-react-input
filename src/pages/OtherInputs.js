import { useState } from 'react';
import styled from 'styled-components';

const OtherInputs = () => {
  const [values, setValues] = useState({
    name: '',
    password: '',
    email: '',
  });

  const [touched, setTouched] = useState({
    name: false,
    password: false,
    email: false,
  });

  const [errors, setErrors] = useState({
    name: '필수 입력 값입니다.',
    password: '필수 입력 값입니다.',
    email: '필수 입력 값입니다.',
  });

  // const [changed, setChanged]

  const validate = (name, value) => {
    if (!value) {
      setErrors({
        ...errors,
        [name]: '필수 입력 값입니다.',
      });
    } else {
      // 에러 없을 때는 초기화
      setErrors({
        ...errors,
        [name]: '',
      });
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    validate(name, value);
    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleBlur = (event) => {
    const { name } = event.target;
    setTouched({
      ...touched,
      [name]: true,
    });
  };

  const isErrors = () => {
    for (const key in errors) {
      if (errors[key]) return true;
    }
    return false;
  };

  const handleSubmit = () => {
    alert(JSON.stringify(values, null, 2));
  };

  console.log('isErrors:', isErrors());

  return (
    <div>
      <Label>
        <span>이름</span>
        <input
          name="name"
          type="text"
          value={values.name}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        {touched.name && errors.name && <Error>{errors.name}</Error>}
      </Label>

      <Label>
        <span>비밀번호</span>
        <input
          name="password"
          type="password"
          value={values.password}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        {touched.password && errors.password && (
          <Error>{errors.password}</Error>
        )}
      </Label>

      <Label>
        <span>이메일</span>
        <input
          name="email"
          type="email"
          value={values.email}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        {touched.email && errors.email && <Error>{errors.email}</Error>}
      </Label>

      <div>
        <button onClick={handleSubmit} disabled={isErrors()}>
          Submit
        </button>
      </div>
    </div>
  );
};

const Label = styled.label`
  display: flex;
  gap: 10px;
  margin-bottom: 10px;
`;

const Error = styled.div`
  color: red;
`;

export default OtherInputs;
