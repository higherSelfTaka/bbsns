import {createContext, useContext, useEffect, useState} from 'react'


const PostContext = createContext();

export const PostContextProvider = ({children})=>{
   
    const [isOpen, setIsOpen] = useState(false)
    const [isProfleEdit, setIsProfileEdit]=useState(false)
    const [postId, setPostId]=useState('');
    const [isStory, setIsStory] = useState(true)
    const [isFollower, setIsFollower] = useState(false)
    const [isFollowing, setIsFollowing] = useState(false)
    const [memberId, setMemberId] = useState('');


return (
    <PostContext.Provider value={{
        isOpen, 
        setIsOpen, 
        postId, 
        setPostId,
        isProfleEdit,
        setIsProfileEdit,
        isStory,
        setIsStory,
        isFollower,
        setIsFollower,
        isFollowing,
        setIsFollowing,
        memberId,
        setMemberId,
      
        }}>
        {children}
    </PostContext.Provider>
 )
}

export const PostState =()=>{
    return useContext(PostContext);
};