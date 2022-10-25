import styled from "styled-components";

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: ${p => p.theme.space[4]}px;
    margin-bottom: ${p => p.theme.space[4]}px;
    padding: ${p => p.theme.space[2]}px;
    border: ${p => p.theme.borders.border} ${p => p.theme.colors.teal};
    border-radius: ${p => p.theme.radii.min}px;
`

export const FormLabel = styled.label`
    font-weight: ${p => p.theme.fontWeights.middle};
`

export const FormInput = styled.input`
    margin-bottom: ${p => p.theme.space[4]}px;
`

export const SubmitBtn = styled.button`
    width: 100px;
    border: transparent;
    outline: none;
    padding-left: ${p => p.theme.space[3]}px;
    padding-right: ${p => p.theme.space[3]}px;
    padding-top: ${p => p.theme.space[2]}px;
    padding-bottom: ${p => p.theme.space[2]}px;
    border-radius: ${p => p.theme.radii.min}px;
    background-color: ${p => p.theme.colors.teal};
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