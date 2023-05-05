import React, { useEffect, useState } from "react";
import "./Tablee.css";
import { Avatar, Button, Menu, MenuItem } from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import VisibilityIcon from "@mui/icons-material/Visibility";
import ReplayIcon from "@mui/icons-material/Replay";
import StopCircleIcon from "@mui/icons-material/StopCircle";

import TablePagination from "@mui/material/TablePagination";

const tableData = [
  {
    name: "salman ",
    empId: "1234",
    date: "12/3/2023",
    testName: "UI/UX",
    testLevel: "easy",
    progress: "79%",
    status: "issue",
    score: 47,
  },
  {
    name: "sarukh",
    empId: "1234",
    date: "12/3/2023",
    testName: "FrontEnd",
    testLevel: "easy",
    progress: "60%",
    status: "completed",
    score: 47,
  },
  {
    name: "amir",
    empId: "1234",
    date: "12/3/2023",
    testName: "BackEnd",
    testLevel: "medium",
    progress: "50%",
    status: "In progress",
    score: 47,
  },
  {
    name: "vijay",
    empId: "1234",
    date: "12/3/2023",
    testName: "Testing",
    testLevel: "Hard",
    progress: "40%",
    status: "Incomplete",
    score: 47,
  },
  {
    name: "ajith",
    empId: "1234",
    date: "12/3/2023",
    testName: "Testing",
    testLevel: "easy",
    progress: "20%",
    status: "Invited",
    score: 47,
  },
  {
    name: "john",
    empId: "1234",
    date: "12/3/2023",
    testName: "Testing",
    testLevel: "easy",
    progress: "60%",
    status: "In progress",
    score: 47,
  },
  {
    name: "honeyasif",
    empId: "1234",
    date: "12/3/2023",
    testName: "Testing",
    testLevel: "easy",
    progress: "44%",
    status: "Invited",
    score: 47,
  },
  {
    name: "rila",
    empId: "1234",
    date: "12/3/2023",
    testName: "Testing",
    testLevel: "easy",
    progress: "17%",
    status: "Invited",
    score: 47,
  },
  {
    name: "parvez",
    empId: "1234",
    date: "12/3/2023",
    testName: "Testing",
    testLevel: "easy",
    progress: "79%",
    status: "Invited",
    score: 47,
  },
  {
    name: "faizal",
    empId: "1234",
    date: "12/3/2023",
    testName: "Testing",
    testLevel: "easy",
    progress: "79%",
    status: "Invited",
    score: 47,
  },
  {
    name: "wasim",
    empId: "1234",
    date: "12/3/2023",
    testName: "Testing",
    testLevel: "easy",
    progress: "79%",
    status: "Invited",
    score: 47,
  },
  {
    name: "tammana",
    empId: "1234",
    date: "12/3/2023",
    testName: "Testing",
    testLevel: "easy",
    progress: "79%",
    status: "Invited",
    score: 47,
  },
  {
    name: "samantha",
    empId: "1234",
    date: "12/3/2023",
    testName: "Testing",
    testLevel: "easy",
    progress: "79%",
    status: "Invited",
    score: 47,
  },
  {
    name: "kira",
    empId: "1234",
    date: "12/3/2023",
    testName: "Testing",
    testLevel: "easy",
    progress: "79%",
    status: "Invited",
    score: 47,
  },
  {
    name: "jhanvi",
    empId: "1234",
    date: "12/3/2023",
    testName: "Testing",
    testLevel: "easy",
    progress: "79%",
    status: "Invited",
    score: 47,
  },
  {
    name: "kajal",
    empId: "1234",
    date: "12/3/2023",
    testName: "Testing",
    testLevel: "easy",
    progress: "79%",
    status: "Invited",
    score: 47,
  },
  {
    name: "Asin",
    empId: "1234",
    date: "12/3/2023",
    testName: "Testing",
    testLevel: "easy",
    progress: "79%",
    status: "Invited",
    score: 47,
  },
  {
    name: "Trisha",
    empId: "1234",
    date: "12/3/2023",
    testName: "Testing",
    testLevel: "easy",
    progress: "79%",
    status: "Invited",
    score: 47,
  },
  {
    name: "Rashmi",
    empId: "1234",
    date: "12/3/2023",
    testName: "Testing",
    testLevel: "easy",
    progress: "79%",
    status: "Invited",
    score: 47,
  },
];

const Tablee = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(9);
  const [tabsearch, setTabSearch] = useState("");
  const [tnsearch, setTnsearch] = useState("");
  const [newtableData, setnewtableData] = useState([]);
  console.log(tnsearch, "tabsearch");

  // console.log(tabsearch, "tabsearch");

  useEffect(() => {
    // setnewtableData(tableData)
    setnewtableData(
      tableData.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
    );
  }, [page, rowsPerPage]);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
    // changePageData()
  };

  // const changePageData = () => {
  //  setnewtableData(tableData.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage))
  // }

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value));
    setPage(0);
  };

  const newSearch = (e) => {
    let searchvalue = e.target.value;
    if (e.target.value === "") {
      setnewtableData(
        tableData.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
      );
    } else {
      setnewtableData(
        tableData.filter((el) => {
          return searchvalue.toLowerCase() === ""
            ? el
            : el.name.toLowerCase().includes(searchvalue);
        })
      );
    }

    // handleSearchFilter()
  };

  // const handleSearchFilter = () => {

  // }

  const emptyRows =
    rowsPerPage - Math.min(rowsPerPage, tableData.length - page * rowsPerPage);

  return (
    <div className="table">
      <div>Table header options</div>
      <div>
        <input onChange={newSearch} placeholder="Search by Name" />
      </div>

      <div className="tableclass">
        <table>
          <thead>
            <tr>
              <th>NAMES</th>
              <th>DATES</th>
              <th>TEST NAME</th>
              <th>PROGRESS</th>
              <th>STATUS</th>
              <th>SCORE</th>
              <th>ACTIONS</th>
            </tr>
          </thead>

          <tbody>
            {(rowsPerPage > 0 && newtableData)?.map((el, index) => {
              let statusChipbg =
                el.status === "issue"
                  ? "rgb(203, 240, 238)"
                  : el.status === "completed"
                  ? "rgb(222, 253, 214)"
                  : el.status === "In progress"
                  ? "rgb(253,242,214)"
                  : el.status === "Incomplete"
                  ? "rgb(255,242,241)"
                  : el.status === "Invited"
                  ? "rgb(218,211,255)"
                  : null;

              let statusTextColor =
                el.status === "issue"
                  ? "rgb(74, 130, 130)"
                  : el.status === "completed"
                  ? "rgb(133, 186, 119)"
                  : el.status === "In progress"
                  ? "rgb(186,168,121)"
                  : el.status === "Incomplete"
                  ? "rgb(190,140,136)"
                  : el.status === "Invited"
                  ? "rgb(170,170,255)"
                  : null;

              let progressColor =
                el.progress < "30%"
                  ? "red"
                  : el.progress > "50%"
                  ? "green"
                  : el.progress > "30%"
                  ? "rgb(26, 163, 185)"
                  : null;
              return (
                <tr key={index}>
                  <td style={{ display: "flex", gap: "10px" }}>
                    <div>
                      <Avatar style={{ borderRadius: "8px" }} />
                    </div>
                    <div>
                      <div style={{ fontWeight: "bold" }}>{el.name}</div>
                      <div style={{ color: "gray" }}>#{el.empId}</div>
                    </div>
                  </td>
                  <td>{el.date}</td>
                  <td>
                    <div>
                      <div style={{ fontWeight: "bold" }}>{el.testName}</div>
                      <div style={{ color: "gray" }}>{el.testLevel}</div>
                    </div>
                  </td>

                  {/* to be modifiedl */}
                  <td>
                    {" "}
                    <div>
                      {" "}
                      <div
                        style={{
                          display: "flex",
                          color: progressColor,
                          gap: "25%",
                        }}
                      >
                        <p>{el.progress}</p>
                        <p>4/5</p>
                      </div>
                      <div class="h-1 w-1/2 rounded-full bg-gray-200 dark:bg-gray-700">
                        <div
                          class="h-1  w-1/2 rounded-full "
                          style={{
                            width: el.progress,
                            backgroundColor: progressColor,
                          }}
                        ></div>
                      </div>
                    </div>
                  </td>

                  <td>
                    <div
                      style={{
                        marginTop: "1rem",
                        padding: "4px",
                        width: "60px",
                        fontSize: "smaller",
                        color: statusTextColor,
                        background: statusChipbg,
                        borderRadius: "4px",
                        border: "none",
                        textAlign: "center",
                      }}
                    >
                      {el.status}
                    </div>
                  </td>
                  <td style={{ fontSize: "12px" }}> {el.score}</td>
                  <td>
                    <div>
                      <Button
                        style={{ color: "grey" }}
                        id="demo-positioned-button"
                        aria-controls={
                          open ? "demo-positioned-menu" : undefined
                        }
                        aria-haspopup="true"
                        aria-expanded={open ? "true" : undefined}
                        onClick={handleClick}
                      >
                        <MoreVertIcon />
                      </Button>
                      <Menu
                        style={{ marginRight: "30px" }}
                        id="demo-positioned-menu"
                        aria-labelledby="demo-positioned-button"
                        anchorEl={anchorEl}
                        open={open}
                        onClose={handleClose}
                        anchorOrigin={{
                          horizontal: "right",
                          vertical: "top",
                        }}
                        transformOrigin={{
                          horizontal: "right",
                          vertical: "top",
                        }}
                      >
                        <MenuItem onClick={handleClose}>
                          <VisibilityIcon
                            style={{ color: "rgb(118,212,248)" }}
                          />
                          View
                        </MenuItem>
                        <MenuItem onClick={handleClose}>
                          <ReplayIcon style={{ color: "rgb(131,180,147)" }} />
                          Reset Test
                        </MenuItem>
                        <MenuItem onClick={handleClose}>
                          <StopCircleIcon style={{ color: "rgb(255,25,25)" }} />
                          Stop Test
                        </MenuItem>
                      </Menu>
                    </div>
                  </td>
                </tr>
              );
            })}
            {emptyRows > 0 && (
              <tr style={{ height: 53 * emptyRows }}>
                <td colSpan={8} />
              </tr>
            )}
            <tr></tr>
          </tbody>
        </table>
        <TablePagination
          rowsPerPageOptions={[9]}
          component="div"
          count={tableData.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </div>
    </div>
  );
};

export default Tablee;
