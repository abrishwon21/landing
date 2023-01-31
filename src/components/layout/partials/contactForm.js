import * as React from 'react';
import Box from '@mui/material/Box';
import Input from '@mui/material/Input';
import FormControl from '@mui/material/FormControl';
import styled from 'styled-components';
import { Label } from '@mui/icons-material';
import AttachmentIcon from '@mui/icons-material/Attachment';
const ariaLabel = { 'aria-label': 'description' };


const FileContainer=styled.div`
margin-bottom: 15px;
box-sizing: border-box;
display: block;
font-size: 18px;
font-weight: 400;

.fileControlWrap{
  position:relative;


  .rFormControl{
    border: none;
    width: 0.1px;
    height: 0.1px;
    opacity: 0;
    overflow: hidden;
    position: absolute;
    z-index: -1;

    padding: 5px 0;
    max-width: 420px;
    transition: all .3s ease;
    font-size: 18px;


    text-transform: none;
    text-indent: 0px;
    text-shadow: none;
    display: inline-block;

}
 
}






`
const Privacy=styled.div`
padding: 0;
font-size: 12px;
line-height: 1.5;
color: rgba(0,0,0,.5);
margin-bottom: 24px;

&>a{
  background-color: transparent;
  color: #4a4a4a;
  text-decoration: none;
  font-weight: 400;
}
}


`
const ButtonInput=styled.input`
  padding: 14px 27px 12px;
  line-height: 14px;
  font-size: 1rem;
  text-transform: uppercase;
  color: #000;
  border-color: #000;
  cursor: pointer;
  border: 1px solid;
  border-radius: 20px;
  background:none;
  text-decoration: none;

  transition: all .2s ease-in-out;

  &:hover{
    background:#000;
    border-color:#fff;
    color:#fff;
  }

`
const FileInput=styled.input`

`
const FileLabel=styled.label`
font-size: 18px;
padding: 11px 10px 0 0;
color: #000;
display: inline-block;
cursor: pointer;
-webkit-transition: all .3s ease;
-o-transition: all .3s ease;
transition: all .3s ease;
position: relative;

.filIcon{
  transform:rotate(45deg);
}


`
export default function ContactInputForm() {
  return (
    <Box
      component="form"
      sx={{ display: 'flex', flexWrap: 'wrap' }}
    
      noValidate
      autoComplete="off"
      style={{width:"100%"}}
    >
 
    
     
      
     

      <FormControl fullWidth maxWidth sx={{ m: 1 }} variant="standard">
         <Input placeholder="name" inputProps={ariaLabel} />
     
     </FormControl>

     <FormControl fullWidth sx={{ m: 1 }} variant="standard">
         <Input placeholder="company" inputProps={ariaLabel} />
 
    </FormControl>

    <FormControl fullWidth sx={{ m: 1 }} variant="standard">
        <Input placeholder="email" inputProps={ariaLabel} />

    </FormControl>

    <FormControl fullWidth sx={{ m: 1 }} variant="standard" >
        <Input placeholder="message" inputProps={ariaLabel} />

    </FormControl>

    <FileContainer>
        <span className='fileControlWrap'>
            <FileInput type="file"
            data-multiple-caption="{count} files selected"
              name="file-form" size="40" 
              className="rFormControl wpcf7-file control-input __type-file" 
              id="file-style" 
              accept=".jpg,.jpeg,.png,.gif,.pdf,.doc,.docx,.ppt,.pptx,.odt,.avi,.ogg,.m4a,.mov,.mp3,.mp4,.mpg,.wav,.wmv"
            aria-invalid="false"
          />
        </span>

        <FileLabel for="fileForm">
            <AttachmentIcon className='filIcon'/>
             <span>Attach file&nbsp;
              
             </span>
          </FileLabel>
          <Privacy class="text-gray">
              By sending a message you agree with your information being stored by us in relation to dealing with your enquiry. Please have a look at our
              &nbsp;<a href="/privacy-policy/">Privacy Policy</a>.
           </Privacy>
   </FileContainer>
   
      <ButtonInput type="submit" 
          value="Get in touch" 
          className='btn'
          
          >
      </ButtonInput>
    </Box>
  );
}