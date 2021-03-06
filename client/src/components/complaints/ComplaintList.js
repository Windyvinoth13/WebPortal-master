import { useEffect, useState } from "react";
import dateFormat from 'dateformat';
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Job from "../../services/Job";
import Sbutton from "../Sbutton";
import { makeStyles } from "@mui/styles";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
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
    width: "50%",
  },
  //class name for card media
  cover: {
    width: "20%",
  },
}));

const ComplaintList = () => {
  const [listOfComplaints, setListOfComplaints] = useState([]);

  //Get all secondary users
  const fetchAllComplaints = () => {
    Job.fetchComplaints()
      .then((response) => {
        setListOfComplaints(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  //By using this Hook, you tell React that your component needs to do something after render. Call it later after performing the DOM updates.
  useEffect(() => {
    fetchAllComplaints();
  }, []);

  const classes = useStyles();

  return (
    <div>
      {listOfComplaints.map((jobs) => {
        return (
          <div>
            {jobs.complaint.map((complaint) => {
              return (
                <div key={complaint._id}>
                  <Card className={classes.root}>
                    <div className={classes.details}>
                      <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                          {complaint.by}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          <b>Complaint Date :</b> {dateFormat(complaint.date, "yyyy-mm-dd")}
                          <br />
                          <b>Complaint category:</b> {complaint.category}
                          <br/>
                          <b>Description : </b>
                          {complaint.description}
                          <br />
                          <b>Admin Response :</b> {complaint.adminResponse}
                        </Typography>
                      </CardContent>
                    </div>

                    <CardActions>
                      <Link
                        to="/responseToComplaint"
                        state={complaint}
                        className="link"
                        style={{ marginRight: "50%" }}
                      >
                        <Sbutton text="Response" btnWidth="90%" />
                      </Link>

                    </CardActions>
                  </Card>
                </div>
              );
            })}
          </div>
        );
      })}
    </div>
  );
};

export default ComplaintList;
