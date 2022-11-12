import React from 'react';
import { MessageTeam, useMessageContext } from 'stream-chat-react';
const TeamMessage = () => {
    const { handleOpenThread, message } = useMessageContext();
    console.log(handleOpenThread);
    return (
        <MessageTeam
            message={{ ...message, user: {}}}
        />
    )
}

export default TeamMessage
