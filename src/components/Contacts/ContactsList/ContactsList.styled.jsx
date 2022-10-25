import styled from "styled-components";

export const List = styled.ul`
    padding: 0;
    margin-top: ${p => p.theme.space[4]}px;
`

export const ListItem = styled.li`
    display: flex;
    align-items: baseline;
    justify-content: space-between;
    padding: ${p => p.theme.space[2]}px;
    border: ${p => p.theme.borders.border} ${p => p.theme.colors.teal};
    border-radius: ${p => p.theme.radii.min}px;

    &:not(:last-child) {
        margin-bottom: ${p => p.theme.space[3]}px;
    }
`

export const ListItemText = styled.p`
margin-right: ${p => p.theme.space[4]}px;
`

export const DeleteBtn = styled.button`
    border: transparent;
    outline: none;
    padding-left: ${p => p.theme.space[3]}px;
    padding-right: ${p => p.theme.space[3]}px;
    padding-top: ${p => p.theme.space[2]}px;
    padding-bottom: ${p => p.theme.space[2]}px;
    border-radius: ${p => p.theme.radii.min}px;
    background-color: ${p => p.theme.colors.black};
    color: ${p => p.theme.colors.white};
    cursor: pointer;
    transition: transform 150ms linear;

    &:hover,
    :focus {
        transform: scale(1.05);
    }

    &:active {
        transform: none;
    }
`