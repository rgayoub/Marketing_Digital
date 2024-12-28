import React, { useState } from "react";

const inputStyle = {
    width: "100%",
    padding: "12px 20px",
    backgroundColor: "#fff",
    border: "2px solid #ddd",
    borderRadius: "50px",
    color: "#333",
    fontSize: "1rem",
    outline: "none",
    boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
    transition: "all 0.3s ease",
};

const buttonStyle = {
    padding: "12px 20px",
    backgroundColor: "#6A4E23",
    color: "#fff",
    border: "none",
    borderRadius: "50px",
    cursor: "pointer",
    fontSize: "1.1rem",
    transition: "background-color 0.3s ease, transform 0.3s ease",
};

const Contact = () => {
    const [name, setName] = useState("");
    const [message, setMessage] = useState("");
    const [error, setError] = useState({ name: false, message: false });

    const handleSubmit = () => {
        if (!name || !message) {
            setError({
                name: !name,
                message: !message,
            });
            return;
        }

        const phoneNumber = "+221779200000"; // numéro de téléphone
        const text = `Nom: ${name}\nMessage: ${message}`;
        const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(text)}`;
        window.open(url, "_blank");
    };

    return (
        <div
            style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                minHeight: "100vh",
                backgroundColor: "#f4f4f9",
                padding: "20px",
            }}
        >
            <div
                style={{
                    maxWidth: "600px",
                    width: "100%",
                    display: "flex",
                    flexDirection: "column",
                    backgroundColor: "#fff",
                    borderRadius: "10px",
                    padding: "26px",
                    boxShadow: "0 4px 15px rgba(0, 0, 0, 0.1)",
                }}
            >
                <div style={{ textAlign: "center", marginBottom: "30px" }}>
                    <h1
                        style={{
                            fontSize: "2.5rem",
                            color: "#3A3A3A",
                            marginBottom: "10px",
                            fontWeight: "bold",
                        }}
                    >
                        Contactez notre équipe
                    </h1>
                    <p style={{ color: "#777", fontSize: "1.1rem" }}>
                        Nous serons ravis de discuter de vos besoins en marketing digital.
                    </p>
                </div>

                <form
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        gap: "25px",
                    }}
                    onSubmit={(e) => e.preventDefault()}
                >
                    <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                        <label
                            style={{
                                color: "#6A4E23",
                                fontSize: "1rem",
                                fontWeight: "500",
                            }}
                        >
                            Nom *
                        </label>
                        <input
                            type="text"
                            placeholder="Votre nom"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            style={{
                                ...inputStyle,
                                borderColor: error.name ? "red" : "#ddd",
                            }}
                            onFocus={(e) => (e.target.style.borderColor = "#6A4E23")}
                            onBlur={(e) => (e.target.style.borderColor = error.name ? "red" : "#ddd")}
                        />
                        <p style={{ color: error.name ? "red" : "#777", fontSize: "0.9rem", margin: 0 }}>
                            {error.name ? "Veuillez entrer votre nom." : "Entrez votre nom complet."}
                        </p>
                    </div>

                    <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                        <label
                            style={{
                                color: "#6A4E23",
                                fontSize: "1rem",
                                fontWeight: "500",
                            }}
                        >
                            Message *
                        </label>
                        <textarea
                            placeholder="Votre message"
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            style={{
                                ...inputStyle,
                                height: "150px",
                                resize: "none",
                                borderRadius: "12px",
                                borderColor: error.message ? "red" : "#ddd",
                            }}
                            onFocus={(e) => (e.target.style.borderColor = "#6A4E23")}
                            onBlur={(e) => (e.target.style.borderColor = error.message ? "red" : "#ddd")}
                        />
                        <p style={{ color: error.message ? "red" : "#777", fontSize: "0.9rem", margin: 0 }}>
                            {error.message ? "Veuillez entrer votre message." : "Décrivez votre besoin."}
                        </p>
                    </div>

                    <button
                        type="button"
                        onClick={handleSubmit}
                        style={buttonStyle}
                        onMouseOver={(e) => (e.target.style.backgroundColor = "#8A6B3F")}
                        onMouseOut={(e) => (e.target.style.backgroundColor = "#6A4E23")}
                        onFocus={(e) => (e.target.style.transform = "scale(1.05)")}
                        onBlur={(e) => (e.target.style.transform = "scale(1)")}
                    >
                        Envoyer
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Contact;