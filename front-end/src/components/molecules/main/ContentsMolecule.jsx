import React from 'react';
import ParagraphAtom from '../../atoms/ParagraphAtom';
import ImageAtom from '../../atoms/ImageAtom';

const ContentsMolecule = ({ pContent, images }) => {
    return (
        <div className="ContentsMoe">
            <ParagraphAtom pContent={pContent} />
            {/* <div className="imageWrapper">
                {images.map((imageSrc) => (
                    <ImageAtom src={imageSrc} />
                ))}
            </div> */}
        </div>
    );
};

export default ContentsMolecule;
