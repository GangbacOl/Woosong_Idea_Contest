import React from 'react';
import IntroMolecule from '../../molecules/auth/IntroMolecule';
import LoginForm from '../../organisms/auth/LoginOrganism';
import InputAtom from '../../atoms/InputAtom';
import LinkAtom from '../../atoms/LinkAtom';

const LoginTemplate = () => {
    return (
        <div className="LoginTemplate">
            <IntroMolecule
                h2Content="Reader에 오신 것을 환영합니다!"
                pContent="서비스를 사용하시려면 로그인해주세요."
            />
            <LoginForm />
            <InputAtom type="button" value="Login" />
            <LinkAtom path="/register" LinkContent="Reader가 처음이신가요?" />
        </div>
    );
};

export default LoginTemplate;
