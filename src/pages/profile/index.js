/**
=========================================================
* Material Dashboard 2 React - v2.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-react
* Copyright 2021 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// @mui material components
import Grid from "@mui/material/Grid";
import Divider from "@mui/material/Divider";

// @mui icons
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";

// Material Dashboard 2 React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import ProfileInfoCard from "examples/Cards/InfoCards/ProfileInfoCard";
// Overview page components
import Header from "pages/profile/components/Header";

function Overview() {
  return (
    <DashboardLayout>
      <DashboardNavbar />
      <MDBox mb={2} />
      <Header>
        <MDBox>
          <Grid container spacing={1}>
            <Grid item xs={12} md={6} xl={6}>
              <ProfileInfoCard
                title="Personal information"
                info={{
                  title: "Mr.",
                  firstName: "(44) 123 1234 123",
                  lastName: "(44) 123 1234 123",
                  otherName: "(44) 123 1234 123",
                  personalEmail: "alecthompson@mail.com",
                  maritalStatus: "USA",
                  gender: "Mr.",
                  dateOfBirth: "(44) 123 1234 123",
                  nationality: "(44) 123 1234 123",
                  phoneNumber: "(44) 123 1234 123",
                  nextOfKinName: "alecthompson@mail.com",
                  nextOfKinEmail: "alecthompson@mail.com",
                  nextOfKinPhoneNumber: "alecthompson@mail.com",
                }}
                social={[
                  {
                    link: "https://www.facebook.com/#/",
                    icon: <FacebookIcon />,
                    color: "facebook",
                  },
                  {
                    link: "https://twitter.com/#",
                    icon: <TwitterIcon />,
                    color: "twitter",
                  },
                  {
                    link: "https://www.instagram.com/#/",
                    icon: <InstagramIcon />,
                    color: "instagram",
                  },
                ]}
                action={{ route: "", tooltip: "Edit Profile" }}
                shadow={false}
              />
            </Grid>
            <Grid item xs={12} md={6} xl={6}>
              <ProfileInfoCard
                title="Employee Information"
                description=""
                info={{
                  employeeCode: "Alec M. Thompson",
                  pensionStartDate: "(44) 123 1234 123",
                  dateEngaged: "alecthompson@mail.com",
                  probationPeriod: "USA",
                  pensionPin: "Mr.",
                  taxNumber: "(44) 123 1234 123",
                  NHF: "(44) 123 1234 123",
                  jobTitle: "(44) 123 1234 123",
                  natureOfContract: "alecthompson@mail.com",
                  jobGrade: "USA",
                  department: "Mr.",
                  leaves: "(44) 123 1234 123",
                  taxReliefGroup: "(44) 123 1234 123",
                }}
                action={{ route: "", tooltip: "Edit Profile" }}
                shadow={false}
              />
              <Divider orientation="vertical" sx={{ mx: 0 }} />
            </Grid>
          </Grid>
        </MDBox>
      </Header>
    </DashboardLayout>
  );
}

export default Overview;
