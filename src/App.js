import styled from 'styled-components';
import Register from "./components/Register";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';


const Container = styled.div`
  background-color: #fff;
  min-height: 100vh;  
`

const ToolBar = styled(Toolbar)`
  display: flex;
  justify-content: space-between;
`

function App() {
  return (
    <Container>
      <AppBar position="static" style={{backgroundColor: 'transparent', color: '#333'}}>
        <ToolBar>
          
          <Typography variant="h6" >
            eLearning
          </Typography>
          
        </ToolBar>
      </AppBar>
      <Register />
    </Container>
  );
}

export default App;
