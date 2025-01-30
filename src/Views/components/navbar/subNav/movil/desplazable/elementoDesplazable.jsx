import React from 'react';
import { Box, Typography } from '@mui/material';
import { Link } from 'react-router-dom'; // Importa el componente Link de react-router-dom

const Desplazable = ({ titulo, data }) => {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      {/* Renderizamos el título */}
      <Typography variant="subtitle1" sx={{ fontWeight: 'bold', color: '#333' }}>
        {titulo} {/* Aquí es donde se pasa y se muestra el título */}
      </Typography>

      {/* Caja de elementos desplazables */}
      <Box
        sx={{
          position: 'relative',
          display: 'flex',
          overflowX: 'auto',
          paddingBottom: '8px',
          flexWrap: 'nowrap',
        }}
      >
        <Box sx={{ display: 'flex', flex: '0 0 auto' }}>
          {data.map((item, index) => (
            <Link to={item.link} key={index} style={{ textDecoration: 'none' }}>  {/* Aquí se añade el enlace */}
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  padding: '8px',
                  borderRadius: '4px',
                  transition: 'background-color 0.3s ease',
                  '&:hover': { backgroundColor: '#f5f5f5' },
                  minWidth: 'auto',
                  marginRight: '20px',
                }}
              >
                {item.icon}
                <Typography
                  variant="body2"
                  sx={{
                    color: '#555',
                    textAlign: 'left',
                    textDecoration: 'none',
                    cursor: 'pointer',
                  }}
                >
                  {item.name}
                </Typography>
              </Box>
            </Link>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default Desplazable;
