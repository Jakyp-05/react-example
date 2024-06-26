import * as React from "react";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";

import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Checkbox from "@mui/material/Checkbox";

import "./index.css";

export default function NestedList() {
  const [open, setOpen] = React.useState(true);
  const [periodOptions, setPeriodOptions] = React.useState([]);
  const [statusOptions, setStatusOptions] = React.useState([]);
  const [categoryOptions, setCategoryOptions] = React.useState([]);
  const [locationOptions, setLocationOptions] = React.useState([]);
  const [submissionOptions, setSubmissionOptions] = React.useState([]);

  const handlePeriodChange = (value) => {
    setPeriodOptions(value);
  };

  const handleStatusChange = (value) => {
    setStatusOptions(value);
  };

  const handleCategoryChange = (value) => {
    setCategoryOptions(value);
  };

  const handleLocationChange = (value) => {
    setLocationOptions(value);
  };

  const handleSubmissionChange = (value) => {
    setSubmissionOptions(value);
  };

  return (
    <List
      sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
      component="nav"
      aria-labelledby="nested-list-subheader"
    >
      <ListItemButton
        sx={{
          background: "red",
          color: "white",
          ":hover": "red",
          "&:hover": {
            bgcolor: "red",
          },
          borderRadius: '3px'
        }}
        onClick={() => setOpen(!open)}
      >
        <ListItemText primary="Показать фильтры" />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <div className="collapse-date" style={{ maxWidth: "300px" }}>
            <p>Период</p>
            <DatePicker
              className="collapse-input"
              maxWidth="300px"
              value={periodOptions}
              onChange={handlePeriodChange}
            />
          </div>
        </LocalizationProvider>
        <div className="collapse">
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <div>
              <p>Статусы:</p>
              <FormControl sx={{ minWidth: 420 }}>
                <Select
                  multiple
                  value={statusOptions}
                  onChange={(e) => handleStatusChange(e.target.value)}
                  displayEmpty
                  renderValue={(selected) =>
                    selected.length === 0 ? <em>Все</em> : selected.join(", ")
                  }
                  inputProps={{ "aria-label": "Without label" }}
                  MenuProps={{
                    PaperProps: {
                      style: {
                        maxHeight: 200,
                      },
                    },
                  }}
                >
                  <MenuItem value={1}>
                    <Checkbox checked={statusOptions.includes(1)} />
                    <ListItemText primary="Приём заявок" />
                  </MenuItem>
                  <MenuItem value={2}>
                    <Checkbox checked={statusOptions.includes(2)} />
                    <ListItemText primary="Оценка" />
                  </MenuItem>
                  <MenuItem value={3}>
                    <Checkbox checked={statusOptions.includes(3)} />
                    <ListItemText primary="Закрыто" />
                  </MenuItem>
                  <MenuItem value={4}>
                    <Checkbox checked={statusOptions.includes(4)} />
                    <ListItemText primary="Отменено" />
                  </MenuItem>
                </Select>
              </FormControl>
            </div>
          </LocalizationProvider>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <div>
              <p>Категории:</p>
              <FormControl sx={{ minWidth: 420 }}>
                <Select
                  multiple
                  value={categoryOptions}
                  onChange={(e) => handleCategoryChange(e.target.value)}
                  displayEmpty
                  renderValue={(selected) =>
                    selected.length === 0 ? <em>Все</em> : selected.join(", ")
                  }
                  inputProps={{ "aria-label": "Without label" }}
                  MenuProps={{
                    PaperProps: {
                      style: {
                        maxHeight: 200,
                      },
                    },
                  }}
                >
                  <MenuItem value={1}>
                    <Checkbox checked={categoryOptions.includes(1)} />
                    <ListItemText primary="IT-услуги" />
                  </MenuItem>
                  <MenuItem value={2}>
                    <Checkbox checked={categoryOptions.includes(2)} />
                    <ListItemText primary="Автомобили, Авиа-ЖД-Строй спецтехника" />
                  </MenuItem>
                  <MenuItem value={3}>
                    <Checkbox checked={categoryOptions.includes(3)} />
                    <ListItemText primary="Бизнес, финансы, юридические услуги" />
                  </MenuItem>
                  <MenuItem value={4}>
                    <Checkbox checked={categoryOptions.includes(4)} />
                    <ListItemText primary="Вакансия" />
                  </MenuItem>
                </Select>
              </FormControl>
            </div>
          </LocalizationProvider>
        </div>
        <div className="collapse">
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <div>
              <p>Локация:</p>
              <FormControl sx={{ minWidth: 420 }}>
                <Select
                  multiple
                  value={locationOptions}
                  onChange={(e) => handleLocationChange(e.target.value)}
                  displayEmpty
                  renderValue={(selected) =>
                    selected.length === 0 ? <em>Все</em> : selected.join(", ")
                  }
                  inputProps={{ "aria-label": "Without label" }}
                  MenuProps={{
                    PaperProps: {
                      style: {
                        maxHeight: 200,
                      },
                    },
                  }}
                >
                  <MenuItem value={1}>
                    <Checkbox checked={locationOptions.includes(1)} />
                    <ListItemText primary="Бишкек" />
                  </MenuItem>
                  <MenuItem value={2}>
                    <Checkbox checked={locationOptions.includes(2)} />
                    <ListItemText primary="Ош" />
                  </MenuItem>
                  <MenuItem value={3}>
                    <Checkbox checked={locationOptions.includes(3)} />
                    <ListItemText primary="Чуйская область" />
                  </MenuItem>
                  <MenuItem value={4}>
                    <Checkbox checked={locationOptions.includes(4)} />
                    <ListItemText primary="Ошская область" />
                  </MenuItem>
                </Select>
              </FormControl>
            </div>
          </LocalizationProvider>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <div>
              <p>Способ подачи заявок:</p>
              <FormControl sx={{ minWidth: 420 }}>
                <Select
                  multiple
                  value={submissionOptions}
                  onChange={(e) => handleSubmissionChange(e.target.value)}
                  displayEmpty
                  renderValue={(selected) =>
                    selected.length === 0 ? <em>Все</em> : selected.join(", ")
                  }
                  inputProps={{ "aria-label": "Without label" }}
                  MenuProps={{
                    PaperProps: {
                      style: {
                        maxHeight: 200,
                      },
                    },
                  }}
                >
                  <MenuItem value={1}>
                    <Checkbox checked={submissionOptions.includes(1)} />
                    <ListItemText primary="через Tenders.Kg" />
                  </MenuItem>
                  <MenuItem value={2}>
                    <Checkbox checked={submissionOptions.includes(2)} />
                    <ListItemText primary="на фактический адрес" />
                  </MenuItem>
                  <MenuItem value={3}>
                    <Checkbox checked={submissionOptions.includes(3)} />
                    <ListItemText primary="на Email" />
                  </MenuItem>
                </Select>
              </FormControl>
            </div>
          </LocalizationProvider>
        </div>
      </Collapse>
    </List>
  );
}
