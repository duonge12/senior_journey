import { useState } from "react";
import { Button } from "../Buttons";
import { handleValidate } from "../../library/ultilities";

const Input = ({ fieldName, placeholder, value, onChange, error }) => {
  return (
    <div className="w-[300px]">
      <input
        className="border border-green-300 p-1 rounded-sm w-full"
        name={fieldName}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      /><br />
      {error && error[fieldName] && <span className="text-red-600 text-sm">{error[fieldName]}</span>}
    </div>
  )
}

const Form = () => {
  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    email: '',
    phone_number: ''
  });
  const [error, setError] = useState()
  const handleSubmit = (e) => {
    e.preventDefault()
    const err = {}
    Object.entries(formData).forEach(([key, value]) => {
      err[key] = handleValidate(key, value)
    })
    const check = Object.values(err).every(value => value === null);
    if (check) {
      console.log(formData)
      setError({})
    }
    else {
      setError(err)
    }
  }

  return (
    <form className="bg-white rounded-sm p-4">
      <h1 className="py-3">Registration form</h1>
      <div className="grid grid-cols-2 gap-2">
        <Input
          fieldName="first_name"
          placeholder="First name"
          value={formData.first_name}
          onChange={e => setFormData({ ...formData, first_name: e.target.value })}
          error={error}
        />
        <Input
          fieldName="last_name"
          placeholder="Last name"
          value={formData.last_name}
          onChange={e => setFormData({ ...formData, last_name: e.target.value })}
          error={error}
        />
        <Input
          fieldName="email"
          placeholder="Email"
          value={formData.email}
          onChange={e => setFormData({ ...formData, email: e.target.value })}
          error={error}
        />
        <Input
          fieldName="phone_number"
          placeholder="Phone number"
          value={formData.phone_number}
          onChange={e => setFormData({ ...formData, phone_number: e.target.value })}
          error={error}
        />
      </div>
      <Button
        type='submit'
        handleClick={(e) => handleSubmit(e)}>
        Submit
      </Button>
    </form>
  );

}

export default Form;
