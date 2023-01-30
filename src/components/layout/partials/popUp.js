import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import Contact from '../../../views/contact/contactUs';
import { Close } from '@mui/icons-material';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function PopUp(props) {
  const [open1, setOpen1] = React.useState(false);



  const handleClose = () => {
    props.close(false);
  };

  return (
    <div>
     
      <Dialog
        open={props.open}
        maxWidth
        fullScreen
        onClose={handleClose}
       
      >
      <DialogActions>
        
      <Button onClick={handleClose}><Close/></Button>
      
    </DialogActions>

        <DialogContent>
        
           <Contact/>
         
        </DialogContent>

      </Dialog>
    </div>
  );
}