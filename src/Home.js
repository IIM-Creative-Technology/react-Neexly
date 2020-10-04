import React from 'react';
import styled from 'styled-components';

const Styles = styled.div`
    .cours1 {
        height: 240px;
        width: 90px;
        background: grey;
        position: absolute;
        margin-top: -552px;
        margin-left: 105px;
    }

    .cours2 {
        height: 240px;
        width: 90px;
        background: grey;
        position: absolute;
        margin-top: -552px;
        margin-left: 385px;
    }

    .cours3 {
        height: 240px;
        width: 90px;
        background: grey;
        position: absolute;
        margin-top: -552px;
        margin-left: 665px;
    }

    .cours4 {
        height: 135px;
        width: 90px;
        background: grey;
        position: absolute;
        margin-top: -552px;
        margin-left: 247px;
    }

    .cours5 {
        height: 205px;
        width: 90px;
        background: grey;
        position: absolute;
        margin-top: -345px;
        margin-left: 247px;
    }

    .cours6 {
        height: 175px;
        width: 90px;
        background: grey;
        position: absolute;
        margin-top: -485px;
        margin-left: 528px;
    }
`;

export const Home = () => (
    <div>
        <h2>Emploi du temps</h2>
        <img src={require('./assets/edtImage.png')} alt="Emploi du temps" />

        <Styles>
            <div className="cours1">
                <h5>PHP</h5>
                <h6>8:00 - 15:00</h6>
                <h6>J. Langlois</h6>
                <p>E511</p>
            </div>
        </Styles>

        <Styles>
            <div className="cours2">
                <h5>PHP</h5>
                <h6>8:00 - 15:00</h6>
                <h6>J. Langlois</h6>
                <p>E511</p>
            </div>
        </Styles>

        <Styles>
            <div className="cours3">
                <h5>PHP</h5>
                <h6>8:00 - 15:00</h6>
                <h6>J. Langlois</h6>
                <p>E511</p>
            </div>
        </Styles>

        <Styles>
            <div className="cours4">
                <h5>DevLab</h5>
                <h6>8:00 - 12:00</h6>
                <h6>K. Patern</h6>
                <p>E334</p>
            </div>
        </Styles>

        <Styles>
            <div className="cours5">
                <h5>Anglais</h5>
                <h6>14:00 - 18:00</h6>
                <h6>P. Kenji</h6>
                <p>E213</p>
            </div>
        </Styles>

        <Styles>
            <div className="cours6">
                <h5>Sport</h5>
                <h6>10:00 - 15:00</h6>
                <h6>M. Durant</h6>
                <p>-/-</p>
            </div>
        </Styles>

    </div>
)