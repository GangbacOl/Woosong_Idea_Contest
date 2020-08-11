import React from 'react';
import UserMolecule from '../../molecules/main/UserMolecule';
import ContentsMolecule from '../../molecules/main/ContentsMolecule';
import ActionMolecule from '../../molecules/main/ActionMolecule';

const FeedAreaOrganism = ({ userThumbnail, userName, pContent, images }) => {
    return (
        <div className="FeedAreaOrganism">
            <UserMolecule userThumbnail={userThumbnail} userName={userName} />
            <ContentsMolecule pContent={pContent} images={images} />
            <ActionMolecule />
        </div>
    );
};

export default FeedAreaOrganism;
