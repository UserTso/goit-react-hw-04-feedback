import styled from '@emotion/styled';

export const Title = styled.h1`
background-color: beige;
text-align: center;
`;

export const List = styled.ul`
display: flex;
justify-content: center;
`;

export const Item = styled.li`
display: flex;
list-style: none;
margin-right: 20px;
&:last-child {
    margin-right: 0
}
`;

export const Button = styled.button`
padding-top: 10px;
padding-bottom: 10px;
box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.12), 0px 1px 1px rgba(0, 0, 0, 0.14), 0px 2px 1px rgba(0, 0, 0, 0.2);
border-radius: 4px;
background-color: blue;
color: white;
`;