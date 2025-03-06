import React from "react";
import "./CommunityHubMessage.css";

interface CommunityHubMessageProps {
  text: string;
}

const CommunityHubMessage: React.FC<CommunityHubMessageProps> = ({ text }) => (
  <p className="hubMessageText">{text}</p>
);

export default CommunityHubMessage;
