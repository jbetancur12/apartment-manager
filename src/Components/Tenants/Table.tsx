// // @ts-nocheck
// import React, { forwardRef } from "react";
// import MaterialTable, { Column, Icons } from "@material-table/core";
// import {
//   AddBox,
//   ArrowDownward,
//   Check,
//   ChevronLeft,
//   ChevronRight,
//   Clear,
//   DeleteOutline,
//   Edit,
//   FilterList,
//   FirstPage,
//   LastPage,
//   Remove,
//   SaveAlt,
//   Search,
//   ViewColumn,
// } from "@material-ui/icons";
// import { Container } from "@material-ui/core";

// export type Person = {
//   id: string;
//   firstName: string;
//   lastName: string;
// };

// const tableIcons: Icons = {
//   Add: forwardRef((props, ref) => <AddBox {...props} ref={ref} />),
//   Check: forwardRef((props, ref) => <Check {...props} ref={ref} />),
//   Clear: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
//   Delete: forwardRef((props, ref) => <DeleteOutline {...props} ref={ref} />),
//   DetailPanel: forwardRef((props, ref) => (
//     <ChevronRight {...props} ref={ref} />
//   )),
//   Edit: forwardRef((props, ref) => <Edit {...props} ref={ref} />),
//   Export: forwardRef((props, ref) => <SaveAlt {...props} ref={ref} />),
//   Filter: forwardRef((props, ref) => <FilterList {...props} ref={ref} />),
//   FirstPage: forwardRef((props, ref) => <FirstPage {...props} ref={ref} />),
//   LastPage: forwardRef((props, ref) => <LastPage {...props} ref={ref} />),
//   NextPage: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
//   PreviousPage: forwardRef((props, ref) => (
//     <ChevronLeft {...props} ref={ref} />
//   )),
//   ResetSearch: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
//   Search: forwardRef((props, ref) => <Search {...props} ref={ref} />),
//   SortArrow: forwardRef((props, ref) => <ArrowDownward {...props} ref={ref} />),
//   ThirdStateCheck: forwardRef((props, ref) => <Remove {...props} ref={ref} />),
//   ViewColumn: forwardRef((props, ref) => <ViewColumn {...props} ref={ref} />),
// };

// type Props = {
//   data: Person[];
// };

// /* Defining the columns of the table. */
// const columns: Array<Column<Person>> = [
//   { title: "Id", field: "id" },
//   { title: "First Name", field: "firstName" },
//   { title: "Last Name", field: "lastName" },
// ];

// /* Setting the options for the table. */
// const options = {
//   paging: true,
//   pageSize: 10,
//   emptyRowsWhenPaging: false,
//   pageSizeOptions: [10, 20, 50],
// };

// /**
//  * It's a React component that takes in an array of objects and returns a MaterialTable component with
//  * the data, columns, icons, and options props
//  * @param {Props}  - data - the data to be displayed in the table
//  * @returns A MaterialTable component with the columns, data, icons, and options props.
//  */
// export const Table = ({ data }: Props) => {
//   return (
//     <Container>
//       <MaterialTable
//         columns={columns}
//         data={data}
//         icons={tableIcons}
//         options={options}
//       />
//     </Container>
//   );
// };

import React from "react";
import MaterialTable, { Column } from "@material-table/core";

interface IPerson {
  id: string;
  doc: number;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  address: string;
}

interface Props {
  data: IPerson[];
}

const lookup = { true: "Available", false: "Unavailable" };

const columns: Array<Column<IPerson>> = [
  { title: "Document", field: "doc" },
  { title: "First Name", field: "firstName" },
  { title: "Last Name", field: "lastName" },
  { title: "Email", field: "email" },
  { title: "Phone", field: "phone" },
  { title: "Address", field: "address" },
];

export const Table = ({ data }: Props) => (
  <MaterialTable
    columns={columns}
    data={data}
    title="Tenants"
    options={{
      showTitle: false,
      pageSize: 10,
      paging: true,
      pageSizeOptions: [10, 20, 50],
      rowStyle: {
        fontSize: 14,
      },
      headerStyle: {
        backgroundColor: "rgb(17, 24, 39)",
        color: "rgb(156, 163, 175)",
        fontWeight: "600",
      },
    }}
  />
);
