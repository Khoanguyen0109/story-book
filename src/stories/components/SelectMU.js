import React, { useState } from "react";
import {
  Box,
  FormControl,
  IconButton,
  InputLabel,
  makeStyles,
  MenuItem,
  Select,
  useTheme,
} from "@material-ui/core";
import KeyboardArrowDown from "@material-ui/icons/KeyboardArrowDown";
import CheckIcon from "@material-ui/icons/Check";
import CloseIcon from "@material-ui/icons/Close";
import clsx from "clsx";
import PropTypes from "prop-types";

// const iconBtn = {
//   width: "24px",
//   height: "24px",
// };

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  label: {
    width: "73px",
    height: "20px",
    margin: "0 287px 4px 8px",
    fontFamily: "SourceSansPro",
    fontSize: "14px",
    fontWeight: "600",
    fontStretch: "normal",
    fontStyle: "normal",
    lineHeight: "1.43",
    letterSpacing: "normal",
    textAlign: "justify",
    color: " #212529",
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },

  select: {
    width: "368px",
    height: "44px",
    flexGrow: "0",
    margin: "4px 0 0",
    borderRadius: "8px",
    padding: "10px 16px 10px 8px",
    border: "solid 1px #e9ecef",

    "& .MuiSelect-select.MuiSelect-select": {
      paddingRight: "10px",

      "&:focus": {
        backgroundColor: "transparent",
      },
    },

    "& .MuiSvgIcon-root": {
      color: "#212529",
    },

    "&::after": {
      borderStyle: "none",
    },

    [theme.breakpoints.down("sm")]: {
      width: "111px",
      backgroundColor: "#1a7ae5",
      color: "white",
      padding: "10px 8px 10px 16px",

      "& .MuiSvgIcon-root": {
        color: "white",
      },
    },
  },

  icon: {
    marginRight: "16px",
    fontSize: "1.2em",
  },

  box: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginRight: "16px",
  },
  removeBtb: {
    width: "24px",
    height: "24px",
    fontsize: "1.3em",
    zIndex: "99",
    color: "#212529",
    "&:hover": {
      backgroundColor: "transparent",
    },
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  paper: {
    minWidth: "368px !important",
    mawWidth: "506px !important",
    left: "25px !important",
    top: "90px !important",
    padding: "8px 0",
    boxShadow: "0 8px 32px 0 rgba(33, 37, 41, 0.16)",
    backgroundColor: "#ffffff",
    maxHeight: "192px",
    "&::-webkit-scrollbar": {
      width: "6px",
    },
    "&::-webkit-scrollbar-track": {
      boxShadow: "inset 0 0 6px rgba(0,0,0,0.00)",
      webkitBoxShadow: "inset 0 0 6px rgba(0,0,0,0.00)",
    },
    "&::-webkit-scrollbar-thumb": {
      backgroundColor: "#ced4da",
      borderRadius: "8px",
    },

    [theme.breakpoints.down("sm")]: {
      width: "160px",
      minWidth: "160px !important",
    },
  },
  list: {
    width: "100% !important",
    padding: "0 !important",
  },

  item: {
    width: "100%",
    minHeight: "44px",
    fontSize: "16px",
    color: "#212529",
    padding: "10px 16px 10px 8px",
    fontFamily: "SourceSansPro",
    fontWeight: "normal",
    fontStretch: "normal",
    fontStyle: "normal",
    lineHeight: "1.5",
    letterSpacing: "normal",
    "&:hover": {
      backgroundColor: "#f1f3f5",
    },

    "& .MuiSvgIcon-root": {
      fontSize: "1.2em",
      [theme.breakpoints.down("sm")]: {
        display: "none",
      },
    },
  },
  shortText: {
    height: "44px",
  },
  value: {
    width: "80%",
    maxWidth: "442px",
    wordWrap: "break-word",
    whiteSpace: "normal",
    [theme.breakpoints.down("sm")]: {
      width: "100%",
    },
  },
  valueSelected: {
    width: "90%",
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis",
  },

  selected: {
    display: "flex",
    justifyContent: "space-between",
    color: "#1a7ae5",
    backgroundColor: "#ebf1f9",
  },
}));

function SelectMU({ size, withLongText }) {
  const theme = useTheme();
  console.log("theme", theme);

  const classes = useStyles(theme);
  const [selected, setSelected] = useState("");
  const data = [
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras eget posuere sem. Quisque viverra arcu fringilla ornare interdum. Vivamus porttitor eros ac arcu malesuada volutpat. Curabitur id quam velit. Quisque eget odio neque. Sed ex dolor, sodales sit amet velit ac, lacinia lacinia lorem. Fusce pellentesque, lacus at semper egestas, libero lacus luctus urna, vitae scelerisque nisl diam quis risus. Phasellus dignissim blandit elit, nec eleifend ipsum tincidunt et. Mauris id elit in eros cursus hendrerit. Nunc non egestas tortor. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. In varius, sem in scelerisque cursus, nisl justo consequat augue, in elementum tortor nisi feugiat libero. Vestibulum iaculis, ante at consequat porta, magna nulla vestibulum sem, vitae sollicitudin justo enim id diam. Donec sed nulla sit amet lacus rhoncus tristique. Interdum et malesuada fames ac ante ipsum primis in faucibus. Integer at ligula volutpat, convallis diam nec, gravida neque.",
    20,
    30,
    40,
    50,
  ];

  console.log("withLongText :>> ", withLongText);
  console.log("size :>> ", size);
  function onSelect(e) {
    setSelected(e.target.value);
  }

  function isSelected(value) {
    return value === selected;
  }
  return (
    <FormControl className={classes.formControl}>
      <InputLabel className={classes.label} shrink id="demo">
        Label
      </InputLabel>
      <Select
        labelId="demo"
        value={selected}
        disableUnderline={true}
        IconComponent={KeyboardArrowDown}
        className={classes.select}
        onChange={onSelect}
        inputProps={{
          classes: {
            icon: classes.icon,
          },
        }}
        MenuProps={{
          getContentAnchorEl: null,
          anchorOrigin: {
            vertical: "bottom",
            horizontal: "left",
          },
          classes: {
            list: classes.list,
          },
          PopoverClasses: {
            paper: classes.paper,
          },
        }}
        renderValue={(value) => (
          <Box className={classes.box}>
            <div className={classes.valueSelected}>{value}</div>
            <IconButton
              className={classes.removeBtb}
              onClick={(e) => {
                e.stopPropagation();
                console.log("Delete");
              }}
            >
              <CloseIcon />
            </IconButton>
          </Box>
        )}
        placeholder="Please Select..."
      >
        {data.map((item, index) => (
          <MenuItem
            value={item}
            key={index}
            selected={selected === 10}
            classes={{
              root: clsx(
                classes.item,
                item.toString().length < 30 ? classes.shortText : null
              ),
              selected: classes.selected,
            }}
          >
            {" "}
            <p className={classes.value}> {item} </p>
            {isSelected(item) && open ? <CheckIcon /> : null}
          </MenuItem>
        ))}

        {/* </Menu> */}
      </Select>
    </FormControl>
  );
}

export default SelectMU;
SelectMU.propTypes = {
  /**
   * Is this the principal call to action on the page?
   */
  withLongText: PropTypes.bool,
  /**
   * What background color to use
   */
  size: PropTypes.string,
};

SelectMU.defaultProps = {
  size: "default",
  withLongText: false,
};
