import { useState } from 'react';
import styled from 'styled-components';

const OtherInputs = () => {
  const [values, setValues] = useState({
    age: '',
    gender: '',
  });

  const [touched, setTouched] = useState({
    age: false,
    gender: false,
  });

  const [errors, setErrors] = useState({
    age: '필수 입력 값입니다.',
    gender: '필수 입력 값입니다.',
  });

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

  return (
    <div>
      <Label>
        <span>연령대</span>
        <select
          name="age"
          value={values.age}
          onChange={handleChange}
          onBlur={handleBlur}
        >
          <option value="">-</option>
          <option value="10">10대</option>
          <option value="20">20대</option>
          <option value="30">30대</option>
          <option value="40">40대</option>
          <option value="50">50대 이상</option>
        </select>
        {touched.age && errors.age && <Error>{errors.age}</Error>}
      </Label>

      <RadioContainer>
        <span>성별</span>
        <label>
          <input
            type="radio"
            name="gender"
            value="male"
            onChange={handleChange}
            onBlur={handleBlur}
          />
          <span>남</span>
        </label>
        <label>
          <input
            type="radio"
            name="gender"
            value="female"
            onChange={handleChange}
            onBlur={handleBlur}
          />
          <span>여</span>
        </label>
      </RadioContainer>

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

const RadioContainer = styled.div`
  display: flex;
  gap: 10px;
  margin-bottom: 10px;
`;

export default OtherInputs;
