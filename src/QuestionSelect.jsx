export const QuestionSelect = ({ formData, handleChange }) => {
    return (
        <fieldset>
            <legend>2. Vilken power-up skulle du välja?</legend>

            <label htmlFor="powerUp">Välj ett alternativ</label>
            <select
                id="powerUp"
                name="powerUp"
                value={formData.powerUp}
                onChange={handleChange}
            >
                <option value="">-- Välj power-up --</option>
                <option value="Super Mushroom">Super Mushroom - Klassiskt och pålitligt</option>
                <option value="Fire Flower">Fire Flower - Offensiv kraft</option>
                <option value="Super Star">Super Star - Ostoppbar en kort stund</option>
                <option value="Cape Feather">Cape Feather - Flyg över utmaningar</option>
                <option value="Tanooki Suit">Tanooki Suit - Mångsidig och rolig</option>
            </select>
        </fieldset>
    );
};