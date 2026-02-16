export const QuestionRadio = ({ formData, handleChange }) => {

    return (
        <fieldset>
            <legend>1. Vilket är ditt favoritäventyr?</legend>
            <label>
                <input
                    type="radio"
                    name="adventure"
                    value="Rädda Princess Peach från Bowsers slott"
                    checked={formData.adventure === "Rädda Princess Peach från Bowsers slott"}
                    onChange={handleChange}
                />
                Rädda Princess Peach från Bowsers slott
            </label>

            <label>
                <input
                    type="radio"
                    name="adventure"
                    value="Utforska hemliga världar och hitta alla Star Coins"
                    checked={formData.adventure === "Utforska hemliga världar och hitta alla Star Coins"}
                    onChange={handleChange}
                />
                Utforska hemliga världar och hitta alla Star Coins
            </label>

            <label>
                <input
                    type="radio"
                    name="adventure"
                    value="Tävla mot vänner i snabba banor"
                    checked={formData.adventure === "Tävla mot vänner i snabba banor"}
                    onChange={handleChange}
                />
                Tävla mot vänner i snabba banor
            </label>

            <label>
                <input
                    type="radio"
                    name="adventure"
                    value="Samla power-ups och besegra alla fiender"
                    checked={formData.adventure === "Samla power-ups och besegra alla fiender"}
                    onChange={handleChange}
                />
                Samla power-ups och besegra alla fiender
            </label>
        </fieldset>
    );
};