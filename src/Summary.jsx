export const Summary = ({ formData }) => {
    return (
        <section>
            <h2>Dina svar</h2>
            <p>Favoritäventyr: {formData.adventure}</p>
            <p>Power-up: {formData.powerUp}</p>
            <p>Boss-strategi: {formData.bossStrategy}</p>
            <p>Miljö: {formData.environment}</p>
            <p>Viktigast i bana: {formData.priority}</p>
        </section>
    );
};