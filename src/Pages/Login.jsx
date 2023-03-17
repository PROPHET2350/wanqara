import "../App.css";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import {
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
} from "@mui/material";
import Button from "@mui/material/Button";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormGroup from "@mui/material/FormGroup";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import { useState } from "react";
import { loginService } from "../Services/UserLoginService";
import illarli from "/illarli-logo-black.svg";
import { useDispatch } from "react-redux";
import { save } from "../Store/User/tokenSlice";
import { useNavigate } from "react-router-dom";

function Login() {
  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  const [FormData, setFormData] = useState({
    username: "",
    password: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = await loginService(FormData.username, FormData.password);
    if (token == null) {
      alert("Bad Credentials");
    } else {
      dispatch(save(token));
      navigate("/home");
    }
  };

  return (
    <div className="back">
      <Grid
        container
        spacing={0}
        direction="row"
        justifyContent={"center"}
        wrap="nowrap"
      >
        <Grid
          container
          item
          xs={10}
          className="grid"
          direction="row"
          wrap="nowrap"
        >
          <Grid container item xs={12} direction="column" wrap="nowrap">
            <Grid
              item
              xs={5}
              alignSelf={"center"}
              paddingTop={"35px"}
              justifySelf={"center"}
            >
              <div className="welcome">
                <p>Que bueno volver a verte</p>
                <p>
                  <strong>Bienvenido a</strong>
                </p>
                <p>
                  <strong>ILLARLI</strong>
                </p>
              </div>
            </Grid>
            <Grid item xs={12}>
              <div className="login-img"></div>
            </Grid>
          </Grid>
          <Grid item xs={11}>
            <div className="login-form">
              <div className="login-form-header">
                <img src={illarli} alt="illarli logo" />
                <h2>Iniciar Sesión</h2>
                <p>
                  En el <span>sistema de facturación </span>de que adaptas tus
                  necesidades
                </p>
              </div>
              <form className="login-form-body" onSubmit={handleSubmit}>
                <TextField
                  id="outlined-multiline-flexible"
                  label="Usuario"
                  className="form-control"
                  required
                  onChange={(e) =>
                    setFormData({ ...FormData, username: e.target.value })
                  }
                  name="username"
                />

                <FormControl variant="outlined" className="form-control">
                  <InputLabel htmlFor="outlined-adornment-password">
                    Password
                  </InputLabel>
                  <OutlinedInput
                    id="outlined-adornment-password"
                    name="password"
                    required
                    onChange={(e) =>
                      setFormData({ ...FormData, password: e.target.value })
                    }
                    type={showPassword ? "text" : "password"}
                    endAdornment={
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={handleClickShowPassword}
                          onMouseDown={handleMouseDownPassword}
                          edge="end"
                        >
                          {showPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                      </InputAdornment>
                    }
                    label="Password"
                  />
                </FormControl>
                <div className="login-form-action">
                  <FormGroup>
                    <FormControlLabel
                      control={<Checkbox />}
                      label="Recordarme"
                    />
                  </FormGroup>

                  <p>Ovidaste tu contraseña?</p>
                </div>
                <Button variant="contained" type="submit">
                  Acceder
                </Button>
              </form>
              <div className="login-footer">
                no tienes cuenta? <a>Regístrate aquí</a>
              </div>

              <div className="copi">
                <p>Con el respaldo de illarli</p>
              </div>
            </div>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}

export default Login;
