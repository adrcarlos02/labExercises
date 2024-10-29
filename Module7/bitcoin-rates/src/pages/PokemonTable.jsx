// src/components/PokemonTable.jsx
import React, { useEffect, useState } from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  CircularProgress,
  TablePagination,
} from '@mui/material';

const PokemonTable = () => {
  const [pokemonData, setPokemonData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10); // Set default rows per page

  useEffect(() => {
    const fetchPokemonData = async () => {
      try {
        const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=100');
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const data = await response.json();
        // Fetch detailed data for each Pokémon
        const detailedData = await Promise.all(
          data.results.map(async (pokemon) => {
            const response = await fetch(pokemon.url);
            return await response.json();
          })
        );
        setPokemonData(detailedData);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchPokemonData();
  }, []);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0); // Reset to the first page
  };

  if (loading) return <CircularProgress />;
  if (error) return <div>Error: {error}</div>;

  return (
    <Paper>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>#</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Image</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {pokemonData
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage) // Slice data for pagination
              .map((pokemon) => (
                <TableRow key={pokemon.id}>
                  <TableCell>{pokemon.id}</TableCell>
                  <TableCell>{pokemon.name}</TableCell>
                  <TableCell>
                    <img src={pokemon.sprites.front_default} alt={pokemon.name} style={{ width: '50px', height: '50px' }} />
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[5, 10, 25]} // Options for rows per page
        component="div"
        count={pokemonData.length} // Total number of rows
        rowsPerPage={rowsPerPage} // Current rows per page
        page={page} // Current page
        onPageChange={handleChangePage} // Handler for page change
        onRowsPerPageChange={handleChangeRowsPerPage} // Handler for changing rows per page
      />
    </Paper>
  );
};

export default PokemonTable;