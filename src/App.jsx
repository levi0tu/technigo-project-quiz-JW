import { useState } from "react";
import { QuestionRadio } from "./QuestionRadio";
import { QuestionSelect } from "./QuestionSelect";
//import { Summary } from "/Summary";

export const App = () => {
  const [formData, setFormData] = useState({
    adventure: "",
    powerUp: "",
    bossStrategy: "",
    environment: "",
    priority: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <div>
      <h1>Which Mario Character Are You</h1>

      {!isSubmitted && (
        <form onSubmit={handleSubmit}>
          <QuestionRadio formData={formData} handleChange={handleChange} />
          <QuestionSelect formData={formData} handleChange={handleChange} />
          <button type="submit">Submit</button>
        </form>
      )}
    </div>
  );
};
