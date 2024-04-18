import { styled } from '@mui/material/styles';
import { buttonClasses, tabClasses, Box } from '@mui/material';
import { Tab as BaseTab, TabPanel as BaseTabPanel, TabsList as BaseTabsList , TextareaAutosize} from '@mui/base';

export const Tab = styled(BaseTab)`
  font-family: 'IBM Plex Sans', sans-serif;
  color: black;
  cursor: pointer;
  font-size: 0.875rem;
  font-weight: bold;
  background-color: transparent;
  width: 150px;
  line-height: 1.5;
  padding: 8px 12px;
  margin: 6px;
  border: none;
  border-radius: 8px;
  justify-content: center;

  &:hover {
    background-color: #3399FF;
  }

  &:focus {
    color: #000;
    outline: 3px solid #80BFFF;
  }

  &.${tabClasses.selected} {
    color: #000;
    outline: 3px solid #80BFFF;
  }

  &.${buttonClasses.disabled} {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

export const TabPanel = styled(BaseTabPanel)`
  width: 100%;
  font-family: 'IBM Plex Sans', sans-serif;
  font-size: 0.875rem;
`;

export const TabsList = styled(BaseTabsList)`
  min-width: 500px;
  background-color: #007FFF;
  border-radius: 12px;
  margin-bottom: 20px;
  margin-top: 5em;  
  align-items: center;
  justify-content: center;
`;

export const StyledTextarea = styled(TextareaAutosize)(({ theme }) => ({
    width: '100%',
    boxSizing: 'border-box',
    marginBottom: theme.spacing(2)
}));
  
export const InputFieldContainer = styled(Box)(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    marginBottom: theme.spacing(2)
}));

export const StyledDiv = styled('div')(({ theme }) => ({
    display: 'flex', 
    alignItems: 'center', 
    marginBottom: theme.spacing(2)
}));

export const VisuallyHiddenInput = styled('input')({
    clip: 'rect(0 0 0 0)',
    clipPath: 'inset(50%)',
    height: 1,
    overflow: 'hidden',
    position: 'absolute',
    whiteSpace: 'nowrap',
    width: 1
});