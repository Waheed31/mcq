import React, { useEffect, useState } from "react";
import {

  TextField,
  Button,
  MenuItem,
  Select,
  InputLabel,
  OutlinedInput,
  Checkbox,
  ListItemText,
} from "@mui/material";
import FormControl from "@mui/material/FormControl";
import axios from "axios";
import "./Regform.css";

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
  {
    id: 1,
    skill_category_name: "Front End",
  },
  {
    id: 2,
    skill_category_name: "BackEnd",
  },
  {
    id: 3,
    skill_category_name: "FullStack",
  },
  {
    id: 4,
    skill_category_name: "MicroSoft Office",
  },
  {
    id: 5,
    skill_category_name: "Cloud & Devops",
  },
  {
    id: 6,
    skill_category_name: "Mobile App",
  },
  {
    id: 7,
    skill_category_name: "Database",
  },
  {
    id: 8,
    skill_category_name: "Quality Analyst",
  },
  {
    id: 9,
    skill_category_name: "Business Analyst",
  },
  {
    id: 10,
    skill_category_name: "Methodology",
  },
  {
    id: 11,
    skill_category_name: "UI/UX",
  },
  {
    id: 12,
    skill_category_name: "3rd Party Tool",
  },
  {
    id: 13,
    skill_category_name: "Management",
  },
  {
    id: 14,
    skill_category_name: "Web Development",
  },
  {
    id: 15,
    skill_category_name: "Operations",
  },
];

const Regform = () => {
  const [specialization, setSpecialization] = useState([]);
  console.log(specialization);
  const [response, setResponse] = useState([]);
  const [skill, setSkill] = useState([]);
  console.log(skill);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    qualification: "",
    yearsOfExperience: "",
    address: "",
  });
  console.log(formData)
 

  useEffect(() => {
    axios
      .get(
        "http://localhost:8082/topicSubCategory/findProjects?skillCategoryId=" +
          skill.map(
            (el) => skills.find((obj) => obj.skill_category_name === el).id
          )
      )
      .then((response) => {
        console.log(response, "123456");
        setResponse(response.data);
      });
  }, [skill]);

  const specializationHandleChange = (event) => {
    const {
      target: { value },
    } = event;
    setSpecialization(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
  };

  const handleSubmit=()=>{
    let emparray = []
    emparray.push(specialization.map(name=>response.find(obj=>obj.topic_name===name).id))


const apidata = {
  name:formData.name,
  email:formData.email,
  phone:formData.phone,
  address:formData.address,
  qualification:formData.qualification,
  yearOfExperience:formData.yearsOfExperience
}




    axios.post(`http://localhost:8082/register/add?subcatagorieIds=${emparray.map(el=>el)}`,apidata)
    .then(res => console.log(res))
    .catch(err => console.log(err))
    
    ;
  }


  const formHandleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  
  const skillhandleChange = (event) => {
    const {
      target: { value },
    } = event;
    setSkill(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
  };

  // const handleSubmit=(event)=>{
  //   event.preventDefault()
  //   axios.post
  // }

  return (
    <div className="registration-form">
      <div className="Form">
        <form
          style={{
            marginTop: "80px",
            paddingLeft: "40px",
            paddingRight: "40px",
          }}
          action=""
        >
          <h3
            style={{
              textAlign: "center",
              paddingTop: "80px",
              fontSize: "20px",
            }}
          >
            Registration
          </h3>
          <div class="grid grid-cols-12 gap-5 p-4">
            <div class="col-span-6 rounded-lg  p-3 text-center text-lg font-bold ">
              
              <TextField
                placeholder="Full Name"
                label="Name"
                name="name"
                value={formData.name}
                onChange={formHandleChange}
                variant="outlined"
                fullWidth
              />
            </div>
            <div class="col-span-6 rounded-lg  p-3 text-center text-lg font-bold text-green-500 ">
              
              <TextField
                type="email"
                placeholder="organize@gmail.com"
                label="Email"
                name="email"
                onChange={formHandleChange}
                value={formData.email}
                variant="outlined"
                fullWidth
                required
              />
            </div>
            <div class="col-span-6 rounded-lg  p-3 text-center text-lg font-bold text-green-500 ">
              <TextField
                placeholder="0967889990"
                label="Mobile Number"
                name="phone"
                onChange={formHandleChange}
                value={formData.mobileNumber}
                variant="outlined"
                fullWidth
                required
                
              />
            </div>

            <div class="col-span-6 rounded  p-3 text-center text-lg font-bold text-green-500 ">
              <TextField
                placeholder="BCA"
                label="Qualification"
                onChange={formHandleChange}
                value={formData.qualification}
                name="qualification"
                variant="outlined"
                fullWidth
                required
              />
            </div>
            <div class="col-span-6 rounded-lg  p-3 text-center text-lg font-bold text-green-500 ">
              <TextField
                placeholder="2"
                label="Years of Experience"
                onChange={formHandleChange}
                value={formData.yearsOfExperience}
                name="yearsOfExperience"
                
                variant="outlined"
                fullWidth
                required
              />
            </div>
            <div class="w-26 col-span-6 row-span-3 flex h-86 rounded-lg  p-3 text-center text-lg font-bold text-green-500 ">
              <TextField
                label="Address"
                value={formData.address}
                multiline
                rows={10}
                placeholder="address"
                variant="outlined"
                onChange={formHandleChange}
                name="address"
                fullWidth
                required
              />
            </div>
            <div class="col-span-6 rounded-lg  p-3 text-center text-lg font-bold text-green-500 ">
              <FormControl fullWidth>
                <InputLabel id="demo-multiple-checkbox-label">
                  Skill Category
                </InputLabel>
                <Select
                  
                  labelId="demo-multiple-checkbox-label"
                  id="demo-multiple-checkbox"
                  multiple
                  value={skill}
                  onChange={skillhandleChange}
                  input={<OutlinedInput label="Skill Category" />}
                  renderValue={(selected) => selected.join(", ")}
                  MenuProps={MenuProps}
                >
                  {skills.map((name) => (
                    <MenuItem key={name.id} value={name.skill_category_name}>
                      <Checkbox
                        checked={skill.indexOf(name.skill_category_name) > -1}
                      />
                      <ListItemText primary={name.skill_category_name} />
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </div>
            <div class="col-span-6 rounded-lg  p-3 text-center text-lg font-bold text-green-500 ">
              <FormControl fullWidth>
                <InputLabel id="demo-multiple-checkbox-label">
                  Specialization
                </InputLabel>
                <Select
                  labelId="demo-multiple-checkbox-label"
                  id="demo-multiple-checkbox"
                  multiple
                  value={specialization}
                  onChange={specializationHandleChange}
                  input={<OutlinedInput label="Specialization" />}
                  renderValue={(selected) => selected.join(", ")}
                  MenuProps={MenuProps}
                >
                  {response.map((name) => (
                    <MenuItem key={name.topic_name} value={name.topic_name}>
                      <Checkbox
                        checked={specialization.indexOf(name.topic_name) > -1}
                      />
                      <ListItemText primary={name.topic_name} />
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </div>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: "50px",
            }}
          >
            <Button
              style={{ borderWidth: 2, color: "red", borderColor: "red" }}
              variant="outlined"
              color="error"
            >
              Cancel
            </Button>
            <Button variant="contained" style={{ background: "#908db8" }}  onClick={handleSubmit}>
              Register
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Regform;
