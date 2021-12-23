/* eslint-disable no-alert */
/* eslint-disable react/prop-types */

// Soft UI Dashboard React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDButton from "components/MDButton";

export default function data() {
  return {
    columns: [
      { Header: "gross pay", accessor: "grosspay", width: "45%", align: "left" },
      { Header: "net pay", accessor: "netpay", align: "left" },
      { Header: "date paid", accessor: "datepaid", align: "center" },
      { Header: "download", accessor: "download", align: "center" },
    ],

    rows: [
      {
        grosspay: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            #3,400
          </MDTypography>
        ),
        netpay: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            #3,400
          </MDTypography>
        ),
        datepaid: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            23/04/18
          </MDTypography>
        ),
        download: (
          <MDBox ml={-1}>
            <MDButton
              color="success"
              variant="gradient"
              size="lg"
              onClick={() => alert("download")}
            >
              Download
            </MDButton>
          </MDBox>
        ),
      },
      {
        grosspay: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            #3,400
          </MDTypography>
        ),
        netpay: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            #3,400
          </MDTypography>
        ),
        datepaid: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            23/04/18
          </MDTypography>
        ),
        download: (
          <MDBox ml={-1}>
            <MDButton
              color="success"
              variant="gradient"
              size="lg"
              onClick={() => alert("download")}
            >
              Download
            </MDButton>
          </MDBox>
        ),
      },
      {
        grosspay: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            #3,400
          </MDTypography>
        ),
        netpay: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            #3,400
          </MDTypography>
        ),
        datepaid: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            23/04/18
          </MDTypography>
        ),
        download: (
          <MDBox ml={-1}>
            <MDButton
              color="success"
              variant="gradient"
              size="lg"
              onClick={() => alert("download")}
            >
              Download
            </MDButton>
          </MDBox>
        ),
      },
      {
        grosspay: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            #3,400
          </MDTypography>
        ),
        netpay: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            #3,400
          </MDTypography>
        ),
        datepaid: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            23/04/18
          </MDTypography>
        ),
        download: (
          <MDBox ml={-1}>
            <MDButton
              color="success"
              variant="gradient"
              size="lg"
              onClick={() => alert("download")}
            >
              Download
            </MDButton>
          </MDBox>
        ),
      },
      {
        grosspay: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            #3,400
          </MDTypography>
        ),
        netpay: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            #3,400
          </MDTypography>
        ),
        datepaid: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            23/04/18
          </MDTypography>
        ),
        download: (
          <MDBox ml={-1}>
            <MDButton
              color="success"
              variant="gradient"
              size="lg"
              onClick={() => alert("download")}
            >
              Download
            </MDButton>
          </MDBox>
        ),
      },
    ],
  };
}
