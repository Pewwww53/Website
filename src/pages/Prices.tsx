import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Locations from "./Locations";
import nophoto from '../images/no-photo.jpg'

export default function Prices() {
    let rows = [];
    let order = 0
    for (let i = 0; i < Locations.length; i++) {
        for (let j = 0; j < Locations[i].cams.length; j++) {
            order += 1
            
            rows[order] = {
                image: Locations[i].cams[j].image? Locations[i].cams[j].image : 'https://cdn.discordapp.com/attachments/975386367678881815/1269966181368860732/no-photo.jpg?ex=66b1fbac&is=66b0aa2c&hm=e659170e84cb1016ec9a2cbc72d3d666d5fbecebaea4a33593720c190794112d&',
                name: Locations[i].cams[j].name,
                description: Locations[i].cams[j].description,
            }
        }
    }
    return (
        <TableContainer component={Paper} sx={{ maxHeight: 800, border: '2px solid #2c89bf', boxShadow: '5px 10px #13172b', borderRadius: '1vw', scrollBehavior: 'smooth'}}>
        <Table sx={{ minWidth: 650, textAlign: 'center', }} aria-label="sticky table" stickyHeader>
          <TableHead>
            <TableRow>
              <TableCell align="center" sx={{fontFamily: 'Poppins', fontWeight: 800}}>Image</TableCell>
              <TableCell align="center" sx={{fontFamily: 'Poppins', fontWeight: 800}}>Name</TableCell>
              <TableCell align="center" sx={{fontFamily: 'Poppins', fontWeight: 800}}>Description</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.name}
                sx={{textAlign: 'center'  }}
              >
                <TableCell component="th" scope="row" sx={{textAlign: 'center' }}>
                    <img src={row.image} alt={row.name} width={223}/>
                </TableCell>
                <TableCell component="th" scope="row" sx={{textAlign: 'center', fontFamily: 'Poppins', fontWeight: 800 }}>
                    {row.name}
                </TableCell>
                <TableCell component="th" scope="row" sx={{textAlign: 'justify', fontFamily: 'Poppins', fontWeight: 800 }}>
                    {row.description}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    );
}