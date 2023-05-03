import React, {useState} from 'react'
import { Box, Button, Stack, TextField, Typography } from '@mui/material';
import { getCards, getdata } from '../Redux/DataReducer/action';
import { useDispatch } from 'react-redux';

const Searchbar = () => {
    const [search, setSearch] = useState('');
    const [bodyParts, setBodyParts] = useState([]);
    const dispatch = useDispatch()
    const handleSearch = async()=>{
       let data = await getdata()
       console.log(data)
    }
  
  return (
    <div>
      <Stack alignItems="center" mt="37px" justifyContent="center" p="20px">
      <Typography fontWeight={700} sx={{ fontSize: { lg: '44px', xs: '30px' } }} mb="49px" textAlign="center">
        Awesome Exercises You <br /> Should Know
      </Typography>
      <Box position="relative" mb="72px">
        <TextField
          height="76px"
          sx={{ input: { fontWeight: '700', border: 'none', borderRadius: '4px' }, width: { lg: '870px', xs:"400px"  }, backgroundColor: '#fff', borderRadius: '40px' }}
          value={search}
          onChange={(e) => setSearch(e.target.value.toLowerCase())}
          placeholder="Search Exercises"
          type="text"
        />
        <Button className="search-btn" sx={{ bgcolor: '#FF2625', color: '#fff', textTransform: 'none', width: { lg: '173px', xs: '80px' }, height: '56px', position: 'absolute', right: '0px', fontSize: { lg: '20px', xs: '14px' } }}
         onClick={handleSearch}
         >
          Search
        </Button>
      </Box>
      <Box sx={{ position: 'relative', width: '100%', p: '20px' }}>
        {/* <HorizontalScrollbar data={bodyParts} bodyParts setBodyPart={setBodyPart} bodyPart={bodyPart} /> */}
      </Box>
    </Stack>
    </div>
  )
}

export default Searchbar
