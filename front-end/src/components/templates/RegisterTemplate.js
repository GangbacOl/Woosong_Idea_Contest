import React from 'react';
import IntroMolecule from '../molecules/IntroMolecule';
import RegisterForm from '../organisms/RegisterOrganism';
import InputAtom from '../atoms/InputAtom';

const RegisterTemplate = () => {
    return (
        <div className="RegisterTemplate">
            <IntroMolecule
                h2Content="Reader의 새로운 회원을 환영합니다!"
                pContent="서비스를 사용하시려면 아래 칸을 채워주세요."
            />
            <RegisterForm />
            <InputAtom type="button" value="Register" />
        </div>
    );
};

export default RegisterTemplate;
