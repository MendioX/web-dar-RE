import React from "react";
import styles from "./css/PopupModal.module.css"; // Agrega estilos según tus necesidades

const PopupModal = ({ onClose }) => {
    const handleSubmit = (e) => {
        e.preventDefault();
        // Puedes manejar la lógica del formulario aquí, por ejemplo, enviar los datos al servidor
    };

    return (
        <div className={styles.modalOverlay}>
            <div className={styles.modalContent}>
                <form onSubmit={handleSubmit}>
                    <label>
                        Nombre
                    </label>
                    <input type="text" name="firstName" />
                    <br />
                    <label>
                        Apellido
                    </label>
                    <br />
                    <input type="text" name="lastName" />
                    <label>
                        Teléfono
                    </label>
                    <br />
                    <input type="tel" name="phone" />
                    <label>
                        Correo Electrónico
                    </label>
                    <br />
                    <input type="email" name="email" />
                    <br />
                    <button type="submit">Enviar</button>
                </form>
                <br />
                <button onClick={onClose}>Cerrar</button>
            </div>
        </div>
    );
};
export default PopupModal;
