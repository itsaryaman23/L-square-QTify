import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import {theme} from '../Theme/theme';
import { Style } from '@mui/icons-material';
import style from './Songs.module.css';



function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs(props) {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleClick=(e)=>{
    props.setGen(e.target.innerText);
  }

  return (
      <Box sx={{ borderBottom: 1, borderColor: 'divider' , margin: "0.5rem 1.5rem"}}>
        <Tabs  value={value} onChange={handleChange} aria-label="basic tabs example" className={style.tab} >
          <Tab  label="All" {...a11yProps(0)} onClick={handleClick}/>
          <Tab  label="Rock" {...a11yProps(1)} onClick={handleClick}/>
          <Tab  label="Pop" {...a11yProps(3)} onClick={handleClick}/>
          <Tab  label="Jazz" {...a11yProps(4)} onClick={handleClick}/>
          <Tab  label="Blues" {...a11yProps(5)} onClick={handleClick}/>
        </Tabs>
      </Box>
  );
}