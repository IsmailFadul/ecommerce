import Link from "next/link";
import { ButtonStyled } from "./Button";
import styled from "styled-components";

const StyledLink = styled(Link)`
    ${ButtonStyled}
`;

export default function ButtonLink(props) {
    return (
        <StyledLink {...props}/>
    )
}