import React from 'react';
import UserMoleCule from '../../molecules/main/UserMolecule';
import ParagraphAtom from '../../atoms/ParagraphAtom';

const SideBarOrganism = ({ userThumbnail, userName }) => {
    return (
        <div className="SideBarOrganism">
            <UserMoleCule userThumbnail={userThumbnail} userName={userName} />
            <ParagraphAtom pContent={`${userName}님 환영합니다!`} />
            <div className="CurrentCategory">
                {/* 지금 보고있는 분야(카테고리) */}
                <ParagraphAtom pContent={`지금 보고계신 카테고리는 ~~입니다.`} />
                <div className="CategoryList">{/* categories.map() */}</div>
            </div>
        </div>
    );
};

export default SideBarOrganism;
