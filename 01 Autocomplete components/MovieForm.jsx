import React, { useState } from 'react';
import { Autocomplete, TextField, Button, Box, Typography, Alert } from '@mui/material';

const topMovies = [
  { id: 1, label: 'The Shawshank Redemption', year: 1994 },
  { id: 2, label: 'The Godfather', year: 1972 },
  { id: 3, label: 'The Dark Knight', year: 2008 },
];

function FormWithAutocomplete() {
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [email, setEmail] = useState('');
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};

    if (!selectedMovie) {
      newErrors.movie = 'Please select a movie';
    }

    if (!email) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = 'Email is invalid';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (validateForm()) {
      console.log('Form submitted:', {
        movie: selectedMovie,
        email: email
      });
      // Reset form
      setSelectedMovie(null);
      setEmail('');
      setErrors({});
    }
  };

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ maxWidth: 400, mx: 'auto', mt: 4 }}>
      <Typography variant="h5" gutterBottom>
        Movie Form
      </Typography>

      {Object.keys(errors).length > 0 && (
        <Alert severity="error" sx={{ mb: 2 }}>
          Please fix the errors below
        </Alert>
      )}

      {/* Autocomplete Field */}
      <Autocomplete
        options={topMovies}
        getOptionLabel={(option) => option.label || ''}
        value={selectedMovie}
        onChange={(event, newValue) => {
          setSelectedMovie(newValue);
          if (errors.movie) {
            setErrors(prev => ({ ...prev, movie: '' }));
          }
        }}
        renderInput={(params) => (
          <TextField
            {...params}
            label="Choose a movie"
            variant="outlined"
            fullWidth
            error={!!errors.movie}
            helperText={errors.movie}
            sx={{ mb: 2 }}
          />
        )}
      />

      {/* Email Field */}
      <TextField
        label="Email"
        variant="outlined"
        fullWidth
        value={email}
        onChange={(e) => {
          setEmail(e.target.value);
          if (errors.email) {
            setErrors(prev => ({ ...prev, email: '' }));
          }
        }}
        error={!!errors.email}
        helperText={errors.email}
        sx={{ mb: 2 }}
      />

      <Button
        type="submit"
        variant="contained"
        fullWidth
        size="large"
      >
        Submit Form
      </Button>
    </Box>
  );
}

export default FormWithAutocomplete;