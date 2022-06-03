import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DesktopDatePicker from '@mui/lab/DesktopDatePicker';
import '../css/Addform.css';

import { useTheme } from '@mui/material/styles';
import Box from "@mui/material/Box";
import useMediaQuery from '@mui/material/useMediaQuery';
import Grid from "@mui/material/Grid";
import * as React from "react";


export default function AnalyticsView() {
  const [open, setOpen] = React.useState(false);
  const [clear_date, setClear_date] = React.useState(new Date());
  const [due_in_date, setDue_in_date] = React.useState(new Date());
  const [baseline_create_date, setBaseline_create_date] = React.useState(new Date());
  const [invoice_currency, setInvoice_currency] = React.useState('');
 
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  function convertDate(date) {
    var newDate = new Date(date);
    var dd = String(newDate.getDate()).padStart(2, '0');
    var mm = String(newDate.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = newDate.getFullYear();

    newDate = yyyy + '-' + mm + '-' + dd;

    return newDate;
  }


  const handleOpen = () => {
    let headersList = {

    }
    var clear_dt = convertDate(clear_date);
    var due_dt = convertDate(due_in_date);
    var baseline_dt = convertDate(baseline_create_date);

    fetch(``, {
      method: "POST",
      headers: headersList
    }).then(function (response) {
      return response.text();
    }).then(function (data) {
      console.log(data);
    })
    setOpen(false);
  };

  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('md'));
  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen} style={{marginRight:-8,color:'white',width:170 }}>
        ANALYTICS VIEW
      </Button>
      <Dialog fullScreen={fullScreen} open={open} onClose={handleClose} style={{ 'width': '900rs' }} maxWidth='sm'>
        <DialogTitle style={{ 'backgroundColor': '#283a46', 'color': 'white' }}>ANALYTICS VIEW</DialogTitle>
        <DialogContent style={{ 'color': 'white' , 'backgroundColor': '#283a46' }}>
          <Box sx={{ flexGrow: 10 , width:"100%" }}>
          <h4>Clear Date</h4> 
            <Grid container spacing={2}>
           
              <Grid item xs={6}>
                <LocalizationProvider dateAdapter={AdapterDateFns}  >
                  <DesktopDatePicker
                    label="Clear Date"
                    inputFormat="dd/MM/yyyy"
                    fullWidth
                    autoFocus
                    value={clear_date}
                    onChange={(e) => setClear_date(e)}
                    renderInput={(params) => <TextField className="inputRounded"  {...params} />}
                  />
                </LocalizationProvider>

              </Grid>
           
              <Grid item xs={6}>
              <h4 style={{marginTop:-40}}>Due In Date</h4>
              <LocalizationProvider dateAdapter={AdapterDateFns}  >
                  <DesktopDatePicker
                    label="Due In Date"
                    inputFormat="dd/MM/yyyy"
                    fullWidth
                    autoFocus
                    value={due_in_date}
                    onChange={(e) => setDue_in_date(e)}
                    renderInput={(params) => <TextField className="inputRounded"  {...params} />}
                  />
                </LocalizationProvider>
              </Grid>


              <Grid item xs={6}>
                <LocalizationProvider dateAdapter={AdapterDateFns}  >
                  <DesktopDatePicker
                    label="Clear Date"
                    inputFormat="dd/MM/yyyy"
                    fullWidth
                    autoFocus
                    value={clear_date}
                    onChange={(e) => setClear_date(e)}
                    renderInput={(params) => <TextField className="inputRounded"  {...params} />}
                  />
                </LocalizationProvider>
                </Grid>
             
                <Grid item xs={6}>
              <LocalizationProvider dateAdapter={AdapterDateFns}  >
                  <DesktopDatePicker
                    label="Due In Date"
                    inputFormat="dd/MM/yyyy"
                    fullWidth
                    autoFocus
                    value={due_in_date}
                    onChange={(e) => setDue_in_date(e)}
                    renderInput={(params) => <TextField className="inputRounded"  {...params} />}
                  />
                </LocalizationProvider>
              </Grid>
         
              <Grid item xs={6}>
              <h4>Baseline Create Date</h4>
                <LocalizationProvider dateAdapter={AdapterDateFns}  >
                  <DesktopDatePicker
                    label="Baseline Create Date"
                    inputFormat="dd/MM/yyyy"
                    fullWidth
                    autoFocus
                    value={baseline_create_date}
                    onChange={(e) => setBaseline_create_date(e)}
                    renderInput={(params) => <TextField className="inputRounded"  {...params} />}
                  />
                </LocalizationProvider>
              </Grid>
              
              <Grid item xs={6}>
              <h4 >Invoice Currency</h4>
                <TextField className="inputRounded"  style={{ 'width': 210 ,marginTop:-2}}
                  autoFocus
                  margin="dense"
                  id="invoice_currency"
                  placeholder="Invoice Currency"
                  type="text"
                  fullWidth
                  variant="outlined"
                  onChange={(e) => setInvoice_currency(e.target.value)}
                />
              </Grid>

              <Grid item xs={6}>
                <LocalizationProvider dateAdapter={AdapterDateFns}  >
                  <DesktopDatePicker
                    label="Baseline Create Date"
                    inputFormat="dd/MM/yyyy"
                    fullWidth
                    autoFocus
                    value={baseline_create_date}
                    onChange={(e) => setBaseline_create_date(e)}
                    renderInput={(params) => <TextField className="inputRounded"  {...params} />}
                  />
                </LocalizationProvider>
              </Grid>
              
            
            </Grid>
          </Box>
        </DialogContent>
        <DialogActions style={{ 'backgroundColor': '#283a46', 'color': 'white' }}>
          <Button onClick={handleOpen} variant="outlined" style={{ borderColor:"white",color: "white", height: 30,width: 450 }}>Submit</Button>
          <Button onClick={handleClose} variant="outlined" style={{borderColor:"white",color: "white", height: 30,width: 450  }}>Cancel</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}