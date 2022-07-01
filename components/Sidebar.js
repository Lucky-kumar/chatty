import styled from 'styled-components';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Button, IconButton } from '@mui/material';
import ChatIcon from '@mui/icons-material/Chat';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import SearchIcon from '@mui/icons-material/Search';
import * as EmailValidator from "email-validator";
import { auth,db } from '../firebase';
import { useAuthState } from 'react-firebase-hooks/auth';
import {useCollection } from 'react-firebase-hooks/firestore';
import Chat from './Chat';
import { collection, addDoc, query, where } from "firebase/firestore"; 
import { doc, setDoc } from "firebase/firestore"; 




function Sidebar() {
    const [user] = useAuthState(auth);
    const chatRef = collection(db,"chats");
    const userChatRef = query(chatRef, where("users", "array-contains", user.email));
    const [chatsSnapshot] = useCollection(userChatRef);
    
    const createChat = () => {
        const input = prompt(
            "Please enter an email address for the user you wish to chat with"
        );

        if(!input) return null;

        if(EmailValidator.validate(input) 
        && input !== user.email
        ) {
            addDoc(doc(db, "chats"), {
                users: [user.email, input],
              });

            // collection(db,"chats)
            // db.collection("chats").add({
            //     users: [user.email, input],
            // });
        }
    };
    
    const chatAlreadyExists = (recipientEmail) =>
        !!chatsSnapshot?.docs.find(
            (chat) => 
                chat.data().users.find((user) => user === recipientEmail)?.length >0);   

    return (
        <Container>
            <Header>
                <UserAvatar onClick={() => auth.signOut()} />

                <IconsContainer>
                    <IconButton>
                        <ChatIcon />
                    </IconButton>
                    <IconButton>
                        <MoreVertIcon />
                    </IconButton>
                </IconsContainer>
            </Header>

            <Search>
                <SearchIcon />
                <SearchInput placeholder="Search in chats" />
            </Search>

            <SidebarButton onClick={createChat}>Start a new chat</SidebarButton>

            {chatsSnapshot?.docs.map((chat) => (
                <Chat key={chat.id} id={chat.id} user={chat.data().users} />
            ))}
        </Container>
    )
}

export default Sidebar

const Container = styled.div`

`;

const Search = styled.div`
    display: flex;
    align-items:center;
    padding: 20px;
    border-radius: 2px;
`;

const SidebarButton = styled(Button)`
    width:100%;

    &&& {
        border-top: 1px solid whitesmoke;
        border-bottom: 1px solid whitesmoke;
    }
`;

const SearchInput = styled.input`

    outline-width: 0;
    border: none;
    flex: 1;

`;

const Header = styled.div`
    display: flex;
    position:sticky;
    top:0;
    background-color: white;
    z-index: 1;
    justify-content: space-between;
    align-items: center;
    padding: 15px;
    height: 80px;
    border-bottom: 1px solid whitesmoke;
`;

const UserAvatar = styled(AccountCircleIcon)`

    cursor: pointer;

    :hover {
        opacity: 0.8;
    }
`;

const IconsContainer = styled.div``;
