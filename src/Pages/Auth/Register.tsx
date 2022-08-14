import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useAppDispatch, useAppSelector } from '../../app/hook';
import {
    error,
    isLoading,
    loginFaild,
    registerRequest,
} from '../../features/auth/authSlice';
import { Alert, AlertTitle, Backdrop, CircularProgress } from '@mui/material';
import { Link } from 'react-router-dom';
function Copyright(props: any) {
    return (
        <Typography
            variant="body2"
            color="text.secondary"
            align="center"
            {...props}
        >
            {'Copyright © '}
            <Link className="link" to="https://mui.com/">
                Your Website
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

const theme = createTheme();

export default function Register() {
    const dispatch = useAppDispatch();
    const loading = useAppSelector(isLoading);
    const errorString = useAppSelector(error);

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        const userName = data.get('username')?.toString() || '';
        const password = data.get('password')?.toString() || '';
        const confirmPassword = data.get('confirmPassword')?.toString() || '';
        if (!userName) dispatch(loginFaild('enter user name'));
        else if (!password) dispatch(loginFaild('enter password'));
        else if (!confirmPassword)
            dispatch(loginFaild('enter confirm password'));
        else if (password !== confirmPassword)
            dispatch(loginFaild('password and confirm password not match'));
        else dispatch(registerRequest({ userName, password }));
    };

    return (
        <ThemeProvider theme={theme}>
            <Grid container component="main" sx={{ height: '100vh' }}>
                <CssBaseline />

                <Backdrop
                    sx={{
                        color: '#fff',
                        zIndex: (theme) => theme.zIndex.drawer + 1,
                    }}
                    open={loading ? true : false}
                >
                    <CircularProgress color="inherit" />
                </Backdrop>
                <Grid
                    item
                    xs={false}
                    sm={4}
                    md={7}
                    sx={{
                        backgroundImage:
                            'url(https://source.unsplash.com/random)',
                        backgroundRepeat: 'no-repeat',
                        backgroundColor: (t) =>
                            t.palette.mode === 'light'
                                ? t.palette.grey[50]
                                : t.palette.grey[900],
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                    }}
                />
                <Grid
                    item
                    xs={12}
                    sm={8}
                    md={5}
                    component={Paper}
                    elevation={6}
                    square
                >
                    <Box
                        sx={{
                            my: 8,
                            mx: 4,
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                        }}
                    >
                        {errorString && (
                            <Alert severity="error">
                                <AlertTitle>Error</AlertTitle>
                                {errorString}
                            </Alert>
                        )}
                        <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                            <LockOutlinedIcon />
                        </Avatar>
                        <Typography component="h1" variant="h5">
                            Sign up
                        </Typography>
                        <Box
                            component="form"
                            noValidate
                            onSubmit={handleSubmit}
                            sx={{ mt: 1 }}
                        >
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                id="username"
                                label="username"
                                name="username"
                                autoComplete="username"
                                autoFocus
                            />
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                name="password"
                                label="Password"
                                type="password"
                                id="password"
                                autoComplete="current-password"
                            />
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                name="confirmPassword"
                                label="confrim password"
                                type="password"
                                id="confrim password"
                                autoComplete="current-password"
                            />
                            <FormControlLabel
                                control={
                                    <Checkbox
                                        value="remember"
                                        color="primary"
                                    />
                                }
                                label="Remember me"
                            />
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                sx={{ mt: 3, mb: 2 }}
                            >
                                Register
                            </Button>
                            <Grid container>
                                <Grid item xs></Grid>
                                <Grid item>
                                    <Link className="link" to="/login">
                                        {'You have an account? Sign in'}
                                    </Link>
                                </Grid>
                            </Grid>
                            <Copyright sx={{ mt: 5 }} />
                        </Box>
                    </Box>
                </Grid>
            </Grid>
        </ThemeProvider>
    );
}
