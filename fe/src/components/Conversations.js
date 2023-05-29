import React from "react";
import { ListGroup } from "react-bootstrap";
import { useConversations } from "../contexts/ConversationsContext";

export default function Conversations() {
  const { conversations, selectedConversationIndex } = useConversations();
  return (
    <ListGroup variant="flush">
      {conversations &&
        conversations.map((conversation, index) => (
          <ListGroup.Item
            key={index}
            action
            onClick={() => selectedConversationIndex(index)}
            active={conversation.selected}
          >
            {conversation.recipients
              .map((recipient) => recipient.name)
              .join(",")}
          </ListGroup.Item>
        ))}
    </ListGroup>
  );
}
