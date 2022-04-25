import styled from 'styled-components';

export const AreaHeader = styled.div`
    height: 60px;
    background-image: linear-gradient(to right, #707a80, #972038);
    color: #fff;
    
    
    .container{
        padding: 5px 20px;
        display: flex;
        allign-items: center;

    }
    
    .logo{
        flex: 1;
        img{
            width: 280px;
        }
        
    }
    
    nav{
        display: flex;
        
        ul{
            display: flex;
        }
        li{
            list-style: none;
            margin-left: 20px;

            a{
                text-decoration: none;
                color: #fff;

                &:hover{
                    color: #707a80;
                }
            }
        }

        .avatar{
            display: flex;
            align-items: center;

            img{
                width:35px;
                border-radius: 20px;
                margin-top: -10px;
                margin-left: 20px;
                margin-right: 8px;
                cursor: pointer;
            }

            label{
                font-size: 16px;
                cursor: pointer;
                color: #fff;
                margin-top: -10px;
            }

            @media screen and (max-widht: 600px){
                display: none;
            }

        }
    }
    
    `;