import  Container  from "react-bootstrap/Container";
import Header from "./components/Header";

function App() {
  const post = {
    id:1,
    text:"Hello World",
    timestamp:'a minute ago',
    author:{
      username:'susan'
    }
  }
  return (
    <Container fluid className="App">
    
   <Header/>
   <p>
    <b>{post.author.username}</b> &mdash; {post.timestamp}
    <br/>
    {post.text}
   </p>
   </Container>
  );
}

export default App;
