import React ,{useState} from 'react'
import { Grid, TextField, Button, Card, CardContent, Typography, MenuItem,Select,InputLabel, OutlinedInput, Checkbox, ListItemText } from '@mui/material'
import FormControl from '@mui/material/FormControl';




const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const skills = [
  'Front End',
  'BackEnd',
  'FullStack',
  'MicroSoft Office',
  'Cloud & Devops',
  'Mobile App',
  'Database',
  'Quality Analyst',
  'Business Analyst',
  'Methodology',
  'UI/UX',
  'Management',
  'Web Development',
  'Operations',
];

const TailwindReg = () => {
    
    const [Specialization,setSpecialization] = useState('')
    const [skill, setSkill] = useState([]);

      const specializationHandleChange = (event) => {
        setSpecialization(event.target.value);
      };

      const skillhandleChange = (event) => {
        const {
          target: { value },
        } = event;
        setSkill(
          // On autofill we get a stringified value.
          typeof value === 'string' ? value.split(',') : value,
        );
      };
    

  return (
    <div style={{margin:"80px auto"}}>
  
    <Card style={{ width:'946px', height:'810px', padding: "20px 5px", margin: "0 auto" }}>
    <CardContent>
    <Typography gutterBottom variant="h5" align='center' style={{marginBottom:"40px"}}>
              Registration
          </Typography> 
<form action="">
  <div class="grid grid-cols-12 gap-2 p-5">
  <div class="col-span-6 rounded-lg  p-5 text-center text-lg font-bold "> <TextField placeholder="Full Name" label="Name" variant="outlined" fullWidth /></div>
  <div class="col-span-6 rounded-lg  p-5 text-center text-lg font-bold text-green-500 "> <TextField type="email" placeholder="organize@gmail.com" label="Email" variant="outlined" fullWidth required /></div>
  <div class="col-span-6 rounded-lg  p-5 text-center text-lg font-bold text-green-500 "><TextField  placeholder="0967889990" label="Mobile Number" variant="outlined" fullWidth required /></div>

  <div class="col-span-6 rounded  p-5 text-center text-lg font-bold text-green-500 "><TextField  placeholder="BCA" label="Qualification" variant="outlined" fullWidth required /></div>
  <div class="col-span-6 rounded-lg  p-5 text-center text-lg font-bold text-green-500 "><TextField  placeholder="2" label="Years of Experience" variant="outlined" fullWidth required /></div>
  <div class="w-26 col-span-6 row-span-3 flex h-86 rounded-lg  p-5 text-center text-lg font-bold text-green-500 "><TextField label="Address" multiline rows={10} placeholder="address" variant="outlined" fullWidth required /></div>
  <div class="col-span-6 rounded-lg  p-5 text-center text-lg font-bold text-green-500 "> 
  <FormControl   fullWidth  >
        <InputLabel id="demo-multiple-checkbox-label">Skill Category</InputLabel>
        <Select
          labelId="demo-multiple-checkbox-label"
          id="demo-multiple-checkbox"
          multiple
          value={skill}
          onChange={skillhandleChange}
          input={<OutlinedInput label="Skill Category" />}
          renderValue={(selected) => selected.join(', ')}
          MenuProps={MenuProps}
         
        >
          {skills.map((name) => (
            <MenuItem key={name} value={name}>
              <Checkbox checked={skill.indexOf(name) > -1} />
              <ListItemText primary={name} />
            </MenuItem>
          ))}
        </Select>
      </FormControl>
        </div>
   <div class="col-span-6 rounded-lg  p-5 text-center text-lg font-bold text-green-500 ">
   <FormControl fullWidth>
  <InputLabel id="demo-simple-select-label">Specialization</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={Specialization}
          label="Specialization"
          onChange={specializationHandleChange}
          
        >
          <MenuItem value={10}>Front-End</MenuItem>
          <MenuItem value={20}>Back-End</MenuItem>
          <MenuItem value={30}>UI/UX</MenuItem>
        </Select>
</FormControl>
 </div>



   
   
</div>
  <div style={{display:"flex" ,justifyContent:"center",alignItems:"center" ,gap:"40px"}}>
    <Button variant="outlined" color="error">Cancel</Button>
    <Button variant ="contained" style={{background:"#908db8"}}>Register</Button>
  </div>

</form>
</CardContent>
</Card>



</div>

  )
}

export default TailwindReg