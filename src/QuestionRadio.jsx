export const QuestionRadio = ({ legend, name, options, value, handleChange }) => {

    return (
        <fieldset>
            <legend>{legend}</legend>

            {options.map((option) => (
                <label key={option}>
                    <input
                        type="radio"
                        name={name}
                        value={option}
                        checked={value === option}
                        onChange={handleChange}
                    />
                    {option}
                </label>
            ))}
        </fieldset>
    );
};