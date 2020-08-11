import React from 'react';
import HeaderOrganism from '../../organisms/main/HeaderOrganism';
import SideBarOrganism from '../../organisms/main/SideBarOrganism';
import FeedAreaOrganism from '../../organisms/main/FeedAreaOrganism';

const MainTemplate = ({ userThumbnail, userName, pContent, images }) => {
    return (
        <div className="MainTemplate">
            <HeaderOrganism />
            <SideBarOrganism userThumbnail={userThumbnail} userName={userName} />
            <FeedAreaOrganism userThumbnail={userThumbnail} userName={userName} pContent={pContent} images={images} />
        </div>
    );
};

export default MainTemplate;
