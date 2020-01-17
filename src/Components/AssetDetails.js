import React, { Component } from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
// import "./assets.css"

class AssetDetails extends Component {
  constructor(props) {
    super(props);
    console.log(props);
    this.state = {
      assets: [
        {
          assetId: "1",
          assetName: "Nokia lumia 520",
          companyName: "123.56.4.122",
          operatingHours: "as.dc.fd-ec.sd",
          nextMaintenance: "Windows",
          connectivity: "True",
          customer: "Nokia",
          timeLastShown: "12/11/2019"
        },
        {
          assetId: "2",
          assetName: "Apple Iphone 9",
          companyName: "143.56.4.100",
          operatingHours: "rt.ko-io.bg.sd",
          nextMaintenance: "iOS",
          connectivity: "True",
          customer: "Apple",
          timeLastShown: "09/11/2019"
        },
        {
          assetId: "3",
          assetName: "HP Pavilion Laptop 5432",
          companyName: "554.43.22.112",
          operatingHours: "s-fd-ss.ss.dw",
          nextMaintenance: "Windows",
          connectivity: "True",
          customer: "HP",
          timeLastShown: "12/10/2019"
        },
        {
          assetId: "4",
          assetName: "Acer 5642 laptop",
          companyName: "55.332.1.221",
          operatingHours: "as-ss-de-ss-xxs",
          nextMaintenance: "Windows 10",
          connectivity: "True",
          customer: "Acer",
          timeLastShown: "12/09/2019"
        },
        {
          assetId: "5",
          assetName: "IPV4 Adaptor",
          companyName: "554.22.1.2222",
          operatingHours: "as-dd-ss-ees.ss",
          nextMaintenance: "IPV4",
          connectivity: "True",
          customer: "PPK",
          timeLastShown: "13/02/2019"
        }
      ]
    };
  }

  render() {
    const styleObj = {
      fontSize: 13,
      color: "#4a54f1",
      textAlign: "center",           
fontFamily: 'quicksand,sans-serif'
}
    const tableHeader = (
      <TableHead>
        <TableRow >
          <TableCell><b style={styleObj}>Device Name</b></TableCell>
          <TableCell><b style={styleObj}>IP Address</b></TableCell>
          <TableCell><b style={styleObj}>Mac Adress</b></TableCell>
          <TableCell><b style={styleObj}>Software</b></TableCell>
          <TableCell><b style={styleObj}>Connectivity</b></TableCell>
          <TableCell><b style={styleObj}>Company Name</b></TableCell>
          <TableCell><b style={styleObj}>Time Last Shown</b></TableCell>
        </TableRow>
      </TableHead>
    );
    const content = (
      <TableBody>
        {this.state.assets.map(asset => (
          <TableRow key={asset.assetId}>
            <TableCell component="th" scope="row">
              {asset.assetName}
            </TableCell>
            <TableCell>{asset.companyName}</TableCell>
            <TableCell>{asset.operatingHours}</TableCell>
            <TableCell>{asset.nextMaintenance}</TableCell>
            <TableCell>{asset.connectivity}</TableCell>
            <TableCell>{asset.customer}</TableCell>
            <TableCell>{asset.timeLastShown}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    );
    return (
      <div className="App-GridDiv">
        <Grid container justify="center">
          <Paper>
            <Table>
              {tableHeader}
              {content}
            </Table>
          </Paper>
        </Grid>
      </div>
    );
  }
}

export default AssetDetails;