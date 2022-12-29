import * as React from "react";
import axios from "axios";
import { Box, FormGroup, FormControlLabel, Checkbox, Typography, Divider } from "@mui/material";
import List from "@mui/material/List";

import serverURI from "../../Constants/connection";

const priceRanges = ["0 - 200 $", "200 - 400 $", "400 - 1000 $ ", "1000 - 2000 $", "+ 2000 $"];
const urlPriceRanges = ["0-200", "200-400", "400-1000", "1000-2000", "2000-+"];

const styles = {
  headerFontSize: "14px",
  fontSize: "12px",
};

export default function FilterCard(props) {
  const email = props.email;
  const [filterOps, setFilterOps] = React.useState([{ teams: [], types: [] }]);
  const [status, setStatus] = React.useState([false, false]);

  const [priceRange, setPriceRange] = React.useState([false, false, false, false, false]);

  const [filterStatus, setFilterStatus] = React.useState({ status: [], teams: [], priceRange: "", productType: [] });

  let uri = serverURI + "/products/filter/ops";

  const getOptions = (status) => {
    props.getFilterOptions(status);
  };

  const handleChange = (idx, menu, rangeIdx = 0) => {
    if (menu === "status") {
      if (idx === 0) {
        if (!filterStatus.status.includes("open")) {
          setFilterStatus((old) => {
            old.status.push("open");
            return old;
          });
        } else {
          setFilterStatus((old) => {
            const index = old.status.indexOf("open");
            if (index > -1) {
              old.status.splice(index, 1);
            }
            return old;
          });
        }
      } else {
        if (!filterStatus.status.includes("closed")) {
          setFilterStatus((old) => {
            old.status.push("closed");
            return old;
          });
        } else {
          setFilterStatus((old) => {
            const index = old.status.indexOf("closed");
            if (index > -1) {
              old.status.splice(index, 1);
            }
            return old;
          });
        }
      }
    } else if (menu === "team") {
      if (!filterStatus.teams.includes(idx)) {
        setFilterStatus((old) => {
          old.teams.push(idx);
          return old;
        });
      } else {
        setFilterStatus((old) => {
          const index = old.teams.indexOf(idx);
          if (index > -1) {
            old.teams.splice(index, 1);
          }
          return old;
        });
      }
    } else if (menu === "range") {
      if (priceRange[rangeIdx] === true) {
        setFilterStatus((old) => {
          old.priceRange = "";
          return old;
        });
        setPriceRange([false, false, false, false, false]);
      } else {
        setFilterStatus((old) => {
          old.priceRange = urlPriceRanges[rangeIdx];
          return old;
        });
        let oldRange = [false, false, false, false, false];
        oldRange[rangeIdx] = true;
        setPriceRange(oldRange);
      }
    } else if (menu === "type") {
      if (!filterStatus.productType.includes(idx)) {
        setFilterStatus((old) => {
          old.productType.push(idx);
          return old;
        });
      } else {
        setFilterStatus((old) => {
          const index = old.productType.indexOf(idx);
          if (index > -1) {
            old.productType.splice(index, 1);
          }
          return old;
        });
      }
    }
    console.log(filterStatus);
    // getOptions(filterStatus);
    props.getFilterOptions(filterStatus);
  };

  React.useEffect(() => {
    console.log(uri);
    var config = {
      method: "get",
      url: uri,
      headers: {
        "Content-Type": "application/json",
      },
    };

    axios(config)
      .then((response) => {
        setFilterOps(response.data.message);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [uri]);

  return (
    <Box>
      {/* Filter Open Closed Auction */}
      <FormGroup>
        <Typography sx={{ fontWeight: 700, mb: 2, fontSize: styles.headerFontSize }}>Auction Type</Typography>
        <FormControlLabel
          control={<Checkbox onChange={(e) => handleChange(0, "status")} />}
          label={
            <Typography sx={{ color: "#000000", fontWeight: 500, fontSize: styles.fontSize }}>Open Auctions</Typography>
          }
        />
        <FormControlLabel
          control={<Checkbox onChange={(e) => handleChange(1, "status")} />}
          label={
            <Typography sx={{ color: "#000000", fontWeight: 500, fontSize: styles.fontSize }}>
              Closed Auctions
            </Typography>
          }
        />
      </FormGroup>
      <Divider sx={{ maxWidth: "90%", mt: 1 }}></Divider>

      {/* Filter Team */}
      {email ? (
        ""
      ) : (
        <FormGroup>
          <Typography sx={{ fontWeight: 500, mb: 2, mt: 2, fontSize: styles.headerFontSize }}>Teams</Typography>
          <List
            sx={{
              width: "100%",
              maxWidth: 360,
              bgcolor: "background.paper",
              position: "relative",
              overflow: "auto",
              maxHeight: 200,
              "& ul": { padding: 0 },
            }}
            subheader={<li />}
          >
            {filterOps[0].teams.map((teamName) => (
              <li key={`section-${teamName}`}>
                <ul>
                  <FormGroup>
                    <FormControlLabel
                      control={<Checkbox onChange={(e) => handleChange(teamName, "team")} />}
                      label={
                        <Typography sx={{ color: "#000000", fontWeight: 500, fontSize: styles.fontSize }}>
                          {teamName}
                        </Typography>
                      }
                    />
                  </FormGroup>
                </ul>
              </li>
            ))}
          </List>
          <Divider sx={{ maxWidth: "90%", mt: 1 }}></Divider>
        </FormGroup>
      )}

      {/* Filter Price Range */}
      <FormGroup>
        <Typography sx={{ fontWeight: 700, mb: 2, mt: 2, fontSize: styles.headerFontSize }}>Price Range</Typography>
        {/* <Box sx={{ display: "flex" }}>
          <TextField sx={{ m: 1, width: "8ch" }} size="small" id="outlined-basic" label="Min" variant="outlined" />
          <TextField sx={{ m: 1, width: "8ch" }} size="small" id="outlined-basic" label="Max" variant="outlined" />
          <IconButton sx={{ mr: 0.5 }} aria-label="delete" size="small">
            <SearchIcon fontSize="small" />
          </IconButton>
        </Box> */}
        <List
          sx={{
            width: "100%",
            maxWidth: 360,
            bgcolor: "background.paper",
            position: "relative",
            overflow: "auto",
            maxHeight: 200,
            "& ul": { padding: 0 },
          }}
          subheader={<li />}
        >
          {priceRanges.map((range, idx) => (
            <li key={`section-${idx}`}>
              <ul>
                <FormGroup>
                  <FormControlLabel
                    control={<Checkbox checked={priceRange[idx]} onChange={(e) => handleChange(range, "range", idx)} />}
                    label={
                      <Typography sx={{ color: "#000000", fontWeight: 500, fontSize: styles.fontSize }}>
                        {range}
                      </Typography>
                    }
                  />
                </FormGroup>
              </ul>
            </li>
          ))}
        </List>
      </FormGroup>
      <Divider sx={{ maxWidth: "90%", mt: 1 }}></Divider>

      {/* Filter Product Type */}
      <FormGroup>
        <Typography sx={{ fontWeight: 700, mb: 2, mt: 2, fontSize: styles.headerFontSize }}>Product Type</Typography>
        <List
          sx={{
            width: "100%",
            maxWidth: 360,
            bgcolor: "background.paper",
            position: "relative",
            overflow: "auto",
            maxHeight: 200,
            "& ul": { padding: 0 },
          }}
          subheader={<li />}
        >
          {filterOps[0].types.map((type) => (
            <li key={`section-${type}`}>
              <ul>
                <FormGroup>
                  <FormControlLabel
                    control={<Checkbox onChange={(e) => handleChange(type, "type")} />}
                    label={
                      <Typography sx={{ color: "#000000", fontWeight: 500, fontSize: styles.fontSize }}>
                        {type}
                      </Typography>
                    }
                  />
                </FormGroup>
              </ul>
            </li>
          ))}
        </List>
      </FormGroup>
    </Box>
  );
}
