import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  //class name for form which is used in AddNewThirdParty.js
  form: {
    marginLeft: "18%",
    marginTop: "5%",
    marginRight: "18%",
    border: "1px solid #ffffff",
    padding: "30px 70px 30px 70px",
  },
  //class names used in ThirdPartyList.js in thirdParty component
  //class name for card
  //The flex layout allows responsive elements within a container to be automatically arranged depending upon screen size. Flex container becomes flexible by setting the display property to flex
  root: {
    display: "flex",
    height: "200px",
    backgroundColor: "transparent !important",
    color: "white",
  },
  //class name for div where card content tag is present
  details: {
    display: "flex",
    flexDirection: "column",
    padding: 10,
    width: "70%",
    marginLeft: "5%",
  },
  //class name for card media
  cover: {
    width: "20%",
  },
}));

export default useStyles;
