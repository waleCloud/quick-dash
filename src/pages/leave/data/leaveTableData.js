/* eslint-disable no-alert */
/* eslint-disable react/prop-types */

// Soft UI Dashboard React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDButton from "components/MDButton";

export default function data() {
  return {
    columns: [
      { Header: "leave", accessor: "leave", width: "45%", align: "left" },
      { Header: "Number of Days", accessor: "numberofdays", align: "left" },
      { Header: "Date", accessor: "date", align: "center" },
      { Header: "Status", accessor: "status", align: "center" },
    ],

    rows: [
      {
        leave: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            #3,400
          </MDTypography>
        ),
        numberofdays: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            #3,400
          </MDTypography>
        ),
        date: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            23/04/18
          </MDTypography>
        ),
        status: (
          <MDBox ml={-1}>
            <MDButton badgeContent="Active" color="success" variant="outlined" size="lg">
              Active
            </MDButton>
          </MDBox>
        ),
      },
      {
        leave: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            #3,400
          </MDTypography>
        ),
        numberofdays: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            #3,400
          </MDTypography>
        ),
        date: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            23/04/18
          </MDTypography>
        ),
        status: (
          <MDBox ml={-1}>
            <MDButton badgeContent="Active" color="success" variant="outlined" size="lg">
              Active
            </MDButton>
          </MDBox>
        ),
      },
      {
        leave: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            #3,400
          </MDTypography>
        ),
        numberofdays: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            #3,400
          </MDTypography>
        ),
        date: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            23/04/18
          </MDTypography>
        ),
        status: (
          <MDBox ml={-1}>
            <MDButton badgeContent="Active" color="success" variant="outlined" size="lg">
              Active
            </MDButton>
          </MDBox>
        ),
      },
      {
        leave: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            #3,400
          </MDTypography>
        ),
        numberofdays: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            #3,400
          </MDTypography>
        ),
        date: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            23/04/18
          </MDTypography>
        ),
        status: (
          <MDBox ml={-1}>
            <MDButton badgeContent="Active" color="success" variant="outlined" size="lg">
              Active
            </MDButton>
          </MDBox>
        ),
      },
      {
        leave: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            #3,400
          </MDTypography>
        ),
        numberofdays: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            #3,400
          </MDTypography>
        ),
        date: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            23/04/18
          </MDTypography>
        ),
        status: (
          <MDBox ml={-1}>
            <MDButton badgeContent="Active" color="success" variant="outlined" size="lg">
              Active
            </MDButton>
          </MDBox>
        ),
      },
    ],
  };
}
