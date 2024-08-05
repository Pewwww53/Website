import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import { Box, Button, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import { CustomTabPanel } from '../menus/TopNavBar';

interface Cat {
    url: string,
    id: string,
}

export default function About() {
    const [cats, setCats] = useState<Cat[]>([]);
    useEffect(() => {
        const fetchCats = async () => {
            const response = await fetch('https://api.thecatapi.com/v1/images/search?limit=20&breed_ids=beng&api_key=live_5ulHgmwkSWfVgEP6sW3mcXmBLNM0HFUdJoi4opzjKY9wHSLJbZO3GiRhmCm4Kd7W')
            const cats = (await response.json()) as Cat[]
            setCats(cats)
        }
        fetchCats();
    }, [])
    return (
      <Box textAlign={'center'} justifyItems={'center'}>
        <ImageList sx={{ height: 700 }} cols={5}>
          {cats.map((cat) => (
            <ImageListItem key={cat.id} sx={{maxWidth: '400px', maxHeight: '400px'}}>
              <img  
              srcSet={`${cat.url}?w=4&h=4&dpr=2 2x`}
              src={`${cat.url}?w=4&h=4`}
              alt={cat.id} 
              loading="lazy" 
              width={4}/>
            </ImageListItem>
          ))}
        </ImageList>
        <Button variant='contained' onClick={() => window.location.reload()}>Refresh</Button>
      </Box>
    );
}


