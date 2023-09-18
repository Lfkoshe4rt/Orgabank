import styled from "styled-components";
import { RiDeleteBin6Line } from "react-icons/ri";

export const Type = styled.td`
  color: ${(props) => (props.type === "entrada" ? "green" : "red")};
`;

export const Pending = styled.span`
  color: red;
  font-weight: bold;
`;

export const IconTrash = styled(RiDeleteBin6Line)`
  color: red;
  cursor: pointer;

  &:hover {
    color: #b80000;
  }
`;

export const TableContainer = styled.div`
  overflow-x: auto;
`;

export const TableStyle = styled.table`
  border-collapse: collapse;
  border: 1px solid #ddd;
  width: 100%;

  max-width: 100%;
  overflow-x: auto;

  th {
    padding-top: 12px;
    padding-bottom: 12px;
    text-align: left;
    background-color: #4caf50;
    color: white;
  }

  th,
  td {
    border: 1px solid #ddd;
    padding: 8px;
    white-space: nowrap;
  }
  tr:nth-child(even) {
    background-color: #f5f5f5;
  }
  tr:hover {
    background-color: #ddd;
  }
`;

export const ButtonSearchMore = styled.button`
  display: ${({ showMore }) => (showMore ? "block" : "none")};
  margin: 0 auto;
  margin-bottom: 20px;
  padding: 10px 20px;
  border: 1px solid #ddd;
  border-radius: 5px;
  background-color: #fff;
  color: #000;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease-in-out;

  &:hover {
    background-color: #ddd;
  }
`;
