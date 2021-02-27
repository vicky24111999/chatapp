import {ChatEngine} from 'react-chat-engine';
import ChatFeed from './components/ChatFeed';
import LoginForm from './components/LoginForm';
import './App.css';

const App=()=>{
    if(!localStorage.getItem('username')) return <LoginForm/>
    return(
        <ChatEngine
            height="100vh"
            projectID="d685d602-917b-4ec6-8f9f-48e2b6997926"
            userName={localStorage.getItem('username')}
            userSecret={localStorage.getItem('password')}
            renderChatFeed={(chatAppProps)=><ChatFeed {...chatAppProps}/>}
        />

    );
}
export default App;