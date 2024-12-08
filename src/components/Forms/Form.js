import { useState } from "react";
import { Button } from "../Buttons";
import { handleValidate } from "../../library/ultilities";
import CommonInput from "../../common/CommonInput";

const Form = () => {
  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    email: '',
    phone_number: '',
    password: '',
    confirm_passWord: ''
  });
  const [error, setError] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    const err = {};
    Object.entries(formData).forEach(([key, value]) => {
      err[key] = handleValidate(key, value)
    });
    err.confirm_passWord = formData.password === formData.confirm_passWord ? null : "Password didnt match.";
    const check = Object.values(err).every(value => value === null);
    if (check) {
      let message = 'Information:\n';
      Object.keys(formData).forEach((key) =>
        message += formData[key].toString() + "\n"
      );
      alert(message);
      setError({});
      return;
    }
    setError(err);
    return;
  }

  return (
    <form className="bg-white rounded-md p-4 w-[500px]">
      <h1 className="py-3">Registration form</h1>
      <div className="grid grid-cols-1 gap-2">
        <CommonInput
          fieldName="first_name"
          placeholder="First name"
          value={formData.first_name}
          onChange={e => setFormData({ ...formData, first_name: e.target.value })}
          error={error}
        />
        <CommonInput
          fieldName="last_name"
          placeholder="Last name "
          value={formData.last_name}
          onChange={e => setFormData({ ...formData, last_name: e.target.value })}
          error={error}
        />
        <CommonInput
          fieldName="email"
          placeholder="Email"
          value={formData.email}
          onChange={e => setFormData({ ...formData, email: e.target.value })}
          error={error}
        />
        <CommonInput
          fieldName="phone_number"
          placeholder="Phone number"
          value={formData.phone_number}
          onChange={e => setFormData({ ...formData, phone_number: e.target.value })}
          error={error}
        />
        <CommonInput
          fieldName="password"
          placeholder="Password"
          type="password"
          value={formData.password}
          onChange={e => setFormData({ ...formData, password: e.target.value })}
          error={error}
        />
        <CommonInput
          fieldName="confirm_passWord"
          placeholder="Password"
          type="password"
          value={formData.confirm_passWord}
          onChange={e => setFormData({ ...formData, confirm_passWord: e.target.value })}
          error={error}
        />
      </div>
      <Button
        className={'mt-3'}
        type='submit'
        handleClick={(e) => handleSubmit(e)}>
        Submit
      </Button>
    </form>
  );

}

export default Form;
