import React from 'react';
interface SocialProps {
  style: string;
}
const SocialSection: React.FC<SocialProps> = ({ style }) => {
  return (
    <div className={`social-sec ${style}`}>
      <div className="right-social">
        <ul className="right-social-ul">
          <li>
            <a href="#" className="share-link">
              Facebook
            </a>
          </li>
          <li>
            <a href="#" className="share-link">
              RSS
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SocialSection;
