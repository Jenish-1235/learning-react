import { useState } from "react";

export default function MultiInputForm() {
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    bio: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Submitted: ${JSON.stringify(formData, null, 2)}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        name="name"
        placeholder="name"
        value={formData.name}
        onChange={handleChange}
      />
      <input
        name="age"
        placeholder="Age"
        value={formData.age}
        onChange={handleChange}
      />
      <input
        name="bio"
        placeholder="Bio"
        value={formData.bio}
        onChange={handleChange}
      />
      <button type="submit">Submit</button>
    </form>
  );
}
