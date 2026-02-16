export const QuestionSelect = ({ legend, name, options, value, handleChange }) => {
    return (
        <fieldset>
            <legend>{legend}</legend>

            <label htmlFor={name}>Välj ett alternativ</label>
            <select
                id={name}
                name={name}
                value={value}
                onChange={handleChange}
            >
                <option value="">-- Välj --</option>
                {options.map((option) => (
                    <option key={option} value={option}>
                        {option}
                    </option>
                ))}
            </select>
        </fieldset>
    );
};