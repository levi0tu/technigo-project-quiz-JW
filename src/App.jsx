import { useState } from "react";
import { QuestionRadio } from "./QuestionRadio";
import { QuestionSelect } from "./QuestionSelect";
//import { Summary } from "/Summary";

const adventureOptions = [
  "Rädda Princess Peach från Bowsers slott",
  "Utforska hemliga världar och hitta alla Star Coins",
  "Tävla mot vänner i snabba banor",
  "Samla power-ups och besegra alla fiender",
];

const bossStrategyOptions = [
  "Studerar attack-mönstret noggrant innan jag agerar",
  "Går direkt in med full kraft och hoppas på det bästa",
  "Samlar extra liv och power-ups först",
  "Letar efter en genväg eller alternativ strategi",
];

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
          <QuestionRadio
            legend="1. Vilket är ditt favoritäventyr?"
            name="adventure"
            options={adventureOptions}
            value={formData.adventure}
            handleChange={handleChange} />

          <QuestionSelect formData={formData} handleChange={handleChange} />

          <QuestionRadio
            legend="3. Hur hanterar du en svår boss fight?"
            name="bossStrategy"
            options={bossStrategyOptions}
            value={formData.bossStrategy}
            handleChange={handleChange}
          />
          <button type="submit">Submit</button>
        </form>
      )}
    </div>
  );
};