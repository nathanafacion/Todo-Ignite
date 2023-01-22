import styled from "styled-components";

export const StyledNewTask = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 0;
    gap: 8px;

    position: absolute;
    width: 736px;
    height: 54px;
    left: calc(50% - 736px/2);
    top: 173px;

    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
`;

export const InputStyled = styled.div`
    display: flex;
    position: absolute;
    width: 736px;
    height: 54px;
    left: calc(50% - 736px/2);
    top: 120px;
    justify-content: space-between;

    input {
        width: 605px;
        height: 34px;
        font-size:20px;
        -webkit-border-radius: 20px;
        -moz-border-radius: 20px;
         border-radius: 10px;
         border: 1px solid  #0D0D0D;
         background-color: #262626;
         color: #F2F2F2;
         padding: 10px;

         :focus {
            border: 1px solid  #262626;
            background-color: #262626;

        }
    }

    button {
        flex-direction: row; 
        align-items: center;
        justify-content: center;
        width: 100px;
        height: 56px;
        background-color:#1E6F9F;
        -webkit-border-radius: 20px;
        -moz-border-radius: 20px;
         border-radius: 10px;
         border: 1px solid #1E6F9F;
         color: #F2F2F2;
         cursor: pointer;

        img {
            margin-left:5px;
            width:12px;
        }

        p {
            display: inline-block;
        }

        :active {
            box-shadow: 3px 2px 25px 1px rgba(0,0,0,0.25);
            opacity: 0.9
        }
    
        :hover {
            background-color: #18587f;
            transition: background-color 0.5s;
        }
    }

   
`