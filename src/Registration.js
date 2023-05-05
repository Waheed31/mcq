import React,{useState} from 'react'
import { Grid, TextField, Button, Card, CardContent, Typography, MenuItem,Select,SelectChangeEvent,InputLabel } from '@mui/material'

const Registration = () => {
 
  const [age, setAge] = useState('');

  const handleChange = (event) => {
    setAge(event.target.value)
  }
 
  return (
    <div style={{margin:"80px auto"}}>
    
    
      <Grid>
        <Card style={{ display:"flex", maxHeight:810 , maxWidth: 946, padding: "20px 5px", margin: "0 auto" }}>
          <CardContent>
            <Typography gutterBottom variant="h5" align='center' style={{marginBottom:"40px"}}>
              Registration
          </Typography> 
            
            <form>
              <Grid container spacing={6}>
                <Grid xs={12} sm={6} item>
                  <TextField placeholder="Full Name" label="Name" variant="outlined" fullWidth />
                </Grid>
                <Grid xs={12} sm={6} item>
                  <TextField type="email" placeholder="organize@gmail.com" label="Email" variant="outlined" fullWidth required />
                </Grid>
                <Grid item xs={12}sm={6}>
                  <TextField  placeholder="0967889990" label="Mobile Number" variant="outlined" fullWidth required />
                </Grid>
                <Grid></Grid>
                <Grid item xs={12}sm={6}>
                  <TextField  placeholder="BCA" label="Qualification" variant="outlined" fullWidth required />
                  
                </Grid>
                <Grid item xs={12}sm={6}>
                  <TextField  placeholder="2" label="Years of Experience" variant="outlined" fullWidth required />
                  
                  
                </Grid>
                <Grid item xs={12}sm={6}>
                  <TextField  placeholder="2" label="Skill Category" variant="outlined" fullWidth required />
                  
                  
                </Grid>
               
                <Grid 
                item xs={12} sm={6}>
                  <TextField  placeholder="select" label="Specialization" variant="outlined" fullWidth required />
                </Grid>


                <Grid item xs={12} sm={6}>
                  <TextField label="Address" multiline rows={4} placeholder="address" variant="outlined" fullWidth required />
                </Grid>
                
                </Grid>

                <Grid item xs ={12} sm= {6} style={{display:'flex',justifyContent:'center',alignItems:"",marginTop:"40px",gap:"40px"}}>
                <Button>Cancel</Button>
                <Button>Submit</Button>
                  
                </Grid>
               
           
            </form>
          </CardContent>
        </Card>
      </Grid>
    </div>
  )
}

export default Registration