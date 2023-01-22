import styled from "styled-components";

export const StyledTasks = styled.div`
    display:flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 0px;
    gap: 24px;

    position: absolute;
    width: 736px;
    height: 499px;
    left: calc(50% - 736px/2);
    top: 420px;
`;

export const StyledTask = styled.div`

    box-sizing: border-box;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    padding: 16px;
    gap: 12px;

    width: 736px;
    height: 72px;

    background: #262626;

    border: 1px solid #333333;
    box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.06);
    border-radius: 8px;
    margin-top: -15px;

    flex: none;
    order: 1;
    align-self: stretch;
    flex-grow: 0;

    input[type=checkbox] {
        width:24px;
        height: 24px;
        border-radius: 50%;
        vertical-align: middle;
        border: 2px solid #4EA8DE;
        appearance: none;
        -webkit-appearance: none;
        outline: none;
        cursor: pointer;

        :checked {
            appearance: auto;
            clip-path: circle(50% at 50% 50%);
            background-color: #5E60CE !important;
        }
    }

    label {
        margin-top:5px;
    }

    .checked {
        text-decoration: line-through;
    }

    .not-checked {
        text-decoration: none;
    }
`;

export const StyledInfo = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-end;
    padding: 0px;

    width: 736px;
    height: 19px;

    flex: none;
    order: 0;
    align-self: stretch;
    flex-grow: 0;

    .TaskDone,
    .TaskCreated {
        font-style: normal;
        font-weight: 700;
        font-size: 14px;
        line-height: 17px;
        color: #4EA8DE;
        display: flex;
        flex-direction: row;
        align-items: center;
        padding: 0px;
        gap: 8px;

        width: auto;
        height: 19px;
        flex: none;
        order: 0;
        flex-grow: 0;
    }

    .TaskDone {
        color: #8284FA;
    }

    .Counter {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding: 2px 8px;
        gap: 10px;
        width: auto;
        height: 19px;
        background: #333333;
        border-radius: 999px;
        flex: none;
        order: 1;
        flex-grow: 0;
    }
`;

export const  StyledDeleted = styled.div`
    position:absolute;
    right:20px;
    cursor: pointer;
`;

export const StyledEmpty = styled.div`
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

`;

