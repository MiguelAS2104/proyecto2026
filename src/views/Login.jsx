import React, { useEffect, useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import FormularioLogin from "../components/login/Formulariologin";
import { supabase } from "../database/supabaseconfig";

const Login = () => {
    const [usuario, setUsuario] = useState("");
    const [contrasena, setContrasena] = useState("");
    const [error, setError] = useState("");

    const navigate = useNavigate();

    const iniciarSesion = async () => {
        setError("");

        const { data, error } = await supabase.auth.signInWithPassword({
            email: usuario,
            password: contrasena,
        });

        if (error) {
            setError("Usuario o contraseña incorrectos");
            return;
        }

        console.log("Usuario autenticado:", data);

        navigate("/");
    };

    useEffect(() => {
        const validarSesion = async () => {
            const {
                data: { session },
            } = await supabase.auth.getSession();

            if (session) {
                navigate("/");
            }
        };

        validarSesion();
    }, [navigate]);

const estiloContenedor = {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "108%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "linear-gradient(135deg, #FFDEE9, #B5FFFC)",
    overflow: "hidden",
    padding: "20px",
};
return (
    <div style={estiloContenedor}>
        <FormularioLogin
            usuario={usuario}
            contrasena={contrasena}
            error={error}
            setUsuario={setUsuario}
            setContrasena={setContrasena}
            iniciarSesion={iniciarSesion}
        />
    </div>
    );
};

export default Login;
