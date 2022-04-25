import React from 'react';
import {AreaLogin} from './styled';
import {BtnLoginGmail} from '../../Componentes/styled';
import Api from '../../Api';
import SportsIcon from '@mui/icons-material/Sports';

// import FingerprintIcon from '@material-ui/icons/Fingerprint';
export default ({onReceiveGoogle}) => {

    const actionLoginGoogle = async () => {
        let result = await Api.googleLogar();

        if(result){
            onReceiveGoogle(result.user);

        }else{
            alert('Error');
        }


    };

    return(
        <AreaLogin>
        <SportsIcon className='iconSports' />
            <h1>Reserva da Quadra:</h1>
            <BtnLoginGmail onClick={actionLoginGoogle}>
                {/* <FingerprintIcon /> */}
                <div className='center'>Entre com o login da UFOP</div>
                    
            </BtnLoginGmail>
        </AreaLogin>
    );

}