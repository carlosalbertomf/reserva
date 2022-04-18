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
    }
    
    `;