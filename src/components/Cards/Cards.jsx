import React, { useState } from "react";
import "./cards.css";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import FileUploadOutlinedIcon from "@mui/icons-material/FileUploadOutlined";
// Cards Components
import { cardsData } from "./cardsData";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import BorderColorOutlinedIcon from "@mui/icons-material/BorderColorOutlined";
import DeleteForeverOutlinedIcon from "@mui/icons-material/DeleteForeverOutlined";
import Pagination from "@mui/material/Pagination";
import ModalPopup from "../Modal/ModalPopup";

const Cards = () => {
  // Dropdown
  //   const [dropDown, setDropDown] = React.useState("");
  //   Card and Filters, Pagination
  const [cards, setCards] = useState(cardsData);
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [cardsPerPage] = useState(15);
  //   Card and Filters, Pagination
  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
    const filteredCards = cardsData.filter((card) =>
      card.title.toLowerCase().includes(e.target.value.toLowerCase())
    );
    setCards(filteredCards);
    setCurrentPage(1); // reset the page number to 1 when the search query changes
  };

  const handleChange = (event, value) => {
    setCurrentPage(value);
  };

  const indexOfLastCard = currentPage * cardsPerPage;
  const indexOfFirstCard = indexOfLastCard - cardsPerPage;
  const currentCards = cards.slice(indexOfFirstCard, indexOfLastCard);

  // Dropdown
  //   const handleChange = (event) => {
  //     setDropDown(event.target.value);
  //   };

  // Popup Modal
  const [showModal, setShowModal] = useState(false);

  const handleShowModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <div className="body1">
      <div class="grid grid-cols-12 gap-3 pt-12 pl-11 ms-10 ">
        <div class="col-span-12  pt-2 pl-12  text-lg font-bold">
          Test Library
        </div>
        <div class="col-span-3 p-10 ">
          <TextField
            sx={{
              "& > :not(style)": { width: "28ch" },
            }}
            id="outlined-basic"
            label="Search"
            variant="outlined"
            value={searchQuery}
            onChange={handleSearch}
          />
        </div>
        <div class="col-span-3 p-10 ">
          {/* DropdownField */}
          <Box sx={{ minWidth: 420 }}>
            <FormControl style={{ width: "270px" }}>
              <InputLabel id="demo-simple-select-label">
                Select Option
              </InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                // value={dropDown}
                label="Select Option"
                // onChange={handleChange}
              >
                <MenuItem value={10}>Technical</MenuItem>
                <MenuItem value={20}>Non-Technical</MenuItem>
              </Select>
            </FormControl>
          </Box>
        </div>
        <div class="col-span-3 col-end-13 p-10 text-center">
          <Stack direction="row" alignItems="center" spacing={2}>
            <Button
              variant="contained"
              component="label"
              startIcon={<FileUploadOutlinedIcon />}
            >
              Questions
              <input hidden accept="image/*" multiple type="file" />
            </Button>
          </Stack>
        </div>
      </div>
      <div class="grid grid-cols-5 gap-5  px-20 ms-10  ">
        {currentCards.map((card, i) => (
          <div class="col-span-1 rounded-xl p-3 shadow-lg bg-[#ffffff] border-black border-solid box-border h-102 w-62 border-1">
            <div
              key={i}
              className="justify-start tx-[#212121] font-bold text-base"
            >
              <div>
                <h3 className="pb-5 text-sm m-0">{card.title}</h3>
              </div>
              <div>
                <p className="tx-[#4b4b4b] opacity-75 font-normal text-xs  pb-5">
                  {card.describtion}
                </p>
              </div>
              <div className="flex justify-end ">
                <ul>
                  {" "}
                  {showModal && (
                    <div className="modal">
                      <div className="modal-content">
                        <span className="close" onClick={handleCloseModal}>
                          &times;
                        </span>
                        <div className="grid grid-cols-12 gap-3 p-2">
                          <div className="col-span-12 font-bold">
                            <h6 className="text-xl">Html</h6>
                          </div>
                          <div className="col-span-12 md:col-span-8 row-span-2 pt-6">
                            <p className="text-sm font-bold">Description</p>
                            <p className="font-extralight pt-3.5 text-sm	">
                              Lorem ipsum dolor sit amet consectetur adipisicing
                              elit. Asperiores excepturi alias perspiciatis
                              consequatur deserunt neque! Enim dolorem eum,
                              dicta quae nesciunt rerum commodi est corrupti
                              tempora, et sint soluta! Iure.
                            </p>
                          </div>
                          <div className="col-span-12 md:col-span-4 rounded-lg pt-6 pl-14 text-left ">
                            <h6 className="text-sm font-bold">
                              Test Creator Name
                            </h6>
                            <p className="font-extralight pt-3.5 text-base ">
                              Sarath Kumar
                            </p>
                          </div>
                          <div className="col-span-12 md:col-span-4 rounded-lg  pt-2 pl-14 text-left ">
                            <h6 className="text-sm font-bold">
                              Test Creation Date
                            </h6>
                            <p className="font-extralight pt-3.5 text-base ">
                              22/08/2022
                            </p>
                          </div>
                          <div className="col-span-12 md:col-span-4 md:col-start-9  pt-2 pl-14 text-left ">
                            <h6 className="text-sm font-bold">
                              Last Modification Date
                            </h6>
                            <p className="font-extralight pt-3.5 text-base ">
                              22/08/2022
                            </p>
                          </div>

                          <div className="col-span-12 font-bold ">
                            Technical & MCQ
                          </div>
                          <div className="col-span-12 md:col-span-8 p-2">
                            <p>Table</p>
                            <button>Test Preview</button>
                          </div>
                          <div className="col-span-12 md:col-span-4 text-center pt-2 font-bold">
                            <h6>Categorized As</h6>
                            <p>Front-End</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                  <button onClick={handleShowModal}>
                    {" "}
                    <VisibilityOutlinedIcon className="text-[#908db8] m-2 p-0.5 cursor-pointer" />
                  </button>
                  <BorderColorOutlinedIcon className="text-[#46a997] m-2 p-0.5 cursor-pointer" />
                  <DeleteForeverOutlinedIcon className="text-[#ff4a4a] m-2 p-0.5 cursor-pointer" />
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="p-8 pl-96 grid justify-items-end">
        <Pagination
          count={Math.ceil(cards.length / cardsPerPage)}
          page={currentPage}
          onChange={handleChange}
          shape="rounded"
        />
      </div>
      <ModalPopup />
    </div>
  );
};

export default Cards;
